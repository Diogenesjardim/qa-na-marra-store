// =============================================
// CODE FLOW STORE - FUNÇÕES PRINCIPAIS
// =============================================

// ------ CARRINHO ------

function getCart() {
  return JSON.parse(localStorage.getItem('qa_cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('qa_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = total);
}

function addToCart(productId, qty = 1) {
  const products = getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;


  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === productId);

  if (existingIndex >= 0) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      emoji: product.emoji,
      qty: qty
    });
  }

  saveCart(cart);
  showToast(`✅ ${product.name} adicionado ao carrinho!`);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCart();
}

function updateQty(productId, newQty) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.qty = Math.max(1, newQty);
    saveCart(cart);
    renderCart();
  }
}

function calcCartTotal() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  let discount = 0;
  if (subtotal > 500) {
    discount = 50;
  }

  const shipping = subtotal > 200 ? 0 : 19.90;
  const total = subtotal - discount + shipping;

  return { subtotal, discount, shipping, total };
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cartItems');
  const summaryContainer = document.getElementById('cartSummary');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div data-testid="cart-empty" class="empty-state">
        <div class="empty-icon">🛒</div>
        <h3>Seu carrinho está vazio</h3>
        <p>Adicione produtos para continuar</p>
        <a data-testid="cart-empty-browse" href="produtos.html" class="btn-primary" style="display:inline-block;margin-top:16px">Ver Produtos</a>
      </div>
    `;
    if (summaryContainer) summaryContainer.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <table data-testid="cart-table" class="cart-table">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Qtd</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${cart.map(item => `
          <tr data-testid="cart-item-${item.id}">
            <td>
              <div style="display:flex;align-items:center;gap:12px">
                <span style="font-size:1.5rem">${item.emoji}</span>
                <span data-testid="cart-item-name" class="cart-item-name">${item.name}</span>
              </div>
            </td>
            <td data-testid="cart-item-price" class="cart-item-price">R$ ${item.price.toFixed(2)}</td>
            <td>
              <div class="qty-control">
                <button data-testid="cart-item-qty-decrease" class="qty-btn" onclick="updateQty(${item.id}, ${item.qty - 1})">−</button>
                <span data-testid="cart-item-qty">${item.qty}</span>
                <button data-testid="cart-item-qty-increase" class="qty-btn" onclick="updateQty(${item.id}, ${item.qty + 1})">+</button>
              </div>
            </td>
            <td data-testid="cart-item-subtotal" class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2)}</td>
            <td><button data-testid="cart-item-remove" class="btn-remove" onclick="removeFromCart(${item.id})">🗑️</button></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  const { subtotal, discount, shipping, total } = calcCartTotal();

  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <div class="cart-summary">
        <div class="cart-summary-row">
          <span>Subtotal</span>
          <span data-testid="cart-subtotal">R$ ${subtotal.toFixed(2)}</span>
        </div>
        ${discount > 0 ? `
          <div class="cart-summary-row" style="color:var(--accent)">
            <span>Desconto</span>
            <span data-testid="cart-discount">− R$ ${discount.toFixed(2)}</span>
          </div>
        ` : ''}
        <div class="cart-summary-row">
          <span>Frete</span>
          <span data-testid="cart-shipping">${shipping === 0 ? '<span style="color:var(--accent)">Grátis</span>' : 'R$ ' + shipping.toFixed(2)}</span>
        </div>
        <div class="cart-summary-row total">
          <span>Total</span>
          <span data-testid="cart-total">R$ ${total.toFixed(2)}</span>
        </div>
        <a data-testid="cart-checkout-btn" href="checkout.html" class="btn-primary" style="display:block;text-align:center;margin-top:20px">
          Finalizar Compra
        </a>
      </div>
    `;
  }
}

// ------ PRODUTOS ------

function renderFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;

  const products = getProducts().filter(p => p.featured);
  container.innerHTML = products.map(p => productCard(p)).join('');
}

function renderAllProducts(filter = '') {
  const container = document.getElementById('allProducts');
  if (!container) return;

  let products = getProducts();
  
  // Filtro por categoria
  const urlParams = new URLSearchParams(window.location.search);
  const cat = urlParams.get('cat');
  if (cat) products = products.filter(p => p.category === cat);

  // Filtro por busca
  if (filter) {
    products = products.filter(p =>
      p.name.toLowerCase().includes(filter.toLowerCase()) ||
      p.description.toLowerCase().includes(filter.toLowerCase())
    );
  }

  if (products.length === 0) {
    container.innerHTML = `
      <div data-testid="products-empty" class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">🔍</div>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente outro termo de busca</p>
      </div>
    `;
    return;
  }

  container.innerHTML = products.map(p => productCard(p)).join('');
}

function productCard(p) {
  return `
    <div data-testid="product-card-${p.id}" class="product-card" onclick="window.location='produto.html?id=${p.id}'">
      <div class="product-img">${p.emoji}</div>
      <div class="product-info">
        <div data-testid="product-card-category" class="product-cat">${p.category}</div>
        <div data-testid="product-card-name" class="product-name">${p.name}</div>
        <div data-testid="product-card-price" class="product-price">
          R$ ${p.price.toFixed(2)}
          ${p.oldPrice ? `<span class="old-price">R$ ${p.oldPrice.toFixed(2)}</span>` : ''}
        </div>
        <button data-testid="product-card-add-to-cart" class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${p.id})">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  `;
}

function renderProductDetail() {
  const container = document.getElementById('productDetail');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id'));
  const products = getProducts();
  const product = products.find(p => p.id === id);

  if (!product) {
    container.innerHTML = '<div data-testid="product-not-found" class="empty-state"><h3>Produto não encontrado</h3></div>';
    return;
  }

  document.title = `${product.name} — Code Flow Store`;

  container.innerHTML = `
    <div data-testid="product-detail" class="product-detail">
      <div class="product-detail-img">${product.emoji}</div>
      <div class="product-detail-info">
        <div data-testid="product-detail-category" class="product-cat">${product.category}</div>
        <h1 data-testid="product-detail-name">${product.name}</h1>
        <div data-testid="product-detail-price" class="product-detail-price">
          R$ ${product.price.toFixed(2)}
          ${product.oldPrice ? `<span style="font-size:1rem;color:var(--text2);text-decoration:line-through;margin-left:8px">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
        </div>
        <p data-testid="product-detail-description" class="product-detail-desc">${product.description}</p>
        <div class="qty-selector">
          <label>Quantidade:</label>
          <input data-testid="product-qty-input" type="number" id="qtyInput" value="1" min="1" max="99"/>
        </div>
        <button data-testid="product-add-to-cart" class="btn-primary" style="width:100%" onclick="addToCart(${product.id}, parseInt(document.getElementById('qtyInput').value))">
          Adicionar ao Carrinho
        </button>
        <button data-testid="product-back" class="btn-ghost" style="width:100%;margin-top:10px" onclick="history.back()">
          ← Voltar
        </button>
        <div data-testid="product-stock-info" style="margin-top:16px;padding:12px;background:var(--bg3);border-radius:8px;font-size:13px;color:var(--text2)">
          ⭐ ${product.rating}/5.0 · 
          ${product.stock > 0 ? `✅ Em estoque (${product.stock} unid.)` : '❌ Sem estoque'}
        </div>
      </div>
    </div>
  `;
}

// ------ AUTH ------

function login(email, password) {
  const users = getUsers();
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    localStorage.setItem('qa_current_user', JSON.stringify(user));
    return { success: true, user };
  }
  return { success: false };
}

function logout() {
  localStorage.removeItem('qa_current_user');
  window.location.reload();
}

function register(name, email, password, confirm) {

  if (!name || !email) {
    return { success: false, error: 'Nome e e-mail são obrigatórios' };
  }

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    return { success: false, error: 'E-mail já cadastrado' };
  }

  const newUser = { name, email, password, role: 'user' };
  users.push(newUser);
  localStorage.setItem('qa_users', JSON.stringify(users));

  return { success: true };
}

function updateNav() {
  const user = getCurrentUser();
  const navLogin = document.getElementById('navLogin');
  const navLogout = document.getElementById('navLogout');
  const navUser = document.getElementById('navUser');

  if (user) {
    if (navLogin) navLogin.style.display = 'none';
    if (navLogout) navLogout.style.display = 'block';
    if (navUser) navUser.textContent = `Olá, ${user.name}`;
  }
}

// ------ CHECKOUT ------

function renderCheckoutSummary() {
  const container = document.getElementById('checkoutSummary');
  if (!container) return;

  const cart = getCart();
  const { subtotal, discount, shipping, total } = calcCartTotal();

  container.innerHTML = `
    <h3>Resumo do Pedido</h3>
    ${cart.map(item => `
      <div data-testid="checkout-summary-item" class="summary-item">
        <span>${item.emoji} ${item.name} x${item.qty}</span>
        <span>R$ ${(item.price * item.qty).toFixed(2)}</span>
      </div>
    `).join('')}
    <hr class="summary-divider"/>
    <div class="summary-item">
      <span>Subtotal</span>
      <span data-testid="checkout-subtotal">R$ ${subtotal.toFixed(2)}</span>
    </div>
    ${discount > 0 ? `
      <div class="summary-item" style="color:var(--accent)">
        <span>Desconto</span>
        <span data-testid="checkout-discount">- R$ ${discount.toFixed(2)}</span>
      </div>
    ` : ''}
    <div class="summary-item">
      <span>Frete</span>
      <span data-testid="checkout-shipping">${shipping === 0 ? 'Grátis' : 'R$ ' + shipping.toFixed(2)}</span>
    </div>
    <div class="summary-total">
      <span>Total</span>
      <span data-testid="checkout-total">R$ ${total.toFixed(2)}</span>
    </div>
  `;
}

function finalizarPedido(dados) {
  const cart = getCart();
  if (cart.length === 0) {
    showToast('❌ Carrinho vazio!');
    return;
  }

  const { total } = calcCartTotal();
  const orders = getOrders();
  const user = getCurrentUser();

  const newOrder = {
    id: `PED-${String(orders.length + 1).padStart(3, '0')}`,
    user: user ? user.email : dados.email,
    date: new Date().toISOString().split('T')[0],
    status: 'processando',
    items: cart.map(item => ({ name: item.name, qty: item.qty, price: item.price })),
    total,
    endereco: dados.endereco,
    pagamento: dados.pagamento
  };

  orders.push(newOrder);
  localStorage.setItem('qa_orders', JSON.stringify(orders));
  localStorage.removeItem('qa_cart');
  updateCartCount();

  window.location.href = 'confirmacao.html';
}

// ------ ADMIN ------

function renderAdminDashboard() {
  const orders = getOrders();
  const products = getProducts();
  const users = getUsers();

  // Stats
  const totalRevenue = orders
    .filter(o => o.status !== 'cancelado')
    .reduce((sum, o) => sum + o.total, 0);

  document.getElementById('statOrders').textContent = orders.length;
  document.getElementById('statProducts').textContent = products.length;
  document.getElementById('statUsers').textContent = users.length;
  document.getElementById('statRevenue').textContent = `R$ ${totalRevenue.toFixed(2)}`;

  // Tabela de pedidos recentes
  const tbody = document.getElementById('recentOrders');
  if (tbody) {
    tbody.innerHTML = orders.slice(-5).reverse().map(o => `
      <tr data-testid="admin-recent-order-row">
        <td><strong>${o.id}</strong></td>
        <td>${o.user}</td>
        <td>${o.date}</td>
        <td>R$ ${o.total.toFixed(2)}</td>
        <td>
          <span class="badge ${
            o.status === 'entregue' ? 'badge-green' :
            o.status === 'cancelado' ? 'badge-red' : 'badge-yellow'
          }">${o.status}</span>
        </td>
        <td>
          <button data-testid="admin-recent-order-view" class="btn-sm btn-edit">Ver</button>
        </td>
      </tr>
    `).join('');
  }
}

function renderAdminProducts() {
  const products = getProducts();
  const tbody = document.getElementById('adminProductsList');
  if (!tbody) return;

  tbody.innerHTML = products.map(p => `
    <tr data-testid="admin-product-row-${p.id}">
      <td>${p.id}</td>
      <td>${p.emoji} ${p.name}</td>
      <td>${p.category}</td>
      <td style="color:${p.price < 0 ? 'var(--accent2)' : 'var(--accent)'}">
        R$ ${p.price.toFixed(2)}
      </td>
      <td>${p.stock}</td>
      <td>
        <button data-testid="admin-product-edit" class="btn-sm btn-edit" onclick="editProduct(${p.id})">Editar</button>
        <button data-testid="admin-product-delete" class="btn-sm btn-delete" onclick="deleteProduct(${p.id})">Excluir</button>
      </td>
    </tr>
  `).join('');
}

function deleteProduct(id) {
  let products = getProducts();
  products = products.filter(p => p.id !== id);
  localStorage.setItem('qa_products', JSON.stringify(products));
  renderAdminProducts();
  showToast('Produto excluído');
}

function editProduct(id) {
  document.getElementById('editModal').style.display = 'flex';
}

function renderAdminOrders() {
  const orders = getOrders();
  const tbody = document.getElementById('adminOrdersList');
  if (!tbody) return;

  tbody.innerHTML = orders.map(o => `
    <tr data-testid="admin-order-row-${o.id}">
      <td><strong>${o.id}</strong></td>
      <td>${o.user}</td>
      <td>${o.date}</td>
      <td>R$ ${o.total.toFixed(2)}</td>
      <td>
        <select data-testid="admin-order-status-select" onchange="updateOrderStatus('${o.id}', this.value)"
          style="background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:4px 8px;border-radius:4px;font-size:12px">
          <option value="processando" ${o.status==='processando'?'selected':''}>Processando</option>
          <option value="enviado" ${o.status==='enviado'?'selected':''}>Enviado</option>
          <option value="entregue" ${o.status==='entregue'?'selected':''}>Entregue</option>
          <option value="cancelado" ${o.status==='cancelado'?'selected':''}>Cancelado</option>
        </select>
      </td>
    </tr>
  `).join('');
}

function updateOrderStatus(orderId, newStatus) {
  const orders = getOrders();
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    localStorage.setItem('qa_orders', JSON.stringify(orders));
    showToast(`Pedido ${orderId} atualizado para: ${newStatus}`);
  }
}

// ------ UTILS ------

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.setAttribute('data-testid', 'toast');
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function renderUserOrders() {
  const container = document.getElementById('userOrders');
  if (!container) return;

  const user = getCurrentUser();
  const orders = getOrders();

  const userOrders = user ? orders : [];

  if (userOrders.length === 0) {
    container.innerHTML = `
      <div data-testid="orders-empty" class="empty-state">
        <div class="empty-icon">📦</div>
        <h3>Nenhum pedido encontrado</h3>
        <p>Você ainda não fez nenhum pedido</p>
      </div>
    `;
    return;
  }

  container.innerHTML = userOrders.map(o => `
    <div data-testid="order-card-${o.id}" class="order-card">
      <div class="order-header">
        <span data-testid="order-id" class="order-id">${o.id}</span>
        <span data-testid="order-status" class="badge ${
          o.status === 'entregue' ? 'badge-green' :
          o.status === 'cancelado' ? 'badge-red' : 'badge-yellow'
        }">${o.status}</span>
        <span data-testid="order-total" class="order-total">R$ ${o.total.toFixed(2)}</span>
      </div>
      <div data-testid="order-items" class="order-items">
        ${o.items.map(i => `${i.name} x${i.qty}`).join(', ')}
      </div>
      <div data-testid="order-date" style="margin-top:8px;font-size:12px;color:var(--text2)">Data: ${o.date}</div>
    </div>
  `).join('');
}
