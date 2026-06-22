// =============================================
// QA NA MARRA STORE - DADOS DO SISTEMA
// =============================================

const PRODUCTS = [
  {
    id: 1,
    name: "Smartphone XPhone 13",
    category: "eletronicos",
    price: 2499.99,
    oldPrice: 2999.99,
    description: "Smartphone topo de linha com câmera de 108MP, bateria de 5000mAh e tela AMOLED de 6.7 polegadas. Ideal para testar fluxos de compra de produtos de alto valor.",
    emoji: "📱",
    stock: 10,
    featured: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Notebook ProBook 15",
    category: "eletronicos",
    price: 4799.00,
    oldPrice: null,
    description: "Notebook para profissionais com processador Intel i7, 16GB RAM e SSD de 512GB. Perfeito para quem precisa de desempenho.",
    emoji: "💻",
    stock: 5,
    featured: true,
    rating: 4.8
  },
  {
    id: 3,
    name: "Camiseta Básica QA",
    category: "roupas",
    price: 49.90,
    oldPrice: 79.90,
    description: "Camiseta 100% algodão com estampa exclusiva. Disponível nos tamanhos P, M, G e GG.",
    emoji: "👕",
    stock: 50,
    featured: true,
    rating: 4.2
  },
  {
    id: 4,
    name: "Livro: Introdução a Testes",
    category: "livros",
    price: 89.90,
    oldPrice: null,
    description: "O guia completo para iniciantes em Quality Assurance. Cobre testes manuais, automação e boas práticas do mercado.",
    emoji: "📚",
    stock: 20,
    featured: true,
    rating: 4.9
  },
  {
    id: 5,
    name: "Fone de Ouvido Bluetooth",
    category: "eletronicos",
    price: 299.90,
    oldPrice: 399.90,
    description: "Fone bluetooth com cancelamento de ruído ativo, 30h de bateria e qualidade de som premium.",
    emoji: "🎧",
    stock: 15,
    featured: false,
    rating: 4.3
  },
  {
    id: 6,
    name: "Tênis Runner Pro",
    category: "roupas",
    price: 399.00,
    oldPrice: 499.00,
    description: "Tênis de corrida com amortecimento avançado e solado antiderrapante. Ideal para corridas de até 42km.",
    emoji: "👟",
    stock: 8,
    featured: false,
    rating: 4.6
  },
  {
    id: 7,
    name: "Livro: Robot Framework na Prática",
    category: "livros",
    price: 119.90,
    oldPrice: null,
    description: "Aprenda automação de testes com Robot Framework do zero ao avançado, com exemplos práticos e projetos reais.",
    emoji: "🤖",
    stock: 30,
    featured: true,
    rating: 5.0
  },
  {
    id: 8,
    name: "Smart TV 50 polegadas",
    category: "eletronicos",
    price: 2199.00,
    oldPrice: 2799.00,
    description: "Smart TV 4K com sistema operacional inteligente, suporte a todos os apps de streaming e HDMI 2.1.",
    emoji: "📺",
    stock: 3,
    featured: false,
    rating: 4.4
  },
  {
    id: 9,
    name: "Cadeira Gamer ErgoMax",
    category: "casa",
    price: 899.00,
    oldPrice: 1199.00,
    description: "Cadeira ergonômica com apoio lombar ajustável, braço 4D e reclinação de até 180 graus.",
    emoji: "🪑",
    stock: 7,
    featured: false,
    rating: 4.1
  },
  {
    id: 10,
    name: "Mesa de Escritório Slim",
    category: "casa",
    price: 599.00,
    oldPrice: null,
    description: "Mesa compacta em MDF com 1.20m de comprimento e passagem de cabos integrada.",
    emoji: "🪵",
    stock: 12,
    featured: false,
    rating: 4.0
  },
  {
    id: 11,
    name: "Teclado Mecânico RGB",
    category: "eletronicos",
    // BUG: preço negativo permitido - este produto tem preço -50
    price: -50,
    oldPrice: 450.00,
    description: "Teclado mecânico com switches blue, iluminação RGB customizável e layout ABNT2.",
    emoji: "⌨️",
    stock: 20,
    featured: false,
    rating: 4.7
  },
  {
    id: 12,
    name: "Mouse Gamer 12000DPI",
    category: "eletronicos",
    price: 189.90,
    oldPrice: 229.90,
    description: "Mouse gamer com sensor óptico de alta precisão, 7 botões programáveis e peso ajustável.",
    emoji: "🖱️",
    stock: 0, // BUG: produto sem estoque aparece disponível para compra
    featured: false,
    rating: 4.5
  }
];

// Dados iniciais de pedidos para o admin
const INITIAL_ORDERS = [
  {
    id: "PED-001",
    user: "joao@teste.com",
    date: "2024-01-15",
    status: "entregue",
    items: [{ name: "Smartphone XPhone 13", qty: 1, price: 2499.99 }],
    total: 2499.99
  },
  {
    id: "PED-002",
    user: "maria@teste.com",
    date: "2024-01-16",
    status: "processando",
    items: [{ name: "Livro: Robot Framework na Prática", qty: 2, price: 119.90 }],
    total: 239.80
  },
  {
    id: "PED-003",
    user: "carlos@teste.com",
    date: "2024-01-17",
    status: "cancelado",
    items: [{ name: "Camiseta Básica QA", qty: 3, price: 49.90 }],
    total: 149.70
  }
];

// Inicializa dados no localStorage se não existirem
function initData() {
  if (!localStorage.getItem('qa_products')) {
    localStorage.setItem('qa_products', JSON.stringify(PRODUCTS));
  }
  if (!localStorage.getItem('qa_orders')) {
    localStorage.setItem('qa_orders', JSON.stringify(INITIAL_ORDERS));
  }
  if (!localStorage.getItem('qa_users')) {
    // Usuário admin padrão
    const users = [
      { name: "Admin", email: "admin@qanamarrastore.com", password: "admin123", role: "admin" },
      { name: "Aluno Teste", email: "aluno@teste.com", password: "senha123", role: "user" }
    ];
    localStorage.setItem('qa_users', JSON.stringify(users));
  }
}

function getProducts() {
  return JSON.parse(localStorage.getItem('qa_products')) || PRODUCTS;
}

function getOrders() {
  return JSON.parse(localStorage.getItem('qa_orders')) || [];
}

function getUsers() {
  return JSON.parse(localStorage.getItem('qa_users')) || [];
}

function getCurrentUser() {
  const user = localStorage.getItem('qa_current_user');
  return user ? JSON.parse(user) : null;
}

initData();
