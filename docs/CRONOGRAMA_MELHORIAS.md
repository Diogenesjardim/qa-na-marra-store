# 📅 Cronograma de Melhorias - QA na Marra Store

**Data de apresentação aos alunos:** 25/06/2026  
**Objetivo:** Implementar melhorias gradualmente para aprendizado de Dev + enriquecer experiência dos alunos

---

## 🎯 Estratégia Geral

**Fase 1:** Apresentação inicial (25/06/2026) - Sistema com bugs atuais  
**Fase 2:** Melhorias rápidas (Julho 2026) - Validações básicas  
**Fase 3:** Funcionalidades intermediárias (Agosto 2026) - Busca, ordenação, cupons  
**Fase 4:** Segurança e avançado (Setembro 2026) - Hash de senhas, proteção admin  
**Fase 5:** Deploy e refinamento (Outubro 2026) - GitHub Pages, responsividade

---

## 📋 Cronograma Detalhado

### 📅 SEMANA 1 (24-30 Junho 2026) - Preparação

**Objetivo:** Preparar sistema para apresentação

#### Dia 25/06/2026 (Quarta) - Apresentação aos Alunos
- [ ] Apresentar o sistema atual com bugs
- [ ] Explicar objetivo do projeto
- [ ] Distribuir roteiro de testes manuais
- [ ] Definir prazo para entrega de bug reports (sugerir: 1 semana)

#### Dia 26-27/06/2026 (Quinta-Sexta) - Planejamento
- [ ] Revisar feedback dos alunos após primeiro teste
- [ ] Priorizar melhorias baseadas em dificuldades encontradas
- [ ] Preparar ambiente de desenvolvimento

#### Dia 28-30/06/2026 (Sábado-Domingo) - Setup Inicial
- [ ] Configurar branch `develop` para desenvolvimento
- [ ] Criar backup do estado atual (branch `production`)
- [ ] Documentar estado atual dos bugs

---

### 📅 SEMANA 2 (01-07 Julho 2026) - Melhorias Iniciantes

**Objetivo:** Implementar melhorias fáceis para aprender HTML/CSS/JS básico

#### 01-02/07 (Segunda-Terça) - Validação de Formulários
**Tempo estimado:** 4 horas  
**Arquivos:** `login.html`, `cadastro.html`, `checkout.html`  
**O que aprender:** HTML5 validation attributes

```html
<!-- Adicionar aos campos -->
<input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
<input type="password" required minlength="6">
<input type="number" min="0" step="0.01">
```

- [ ] Adicionar `required` em todos os campos obrigatórios
- [ ] Adicionar `pattern` para e-mail
- [ ] Adicionar `minlength` para senha
- [ ] Adicionar `min="0"` para campos numéricos
- [ ] Testar validações no navegador

#### 03-04/07 (Quinta-Quinta) - Mensagens de Erro Mais Claras
**Tempo estimado:** 3 horas  
**Arquivos:** `app.js`  
**O que aprender:** Manipulação de DOM e UX

- [ ] Melhorar mensagem de login (diferenciar e-mail não encontrado vs senha incorreta)
- [ ] Melhorar mensagem de cadastro (especificar campo faltando)
- [ ] Adicionar mensagens de sucesso mais detalhadas
- [ ] Testar fluxos de erro

#### 05-06/07 (Sábado-Domingo) - Loading States
**Tempo estimado:** 3 horas  
**Arquivos:** `app.js`, `style.css`  
**O que aprender:** Estados de loading e CSS animations

```css
.loading {
  opacity: 0.5;
  pointer-events: none;
}
```

```javascript
function showLoading() {
  document.body.classList.add('loading');
}
```

- [ ] Criar classe CSS para loading
- [ ] Adicionar loading em login
- [ ] Adicionar loading em cadastro
- [ ] Adicionar loading em checkout
- [ ] Testar UX

#### 07/07 (Domingo) - Deploy Local Test
- [ ] Testar todas as melhorias da semana
- [ ] Fazer commit no branch `develop`
- [ ] Não fazer deploy ainda

---

### 📅 SEMANA 3 (08-14 Julho 2026) - Funcionalidades Básicas

**Objetivo:** Implementar lógica de JavaScript mais complexa

#### 08-09/07 (Segunda-Terça) - Tooltips de Ajuda
**Tempo estimado:** 2 horas  
**Arquivos:** `cadastro.html`, `checkout.html`  
**O que aprender:** Atributos HTML5 e CSS

```html
<input title="Mínimo 6 caracteres" placeholder="Senha">
```

- [ ] Adicionar tooltips em campos complexos
- [ ] Estilizar tooltips com CSS
- [ ] Testar acessibilidade

#### 10-12/07 (Quinta-Sexta) - Validação de CPF
**Tempo estimado:** 6 horas  
**Arquivos:** `app.js`  
**O que aprender:** Algoritmos de validação, regex

```javascript
function validarCPF(cpf) {
  // Implementar algoritmo de validação de CPF
  // Dígitos verificadores
}
```

- [ ] Pesquisar algoritmo de validação de CPF
- [ ] Implementar função de validação
- [ ] Adicionar máscara de CPF (000.000.000-00)
- [ ] Integrar no formulário de cadastro
- [ ] Testar CPFs válidos e inválidos

#### 13-14/07 (Sábado-Domingo) - Validação de Estoque
**Tempo estimado:** 4 horas  
**Arquivos:** `app.js`  
**O que aprender:** Lógica de negócio

- [ ] Modificar `addToCart()` para verificar estoque
- [ ] Desabilitar botão de produtos sem estoque
- [ ] Adicionar mensagem "Produto indisponível"
- [ ] Testar com produto Mouse Gamer (estoque 0)

---

### 📅 SEMANA 4 (15-21 Julho 2026) - Funcionalidades Intermediárias

**Objetivo:** Implementar busca e ordenação

#### 15-17/07 (Segunda-Quarta) - Sistema de Busca Funcional
**Tempo estimado:** 6 horas  
**Arquivos:** `app.js`  
**O que aprender:** Array filtering, string manipulation

```javascript
function doSearch() {
  const filter = document.getElementById('searchInput').value.toLowerCase();
  const products = getProducts().filter(p => 
    p.name.toLowerCase().includes(filter) || 
    p.category.includes(filter)
  );
  renderAllProducts(filter, products);
}
```

- [ ] Implementar busca por nome
- [ ] Implementar busca por categoria
- [ ] Adicionar busca case-insensitive
- [ ] Testar com vários termos
- [ ] Adicionar feedback de "nenhum resultado"

#### 18-19/07 (Sexta-Sábado) - Ordenação Real de Produtos
**Tempo estimado:** 4 horas  
**Arquivos:** `app.js`  
**O que aprender:** Array sorting, comparators

```javascript
function sortProducts(products, criteria) {
  switch(criteria) {
    case 'price-asc': return products.sort((a,b) => a.price - b.price);
    case 'price-desc': return products.sort((a,b) => b.price - a.price);
    case 'name': return products.sort((a,b) => a.name.localeCompare(b.name));
    case 'rating': return products.sort((a,b) => b.rating - a.rating);
  }
}
```

- [ ] Implementar ordenação por preço (crescente)
- [ ] Implementar ordenação por preço (decrescente)
- [ ] Implementar ordenação por nome (A-Z)
- [ ] Implementar ordenação por avaliação
- [ ] Conectar ao select de ordenação
- [ ] Testar todas as ordenações

#### 20-21/07 (Domingo-Segunda) - Sistema de Cupons Real
**Tempo estimado:** 5 horas  
**Arquivos:** `app.js`, `data.js`  
**O que aprender:** Lógica de promoções

```javascript
const coupons = {
  'QANAMAARRA10': { discount: 0.10, type: 'percent' },
  'FRETEGRATIS': { discount: 20, type: 'fixed' }
};

function applyCoupon(code) {
  if (coupons[code]) {
    // aplicar desconto real
  }
}
```

- [ ] Criar objeto de cupons em `data.js`
- [ ] Implementar validação de cupom
- [ ] Implementar cálculo de desconto percentual
- [ ] Implementar cálculo de desconto fixo
- [ ] Atualizar UI com desconto aplicado
- [ ] Testar cupons válidos e inválidos

---

### 📅 SEMANA 5 (22-28 Julho 2026) - Segurança Básica

**Objetivo:** Implementar melhorias de segurança

#### 22-24/07 (Terça-Quinta) - Histórico de Pedidos do Usuário
**Tempo estimado:** 4 horas  
**Arquivos:** `app.js`  
**O que aprender:** Filtragem de dados, privacidade

```javascript
function renderUserOrders() {
  const user = getCurrentUser();
  const userOrders = orders.filter(o => o.user === user.email);
  // renderizar apenas pedidos do usuário
}
```

- [ ] Modificar `renderUserOrders()` para filtrar por usuário
- [ ] Testar com diferentes usuários
- [ ] Verificar que pedidos de outros não aparecem

#### 25-27/07 (Sexta-Domingo) - Proteção do Painel Admin
**Tempo estimado:** 3 horas  
**Arquivos:** `admin.html`, `app.js`  
**O que aprender:** Controle de acesso

```javascript
function checkAdminAccess() {
  const user = getCurrentUser();
  if (!user || user.role !== 'admin') {
    window.location.href = 'login.html';
  }
}
```

- [ ] Criar função `checkAdminAccess()`
- [ ] Chamar função no carregamento de `admin.html`
- [ ] Testar acesso sem login
- [ ] Testar acesso com usuário comum
- [ ] Testar acesso com admin

#### 28/07 (Segunda) - Review da Semana
- [ ] Testar todas as melhorias de segurança
- [ ] Documentar mudanças
- [ ] Commit no branch `develop`

---

### 📅 SEMANA 6 (29 Julho - 04 Agosto 2026) - Funcionalidades Avançadas

**Objetivo:** Implementar recursos mais complexos

#### 29-31/07 (Terça-Quinta) - Hash de Senhas
**Tempo estimado:** 8 horas  
**Arquivos:** `app.js`, `data.js`  
**O que aprender:** Criptografia, segurança

```javascript
// Usar Web Crypto API para SHA-256
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}
```

- [ ] Pesquisar Web Crypto API
- [ ] Implementar função de hash
- [ ] Migrar senhas existentes para hash
- [ ] Modificar login para comparar hashes
- [ ] Modificar cadastro para salvar hash
- [ ] Remover exibição de senhas em texto claro
- [ ] Testar login com hashes

#### 01-02/08 (Sexta-Sábado) - Sistema de Notificações Melhorado
**Tempo estimado:** 4 horas  
**Arquivos:** `app.js`, `style.css`  
**O que aprender:** Toast notifications, animations

- [ ] Criar sistema de toast notifications
- [ ] Adicionar diferentes tipos (success, error, warning, info)
- [ ] Adicionar animações CSS
- [ ] Substituir `showToast()` atual
- [ ] Testar diferentes notificações

#### 03-04/08 (Domingo-Segunda) - Página de Recuperação de Senha
**Tempo estimado:** 6 horas  
**Arquivos:** `esqueci-senha.html` (novo), `app.js`  
**O que aprender:** Fluxo completo, formulários

- [ ] Criar página `esqueci-senha.html`
- [ ] Implementar formulário de recuperação
- [ ] Simular envio de e-mail
- [ ] Criar página de redefinição
- [ ] Atualizar link no login
- [ ] Testar fluxo completo

---

### 📅 SEMANA 7 (05-11 Agosto 2026) - UX e UI

**Objetivo:** Melhorar interface e experiência

#### 05-07/08 (Terça-Quinta) - Responsividade Mobile
**Tempo estimado:** 8 horas  
**Arquivos:** `style.css`  
**O que aprender:** Media queries, mobile-first design

```css
@media (max-width: 768px) {
  /* Estilos mobile */
}
```

- [ ] Analisar layout atual em mobile
- [ ] Adicionar media queries
- [ ] Ajustar navbar para mobile
- [ ] Ajustar grid de produtos
- [ ] Ajustar formulários
- [ ] Testar em diferentes tamanhos de tela

#### 08-10/08 (Sexta-Domingo) - Sistema de Avaliação de Produtos
**Tempo estimado:** 6 horas  
**Arquivos:** `produto.html`, `app.js`, `data.js`  
**O que aprender:** Formulários, cálculo de média

- [ ] Adicionar formulário de avaliação na página do produto
- [ ] Implementar envio de avaliação
- [ ] Calcular média de avaliações
- [ ] Exibir avaliações na página do produto
- [ ] Exibir média na listagem
- [ ] Testar fluxo de avaliação

#### 11/08 (Segunda) - Review da Semana
- [ ] Testar responsividade
- [ ] Testar sistema de avaliações
- [ ] Commit no branch `develop`

---

### 📅 SEMANA 8 (12-18 Agosto 2026) - Preparação para Deploy

**Objetivo:** Preparar sistema para deploy

#### 12-14/08 (Terça-Quinta) - Correção de Bugs das Melhorias
**Tempo estimado:** 6 horas  
**Arquivos:** Vários  
**O que aprender:** Debugging

- [ ] Testar todas as funcionalidades implementadas
- [ ] Corrigir bugs encontrados
- [ ] Otimizar código
- [ ] Remover console.log

#### 15-17/08 (Sexta-Domingo) - Documentação
**Tempo estimado:** 4 horas  
**Arquivos:** `README.md`, documentação  
**O que aprender:** Documentação técnica

- [ ] Atualizar README com novas funcionalidades
- [ ] Criar guia de instalação
- [ ] Documentar API interna
- [ ] Adicionar screenshots
- [ ] Criar CHANGELOG

#### 18/08 (Segunda) - Merge e Teste Final
- [ ] Fazer merge de `develop` para `master`
- [ ] Testar sistema completo
- [ ] Verificar que todos os bugs originais ainda existem (se desejado)
- [ ] Decidir quais bugs corrigir

---

### 📅 SEMANA 9 (19-25 Agosto 2026) - Deploy

**Objetivo:** Publicar sistema

#### 19-21/08 (Terça-Quinta) - Configuração GitHub Pages
**Tempo estimado:** 2 horas  
**O que aprender:** GitHub Pages, deploy estático

- [ ] Habilitar GitHub Pages no repositório
- [ ] Configurar branch `master` como source
- [ ] Testar deploy automático
- [ ] Verificar URL pública

#### 22-24/08 (Sexta-Domingo) - Teste em Produção
**Tempo estimado:** 3 horas  
**O que aprender:** Testes em ambiente de produção

- [ ] Testar todas as funcionalidades em produção
- [ ] Verificar responsividade em dispositivos reais
- [ ] Testar em diferentes navegadores
- [ ] Corrigir problemas de produção

#### 25/08 (Segunda) - Apresentação da Versão Melhorada
- [ ] Apresentar nova versão aos alunos
- [ ] Explicar melhorias implementadas
- [ ] Distribuir novo roteiro de testes
- [ ] Definir próximos desafios

---

## 🎓 Sugestão de Apresentação aos Alunos

### 25/06/2026 - Apresentação Inicial
**Duração:** 1 hora  
**Conteúdo:**
1. Explicação do projeto (10 min)
2. Demonstração do sistema (15 min)
3. Explicação dos bugs (10 min)
4. Distribuição do roteiro (5 min)
5. Perguntas e respostas (20 min)

### 25/08/2026 - Apresentação da Versão Melhorada
**Duração:** 1.5 horas  
**Conteúdo:**
1. Recapitulação da versão inicial (10 min)
2. Demonstração das melhorias (30 min)
3. Explicação técnica das mudanças (20 min)
4. Novos desafios (10 min)
5. Perguntas e respostas (20 min)

---

## 📊 Progresso Esperado

| Semana | Foco | Melhorias | Horas Estimadas |
|--------|------|-----------|-----------------|
| 1 | Preparação | Setup, planejamento | 8h |
| 2 | Iniciante | Validações, loading | 10h |
| 3 | Básico | CPF, estoque, tooltips | 12h |
| 4 | Intermediário | Busca, ordenação, cupons | 15h |
| 5 | Segurança | Pedidos, admin | 7h |
| 6 | Avançado | Hash, notificações, recuperação | 18h |
| 7 | UX/UI | Responsividade, avaliações | 14h |
| 8 | Preparação | Correções, documentação | 10h |
| 9 | Deploy | GitHub Pages, teste | 5h |
| **TOTAL** | | | **99h** |

---

## 💡 Dicas para Aprendizado de Dev

### Por Semana
- **Semana 1-2:** Focar em HTML5 e CSS básico
- **Semana 3-4:** JavaScript intermediário (arrays, objetos)
- **Semana 5-6:** JavaScript avançado (async/await, crypto)
- **Semana 7:** CSS avançado (media queries, animations)
- **Semana 8-9:** Git, deploy, documentação

### Recursos Recomendados
- MDN Web Docs (referência oficial)
- JavaScript.info (tutorial de JS)
- CSS Tricks (referência de CSS)
- GitHub Docs (Git e GitHub)

### Prática Sugerida
- 2-3 horas por dia de desenvolvimento
- Commit diário no branch `develop`
- Documentar cada melhoria
- Testar extensivamente antes de prosseguir

---

*Este cronograma é flexível e pode ser ajustado conforme seu ritmo de aprendizado e feedback dos alunos.*
