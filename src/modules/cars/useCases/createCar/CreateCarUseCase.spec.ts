import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name car",
      description: "Description car",
      daily_rate: 100,
      lincense_place: "ABC-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category_id",
    });
    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists lincense plate", async () => {
    await expect(async () => {
      await createCarUseCase.execute({
        name: "car1",
        description: "Description car",
        daily_rate: 100,
        lincense_place: "ABC-1234",
        fine_amount: 60,
        brand: "brand",
        category_id: "category_id",
      });

      await createCarUseCase.execute({
        name: "car2",
        description: "Description car",
        daily_rate: 100,
        lincense_place: "ABC-1234",
        fine_amount: 60,
        brand: "brand",
        category_id: "category_id",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "car1",
      description: "Description car",
      daily_rate: 100,
      lincense_place: "ABCD-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category_id",
    });
    expect(car.avaliable).toBe(true);
  });
});
