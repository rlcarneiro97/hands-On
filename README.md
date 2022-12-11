## Descrição

Projeto desenvolvido para a pós graduação em Desenvolvimento de Aplicações Web na disciplina de Introdução a programação com scripts

### JSON Server
#### Instalação

```
npm install -g json-server
```

#### Criando a base de dados

Crie um arquivo de nome *db.json* na raiz do projeto.
```json
{
  "alunos": [
    {
      "id": 1,
      "nome": "Laura Eliane Evelyn Gonçalves",
      "matricula": "001",
      "curso": "Sistemas para internet"
    },
    {
      "id": 2,
      "nome": "Murilo Victor Bento Dias",
      "matricula": "002",
      "curso": "Redes"
    },
    {
      "id": 3,
      "nome": "Patrícia Marcela Sara Novaes",
      "matricula": "003",
      "curso": "Sistemas para internet"
    }
  ],
  "disciplinas": [
    {
      "id": 1,
      "nome": "Introdução a progração com scripts",
      "cargaHoraria" : "36h",
      "professor" : "Tiago Daniel Fernando Baptista",
      "status": "Obrigatória",
      "observacos": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      "id": 2,
      "nome": "Fundamentos da Computação",
      "cargaHoraria" : "60h",
      "professor" : "Marcela Vera Mendes",
      "status": "Obrigatória",
      "observacos": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      "id": 2,
      "nome": "Linguagens de Marcação",
      "cargaHoraria" : "67h",
      "professor" : "Marcela Vera Mendes",
      "status": "Obrigatória",
      "observacos": "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
      "id": 3,
      "nome": "Português Instrumental",
      "cargaHoraria" : "50h",
      "professor" : "Maitê Analu Carolina Aragão",
      "status": "Opcional",
      "observacos": "Lorem ipsum dolor sit adipisicing elit."
    }
  ]
}
```

#### Iniciando o servidor
Execute o comando para inicar o servidor. Por padrão a API vai funcionar no enderço: http://localhost:3000

```
json-server --watch db.json
```

**Rotas** Aluno:

| Request | URL |  Observações |
|-|-|-|
| **GET** | /alunos | Busca todos os alunos
| **GET** | /alunos/1 | Busca por um aluno
| **POST** | /alunos | Salva um aluno na base de dados
| **PUT** | /alunos/1 | Atualiza os dados do aluno
| **DELETE** | /alunos/1 | Remove um aluno

**Rotas** Disciplina:

| Request | URL |  Observações |
|-|-|-|
| **GET** | /disciplinas | Busca todos as disciplinas
| **GET** | /disciplinas/1 | Busca por uma disciplinas
| **POST** | /disciplinas | Salva uma disciplinas na base de dados
| **PUT** | /disciplinas/1 | Atualiza os dados de uma disciplinas
| **DELETE** | /disciplinas/1 | Remove uma disciplinas

#### HTTP Server

Inicie um servidor HTTP e abra no endereço http://127.0.0.1:5500, recomendo o uso da extensão *Live Server* do VS Code para isso.
