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
