# 🐛 GABARITO DE BUGS — QA na Marra Store
## Documento EXCLUSIVO DO PROFESSOR — Não compartilhar com alunos

---

## RESUMO EXECUTIVO

| # | Tipo | Severidade | Página     | Arquivo |
|---|------|------------|------------|---------|
| BUG-001  | Funcional  | 🔴 Alta   | Carrinho | app.js |
| BUG-002  | Segurança  | 🔴 Alta   | Login    | login.html + app.js |
| BUG-003  | Segurança  | 🔴 Alta   | Admin    | admin.html |
| BUG-004  | Segurança  | 🔴 Alta   | Admin    | admin.html |
| BUG-005  | Funcional  | 🟠 Média  | Cadastro | cadastro.html + app.js |
| BUG-006  | Fluxo      | 🟠 Média  | Checkout | confirmacao.html |
| BUG-007  | Fluxo      | 🟠 Média  | Cadastro | cadastro.html |
| BUG-008  | Funcional  | 🟠 Média  | Carrinho | app.js |
| BUG-009  | Funcional  | 🟠 Média  | Produtos | admin.html + app.js |
| BUG-010  | Funcional  | 🟡 Baixa  | Produtos | produtos.html |
| BUG-011  | Visual     | 🟡 Baixa  | Home     | index.html + style.css |
| BUG-012  | Visual     | 🟡 Baixa  | Home    | index.html |
| BUG-013  | Funcional  | 🟡 Baixa  | Carrinho | carrinho.html |
| BUG-014  | Funcional  | 🟡 Baixa  | Login | login.html |
| BUG-015  | Segurança  | 🟠 Média  | Pedidos | pedidos.html |

---

## BUGS DETALHADOS

---

### 🔴 BUG-001 — Desconto Calculado Incorretamente
**Tipo:** Funcional  
**Severidade:** Alta  
**Página:** Carrinho (`carrinho.html`)  
**Arquivo:** `app.js` — função `calcCartTotal()`  

**Descrição:**  
Quando o subtotal do carrinho ultrapassa R$ 500, o sistema deveria aplicar 10% de desconto. Porém, em vez de calcular a porcentagem, aplica um desconto fixo de R$ 50,00.

**Como reproduzir:**  
1. Adicionar produtos ao carrinho com valor total > R$ 500  
2. Verificar o desconto exibido no resumo do carrinho  
3. Para R$ 1.000 em produtos, o desconto deveria ser R$ 100 (10%), mas exibe R$ 50  

**Comportamento esperado:** Desconto = subtotal × 0.10  
**Comportamento atual:** Desconto = R$ 50 (fixo)  

**Código com bug:**
```javascript
if (subtotal > 500) {
  discount = 50; // BUG: deveria ser subtotal * 0.10
}
```

---

### 🔴 BUG-002 — Login Aceita Campos em Branco
**Tipo:** Segurança / Funcional  
**Severidade:** Alta  
**Página:** Login (`login.html`)  
**Arquivo:** `login.html`, `app.js`  

**Descrição:**  
Os campos de e-mail e senha não possuem o atributo `required` e a função de login não valida se os campos estão preenchidos antes de tentar autenticar.

**Como reproduzir:**  
1. Acessar a página de login  
2. Clicar em "Entrar" sem preencher nenhum campo  
3. O sistema tenta autenticar com credenciais vazias  

**Comportamento esperado:** Exibir mensagem de erro e bloquear o envio  
**Comportamento atual:** Tenta autenticar, retorna "e-mail ou senha incorretos"  

**Código com bug:**
```html
<!-- Sem atributo required -->
<input type="email" id="loginEmail" placeholder="seu@email.com"/>
<input type="password" id="loginPassword" placeholder="Sua senha"/>
```

---

### 🔴 BUG-003 — Painel Admin Sem Proteção de Acesso
**Tipo:** Segurança  
**Severidade:** Alta  
**Página:** Admin (`admin.html`)  

**Descrição:**  
Qualquer usuário pode acessar o painel administrativo digitando diretamente a URL `/admin.html` no navegador, sem precisar estar logado como administrador.

**Como reproduzir:**  
1. Abrir o navegador sem fazer login  
2. Acessar diretamente: `admin.html`  
3. O painel admin é exibido normalmente com todos os dados  

**Comportamento esperado:** Redirecionar para login se usuário não for admin  
**Comportamento atual:** Painel exibido para qualquer pessoa  

---

### 🔴 BUG-004 — Senhas Expostas em Texto Claro no Admin
**Tipo:** Segurança  
**Severidade:** Alta  
**Página:** Admin → Usuários (`admin.html`)  

**Descrição:**  
A tela de gerenciamento de usuários no painel admin exibe as senhas de todos os usuários em texto claro (sem criptografia).

**Como reproduzir:**  
1. Acessar `admin.html`  
2. Clicar em "Usuários" no menu lateral  
3. As senhas de todos os usuários ficam visíveis  

**Comportamento esperado:** Senhas nunca devem ser exibidas; deveriam ser armazenadas e exibidas como hash  
**Comportamento atual:** Senhas exibidas em texto claro em vermelho  

---

### 🟠 BUG-005 — Cadastro Não Valida Confirmação de Senha
**Tipo:** Funcional  
**Severidade:** Média  
**Página:** Cadastro (`cadastro.html`)  
**Arquivo:** `app.js` — função `register()`  

**Descrição:**  
O formulário de cadastro possui campo "Confirmar Senha", mas a função de registro não verifica se a senha e a confirmação são iguais. O cadastro é realizado mesmo quando as senhas são diferentes.

**Como reproduzir:**  
1. Acessar `cadastro.html`  
2. Preencher senha como "abc123"  
3. Preencher confirmação como "xyz789"  
4. Clicar em "Criar Conta"  
5. Conta é criada com sucesso  

**Comportamento esperado:** Exibir erro "As senhas não coincidem"  
**Comportamento atual:** Cadastro realizado normalmente  

---

### 🟠 BUG-006 — Confirmação de Pedido Não Exibe Número do Pedido
**Tipo:** Fluxo  
**Severidade:** Média  
**Página:** Confirmação (`confirmacao.html`)  

**Descrição:**  
Após finalizar o checkout, a página de confirmação deveria exibir o número do pedido gerado. Porém, o número aparece como "Indisponível" porque o fluxo não transmite o ID do pedido para a página de confirmação.

**Como reproduzir:**  
1. Adicionar produto ao carrinho  
2. Ir para checkout e finalizar pedido  
3. Página de confirmação exibe "Número do pedido: Indisponível"  

**Comportamento esperado:** Exibir o ID do pedido (ex: PED-004)  
**Comportamento atual:** "Indisponível"  

**Causa raiz:** `finalizarPedido()` redireciona sem passar o ID via query string:
```javascript
window.location.href = 'confirmacao.html'; // Falta: ?id=PED-004
```

---

### 🟠 BUG-007 — Redirecionamento Errado Após Cadastro
**Tipo:** Fluxo  
**Severidade:** Média  
**Página:** Cadastro (`cadastro.html`)  

**Descrição:**  
Após criar conta com sucesso, o usuário é redirecionado para a página inicial (Home) em vez de ser levado para a página de Login para entrar com suas novas credenciais.

**Como reproduzir:**  
1. Acessar `cadastro.html` e criar uma conta  
2. Observar para onde o sistema redireciona  
3. O usuário vai para `index.html` sem estar logado  

**Comportamento esperado:** Redirecionar para `login.html` com mensagem de sucesso  
**Comportamento atual:** Redireciona para `index.html`  

---

### 🟠 BUG-008 — Produto Sem Estoque Pode Ser Adicionado ao Carrinho
**Tipo:** Funcional  
**Severidade:** Média  
**Arquivo:** `app.js` — função `addToCart()`  
**Produto afetado:** Mouse Gamer 12000DPI (ID: 12, stock: 0)  

**Descrição:**  
O produto "Mouse Gamer 12000DPI" possui estoque zero, mas pode ser adicionado ao carrinho sem nenhuma mensagem de erro.

**Como reproduzir:**  
1. Acessar `produtos.html`  
2. Localizar "Mouse Gamer 12000DPI"  
3. Clicar em "Adicionar ao Carrinho"  
4. Produto é adicionado sem aviso de falta de estoque  

**Comportamento esperado:** Botão desabilitado ou mensagem "Produto indisponível"  
**Comportamento atual:** Produto adicionado normalmente  

---

### 🟠 BUG-009 — Preço Negativo Permitido no Produto
**Tipo:** Funcional  
**Severidade:** Média  
**Arquivo:** `data.js` (produto ID: 11), `admin.html`  
**Produto afetado:** Teclado Mecânico RGB (ID: 11, preço: -50)  

**Descrição:**  
O produto "Teclado Mecânico RGB" possui preço de -R$ 50,00 (negativo). Além disso, o formulário de adição de produtos no admin permite inserir qualquer valor numérico, inclusive negativos.

**Como reproduzir:**  
1. Acessar `produtos.html`  
2. Localizar "Teclado Mecânico RGB"  
3. Verificar que o preço exibido é -R$ 50,00  
4. Adicionar ao carrinho e verificar que o carrinho subtrai o valor  

**Comportamento esperado:** Validação que impede preços menores ou iguais a zero  
**Comportamento atual:** Preço negativo exibido e aceito no carrinho  

---

### 🟡 BUG-010 — Ordenação de Produtos Não Funciona
**Tipo:** Funcional  
**Severidade:** Baixa  
**Página:** Produtos (`produtos.html`)  

**Descrição:**  
O select de ordenação ("Menor preço", "Maior preço", "Nome A-Z", "Melhor avaliação") existe na interface mas não tem efeito. Os produtos continuam na mesma ordem independente do critério selecionado.

**Como reproduzir:**  
1. Acessar `produtos.html`  
2. Selecionar "Menor preço" no dropdown de ordenação  
3. Produtos permanecem na mesma ordem  

**Comportamento esperado:** Produtos reordenados conforme critério escolhido  
**Comportamento atual:** Sem efeito  

---

### 🟡 BUG-011 — Texto Cortado no Banner Promocional
**Tipo:** Visual  
**Severidade:** Baixa  
**Página:** Home (`index.html`)  

**Descrição:**  
O texto do banner promocional está cortado: "Aproveite desconto de 50% em toda a loj" (falta "a").

**Como reproduzir:**  
1. Acessar `index.html`  
2. Rolar até o banner promocional  
3. Observar o texto cortado  

**Comportamento esperado:** "Aproveite desconto de 50% em toda a loja"  
**Comportamento atual:** "Aproveite desconto de 50% em toda a loj"  

---

### 🟡 BUG-012 — Botão do Banner Fora de Posição
**Tipo:** Visual / Layout  
**Severidade:** Baixa  
**Página:** Home (`index.html`)  

**Descrição:**  
O botão "Ver ofertas" do banner promocional está deslocado para a direita com margem incorreta e margem-top negativa, ficando mal posicionado visualmente.

**Como reproduzir:**  
1. Acessar `index.html`  
2. Observar o banner da promoção  
3. Botão "Ver ofertas" está com `margin-left:200px` e `margin-top:-20px`  

**Comportamento esperado:** Botão abaixo do texto, alinhado à esquerda  
**Comportamento atual:** Botão deslocado  

---

### 🟡 BUG-013 — Cupom de Desconto Aceita Qualquer Código
**Tipo:** Funcional  
**Severidade:** Baixa  
**Página:** Carrinho (`carrinho.html`)  

**Descrição:**  
O campo de cupom de desconto exibe mensagem de sucesso para qualquer código digitado, mas não aplica desconto algum.

**Como reproduzir:**  
1. Acessar `carrinho.html`  
2. Digitar qualquer texto no campo cupom (ex: "ABCDEFG")  
3. Clicar em "Aplicar"  
4. Mensagem de sucesso aparece, mas desconto não é aplicado  

**Comportamento esperado:** Validar código e aplicar desconto real  
**Comportamento atual:** Aceita qualquer código com mensagem de sucesso falsa  

---

### 🟡 BUG-014 — Link "Esqueci Minha Senha" Leva a Página Inexistente
**Tipo:** Fluxo  
**Severidade:** Baixa  
**Página:** Login (`login.html`)  

**Descrição:**  
O link "Esqueci minha senha" aponta para `esqueci-senha.html`, que não existe no sistema. O usuário recebe erro 404.

**Como reproduzir:**  
1. Acessar `login.html`  
2. Clicar em "Esqueci minha senha"  
3. Página não encontrada (404)  

**Comportamento esperado:** Página de recuperação de senha funcional  
**Comportamento atual:** Erro 404  

---

### 🟠 BUG-015 — Pedidos de Todos os Usuários Visíveis
**Tipo:** Segurança / Privacidade  
**Severidade:** Média  
**Página:** Meus Pedidos (`pedidos.html`)  
**Arquivo:** `app.js` — função `renderUserOrders()`  

**Descrição:**  
A página "Meus Pedidos" exibe todos os pedidos do sistema para qualquer usuário logado, sem filtrar pelo e-mail do usuário atual.

**Como reproduzir:**  
1. Fazer login com `aluno@teste.com`  
2. Acessar `pedidos.html`  
3. Pedidos de outros usuários (joao@teste.com, maria@teste.com) são exibidos  

**Comportamento esperado:** Exibir apenas pedidos do usuário logado  
**Comportamento atual:** Todos os pedidos do sistema são exibidos  

**Código com bug:**
```javascript
// BUG: não filtra por user.email
const userOrders = user ? orders : []; // Deveria ser: orders.filter(o => o.user === user.email)
```

---

## MAPA DE BUGS POR SEVERIDADE

```
🔴 ALTA (Bloqueador):     BUG-001, BUG-002, BUG-003, BUG-004
🟠 MÉDIA (Importante):    BUG-005, BUG-006, BUG-007, BUG-008, BUG-009, BUG-015
🟡 BAIXA (Cosmético):     BUG-010, BUG-011, BUG-012, BUG-013, BUG-014
```

---

## SUGESTÃO DE ATIVIDADES PARA ALUNOS

### Nível 1 — Iniciante (Testes Manuais)
- Encontrar e documentar os bugs visuais (BUG-011, BUG-012)
- Testar o fluxo de cadastro e login
- Preencher template de bug report

### Nível 2 — Intermediário (Casos de Teste)
- Criar casos de teste para o carrinho (cálculo de desconto)
- Testar fluxo completo de compra
- Reportar BUG-001, BUG-005, BUG-006

### Nível 3 — Avançado (Segurança e Automação)
- Identificar vulnerabilidades de segurança (BUG-003, BUG-004, BUG-015)
- Automatizar os testes críticos com Robot Framework
- Criar relatório de teste completo

---

*Documento gerado para uso exclusivo do instrutor — QA na Marra*
