# Seletores para automação

Todos os elementos importantes do site têm um atributo `data-testid` estável, em kebab-case. Use-o em qualquer framework (Selenium, Cypress, Playwright, WebdriverIO, Robot Framework). Os `id` originais continuam existindo.

Os nomes não mudam quando o texto ou o estilo da tela muda, então os testes não quebram por causa de layout. Os bugs propositais do site continuam todos lá: esses atributos não alteram nenhum comportamento.

## Como usar

| Ferramenta | Exemplo |
|---|---|
| CSS (qualquer uma) | `[data-testid="login-email"]` |
| Selenium (Java) | `driver.findElement(By.cssSelector("[data-testid='login-email']"))` |
| Selenium (Python) | `driver.find_element(By.CSS_SELECTOR, "[data-testid='login-email']")` |
| Cypress | `cy.get('[data-testid="login-email"]')` |
| Playwright | `page.getByTestId('login-email')` |
| Robot (SeleniumLibrary) | `css:[data-testid="login-email"]` |
| Robot (Browser) | `[data-testid="login-email"]` |

## Itens de lista (gerados por JavaScript)

Linhas e cards que se repetem levam o id do item no nome, e os elementos dentro deles têm um nome genérico. Busque primeiro o item e depois o elemento dentro dele:

- Card de produto: `product-card-<id>` → dentro dele `product-card-name`, `product-card-price`, `product-card-add-to-cart`
- Item do carrinho: `cart-item-<id>` → dentro dele `cart-item-qty-increase`, `cart-item-remove` etc.
- Pedido: `order-card-<id do pedido>` (ex.: `order-card-PED-001`)
- Admin: `admin-product-row-<id>`, `admin-order-row-<id do pedido>`

Exemplo (Playwright): `page.getByTestId('product-card-1').getByTestId('product-card-add-to-cart').click()`

## Menu e rodapé (em todas as páginas que os têm)

`nav-logo`, `nav-home`, `nav-products`, `nav-cart`, `nav-back-to-cart`, `cart-count`, `nav-user-name`, `nav-login`, `nav-logout`

Rodapé: `footer-link-products`, `footer-link-about`, `footer-link-contact`, `footer-link-login`, `footer-link-register`, `footer-link-orders`

Mensagem flutuante (toast): `toast`

## Por página

### Home (index.html)

Fixos: `hero`, `hero-title`, `hero-btn-products`, `hero-btn-how-it-works`, `category-eletronicos`, `category-roupas`, `category-livros`, `category-casa`, `featured-products`, `promo-banner`, `promo-banner-text`, `promo-banner-btn`

Gerados por JS: `product-card-<id>`, `product-card-category`, `product-card-name`, `product-card-price`, `product-card-add-to-cart`

### Login (login.html)

Fixos: `login-error`, `login-success`, `login-email`, `login-password`, `login-forgot-password`, `login-submit`, `login-register-link`, `login-test-credentials`

### Cadastro (cadastro.html)

Fixos: `register-error`, `register-success`, `register-name`, `register-email`, `register-password`, `register-confirm-password`, `register-cpf`, `register-submit`, `register-login-link`

### Produtos (produtos.html)

Fixos: `filter-all`, `filter-eletronicos`, `filter-roupas`, `filter-livros`, `filter-casa`, `search-input`, `search-submit`, `product-count`, `sort-select`, `products-grid`

Gerados por JS: `products-empty`, `product-card-<id>`, `product-card-category`, `product-card-name`, `product-card-price`, `product-card-add-to-cart`

### Detalhe do produto (produto.html)

Fixos: `product-detail-container`

Gerados por JS: `product-not-found`, `product-detail`, `product-detail-category`, `product-detail-name`, `product-detail-price`, `product-detail-description`, `product-qty-input`, `product-add-to-cart`, `product-back`, `product-stock-info`

### Carrinho (carrinho.html)

Fixos: `coupon-input`, `coupon-apply`, `cart-items`, `cart-summary`

Gerados por JS: `cart-empty`, `cart-empty-browse`, `cart-table`, `cart-item-<id>`, `cart-item-name`, `cart-item-price`, `cart-item-qty-decrease`, `cart-item-qty`, `cart-item-qty-increase`, `cart-item-subtotal`, `cart-item-remove`, `cart-subtotal`, `cart-discount`, `cart-shipping`, `cart-total`, `cart-checkout-btn`

### Checkout (checkout.html)

Fixos: `checkout-cep`, `checkout-street`, `checkout-number`, `checkout-complement`, `checkout-city`, `checkout-state`, `checkout-payment-method`, `checkout-card-fields`, `checkout-card-number`, `checkout-card-expiry`, `checkout-card-cvv`, `checkout-card-name`, `checkout-pix-info`, `checkout-boleto-info`, `checkout-submit`, `checkout-summary`

Gerados por JS: `checkout-summary-item`, `checkout-subtotal`, `checkout-discount`, `checkout-shipping`, `checkout-total`

### Confirmação (confirmacao.html)

Fixos: `confirmation-title`, `confirmation-message`, `confirmation-order-number`, `confirmation-view-orders`, `confirmation-continue-shopping`

### Meus Pedidos (pedidos.html)

Fixos: `orders-list`

Gerados por JS: `orders-empty`, `order-card-<id>`, `order-id`, `order-status`, `order-total`, `order-items`, `order-date`

### Admin (admin.html)

Fixos: `admin-nav-dashboard`, `admin-nav-products`, `admin-nav-orders`, `admin-nav-users`, `admin-nav-back-to-store`, `admin-section-dashboard`, `stat-orders`, `stat-products`, `stat-users`, `stat-revenue`, `admin-recent-orders`, `admin-section-products`, `admin-add-product-btn`, `admin-products-list`, `admin-section-orders`, `admin-orders-list`, `admin-section-users`, `admin-users-list`, `edit-product-modal`, `edit-product-name`, `edit-product-price`, `edit-product-stock`, `edit-product-save`, `edit-product-cancel`, `add-product-modal`, `add-product-name`, `add-product-price`, `add-product-stock`, `add-product-category`, `add-product-submit`, `add-product-cancel`

Gerados por JS: `admin-recent-order-row`, `admin-recent-order-view`, `admin-product-row-<id>`, `admin-product-edit`, `admin-product-delete`, `admin-order-row-<id>`, `admin-order-status-select`, `admin-user-row`, `admin-user-name`, `admin-user-email`, `admin-user-password`, `admin-user-role`
