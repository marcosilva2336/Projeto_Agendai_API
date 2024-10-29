
```markdown
# API Agendei

A API Agendei é uma aplicação backend desenvolvida com **Node.js** e **Express** que fornece suporte para a aplicação mobile Agendei. A API permite o gerenciamento de usuários, agendamentos de consultas e outras funcionalidades essenciais. A arquitetura segue o padrão **MVC** (Model-View-Controller) e utiliza **tokens** para autenticação e **criptografia** para segurança dos dados.

## Funcionalidades

- **Autenticação de Usuários**: Utiliza tokens JWT (JSON Web Tokens) para autenticar usuários.
- **Gerenciamento de Consultas**: Permite a criação, leitura, atualização e exclusão de agendamentos de consultas.
- **Criptografia de Dados**: Armazena senhas de forma segura utilizando algoritmos de criptografia.
- **Estrutura MVC**: Mantém uma separação clara entre as responsabilidades do código, facilitando a manutenção e escalabilidade.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construção de aplicações web em Node.js.
- **JWT**: Para gerenciamento de autenticação de usuários.
- **Bcrypt**: Para criptografia de senhas.
- **SQLite**: Banco de dados utilizado para armazenamento de dados.
- **Sequelize**: ORM para interação com o banco de dados.

## Instalação

Para instalar e executar a API, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/api-agendei.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd api-agendei
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:
   ```plaintext
   PORT=3000
   JWT_SECRET=seusecret
   ```

5. Inicie a API:
   ```bash
   npm start
   ```

## Endpoints

Aqui estão alguns dos principais endpoints da API:

- `POST /api/auth/login`: Autentica o usuário e retorna um token.
- `POST /api/users`: Cria um novo usuário.
- `GET /api/users`: Lista todos os usuários.
- `POST /api/appointments`: Cria um novo agendamento.
- `GET /api/appointments`: Lista todos os agendamentos.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um *issue* ou enviar um *pull request*.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

