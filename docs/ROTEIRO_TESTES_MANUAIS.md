# 📋 ROTEIRO DE TESTES MANUAIS
## QA na Marra Store — Curso QA na Marra
### Módulo: Testes Manuais para Iniciantes

---

## 🎯 OBJETIVO

Este roteiro vai te guiar pelos principais fluxos do sistema **QA na Marra Store**.  
Sua missão é: **testar cada funcionalidade, encontrar os bugs e documentá-los corretamente.**

> 💡 **Dica do instrutor:** O sistema possui bugs propositais escondidos. Alguns são fáceis de achar, outros exigem atenção. Não desanime — um bom QA é curioso e persistente!

---

## 📌 ANTES DE COMEÇAR

### Ambiente de Teste
- **URL:** `http://localhost:8080` (ou link fornecido pelo instrutor)
- **Navegador recomendado:** Google Chrome (versão atual)
- **Credenciais de teste:**

| Perfil | E-mail | Senha |
|--------|--------|-------|
| Administrador | admin@qanamarrastore.com | admin123 |
| Usuário comum | aluno@teste.com | senha123 |

### O que você vai precisar
- [ ] Planilha ou documento para anotar os bugs
- [ ] Printscreen ou ferramenta de captura de tela
- [ ] Template de Bug Report (fornecido separadamente)

---

## 📊 COMO CLASSIFICAR BUGS

| Severidade | Quando usar |
|-----------|-------------|
| 🔴 **Alta** | O sistema trava, perde dados ou tem falha de segurança grave |
| 🟠 **Média** | Funcionalidade importante não funciona como esperado |
| 🟡 **Baixa** | Problema visual, texto errado, comportamento estranho mas não crítico |

---

# 🧪 CASOS DE TESTE

---

## MÓDULO 1 — NAVEGAÇÃO GERAL

### CT-001 — Verificar página inicial
**Objetivo:** Confirmar que a Home carrega corretamente  
**Pré-condição:** Nenhuma  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Abrir a URL do sistema | Página carrega sem erros |
| 2 | Observar o menu de navegação | Links: Home, Produtos, Carrinho, Entrar |
| 3 | Verificar o banner principal (Hero) | Título, subtítulo e botões visíveis |
| 4 | Rolar a página para baixo | Seções: Categorias, Produtos em Destaque, Banner Promoção |
| 5 | Verificar o rodapé | Links do rodapé presentes e visíveis |

**✏️ Anote:** Algum elemento visual está fora do lugar ou com texto errado?

---

### CT-002 — Verificar links do menu
**Objetivo:** Todos os links da navegação devem funcionar  
**Pré-condição:** Estar na página inicial  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "Home" no menu | Permanece ou vai para a página inicial |
| 2 | Clicar em "Produtos" | Abre a listagem de produtos |
| 3 | Clicar em "Carrinho" | Abre a página do carrinho |
| 4 | Clicar em "Entrar" | Abre a página de login |
| 5 | Clicar no logo "QA na Marra Store" | Volta para a Home |

---

### CT-003 — Verificar banner promocional
**Objetivo:** O banner deve exibir informação completa e botão posicionado corretamente  
**Pré-condição:** Estar na Home  
**Prioridade:** Baixa  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Rolar a página até o banner de promoção | Banner visível |
| 2 | Ler o texto do banner com atenção | Texto completo e sem cortes |
| 3 | Observar o posicionamento do botão "Ver ofertas" | Botão alinhado abaixo do texto |
| 4 | Clicar no botão "Ver ofertas" | Redireciona para produtos |

**✏️ Anote:** O texto está completo? O botão está bem posicionado?

---

## MÓDULO 2 — CADASTRO DE USUÁRIO

### CT-004 — Cadastro com dados válidos
**Objetivo:** Criar uma nova conta com sucesso  
**Pré-condição:** Usuário não possui conta  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Acessar a página de cadastro | Formulário exibido |
| 2 | Preencher Nome: "João Teste QA" | Campo aceita o valor |
| 3 | Preencher E-mail: "joaoteste@email.com" | Campo aceita o valor |
| 4 | Preencher Senha: "senha123" | Campo aceita (oculta os caracteres) |
| 5 | Preencher Confirmar Senha: "senha123" | Campo aceita o valor |
| 6 | Preencher CPF: "123.456.789-00" | Campo aceita o valor |
| 7 | Clicar em "Criar Conta" | Mensagem de sucesso e redirecionamento |
| 8 | Observar para onde foi redirecionado | **Deve ir para o Login** |

**✏️ Anote:** Para qual página foi redirecionado após o cadastro?

---

### CT-005 — Cadastro com senhas diferentes
**Objetivo:** Sistema deve impedir cadastro quando senhas não coincidem  
**Pré-condição:** Estar na página de cadastro  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher Nome: "Maria QA" | Campo aceita |
| 2 | Preencher E-mail: "mariqa@email.com" | Campo aceita |
| 3 | Preencher Senha: "abc123" | Campo aceita |
| 4 | Preencher Confirmar Senha: "xyz789" | Campo aceita |
| 5 | Clicar em "Criar Conta" | **Deve exibir erro: "As senhas não coincidem"** |

**✏️ Anote:** O sistema permitiu o cadastro mesmo com senhas diferentes?

---

### CT-006 — Cadastro com campos obrigatórios vazios
**Objetivo:** Sistema deve bloquear cadastro sem dados obrigatórios  
**Pré-condição:** Estar na página de cadastro  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Não preencher nenhum campo | Campos em branco |
| 2 | Clicar em "Criar Conta" | Mensagem de erro nos campos obrigatórios |

---

### CT-007 — Cadastro com e-mail já existente
**Objetivo:** Sistema deve informar que o e-mail já está cadastrado  
**Pré-condição:** Ter uma conta criada com o e-mail  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher com e-mail: "aluno@teste.com" | Campo aceita |
| 2 | Preencher demais campos com dados válidos | Campos aceitos |
| 3 | Clicar em "Criar Conta" | Mensagem: "E-mail já cadastrado" |

---

### CT-008 — Validação do campo CPF
**Objetivo:** Campo CPF deve aceitar apenas formato válido  
**Pré-condição:** Estar na página de cadastro  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher CPF com letras: "abcdefghijk" | Campo deve bloquear ou mostrar erro |
| 2 | Preencher CPF com formato errado: "123456" | Deve exigir formato: 000.000.000-00 |
| 3 | Preencher CPF inválido: "000.000.000-00" | Sistema deve validar CPF real |

**✏️ Anote:** O sistema valida o formato do CPF ou aceita qualquer texto?

---

## MÓDULO 3 — LOGIN

### CT-009 — Login com credenciais válidas (usuário comum)
**Objetivo:** Usuário deve conseguir logar com sucesso  
**Pré-condição:** Ter conta cadastrada  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Acessar a página de login | Formulário exibido |
| 2 | Preencher E-mail: "aluno@teste.com" | Campo aceita |
| 3 | Preencher Senha: "senha123" | Campo aceita (oculta) |
| 4 | Clicar em "Entrar" | Mensagem de sucesso e redirecionamento |
| 5 | Verificar se nome do usuário aparece no menu | "Olá, Aluno Teste" visível |

---

### CT-010 — Login com credenciais inválidas
**Objetivo:** Sistema deve bloquear acesso com dados incorretos  
**Pré-condição:** Estar na página de login  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher E-mail: "naoexiste@email.com" | Campo aceita |
| 2 | Preencher Senha: "senhaerrada" | Campo aceita |
| 3 | Clicar em "Entrar" | Mensagem: "E-mail ou senha incorretos" |
| 4 | Verificar que não foi redirecionado | Permanece na página de login |

---

### CT-011 — Login com campos em branco
**Objetivo:** Sistema não deve permitir login sem preenchimento  
**Pré-condição:** Estar na página de login  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Deixar e-mail em branco | Campo vazio |
| 2 | Deixar senha em branco | Campo vazio |
| 3 | Clicar em "Entrar" | **Deve bloquear e exibir mensagem de erro** |

**✏️ Anote:** O sistema permitiu tentar login com campos vazios?

---

### CT-012 — Link "Esqueci minha senha"
**Objetivo:** Link deve redirecionar para página de recuperação  
**Pré-condição:** Estar na página de login  
**Prioridade:** Baixa  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Localizar o link "Esqueci minha senha" | Link visível abaixo dos campos |
| 2 | Clicar no link | Página de recuperação de senha abre |

**✏️ Anote:** A página existe? Ou retornou erro 404?

---

### CT-013 — Login como administrador
**Objetivo:** Admin deve ser redirecionado para o painel administrativo  
**Pré-condição:** Usar credenciais de admin  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher E-mail: "admin@qanamarrastore.com" | Campo aceita |
| 2 | Preencher Senha: "admin123" | Campo aceita |
| 3 | Clicar em "Entrar" | Redirecionado para admin.html |
| 4 | Verificar o painel admin | Dashboard com estatísticas visíveis |

---

## MÓDULO 4 — PRODUTOS

### CT-014 — Listagem de produtos
**Objetivo:** Todos os produtos devem ser exibidos corretamente  
**Pré-condição:** Nenhuma  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Acessar a página de Produtos | Lista de produtos exibida |
| 2 | Contar os produtos exibidos | 12 produtos no total |
| 3 | Verificar se todos têm nome, preço e botão | Informações completas em cada card |
| 4 | Verificar os preços dos produtos | **Todos os preços devem ser positivos** |

**✏️ Anote:** Existe algum produto com preço negativo ou estranho?

---

### CT-015 — Filtro por categoria
**Objetivo:** Filtrar produtos por categoria deve funcionar  
**Pré-condição:** Estar na página de Produtos  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar no filtro "Eletrônicos" | Apenas produtos da categoria exibidos |
| 2 | Clicar no filtro "Roupas" | Apenas roupas exibidas |
| 3 | Clicar no filtro "Livros" | Apenas livros exibidos |
| 4 | Clicar no filtro "Casa" | Apenas produtos de casa exibidos |
| 5 | Clicar em "Todos" | Todos os produtos exibidos novamente |

---

### CT-016 — Busca de produtos
**Objetivo:** Campo de busca deve filtrar produtos pelo nome  
**Pré-condição:** Estar na página de Produtos  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Digitar "notebook" no campo de busca | Produto "Notebook ProBook 15" aparece |
| 2 | Clicar no botão "Buscar" ou pressionar Enter | Resultado filtrado |
| 3 | Digitar "ZZZZZ" (produto inexistente) | Mensagem "Nenhum produto encontrado" |
| 4 | Digitar caracteres especiais: `<script>alert('xss')</script>` | Sistema deve tratar sem executar código |

**✏️ Anote:** O sistema executou algum código ao digitar caracteres especiais?

---

### CT-017 — Ordenação de produtos
**Objetivo:** Dropdown de ordenação deve reordenar os produtos  
**Pré-condição:** Estar na página de Produtos  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Selecionar "Menor preço" | Produtos ordenados do mais barato ao mais caro |
| 2 | Selecionar "Maior preço" | Produtos ordenados do mais caro ao mais barato |
| 3 | Selecionar "Nome A-Z" | Produtos em ordem alfabética |
| 4 | Selecionar "Melhor avaliação" | Produtos com maior rating primeiro |

**✏️ Anote:** A ordenação funcionou ou os produtos ficaram na mesma ordem?

---

### CT-018 — Detalhe do produto
**Objetivo:** Página de detalhe deve exibir todas as informações  
**Pré-condição:** Estar na página de Produtos  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em qualquer produto | Página de detalhe abre |
| 2 | Verificar: Nome, preço, descrição, avaliação | Todas as informações visíveis |
| 3 | Verificar informação de estoque | "Em estoque (X unid.)" ou "Sem estoque" |
| 4 | Ajustar quantidade para 2 | Campo de quantidade aceita o valor |
| 5 | Clicar em "Adicionar ao Carrinho" | Produto adicionado, contador no menu atualiza |

---

### CT-019 — Produto sem estoque
**Objetivo:** Produto sem estoque não deve ser adicionado ao carrinho  
**Pré-condição:** Identificar o produto "Mouse Gamer 12000DPI"  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Localizar "Mouse Gamer 12000DPI" na lista | Produto visível |
| 2 | Verificar o status de estoque | Deve indicar "Sem estoque" |
| 3 | Tentar clicar em "Adicionar ao Carrinho" | **Botão deve estar desabilitado ou exibir erro** |

**✏️ Anote:** Foi possível adicionar o produto sem estoque ao carrinho?

---

## MÓDULO 5 — CARRINHO

### CT-020 — Adicionar produto ao carrinho
**Objetivo:** Produto deve ser adicionado ao carrinho corretamente  
**Pré-condição:** Estar logado  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Acessar qualquer produto | Página de detalhe aberta |
| 2 | Clicar em "Adicionar ao Carrinho" | Toast de confirmação aparece |
| 3 | Verificar contador no menu | Número atualizado |
| 4 | Acessar o carrinho | Produto listado com nome, preço e quantidade |

---

### CT-021 — Alterar quantidade no carrinho
**Objetivo:** Botões + e - devem alterar a quantidade corretamente  
**Pré-condição:** Ter produto no carrinho  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Acessar o carrinho | Produto listado |
| 2 | Clicar no botão "+" | Quantidade aumenta em 1 |
| 3 | Verificar o subtotal | Subtotal recalculado corretamente |
| 4 | Clicar no botão "−" | Quantidade diminui em 1 |
| 5 | Diminuir até 1 e clicar "−" novamente | Quantidade não vai para 0 ou negativo |

---

### CT-022 — Remover produto do carrinho
**Objetivo:** Produto deve ser removido ao clicar no lixeira  
**Pré-condição:** Ter produto no carrinho  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Acessar o carrinho | Produto listado |
| 2 | Clicar no ícone 🗑️ | Produto removido da lista |
| 3 | Verificar contador no menu | Número reduzido |
| 4 | Remover todos os produtos | Mensagem "Carrinho vazio" exibida |

---

### CT-023 — Cálculo de desconto no carrinho
**Objetivo:** Desconto de 10% deve ser aplicado quando subtotal > R$ 500  
**Pré-condição:** Ter produtos no carrinho  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Adicionar "Smartphone XPhone 13" (R$ 2.499,99) | Produto no carrinho |
| 2 | Verificar se desconto aparece no resumo | Desconto exibido |
| 3 | Calcular: 10% de R$ 2.499,99 = R$ 249,99 | **Desconto deve ser R$ 249,99** |
| 4 | Comparar com o valor exibido | Valores devem ser iguais |

**✏️ Anote:** O desconto exibido está correto? Qual valor foi mostrado?

---

### CT-024 — Frete grátis acima de R$ 200
**Objetivo:** Frete deve ser grátis para pedidos acima de R$ 200  
**Pré-condição:** Ter produtos no carrinho  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Adicionar produto com valor < R$ 200 | Produto no carrinho |
| 2 | Verificar valor do frete | R$ 19,90 |
| 3 | Adicionar mais produtos até ultrapassar R$ 200 | Subtotal > R$ 200 |
| 4 | Verificar valor do frete | Frete: Grátis |

---

### CT-025 — Aplicar cupom de desconto
**Objetivo:** Sistema deve validar cupons antes de aplicar desconto  
**Pré-condição:** Ter produto no carrinho  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Acessar o carrinho | Campo de cupom visível |
| 2 | Digitar um cupom inválido: "XYZXYZ" | Mensagem de erro: "Cupom inválido" |
| 3 | Digitar um cupom válido: "QANAMARR10" | Desconto aplicado no total |
| 4 | Verificar se o total foi recalculado | Total com desconto do cupom |

**✏️ Anote:** O sistema aceitou um cupom inválido? O desconto foi realmente aplicado?

---

## MÓDULO 6 — CHECKOUT

### CT-026 — Finalizar pedido com dados completos
**Objetivo:** Pedido deve ser criado com sucesso  
**Pré-condição:** Ter produto no carrinho e estar logado  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Acessar o carrinho e clicar em "Finalizar Compra" | Página de checkout abre |
| 2 | Preencher CEP: "01310-100" | Campo aceita |
| 3 | Preencher Rua: "Av. Paulista" | Campo aceita |
| 4 | Preencher Número: "1000" | Campo aceita |
| 5 | Preencher Cidade: "São Paulo" | Campo aceita |
| 6 | Selecionar Estado: "SP" | Selecionado |
| 7 | Selecionar Pagamento: "Cartão de Crédito" | Campos de cartão aparecem |
| 8 | Preencher número do cartão: "4111 1111 1111 1111" | Campo aceita |
| 9 | Preencher validade: "12/26" | Campo aceita |
| 10 | Preencher CVV: "123" | Campo aceita |
| 11 | Clicar em "Confirmar Pedido" | Redireciona para confirmação |
| 12 | Verificar número do pedido na confirmação | Número do pedido exibido (ex: PED-004) |

**✏️ Anote:** O número do pedido foi exibido na confirmação?

---

### CT-027 — Finalizar pedido sem preencher endereço
**Objetivo:** Sistema deve bloquear pedido sem endereço  
**Pré-condição:** Ter produto no carrinho  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Acessar o checkout | Formulário vazio |
| 2 | Não preencher nenhum campo | Campos em branco |
| 3 | Clicar em "Confirmar Pedido" | **Deve exibir erro de validação** |

**✏️ Anote:** O sistema permitiu finalizar o pedido sem endereço?

---

### CT-028 — Validação do número de cartão
**Objetivo:** Campo de cartão deve aceitar apenas números válidos  
**Pré-condição:** Selecionar pagamento "Cartão de Crédito" no checkout  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Digitar letras no campo cartão: "abcd efgh" | Campo deve rejeitar letras |
| 2 | Digitar número inválido: "1234 5678 9012 3456" | Deve validar algoritmo Luhn |
| 3 | Preencher data expirada: "01/20" | Deve avisar que cartão está vencido |

---

## MÓDULO 7 — MEUS PEDIDOS

### CT-029 — Visualizar pedidos do usuário logado
**Objetivo:** Usuário deve ver apenas seus próprios pedidos  
**Pré-condição:** Estar logado como "aluno@teste.com"  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Fazer login com "aluno@teste.com" | Logado com sucesso |
| 2 | Acessar "Meus Pedidos" | Lista de pedidos carrega |
| 3 | Verificar de quem são os pedidos listados | **Apenas pedidos de aluno@teste.com** |
| 4 | Verificar se pedidos de outros usuários aparecem | Não devem aparecer |

**✏️ Anote:** Pedidos de outros usuários (joao@teste.com, maria@teste.com) apareceram?

---

### CT-030 — Acessar pedidos sem estar logado
**Objetivo:** Página de pedidos deve exigir login  
**Pré-condição:** NÃO estar logado  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Garantir que está deslogado | Botão "Entrar" visível no menu |
| 2 | Acessar diretamente: `pedidos.html` | **Deve redirecionar para login** |

---

## MÓDULO 8 — PAINEL ADMINISTRATIVO

### CT-031 — Acesso ao admin sem estar logado
**Objetivo:** Painel admin deve exigir autenticação de administrador  
**Pré-condição:** NÃO estar logado  
**Prioridade:** Alta (Segurança)  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Garantir que está deslogado | Botão "Entrar" visível no menu |
| 2 | Digitar diretamente na URL: `admin.html` | **Deve redirecionar para login** |
| 3 | Fazer login como usuário comum (não admin) | Logado como "Aluno Teste" |
| 4 | Tentar acessar `admin.html` novamente | **Deve bloquear e mostrar mensagem de acesso negado** |

**✏️ Anote:** O painel admin abriu sem autenticação?

---

### CT-032 — Dashboard administrativo
**Objetivo:** Dashboard deve exibir estatísticas corretas  
**Pré-condição:** Logado como admin  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Fazer login como admin | Redirecionado ao admin |
| 2 | Verificar card "Total de Pedidos" | Número correto de pedidos |
| 3 | Verificar card "Produtos Cadastrados" | 12 produtos |
| 4 | Verificar card "Receita Total" | Apenas pedidos NÃO cancelados somados |
| 5 | Verificar tabela "Pedidos Recentes" | Últimos pedidos listados |

**✏️ Anote:** A receita total inclui pedidos cancelados?

---

### CT-033 — Gerenciamento de produtos no admin
**Objetivo:** Admin deve conseguir gerenciar produtos  
**Pré-condição:** Logado como admin, na seção Produtos  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "Produtos" no menu lateral | Lista de produtos exibida |
| 2 | Verificar se produto com preço negativo aparece destacado | Teclado Mecânico com preço -R$ 50,00 |
| 3 | Clicar em "Editar" em qualquer produto | Modal de edição abre com dados do produto |
| 4 | Verificar se os campos vêm preenchidos | **Campos devem ter os dados atuais do produto** |
| 5 | Clicar em "Excluir" em qualquer produto | **Deve pedir confirmação antes de excluir** |

**✏️ Anote:** Os campos do modal de edição vieram preenchidos? Pediu confirmação ao excluir?

---

### CT-034 — Visualizar senhas dos usuários no admin
**Objetivo:** Senhas nunca devem ser exibidas em texto claro  
**Pré-condição:** Logado como admin  
**Prioridade:** Alta (Segurança)  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "Usuários" no menu lateral | Lista de usuários |
| 2 | Verificar a coluna "Senha" | **Senhas devem aparecer como *** ou hash** |

**✏️ Anote:** As senhas estão visíveis em texto claro?

---

### CT-035 — Adicionar novo produto no admin
**Objetivo:** Formulário de novo produto deve validar os dados  
**Pré-condição:** Logado como admin, seção Produtos  
**Prioridade:** Média  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "+ Adicionar Produto" | Modal abre |
| 2 | Tentar salvar com nome vazio | Mensagem de erro |
| 3 | Preencher preço como -100 (negativo) | **Deve rejeitar preço negativo** |
| 4 | Preencher dados válidos e salvar | Produto aparece na lista |

---

## MÓDULO 9 — LOGOUT

### CT-036 — Logout do sistema
**Objetivo:** Usuário deve ser desconectado corretamente  
**Pré-condição:** Estar logado  
**Prioridade:** Alta  

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Verificar que está logado | Nome do usuário visível no menu |
| 2 | Clicar em "Sair" | Usuário deslogado |
| 3 | Verificar o menu após logout | Botão "Entrar" visível novamente |
| 4 | Verificar para onde foi redirecionado | Deve ir para login ou home |
| 5 | Tentar acessar pedidos.html | Deve redirecionar para login |

---

## 📝 TEMPLATE DE BUG REPORT

Use este modelo para cada bug encontrado:

```
==============================================
BUG REPORT
==============================================
ID:             BUG-XXX
Data:           DD/MM/AAAA
Testador:       [Seu nome]
Ambiente:       Chrome / Windows 10

TÍTULO:         [Resumo curto do bug]
SEVERIDADE:     🔴 Alta / 🟠 Média / 🟡 Baixa
TIPO:           Funcional / Visual / Segurança / Fluxo
PÁGINA:         [URL ou nome da página]

DESCRIÇÃO:
[Explique com suas palavras o que está errado]

PASSOS PARA REPRODUZIR:
1.
2.
3.

RESULTADO ESPERADO:
[O que deveria acontecer]

RESULTADO ATUAL:
[O que realmente aconteceu]

EVIDÊNCIA:
[Print de tela ou vídeo]
==============================================
```

---

## 🏆 CHECKLIST FINAL DO ALUNO

Ao terminar os testes, você deve ter:

- [ ] Testado todos os 36 casos de teste
- [ ] Documentado todos os bugs encontrados
- [ ] Classificado cada bug por severidade
- [ ] Preenchido o template de bug report para cada bug
- [ ] Tirado evidências (prints) de cada bug
- [ ] Criado pelo menos 1 sugestão de melhoria

**Meta:** Encontrar no mínimo **8 bugs** (dos 15 existentes no sistema)  
**Desafio:** Encontrar **todos os 15 bugs!** 🏅

---

*QA na Marra — Roteiro de Testes Manuais v1.0*
