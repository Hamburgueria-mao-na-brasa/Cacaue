const adminState = { tab: "dashboard" };

const adminProducts = [
  { name: "Fatia Belga Cacauê", status: "Disponível", sold: 138, views: 486 },
  { name: "Torta Pistache", status: "Disponível", sold: 42, views: 342 },
  { name: "Bolo Red Velvet", status: "Disponível", sold: 31, views: 278 },
  { name: "Fatia Limão Siciliano", status: "Esgotado", sold: 73, views: 193 },
];

const tabs = [
  ["dashboard", "Hoje"],
  ["orders", "Pedidos"],
  ["products", "Produtos"],
  ["campaigns", "Campanhas"],
  ["brand", "Marca"],
  ["reviews", "Avaliações"],
  ["customers", "Clientes"],
  ["team", "Equipe"],
];

function $(selector) {
  return document.querySelector(selector);
}

function money(value) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

function rows(items) {
  return `<div class="list">${items.map((item) => `
    <div class="row">
      <strong>${item.title}</strong>
      <span>${item.text}</span>
    </div>
  `).join("")}</div>`;
}

function renderTabs() {
  $("#adminTabs").innerHTML = tabs.map(([id, label]) => `
    <button class="admin-tab ${adminState.tab === id ? "active" : ""}" type="button" data-tab="${id}">${label}</button>
  `).join("");
}

function renderContent() {
  const content = {
    dashboard: `
      <article class="admin-card">
        <p class="eyebrow">Notificações</p>
        <div class="notice-list">
          <div class="notice urgent">3 pedidos aguardando confirmação</div>
          <div class="notice">2 avaliações aguardando aprovação</div>
          <div class="notice">Festival de Fatias termina em 2 dias</div>
          <div class="notice ok">Fatia Limão Siciliano marcada como esgotada</div>
        </div>
      </article>
      <div class="admin-grid">
        <article class="admin-card"><span>Pedidos do dia</span><div class="metric">18</div></article>
        <article class="admin-card"><span>Faturamento estimado</span><div class="metric">${money(2846)}</div></article>
        <article class="admin-card"><span>Produto mais visto</span><div class="metric">Fatia Belga</div></article>
      </div>
    `,
    orders: rows([
      { title: "#CAC-018", text: "Marina A. · Retirada · R$ 72,00 · aguardando confirmação" },
      { title: "#CAC-017", text: "Patrícia M. · Entrega · R$ 181,00 · em preparo" },
      { title: "#CAC-016", text: "Luiza R. · Retirada · R$ 119,00 · confirmado" },
    ]),
    products: `
      ${rows(adminProducts.map((item) => ({ title: item.name, text: `${item.status} · ${item.sold} vendas · ${item.views} visualizações` })))}
      <button class="btn btn-primary" data-quick="Novo produto">Novo produto</button>
    `,
    campaigns: `
      ${rows([
        { title: "Festival de Fatias", text: "Ativa até 30/06" },
        { title: "Lançamento Pistache", text: "Ativa até 25/06" },
      ])}
      <button class="btn btn-primary" data-quick="Nova campanha">Nova campanha</button>
    `,
    brand: `
      <article class="admin-card">
        <h3>Nossa História</h3>
        <p>Texto institucional editável da vitrine.</p>
        <div class="compact-form">
          <input value="Nossa História" />
          <textarea>A Cacauê nasceu do cuidado com os detalhes.</textarea>
          <textarea>Propósito: transformar afeto em experiência.</textarea>
          <textarea>Diferenciais: artesanal, elegante e feito sob cuidado.</textarea>
          <button class="btn btn-primary" data-quick="História salva">Salvar</button>
        </div>
      </article>
    `,
    reviews: rows([
      { title: "Camila F.", text: "Entrega impecável e doces lindos · pendente" },
      { title: "Renata P.", text: "A torta estava perfeita · pendente" },
    ]),
    customers: rows([
      { title: "Marina A.", text: "6 pedidos · última compra hoje · R$ 642,00" },
      { title: "Luiza R.", text: "4 pedidos · última compra ontem · R$ 498,00" },
    ]),
    team: rows([
      { title: "Ana Cacauê", text: "Owner · acesso total" },
      { title: "Atendimento", text: "Admin · produtos, pedidos, campanhas e avaliações" },
    ]),
  };
  $("#adminContent").innerHTML = content[adminState.tab];
}

function toast(message) {
  const box = $("#toast");
  box.textContent = message;
  box.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => box.classList.remove("show"), 2600);
}

function openAdmin() {
  $("#loginScreen").classList.add("hidden");
  $("#adminApp").classList.remove("hidden");
  renderTabs();
  renderContent();
  toast("Painel aberto.");
}

$("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  openAdmin();
});

document.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-tab]");
  if (tab) {
    adminState.tab = tab.dataset.tab;
    renderTabs();
    renderContent();
  }
  const quick = event.target.closest("[data-quick]");
  if (quick) toast(quick.dataset.quick);
});
