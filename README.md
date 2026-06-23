# QA na Marra Store

Ambiente de prática para testes manuais e automatizados. Este projeto foi criado especificamente para estudantes de QA aprenderem e praticarem técnicas de teste em um ambiente com bugs propositalmente inseridos.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura das páginas web
- **CSS3** - Estilização e layout
- **JavaScript (ES6+)** - Lógica da aplicação
- **localStorage** - Persistência de dados no navegador

## 📁 Estrutura do Projeto

```
c:\files/
├── pages/          # Arquivos HTML
│   ├── index.html          # Página inicial
│   ├── login.html          # Tela de login
│   ├── cadastro.html       # Tela de cadastro
│   ├── produtos.html      # Listagem de produtos
│   ├── produto.html        # Detalhes do produto
│   ├── carrinho.html      # Carrinho de compras
│   ├── checkout.html       # Finalização de pedido
│   ├── confirmacao.html    # Confirmação de pedido
│   ├── pedidos.html       # Meus pedidos
│   └── admin.html         # Painel administrativo
├── js/             # Arquivos JavaScript
│   ├── app.js              # Lógica principal da aplicação
│   └── data.js             # Dados de produtos e usuários
├── css/            # Arquivos CSS
│   └── style.css           # Estilos globais
├── docs/           # Documentação
│   ├── ROTEIRO_TESTES_MANUAIS.md
│   └── GABARITO_BUGS_PROFESSOR.md
└── README.md       # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (opcional, para usar live-server)
- Navegador web moderno (Chrome, Firefox, Edge, etc.)

### Opção 1: Usando live-server (Recomendado)

1. **Instale o live-server globalmente:**
   ```bash
   npm install -g live-server
   ```

2. **Navegue até a pasta do projeto:**
   ```bash
   cd c:\files
   ```

3. **Inicie o servidor:**
   ```bash
   live-server --port=8080
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:8080/pages/index.html
   ```

### Opção 2: Abrir diretamente no navegador

1. Abra o arquivo `c:\files\pages\index.html` diretamente no seu navegador.

> **Nota:** Alguns recursos podem não funcionar corretamente ao abrir diretamente devido a restrições de segurança do navegador (CORS). Recomenda-se usar o live-server.

## 🔐 Credenciais de Teste

### Administrador
- **E-mail:** `admin@qanamarrastore.com`
- **Senha:** `admin123`

### Usuário Comum
- **E-mail:** `aluno@teste.com`
- **Senha:** `senha123`

## 📚 Documentação

- **ROTEIRO_TESTES_MANUAIS.md** - Guia passo a passo para realizar testes manuais
- **GABARITO_BUGS_PROFESSOR.md** - Lista completa de bugs presentes no sistema (apenas para instrutores)

## 🎯 Objetivo do Projeto

Este ambiente contém bugs propositalmente inseridos para que estudantes de QA possam:
- Praticar testes manuais
- Aprender a documentar bugs
- Criar casos de teste
- Identificar vulnerabilidades de segurança
- Praticar automação de testes

## 🐛 Tipos de Bugs Presentes

- **Funcionais** - Erros na lógica do sistema
- **Segurança** - Vulnerabilidades de acesso e dados
- **Fluxo** - Problemas na navegação entre páginas
- **Visuais** - Problemas de layout e interface

## 📝 Licença

Este projeto foi criado para fins educacionais e de treinamento em QA.

---

**QA na Marra** - Ambiente de testes educacional © 2024
# deploy
