// eslint-disable-next-line import/no-unresolved
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "teste2",
      description: "fsdfsdfs",
      daily_rate: 160,
      lincense_place: "sdapd",
      fine_amount: 110,
      brand: "ggdfgd",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "teste3",
      description: "fsdfsdfs",
      daily_rate: 160,
      lincense_place: "sdapd",
      fine_amount: 110,
      brand: "Car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_brand",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "teste4",
      description: "fsdfsdfs",
      daily_rate: 160,
      lincense_place: "sdapd",
      fine_amount: 110,
      brand: "Car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      name: "teste4",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "teste5",
      description: "fsdfsdfs",
      daily_rate: 160,
      lincense_place: "sdapd",
      fine_amount: 110,
      brand: "Car_brand",
      category_id: "12345",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
