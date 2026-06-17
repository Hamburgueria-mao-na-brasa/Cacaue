const products = [
  {
    id: "fatia-belga",
    name: "Fatia Belga Cacauê",
    category: "Fatias",
    price: 24,
    short: "Chocolate intenso, creme leve e brilho de festa.",
    full: "Uma fatia cremosa com massa de cacau, recheio belga e finalização delicada. Perfeita para experimentar a assinatura da Cacauê.",
    min: 1,
    available: true,
    badges: ["Favorito", "Mais vendido"],
    photo: "assets/products/fatia-belga.png",
    toneA: "#2f1710",
    toneB: "#b88a3d",
  },
  {
    id: "torta-pistache",
    name: "Torta Pistache",
    category: "Tortas",
    price: 169,
    short: "Pistache, baunilha e massa amanteigada.",
    full: "Torta com creme de pistache, base amanteigada e acabamento elegante. Produção sob encomenda para preservar textura e frescor.",
    min: 1,
    available: true,
    badges: ["Destaque"],
    photo: "assets/products/torta-pistache.png",
    toneA: "#77846b",
    toneB: "#e6c783",
  },
  {
    id: "bolo-red",
    name: "Bolo Red Velvet",
    category: "Bolos",
    price: 145,
    short: "Clássico delicado com creme suave.",
    full: "Bolo alto de massa macia com recheio cremoso e visual marcante. Ideal para celebrações especiais.",
    min: 1,
    available: true,
    badges: ["Novidade"],
    photo: "assets/products/bolo-red.png",
    toneA: "#7d3f4f",
    toneB: "#fff8ea",
  },
  {
    id: "doces-finos",
    name: "Caixa Doces Finos",
    category: "Doces finos",
    price: 98,
    short: "Seleção delicada para presentear.",
    full: "Caixa com doces finos variados, acabamento premium e embalagem elegante. Pedido mínimo de 12 unidades.",
    min: 12,
    available: true,
    badges: ["Destaque"],
    photo: "assets/products/doces-finos.png",
    toneA: "#dfceb1",
    toneB: "#6e5648",
  },
  {
    id: "fatia-limao",
    name: "Fatia Limão Siciliano",
    category: "Fatias",
    price: 22,
    short: "Frescor cítrico e merengue delicado.",
    full: "Uma opção leve e equilibrada, com creme de limão siciliano e cobertura macia.",
    min: 1,
    available: false,
    badges: ["Favorito"],
    photo: "",
    toneA: "#f1dc8b",
    toneB: "#77846b",
  },
  {
    id: "kit-afeto",
    name: "Kit Afeto",
    category: "Kits",
    price: 119,
    short: "Uma caixa para celebrar sem esforço.",
    full: "Kit com fatias, doces finos e mensagem personalizada. Pensado para aniversários, agradecimentos e encontros.",
    min: 1,
    available: true,
    badges: ["Novidade"],
    photo: "",
    toneA: "#b88a3d",
    toneB: "#321f17",
  },
];

const campaigns = [
  { title: "Festival de Fatias", text: "Sabores especiais em porções perfeitas para descobrir a Cacauê.", end: "30/06" },
  { title: "Lançamento Pistache", text: "Uma torta elegante para quem ama textura, brilho e delicadeza.", end: "25/06" },
  { title: "Caixas para Presentear", text: "Combinações prontas para surpreender com presença e afeto.", end: "15/07" },
];

const reviews = [
  { name: "Marina A.", text: "A apresentação é impecável e o sabor surpreende." },
  { name: "Luiza R.", text: "Comprei para presentear e chegou perfeito." },
  { name: "Patrícia M.", text: "A torta virou assunto no jantar." },
];

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const state = {
  category: "Todos",
  order: readJson("cacaueOrder", []),
  currentProduct: null,
};

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return [...document.querySelectorAll(selector)];
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function saveOrder() {
  try {
    localStorage.setItem("cacaueOrder", JSON.stringify(state.order));
  } catch {
    toast("Pedido atualizado sem salvar no dispositivo.");
  }
}

function productVisual(product, large = false) {
  if (product.photo) return `<img src="${product.photo}" alt="${product.name}" />`;
  return `<div class="fallback-sweet" style="--tone-a:${product.toneA};--tone-b:${product.toneB}"></div>`;
}

function renderCampaigns() {
  $("#campaignList").innerHTML = campaigns.map((item) => `
    <article class="event-card">
      <small>Até ${item.end}</small>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderFilters() {
  const categories = ["Todos", ...new Set(products.map((item) => item.category))];
  $("#filters").innerHTML = categories.map((category) => `
    <button class="chip ${state.category === category ? "active" : ""}" type="button" data-category="${category}">${category}</button>
  `).join("");
}

function renderProducts() {
  const visible = state.category === "Todos" ? products : products.filter((item) => item.category === state.category);
  $("#productList").innerHTML = visible.map((product) => `
    <article class="menu-item ${product.available ? "" : "soldout"}">
      <button class="menu-photo" type="button" data-product="${product.id}">
        ${productVisual(product)}
      </button>
      <div class="menu-info">
        <div class="menu-title">
          <h3>${product.name}</h3>
          <strong>${money.format(product.price)}</strong>
        </div>
        <p>${product.short}</p>
        <div class="badge-row compact">
          ${product.badges.map((badge) => `<span class="badge">${badge}</span>`).join("")}
          <span class="badge">${product.available ? "Disponível" : "Esgotado"}</span>
        </div>
      </div>
      <div class="menu-action">
        <button class="chip" type="button" data-product="${product.id}">Detalhes</button>
        <button class="btn btn-primary" type="button" data-quick-add="${product.id}" ${product.available ? "" : "disabled"}>Adicionar</button>
      </div>
    </article>
  `).join("");
}

function renderReviews() {
  $("#reviewList").innerHTML = reviews.map((review) => `
    <article class="review-card">
      <p>“${review.text}”</p>
      <strong>${review.name}</strong>
    </article>
  `).join("");
}

function openProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  state.currentProduct = product.id;
  $("#productDetail").innerHTML = `
    <div class="detail">
      <div class="detail-visual">${productVisual(product, true)}</div>
      <div>
        <p class="eyebrow">${product.category}</p>
        <h2>${product.name}</h2>
        <p class="price">${money.format(product.price)}</p>
        <p>${product.full}</p>
        <p><strong>Pedido mínimo:</strong> ${product.min} ${product.min > 1 ? "unidades" : "unidade"}</p>
        <div class="qty">
          <button type="button" data-qty="-1">−</button>
          <strong id="qtyValue">${product.min}</strong>
          <button type="button" data-qty="1">+</button>
        </div>
        <button class="btn btn-primary full" type="button" data-add-product="${product.id}">Adicionar ao pedido</button>
      </div>
    </div>
  `;
  $("#productDialog").showModal();
}

function addToOrder(id, quantity) {
  const product = products.find((item) => item.id === id);
  if (!product || !product.available) {
    toast("Esse produto está esgotado no momento.");
    return;
  }
  const qty = Math.max(quantity || product.min, product.min);
  const line = state.order.find((item) => item.id === id);
  if (line) line.quantity += qty;
  else state.order.push({ id, quantity: qty });
  saveOrder();
  renderOrder();
  toast("Produto adicionado ao pedido.");
}

function updateOrder(id, delta) {
  const line = state.order.find((item) => item.id === id);
  const product = products.find((item) => item.id === id);
  if (!line || !product) return;
  line.quantity += delta;
  if (line.quantity < product.min) state.order = state.order.filter((item) => item.id !== id);
  saveOrder();
  renderOrder();
}

function totals() {
  const subtotal = state.order.reduce((sum, line) => {
    const product = products.find((item) => item.id === line.id);
    return sum + (product ? product.price * line.quantity : 0);
  }, 0);
  const mode = new FormData($("#checkoutForm")).get("mode");
  const delivery = mode === "entrega" && subtotal > 0 ? 12 : 0;
  return { subtotal, delivery, total: subtotal + delivery };
}

function renderOrder() {
  $("#orderCount").textContent = state.order.reduce((sum, item) => sum + item.quantity, 0);
  $("#orderItems").innerHTML = state.order.length ? state.order.map((line) => {
    const product = products.find((item) => item.id === line.id);
    return `
      <div class="order-line">
        <div>
          <strong>${product.name}</strong>
          <p>${line.quantity} × ${money.format(product.price)}</p>
        </div>
        <div class="line-actions">
          <button type="button" data-update="${line.id}" data-delta="-1">−</button>
          <button type="button" data-update="${line.id}" data-delta="1">+</button>
        </div>
      </div>
    `;
  }).join("") : "<p>Seu pedido ainda está vazio.</p>";
  const value = totals();
  $("#totals").innerHTML = `
    <div><span>Subtotal</span><strong>${money.format(value.subtotal)}</strong></div>
    <div><span>Entrega</span><strong>${money.format(value.delivery)}</strong></div>
    <div><span>Total</span><strong>${money.format(value.total)}</strong></div>
  `;
}

function checkout(event) {
  event.preventDefault();
  if (!state.order.length) {
    toast("Escolha um produto antes de finalizar.");
    return;
  }
  const form = new FormData(event.currentTarget);
  const mode = form.get("mode");
  if (mode === "entrega" && (!form.get("address") || !form.get("number") || !form.get("district"))) {
    toast("Informe endereço, número e bairro.");
    return;
  }
  const protocol = `CAC-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${Math.floor(100 + Math.random() * 900)}`;
  const value = totals();
  const lines = state.order.map((line) => {
    const product = products.find((item) => item.id === line.id);
    return `• ${line.quantity}x ${product.name} - ${money.format(product.price * line.quantity)}`;
  }).join("\n");
  const message = encodeURIComponent(`Olá, Cacauê! Pedido ${protocol}\n\nCliente: ${form.get("name")}\nWhatsApp: ${form.get("phone")}\n\n${lines}\n\nTotal: ${money.format(value.total)}`);
  state.order = [];
  saveOrder();
  renderOrder();
  $("#orderDrawer").classList.remove("open");
  $("#protocolText").textContent = `Protocolo ${protocol}. A mensagem está pronta para confirmação pelo WhatsApp.`;
  $("#whatsappLink").href = `https://wa.me/5500000000000?text=${message}`;
  $("#thanksDialog").showModal();
}

function toast(message) {
  const box = $("#toast");
  box.textContent = message;
  box.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => box.classList.remove("show"), 2600);
}

function boot() {
  renderCampaigns();
  renderFilters();
  renderProducts();
  renderReviews();
  renderOrder();
}

document.addEventListener("click", (event) => {
  const product = event.target.closest("[data-product]");
  if (product) openProduct(product.dataset.product);

  const category = event.target.closest("[data-category]");
  if (category) {
    state.category = category.dataset.category;
    renderFilters();
    renderProducts();
  }

  const qty = event.target.closest("[data-qty]");
  if (qty) {
    const value = $("#qtyValue");
    const current = Number(value.textContent);
    value.textContent = Math.max(1, current + Number(qty.dataset.qty));
  }

  const add = event.target.closest("[data-add-product]");
  if (add) {
    addToOrder(add.dataset.addProduct, Number($("#qtyValue").textContent));
    $("#productDialog").close();
  }

  const quickAdd = event.target.closest("[data-quick-add]");
  if (quickAdd) addToOrder(quickAdd.dataset.quickAdd);

  const update = event.target.closest("[data-update]");
  if (update) updateOrder(update.dataset.update, Number(update.dataset.delta));

  if (event.target.matches("[data-close-dialog]")) event.target.closest("dialog").close();
});

$("#openOrder").addEventListener("click", () => $("#orderDrawer").classList.add("open"));
$("#closeOrder").addEventListener("click", () => $("#orderDrawer").classList.remove("open"));
$("#checkoutForm").addEventListener("submit", checkout);
$("#checkoutForm").addEventListener("change", (event) => {
  if (event.target.name === "mode") {
    const delivery = event.target.value === "entrega";
    $("#deliveryFields").classList.toggle("hidden", !delivery);
    $("#pickupFields").classList.toggle("hidden", delivery);
    $all("#deliveryFields input").forEach((input) => {
      input.required = delivery && ["address", "number", "district"].includes(input.name);
    });
    $all("#pickupFields input").forEach((input) => {
      input.required = !delivery;
    });
  }
  renderOrder();
});

boot();
