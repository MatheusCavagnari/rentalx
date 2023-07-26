## Getting Started

First, run the development server:

```bash
 docker-compose up
```

## Tecnologias Utilizadas:

- TypeScript
- Node.js
- Postgres
- TypeOrm
- Express
- Multer
- Jest
- Super test
- Prettier
- Eslint
- Swagger
- Docker
- Docker Compose

## Descrição do Projeto:

Este projeto é um sistema de gerenciamento de aluguel de carros, desenvolvido em TypeScript seguindo os princípios de Clean Code e SOLID. O sistema possui diversas funcionalidades que permitem o cadastro, listagem e gerenciamento de carros, especificações e aluguéis.

## Testes Automatizados:

O sistema possui testes automatizados para garantir o seu correto funcionamento e evitar regressões durante o desenvolvimento. Foram utilizadas ferramentas como Jest e super test para escrever testes unitários e de integração, garantindo a qualidade do código e a estabilidade do sistema.

## Observações Finais:

Este sistema de gerenciamento de aluguel de carros oferece todas as funcionalidades essenciais para cadastrar, listar e gerenciar carros, especificações e aluguéis. A implementação em TypeScript e a aplicação dos princípios de Clean Code e SOLID garantem um código de qualidade, facilitando a manutenção e futuras expansões do sistema. Os testes automatizados fornecem a confiança necessária para a correta execução do software, assegurando que ele atenda às necessidades dos usuários de forma eficiente e segura.

## Funcionalidades:

Cadastro de Carro:

Um usuário administrador pode cadastrar um novo carro informando sua marca, modelo, placa e categoria.
O sistema não permite cadastrar um carro com uma placa já existente.
O carro é cadastrado por padrão com disponibilidade para aluguel.
Listagem de Carros:

É possível listar todos os carros disponíveis no sistema.
Os carros podem ser filtrados por nome da categoria, nome da marca e nome específico do carro.
Cadastro de Especificação no Carro:

Um usuário administrador pode cadastrar especificações para um carro, como motor, cor, capacidade, etc.
O sistema não permite cadastrar uma especificação para um carro não cadastrado.
Também não é possível cadastrar uma especificação que já exista para o mesmo carro.
Cadastro de Imagens do Carro:

Um usuário administrador pode cadastrar imagens para um carro, permitindo o upload de várias imagens.
É possível listar todas as imagens dos carros disponíveis no sistema.
Aluguel de Carro:

Um usuário pode cadastrar um aluguel selecionando o carro desejado e a duração do aluguel, com uma duração mínima de 24 horas.
O sistema impede que um novo aluguel seja cadastrado se o usuário já tiver um aluguel em aberto ou se o carro já estiver alugado.

# Cadastro de carro

**RF**
Deve ser possivel cadastrar um novo carro.
deve ser possivel listar todas as categorias.

**RN**
Não deve ser possivel ser possivel cadastrar um carro com uma placa já existente.
Não deve ser possivel ser possivel alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padão , com disponibilidade.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**
Deve ser possivel listar todos os carros disponiveis.
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria.
Deve ser possivel listar todos os carros disponiveis pelo nome da marca.
Deve ser possivel listar todos os carros disponiveis pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possivel listar todas as especificações.
Deve ser possivel listar todos os carros.

**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro.

# Cadastro de imagens do caroo

**RF**
Deve ser possivel cadastrar a imagem do carro.
Deve ser possivel listar todos os carros.

**RNF**
Utilizar o multer para o upload dos arquivos.

**RN**
O usario deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsalvel pelo cadastro deve ser usuário adminstrador.

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel.

**RN**
O Aluguel deve ter duração minima de 24 horas.
O Aluguel não deve ser possivel cadastrar um novo aluguem caso ja exista um abaerto para o mesmo usuario.
O Aluguel não deve ser possivel cadastrar um novo aluguem caso ja exista um abaerto para o mesmo carro.
