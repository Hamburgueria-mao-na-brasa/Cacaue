const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const categoryConfig = {
  Vitrine: [],
  Bolos: ["Bolos caseiros", "Bolos quadrados", "Bolos de festa", "Bolos gourmet"],
  Doces: ["Doces finos", "Doces tradicionais", "Doces gourmet"],
  Sobremesas: ["Sobremesas"],
  Despedidas: ["Despedida de solteiro"],
  "Kit Festa": ["Kit pequeno", "Kit médio", "Kit completo"],
  "Presenteável": [],
};
const menuCategories = Object.keys(categoryConfig);
const customerMenuModes = ["Vitrine", "Encomendas"];
const orderMenuCategories = menuCategories.filter((category) => category !== "Vitrine");
const adminCategoryFilterOptions = ["Todos", ...menuCategories];

let products = [
  {
    id: "bolo-festa-bento",
    name: "Bento Cake",
    image: "assets/products/bolo-red.png",
    category: "Bolos",
    price: 80,
    short: "Bolinho individual com aproximadamente 10cm de diâmetro.",
    description: "Pequeno no tamanho e gigante no carinho. Escolha massa, recheio e decoração simples. Pedido com antecedência.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Sob encomenda"],
  },
  {
    id: "bolo-festa-15",
    name: "Bolo de Festa 15cm",
    image: "assets/products/bolo-red.png",
    category: "Bolos",
    price: 110,
    short: "Peso aproximado de 1,7kg. Ideal para comemorações pequenas.",
    description: "Massa: chocolate ou baunilha. Recheios: brigadeiros, doce de leite, coco, belga, mousse e 4 leites. Inclui 1 adicional gratuito entre morango, crocante, bombom, abacaxi ou ameixa.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva"],
  },
  {
    id: "bolo-festa-17",
    name: "Bolo de Festa 17cm",
    image: "assets/products/bolo-red.png",
    category: "Bolos",
    price: 145,
    short: "Peso aproximado de 2,2kg.",
    description: "Bolo de festa personalizável. Cobertura em chantilly ou chantininho. Topper, glitter, flores naturais e itens decorativos são cobrados à parte.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva"],
  },
  {
    id: "bolo-festa-21",
    name: "Bolo de Festa 21cm",
    image: "assets/products/bolo-red.png",
    category: "Bolos",
    price: 185,
    short: "Peso aproximado de 2,7kg.",
    description: "Pedido com pelo menos 2 dias de antecedência. Fechamento com 50% do valor pago e restante na retirada.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva"],
  },
  {
    id: "bolo-festa-25",
    name: "Bolo de Festa 25cm",
    image: "assets/products/bolo-red.png",
    category: "Bolos",
    price: 240,
    short: "Peso aproximado de 3,2kg.",
    description: "Bolo maior para festas. Bolos de andar possuem cobrança de suporte. Enviar inspirações pelo WhatsApp.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva"],
  },
  {
    id: "bolo-chocolatudo",
    name: "Bolo Chocolatudo",
    image: "assets/products/bolo-red.png",
    category: "Bolos Simples",
    price: 35,
    short: "Massa de chocolate bem úmida e intensa.",
    description: "Sabor marcante e irresistível para amantes de chocolate.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Caseiro"],
  },
  {
    id: "bolo-laranja",
    name: "Bolo de Laranja",
    image: "assets/products/torta-pistache.png",
    category: "Bolos Simples",
    price: 35,
    short: "Massa macia e aromática com suco natural de laranja.",
    description: "Sabor caseiro e aconchegante para café da tarde.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Caseiro"],
  },
  {
    id: "bolo-limao-caseiro",
    name: "Bolo de Limão",
    image: "assets/products/torta-pistache.png",
    category: "Bolos Simples",
    price: 35,
    short: "Massa fofinha com toque cítrico de limão.",
    description: "Leve, refrescante e equilibrado na medida certa.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Caseiro"],
  },
  {
    id: "bolo-redvelvet-caseiro",
    name: "Bolo Red Velvet",
    image: "assets/products/bolo-red.png",
    category: "Bolos Simples",
    price: 45,
    short: "Massa aveludada e delicada.",
    description: "Leve sabor amanteigado, perfeita para combinações com recheios suaves.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Caseiro"],
  },
  {
    id: "bolo-morango",
    name: "Bolo de Morango",
    image: "assets/products/bolo-red.png",
    category: "Bolos Simples",
    price: 35,
    short: "Massa leve com sabor delicado e morangos.",
    description: "Traz frescor e suavidade ao paladar.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Caseiro"],
  },
  {
    id: "bolo-ninho",
    name: "Bolo de Ninho",
    image: "assets/products/bolo-red.png",
    category: "Bolos Simples",
    price: 45,
    short: "Massa macia e cremosa com sabor suave de leite Ninho.",
    description: "Doce na medida certa e muito aconchegante.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Caseiro"],
  },
  {
    id: "cesta-bom-astral",
    name: "Cesta Bom Astral",
    image: "assets/products/doces-finos.png",
    category: "Kits",
    price: 159.9,
    short: "Cesta de café da manhã para 1 pessoa.",
    description: "Inclui suco de laranja 300ml, fruta fresca, pão doce artesanal, iogurte, biscoito ou bolacha amanteigada, barrinha de cereal, café ou achocolatado e bombons sortidos.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Presenteável"],
  },
  {
    id: "torta-chocolate",
    name: "Torta de Chocolate",
    image: "assets/products/torta-pistache.png",
    category: "Bolos",
    price: 85,
    short: "Base crocante de biscoito com chocolate meio amargo.",
    description: "Tamanho P serve até 8 pessoas por R$ 85,00. Tamanho M serve até 12 pessoas por R$ 120,00.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Tortas"],
  },
  {
    id: "torta-morango",
    name: "Torta de Morango",
    image: "assets/products/torta-pistache.png",
    category: "Bolos",
    price: 95,
    short: "Massa leve, creme branco e morangos frescos.",
    description: "Tamanho P serve até 8 pessoas por R$ 95,00. Tamanho M serve até 12 pessoas por R$ 140,00.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Tortas"],
  },
  {
    id: "torta-limao",
    name: "Torta de Limão",
    image: "assets/products/torta-pistache.png",
    category: "Bolos",
    price: 95,
    short: "Base crocante, creme de limão e cobertura delicada.",
    description: "Tamanho P serve até 8 pessoas por R$ 95,00. Tamanho M serve até 12 pessoas por R$ 140,00.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Tortas"],
  },
  {
    id: "torta-coco",
    name: "Torta de Coco",
    image: "assets/products/torta-pistache.png",
    category: "Bolos",
    price: 95,
    short: "Camadas de bolo macio com recheio cremoso de coco.",
    description: "Tamanho P serve até 8 pessoas por R$ 95,00. Tamanho M serve até 12 pessoas por R$ 140,00.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Tortas"],
  },
  {
    id: "salgados-cento",
    name: "Salgados Fritos",
    image: "assets/products/doces-finos.png",
    category: "Kits",
    price: 80,
    short: "Coxinha, empada, rabo de tatu, enroladinho, pastelzinho, kibe e bolinha de queijo.",
    description: "Valor por cento. Opções extraídas do Canva: coxinha de frango, coxinha de carne, empada, rabo de tatu, enroladinho de salsicha, delícia de goiaba, pastelzinho, kibe e bolinha de queijo.",
    minimum: 100,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Salgados"],
  },
  {
    id: "brigadeiro-ninho-nutella",
    name: "Brigadeiro Ninho com Nutella",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "A combinação perfeita do leite ninho com o recheio de Nutella.",
    description: "Brigadeiro delicado com acabamento premium, leite ninho e recheio cremoso de Nutella. Ideal para eventos e mesas especiais.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Destaque", "Evento"],
  },
  {
    id: "copinho-cereja",
    name: "Copinho de Cereja",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "Doce, delicado e irresistível. Um clássico que encanta sempre.",
    description: "Copinho fino com creme delicado e finalização com cereja. Sofisticado para casamentos, aniversários e eventos.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Novidade", "Evento"],
  },
  {
    id: "surpresa-uva",
    name: "Surpresa de Uva",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "Casquinha delicada com recheio suculento de uva.",
    description: "Doce leve, refrescante e cheio de sabor, com apresentação elegante para compor mesas de doces finos.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Favorito", "Evento"],
  },
  {
    id: "copinho-physales",
    name: "Copinho Physales",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "Equilíbrio perfeito entre chocolate e o azedinho do physalis.",
    description: "Copinho sofisticado e marcante, finalizado com physalis para uma apresentação premium.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Destaque", "Premium"],
  },
  {
    id: "coracao-dourado",
    name: "Coração Dourado",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "Coração meio amargo com gel intenso e ganache de Jack Daniels.",
    description: "Doce fino em formato de coração, com chocolate meio amargo, gel intenso e ganache de Jack Daniels. Sofisticado para eventos premium.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Premium", "Evento"],
  },
  {
    id: "chanfrado-cafe",
    name: "Chanfrado de Café",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "Bombom meio amargo recheado com ganache de café.",
    description: "Bombom de chocolate meio amargo com formato chanfrado e recheio de ganache de café.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Destaque", "Café"],
  },
  {
    id: "amendoas",
    name: "Amêndoas",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "Brigadeiro de doce de leite envolto em amêndoas laminadas douradas.",
    description: "Brigadeiro de doce de leite com cobertura de amêndoas laminadas douradas, delicado e elegante para mesa de doces.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Evento", "Dourado"],
  },
  {
    id: "gota-maracuja",
    name: "Gota de Maracujá",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "Gota de chocolate meio amargo com gel cítrico e ganache de maracujá.",
    description: "Gota de chocolate meio amargo recheada com gel cítrico e ganache de maracujá. Leve, marcante e refrescante.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Novidade", "Frutado"],
  },
  {
    id: "quadradinho-coco",
    name: "Quadradinho de Coco",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "Bombom meio amargo com recheio de coco cremoso.",
    description: "Bombom de chocolate meio amargo em formato quadrado, com recheio de coco cremoso e acabamento delicado.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Evento", "Coco"],
  },
  {
    id: "camafeu-nozes-premium",
    name: "Camafeu de Nozes",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "Creme de nozes envolto em chocolate branco com noz dourada.",
    description: "Camafeu com creme de nozes, cobertura de chocolate branco e noz dourada para decorar.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Clássico", "Premium"],
  },
  {
    id: "flor-sakura",
    name: "Flor de Sakura",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "Bombom meio amargo com recheio de Nutella crocante.",
    description: "Bombom de chocolate meio amargo em formato de flor, recheado com Nutella crocante.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Novidade", "Nutella"],
  },
  {
    id: "jarrinho-cereja",
    name: "Jarrinho de Cereja",
    image: "assets/products/doces-finos.png",
    imageFit: "cover",
    imagePosition: "center",
    category: "Doces Finos",
    price: 0,
    short: "Jarrinho meio amargo com ganache de cereja e cereja para decorar.",
    description: "Jarrinho de chocolate meio amargo recheado com ganache de cereja, finalizado com cereja decorativa.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Favorito", "Cereja"],
  },
  {
    id: "brigadeiro-belga",
    name: "Brigadeiro Belga",
    image: "assets/products/doces-finos.png",
    category: "Doces Finos",
    price: 0,
    short: "Brigadeiro feito com chocolate belga 50%.",
    description: "Pedido mínimo: 20 unidades. Vendido em caixas com 25 ou 50 unidades. Preço não apareceu com segurança no Canva.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Consultar"],
  },
  {
    id: "camafeu-nozes",
    name: "Camafeu de Nozes",
    image: "assets/products/doces-finos.png",
    category: "Doces Finos",
    price: 0,
    short: "Camafeu tradicional com cobertura de fondant.",
    description: "Pedido mínimo: 20 unidades. Vendido em caixas com 25 ou 50 unidades. Preço não apareceu com segurança no Canva.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Consultar"],
  },
  {
    id: "trufa-meio-amargo",
    name: "Trufa de Chocolate Meio Amargo",
    image: "assets/products/doces-finos.png",
    category: "Doces Finos",
    price: 0,
    short: "Trufa recheada com ganache tradicional.",
    description: "Pedido mínimo: 20 unidades. Vendido em caixas com 25 ou 50 unidades. Preço não apareceu com segurança no Canva.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Consultar"],
  },
  {
    id: "bombom-pistache",
    name: "Bombom de Pistache",
    image: "assets/products/doces-finos.png",
    category: "Doces Finos",
    price: 0,
    short: "Bombom com pistache.",
    description: "Pedido mínimo: 20 unidades. Vendido em caixas com 25 ou 50 unidades. Preço não apareceu com segurança no Canva.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Consultar"],
  },
  {
    id: "brigadeiro-tradicional",
    name: "Brigadeiros Tradicionais",
    image: "assets/products/doces-finos.png",
    category: "Doces Finos",
    price: 2.5,
    short: "Sabores tradicionais por unidade.",
    description: "Sabores extraídos do Canva: leite Ninho, café, branco, meio amargo, chocolate branco e ao leite.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva"],
  },
  {
    id: "cupcake-sabores",
    name: "Cupcakes",
    image: "assets/products/fatia-belga.png",
    category: "Doces Finos",
    price: 0,
    short: "Chocolate com brigadeiro, baunilha com morango, Ninho com Nutella e Red Velvet.",
    description: "Sabores extraídos do Canva. Preço não apareceu com segurança no texto carregado.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Consultar"],
  },
  {
    id: "kit-festa-99",
    name: "Kit Festa Mini",
    image: "assets/products/doces-finos.png",
    category: "Kits",
    price: 99,
    short: "Bolo com rendimento de 5 fatias. Disponibilidade em 1 hora, consultar sabores.",
    description: "Kit extraído do Canva. Ideal para comemoração rápida.",
    minimum: 1,
    available: true,
    madeToOrder: false,
    tags: ["Canva", "Kit Festa"],
  },
  {
    id: "kit-festa-164",
    name: "Kit Festa 550g",
    image: "assets/products/doces-finos.png",
    category: "Kits",
    price: 164.9,
    short: "Mini bolo 550g, 15 docinhos, 40 salgados, feliz aniversário e refrigerante.",
    description: "Disponibilidade em 1 hora, consultar sabores.",
    minimum: 1,
    available: true,
    madeToOrder: false,
    tags: ["Canva", "Kit Festa"],
  },
  {
    id: "kit-festa-230",
    name: "Kit Festa 12 Fatias",
    image: "assets/products/doces-finos.png",
    category: "Kits",
    price: 230,
    short: "Bolo 1,2kg, 30 docinhos, 60 salgados, topo personalizado e refrigerante.",
    description: "Sob encomenda.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Kit Festa"],
  },
  {
    id: "kit-festa-350",
    name: "Kit Festa Completo",
    image: "assets/products/doces-finos.png",
    category: "Kits",
    price: 350,
    short: "Versão maior do kit com bolo, docinhos, salgados, topo e refrigerante.",
    description: "Sob encomenda. Confirmar composição pelo WhatsApp.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Kit Festa"],
  },
  {
    id: "pave-chocolate",
    name: "Pavê de Chocolate",
    image: "assets/products/fatia-belga.png",
    category: "Vitrine",
    price: 35,
    short: "Camadas de creme, biscoito macio e chocolate intenso.",
    description: "Finalizado com cobertura cremosa.",
    minimum: 1,
    available: true,
    madeToOrder: false,
    tags: ["Canva", "Sobremesa"],
  },
  {
    id: "mousse-maracuja",
    name: "Mousse de Maracujá",
    image: "assets/products/fatia-belga.png",
    category: "Vitrine",
    price: 35,
    short: "Sobremesa leve e aerada com sabor marcante de maracujá.",
    description: "Equilíbrio entre doce e azedinho.",
    minimum: 1,
    available: true,
    madeToOrder: false,
    tags: ["Canva", "Sobremesa"],
  },
  {
    id: "brownie-tradicional",
    name: "Brownie Tradicional",
    image: "assets/products/fatia-belga.png",
    category: "Vitrine",
    price: 35,
    short: "Denso por dentro, levemente crocante por fora.",
    description: "Sabor intenso de chocolate e textura úmida.",
    minimum: 1,
    available: true,
    madeToOrder: false,
    tags: ["Canva", "Sobremesa"],
  },
  {
    id: "brigadeiro-personalizado",
    name: "Brigadeiro Personalizado",
    image: "assets/products/doces-finos.png",
    category: "Despedida de Solteiro",
    price: 4.5,
    short: "Brigadeiro gourmet com decoração personalizada.",
    description: "Decoração conforme o tema do evento. Pedido mínimo: 20 unidades.",
    minimum: 20,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Personalizado"],
  },
  {
    id: "doces-modelados-tema",
    name: "Doces Modelados",
    image: "assets/products/doces-finos.png",
    category: "Despedida de Solteiro",
    price: 8,
    short: "Doces modelados artesanalmente em pasta americana.",
    description: "Desenvolvidos conforme o tema escolhido. Pedido mínimo: 15 unidades.",
    minimum: 15,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Personalizado"],
  },
  {
    id: "copinho-doce",
    name: "Copinho de Doce",
    image: "assets/products/doces-finos.png",
    category: "Despedida de Solteiro",
    price: 7,
    short: "Copinho de sobremesa com recheios variados.",
    description: "Decoração personalizada no tema do evento. Pedido mínimo: 10 unidades.",
    minimum: 10,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Personalizado"],
  },
  {
    id: "mini-brownie-tema",
    name: "Mini Brownie ou Mini Bolo",
    image: "assets/products/fatia-belga.png",
    category: "Despedida de Solteiro",
    price: 9,
    short: "Mini brownie ou mini bolo decorado individualmente.",
    description: "Feito conforme o tema da comemoração. Pedido mínimo: 10 unidades.",
    minimum: 10,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Personalizado"],
  },
  {
    id: "cx-brownies",
    name: "Caixa 12 Brownies",
    image: "assets/products/fatia-belga.png",
    category: "Kits",
    price: 35,
    short: "Brownies macios e chocolatados embalados para presente.",
    description: "Ideal para presentear em qualquer ocasião.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Presenteável"],
  },
  {
    id: "cx-doces-gourmet",
    name: "Caixa de Doces Gourmet",
    image: "assets/products/doces-finos.png",
    category: "Kits",
    price: 35,
    short: "Seleção especial de doces artesanais variados.",
    description: "Perfeita para surpreender com elegância.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Presenteável"],
  },
  {
    id: "bolo-pote-presente",
    name: "Bolo no Pote Presenteável",
    image: "assets/products/fatia-belga.png",
    category: "Kits",
    price: 35,
    short: "Camadas de massa fofinha e recheios cremosos.",
    description: "Embalagem charmosa, unindo sabor e praticidade.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Presenteável"],
  },
  {
    id: "kit-cafe-tarde",
    name: "Kit Café da Tarde",
    image: "assets/products/doces-finos.png",
    category: "Kits",
    price: 35,
    short: "Combinação de bolo caseiro, docinhos e acompanhamentos.",
    description: "Ideal para um momento especial.",
    minimum: 1,
    available: true,
    madeToOrder: true,
    tags: ["Canva", "Presenteável"],
  },
];

const adminAccounts = [
  {
    email: "edifevi2404@gmail.com",
    role: "Owner",
  },
  {
    email: "cacaue@admin.com",
    role: "Admin",
  },
];
let adminSession = JSON.parse(localStorage.getItem("cacaue:adminSession") || "null");

const savedProducts = JSON.parse(localStorage.getItem("cacaue:products") || "null");
if (Array.isArray(savedProducts) && savedProducts.length) {
  const savedIds = new Set(savedProducts.map((product) => product.id));
  products = [...products.filter((product) => !savedIds.has(product.id)), ...savedProducts];
}

products = products.map((product) => ({
  ...normalizeProductCategory(product),
  description: product.description
    .replace(/Op..es extra.das do Canva: /g, "Opções disponíveis: ")
    .replace(/Opções extraídas do Canva: /g, "Opções disponíveis: ")
    .replace(/Sabores extra.dos do Canva: /g, "Sabores disponíveis: ")
    .replace(/Sabores extraídos do Canva: /g, "Sabores disponíveis: ")
    .replace(/Sabores extra.dos do Canva\. /g, "")
    .replace(/Sabores extraídos do Canva\. /g, "")
    .replace(/Kit extra.do do Canva\. /g, "")
    .replace(/Kit extraído do Canva\. /g, "")
    .replace(/Pre.o n.o apareceu com seguran.a no Canva\./g, "Preço sob consulta.")
    .replace(/Preço não apareceu com segurança no Canva\./g, "Preço sob consulta."),
  tags: (product.tags || []).filter((tag) => tag.toLowerCase() !== "canva"),
}));

const careItems = [
  ["Q", "Qualidade", "Ingredientes selecionados, preparo cuidadoso e acabamento pensado para encantar antes da primeira colherada."],
  ["C", "Carinho", "Cada pedido é tratado como parte de uma celebração, do atendimento à embalagem."],
  ["E", "Experiência", "A vitrine digital organiza escolhas, encomendas e contato sem tirar a delicadeza da marca."],
];

let campaigns = [
  {
    title: "Festival de Fatias",
    image: "assets/hero-cacaue.png",
    description: "Sabores especiais em porções individuais para provar, presentear e voltar.",
    starts: "2026-06-01",
    ends: "2026-06-30",
  },
  {
    title: "Coleção Namorados",
    image: "assets/products/doces-finos.png",
    description: "Kits delicados com doces finos e apresentação exclusiva para datas afetivas.",
    starts: "2026-06-01",
    ends: "2026-06-15",
  },
];

function campaignId(campaign, index = 0) {
  return (
    campaign.id ||
    `campanha-${String(campaign.title || "sem-titulo")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .toLowerCase()}-${campaign.starts || index}`
  );
}

const savedCampaigns = JSON.parse(localStorage.getItem("cacaue:campaigns") || "null");
if (Array.isArray(savedCampaigns)) {
  campaigns = savedCampaigns;
}
campaigns = campaigns.map((campaign, index) => ({ ...campaign, id: campaignId(campaign, index) }));

let storeSettings = JSON.parse(localStorage.getItem("cacaue:storeSettings") || "null") || {
  whatsapp: "(64) 99253-8620",
  instagram: "https://instagram.com/",
  city: "Mineiros - GO",
  weekHours: "Seg a sáb 08h às 18h",
  sundayHours: "Domingo 09h às 15h",
  orderRule: "50% na confirmação e restante na retirada",
  heroEyebrow: "Cardápio online",
  heroTitle: "Bem-vindo à Cacauê",
  heroText: "Mais do que confeitaria, criamos momentos especiais através de sabores únicos, feitos com amor e dedicação.",
  heroImage: "assets/hero-cacaue.png",
  logoImage: "assets/logo-cacaue-app.jpg",
  storyEyebrow: "Nossa história",
  storyTitle: "Uma confeitaria criada para transformar afeto em experiência.",
  storyText: "A Cacauê nasceu do cuidado com os detalhes: receitas autorais, ingredientes selecionados e uma apresentação feita para que cada pedido tenha sabor de momento especial.",
  storyImage: "assets/hero-cacaue.png",
};

function normalizeStoreSettings(settings) {
  const normalized = { ...settings };
  if (
    !normalized.logoImage ||
    normalized.logoImage === "assets/logo-cacaue-app.png" ||
    normalized.logoImage === "assets/logo-cacaue.svg" ||
    normalized.logoImage === "assets/hero-cacaue.png" ||
    (typeof normalized.logoImage === "string" && normalized.logoImage.includes("hero-cacaue"))
  ) {
    normalized.logoImage = "assets/logo-cacaue-app.jpg";
  }
  if (!normalized.heroTitle || ["cacaue", "cacauê"].includes(normalized.heroTitle.toLowerCase())) {
    normalized.heroTitle = "Bem-vindo à Cacauê";
  }
  normalized.storyEyebrow = normalized.storyEyebrow || "Nossa história";
  normalized.storyTitle = normalized.storyTitle || "Uma confeitaria criada para transformar afeto em experiência.";
  normalized.storyText =
    normalized.storyText ||
    "A Cacauê nasceu do cuidado com os detalhes: receitas autorais, ingredientes selecionados e uma apresentação feita para que cada pedido tenha sabor de momento especial.";
  normalized.storyImage = normalized.storyImage || normalized.heroImage || "assets/hero-cacaue.png";
  if (normalized.heroText) {
    normalized.heroText = normalized.heroText
      .replace(/Cacaue/g, "Cacauê")
      .replace(/presentaveis/g, "presenteáveis")
      .replace(/Mineiros - GO\./g, "Mineiros - GO.");
  }
  if (normalized.weekHours) {
    normalized.weekHours = normalized.weekHours.replace("Seg a sab", "Seg a sáb");
  }
  return normalized;
}

storeSettings = normalizeStoreSettings(storeSettings);
localStorage.setItem("cacaue:storeSettings", JSON.stringify(storeSettings));

const orderCategories = [
  ["Tortas", "Prazo mínimo: 48h", "Pedido mínimo: 1 unidade"],
  ["Bolos", "Prazo mínimo: 72h", "Pedido mínimo: 1 unidade"],
  ["Doces Finos", "Prazo mínimo: 5 dias", "Pedido mínimo: 24 unidades"],
  ["Kits", "Prazo mínimo: 48h", "Pedido mínimo: 1 kit"],
];

let approvedReviews = JSON.parse(localStorage.getItem("cacaue:approvedReviews") || "null") || [
  ["Marina A.", "Tudo chegou impecável. A torta era linda e o sabor ainda mais especial."],
  ["Clara M.", "Atendimento cuidadoso e doces finos com apresentação de evento premium."],
  ["Renata F.", "A vitrine ajudou a escolher rápido sem perder a sensação de exclusividade."],
];

let orders = JSON.parse(localStorage.getItem("cacaue:orders") || "[]");

const SUPABASE_URL = "https://zanqzdkfmhqmhgarzvct.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_z03cxeVF-6pUwiul8lPwZA_eT1ow2n5";
const SUPABASE_REST_URL = `${SUPABASE_URL}/rest/v1`;
const SUPABASE_STORAGE_BUCKET = "cacaue-images";

let favorites = JSON.parse(localStorage.getItem("cacaue:favorites") || "[]");
let bag = JSON.parse(localStorage.getItem("cacaue:bag") || "[]");
let customer = JSON.parse(localStorage.getItem("cacaue:customer") || "{}");
let pendingReviews = JSON.parse(localStorage.getItem("cacaue:pendingReviews") || "[]");
let fulfillmentMode = "retirada";
let selectedCategory = "Vitrine";
let selectedSubcategory = "Todos";
let adminSelectedCategory = "Todos";
let adminActiveTab = "summary";
let deferredInstallPrompt = null;
let bagSummaryTimer = null;
const INSTALL_PROMPT_VERSION = "pwa-v4";

const $ = (selector) => document.querySelector(selector);

function persist() {
  localStorage.setItem("cacaue:favorites", JSON.stringify(favorites));
  localStorage.setItem("cacaue:bag", JSON.stringify(bag));
  localStorage.setItem("cacaue:customer", JSON.stringify(customer));
  localStorage.setItem("cacaue:pendingReviews", JSON.stringify(pendingReviews));
  localStorage.setItem("cacaue:approvedReviews", JSON.stringify(approvedReviews));
  localStorage.setItem("cacaue:orders", JSON.stringify(orders));
}

function persistProducts() {
  localStorage.setItem("cacaue:products", JSON.stringify(products));
}

function persistCampaigns() {
  localStorage.setItem("cacaue:campaigns", JSON.stringify(campaigns));
}

function persistStoreSettings() {
  localStorage.setItem("cacaue:storeSettings", JSON.stringify(storeSettings));
}

function persistAdminSession() {
  if (adminSession?.access_token) {
    localStorage.setItem("cacaue:adminSession", JSON.stringify(adminSession));
  } else {
    localStorage.removeItem("cacaue:adminSession");
  }
}

function setAdminSyncMessage(message, type = "info") {
  const target = $("#adminSyncMessage");
  if (!target) return;
  target.textContent = message;
  target.dataset.type = type;
}

function slugify(value, fallback = "produto") {
  const slug = String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return slug || fallback;
}

function uniqueProductId(name) {
  const base = slugify(name);
  const existingIds = new Set(products.map((product) => product.id));
  if (!existingIds.has(base)) return base;
  let counter = 2;
  while (existingIds.has(`${base}-${counter}`)) {
    counter += 1;
  }
  return `${base}-${counter}`;
}

function mergeRemoteProducts(remoteProducts) {
  const remote = remoteProducts.map(productFromDb);
  const remoteIds = new Set(remote.map((product) => product.id));
  const now = Date.now();
  const freshLocalProducts = products.filter((product) => {
    const touchedAt = Number(product._localTouchedAt || 0);
    return !remoteIds.has(product.id) && (product._pendingServerSave || (touchedAt && now - touchedAt < 120000));
  });
  return [...remote, ...freshLocalProducts];
}

function normalizeProductCategory(product = {}) {
  const originalCategory = product.category || "Vitrine";
  const tags = product.tags || [];
  let category = originalCategory;
  let subcategory = product.subcategory || "";

  if (originalCategory === "Doces Finos") {
    category = "Doces";
    subcategory = subcategory || "Doces finos";
  } else if (originalCategory === "Despedida de Solteiro") {
    category = "Despedidas";
    subcategory = subcategory || "Despedida de solteiro";
  } else if (originalCategory === "Bolos Simples") {
    category = "Bolos";
    subcategory = subcategory || "Bolos caseiros";
  } else if (originalCategory === "Kits") {
    category = tags.some((tag) => tag.toLowerCase().includes("presente")) ? "Presenteável" : "Kit Festa";
    subcategory = subcategory || (category === "Kit Festa" ? "Kit pequeno" : "");
  } else if (originalCategory === "Bolos") {
    category = "Bolos";
    subcategory = subcategory || (tags.some((tag) => tag.toLowerCase().includes("caseiro")) ? "Bolos caseiros" : "Bolos de festa");
  } else if (!categoryConfig[originalCategory]) {
    category = "Vitrine";
  }

  const showcase = product.showcase ?? product.availableInShowcase ?? originalCategory === "Vitrine";
  return {
    ...product,
    category,
    subcategory: category === "Vitrine" ? "" : subcategory,
    showcase,
  };
}

function supabaseHeaders(useSession = false) {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${useSession && adminSession?.access_token ? adminSession.access_token : SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
  };
}

function supabaseErrorMessage(status, text) {
  try {
    const payload = JSON.parse(text);
    return payload.message || payload.msg || payload.error_description || payload.error || text || `Supabase error ${status}`;
  } catch {
    return text || `Supabase error ${status}`;
  }
}

async function supabaseJson(path, options = {}) {
  if (options.useSession && !(await ensureAdminSession())) {
    throw new Error("Sessão do admin expirada. Entre novamente para salvar no servidor.");
  }
  const request = () => fetch(`${SUPABASE_REST_URL}${path}`, {
    cache: "no-store",
    ...options,
    headers: {
      ...supabaseHeaders(options.useSession),
      ...(options.headers || {}),
    },
  });
  let response = await request();
  if (options.useSession && response.status === 401 && (await refreshAdminSession())) {
    response = await request();
  }
  const text = await response.text();
  if (!response.ok) {
    throw new Error(supabaseErrorMessage(response.status, text));
  }
  if (response.status === 204 || !text.trim()) return null;
  return JSON.parse(text);
}

async function confirmSupabaseRow(path, label) {
  const rows = await supabaseJson(path, { useSession: true });
  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error(`${label} não apareceu na leitura do servidor depois de salvar.`);
  }
  return rows[0];
}

async function refreshAdminSession() {
  if (!adminSession?.refresh_token) return false;
  try {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
      method: "POST",
      headers: supabaseHeaders(false),
      body: JSON.stringify({ refresh_token: adminSession.refresh_token }),
    });
    if (!response.ok) return false;
    const session = await response.json();
    adminSession = {
      ...adminSession,
      email: session.user?.email || adminSession.email,
      access_token: session.access_token,
      refresh_token: session.refresh_token || adminSession.refresh_token,
      expires_at: session.expires_at || Math.floor(Date.now() / 1000) + Number(session.expires_in || 3600),
      refreshedAt: new Date().toISOString(),
    };
    persistAdminSession();
    return true;
  } catch (error) {
    console.warn("Não foi possível renovar a sessão do admin.", error);
    return false;
  }
}

async function ensureAdminSession() {
  if (!adminSession?.access_token) return false;
  const expiresAtMs = Number(adminSession.expires_at || 0) * 1000;
  if (expiresAtMs && expiresAtMs - Date.now() < 120000) {
    return refreshAdminSession();
  }
  return true;
}

async function verifyAdminSession() {
  if (!adminSession?.access_token) return false;
  try {
    const result = await supabaseJson("/rpc/is_cacaue_admin", {
      method: "POST",
      useSession: true,
      body: JSON.stringify({}),
    });
    return result === true;
  } catch (error) {
    console.warn("Não foi possível confirmar admin no Supabase.", error);
    return false;
  }
}

function productToDb(product, index = 0) {
  return {
    id: product.id,
    name: product.name,
    image: product.image,
    category: product.category,
    subcategory: product.subcategory || "",
    price: product.price,
    image_fit: product.imageFit || "cover",
    image_position: product.imagePosition || "center",
    short_description: product.short,
    description: product.description,
    minimum: product.minimum,
    available: product.available,
    showcase: product.showcase || false,
    made_to_order: product.madeToOrder,
    tags: product.tags || [],
    sort_order: index,
    updated_at: new Date().toISOString(),
  };
}

function productFromDb(row) {
  return normalizeProductCategory({
    id: row.id,
    name: row.name,
    image: row.image,
    category: row.category,
    subcategory: row.subcategory || "",
    price: Number(row.price || 0),
    imageFit: row.image_fit || "cover",
    imagePosition: row.image_position || "center",
    short: row.short_description || "",
    description: row.description || "",
    minimum: row.minimum || 1,
    available: row.available,
    showcase: row.showcase || row.category === "Vitrine",
    madeToOrder: row.made_to_order,
    tags: row.tags || [],
  });
}

function campaignToDb(campaign, index = 0) {
  return {
    id: campaignId(campaign, index),
    title: campaign.title,
    image: campaign.image,
    description: campaign.description,
    starts: campaign.starts,
    ends: campaign.ends,
    sort_order: index,
    updated_at: new Date().toISOString(),
  };
}

function campaignFromDb(row) {
  return {
    id: row.id,
    title: row.title,
    image: row.image,
    description: row.description,
    starts: row.starts,
    ends: row.ends,
  };
}

function orderFromDb(row) {
  return {
    id: row.id,
    protocol: row.protocol,
    customer: row.customer || {},
    items: row.items || [],
    subtotal: Number(row.subtotal || 0),
    delivery_fee: Number(row.delivery_fee || 0),
    total: Number(row.total || 0),
    status: row.status || "novo",
    created_at: row.created_at || new Date().toISOString(),
  };
}

async function loadRemoteData() {
  try {
    const [remoteProducts, remoteCampaigns, remoteSettings] = await Promise.all([
      supabaseJson("/products?select=*&order=sort_order.asc"),
      supabaseJson("/campaigns?select=*&order=sort_order.asc"),
      supabaseJson("/store_settings?select=*&id=eq.main&limit=1"),
    ]);

    if (Array.isArray(remoteProducts)) {
      products = mergeRemoteProducts(remoteProducts);
      localStorage.setItem("cacaue:products", JSON.stringify(products));
    }
    if (Array.isArray(remoteCampaigns)) {
      campaigns = remoteCampaigns.map(campaignFromDb);
      localStorage.setItem("cacaue:campaigns", JSON.stringify(campaigns));
    }
    if (remoteSettings?.[0]) {
      storeSettings = normalizeStoreSettings({ ...storeSettings, ...remoteSettings[0].settings });
      localStorage.setItem("cacaue:storeSettings", JSON.stringify(storeSettings));
    }

    renderStoreSettings();
    renderCampaigns();
    renderProducts();
    renderAdminAccess();
    setAdminSyncMessage("Dados carregados do servidor.", "success");
  } catch (error) {
    console.warn("Supabase ainda não carregou dados remotos.", error);
    setAdminSyncMessage("Sem conexão com o servidor agora. As alterações podem ficar apenas neste telefone.", "warning");
  }
}

async function loadAdminOrders() {
  if (!adminSession?.access_token) return;
  try {
    const remoteOrders = await supabaseJson("/orders?select=*&order=created_at.desc&limit=60", {
      useSession: true,
    });
    if (Array.isArray(remoteOrders)) {
      orders = remoteOrders.map(orderFromDb);
      localStorage.setItem("cacaue:orders", JSON.stringify(orders));
      renderAdmin();
    }
  } catch (error) {
    console.warn("Não foi possível carregar pedidos do Supabase.", error);
    setAdminSyncMessage("Não consegui carregar pedidos do servidor agora.", "warning");
  }
}

async function saveProductsToSupabase() {
  if (!(await ensureAdminSession())) {
    setAdminSyncMessage("Não foi possível salvar no servidor. Verifique login, conexão ou permissões do Supabase.", "error");
    return false;
  }
  try {
    const rows = [];
    for (const [index, product] of products.entries()) {
      const image = await uploadDataUrlToSupabase(product.image, "products", product.id);
      product.image = image;
      rows.push(productToDb(product, index));
    }
    await supabaseJson("/products?on_conflict=id", {
      method: "POST",
      useSession: true,
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify(rows),
    });
    if (rows[0]?.id) {
      await confirmSupabaseRow(`/products?select=id,updated_at&id=eq.${encodeURIComponent(rows[0].id)}&limit=1`, "Produto");
    }
    persistProducts();
    setAdminSyncMessage("Alterações salvas no servidor com sucesso.", "success");
    renderProducts();
    renderAdmin();
    return true;
  } catch (error) {
    console.warn("Não foi possível salvar produtos no Supabase.", error);
    setAdminSyncMessage(`Não foi possível salvar no servidor. Verifique login, conexão ou permissões do Supabase. Detalhe: ${error.message}`, "error");
    return false;
  }
}

async function saveProductToSupabase(product) {
  if (!(await ensureAdminSession())) {
    setAdminSyncMessage("Não foi possível salvar no servidor. Verifique login, conexão ou permissões do Supabase.", "error");
    return false;
  }
  try {
    const index = Math.max(0, products.findIndex((entry) => entry.id === product.id));
    const savedImage = await uploadDataUrlToSupabase(product.image, "products", product.id);
    product.image = savedImage;
    const currentIndex = products.findIndex((entry) => entry.id === product.id);
    if (currentIndex >= 0) {
      products[currentIndex] = {
        ...products[currentIndex],
        image: savedImage,
        _pendingServerSave: false,
        _localTouchedAt: Date.now(),
      };
    }
    const [savedRow] = await supabaseJson("/products?on_conflict=id&select=id,name,image,updated_at", {
      method: "POST",
      useSession: true,
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify([productToDb(product, index)]),
    });
    await confirmSupabaseRow(`/products?select=id,name,image,updated_at&id=eq.${encodeURIComponent(product.id)}&limit=1`, "Produto");
    persistProducts();
    const savedAt = savedRow?.updated_at ? new Date(savedRow.updated_at).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    setAdminSyncMessage(`Alterações salvas no servidor com sucesso. Produto: ${product.name}. Horário: ${savedAt}.`, "success");
    renderProducts();
    renderAdmin();
    return true;
  } catch (error) {
    console.warn("Não foi possível salvar produto no Supabase.", error);
    setAdminSyncMessage(`Não foi possível salvar no servidor. Verifique login, conexão ou permissões do Supabase. Detalhe: ${error.message}`, "error");
    return false;
  }
}

async function deleteProductFromSupabase(id) {
  if (!(await ensureAdminSession())) {
    setAdminSyncMessage("Sessão expirada. Entre novamente no admin para excluir no servidor.", "error");
    return false;
  }
  try {
    await supabaseJson(`/products?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
      useSession: true,
      headers: { Prefer: "return=minimal" },
    });
    setAdminSyncMessage("Alterações salvas no servidor com sucesso.", "success");
    return true;
  } catch (error) {
    console.warn("Não foi possível excluir produto no Supabase.", error);
    setAdminSyncMessage(`Não foi possível excluir o produto. Detalhe: ${error.message}`, "error");
    return false;
  }
}

async function saveCampaignsToSupabase() {
  if (!(await ensureAdminSession())) {
    setAdminSyncMessage("Não foi possível salvar no servidor. Verifique login, conexão ou permissões do Supabase.", "error");
    return false;
  }
  try {
    const rows = [];
    for (const [index, campaign] of campaigns.entries()) {
      campaign.id = campaignId(campaign, index);
      const image = await uploadDataUrlToSupabase(campaign.image, "campaigns", campaign.id);
      campaign.image = image;
      rows.push(campaignToDb(campaign, index));
    }
    await supabaseJson("/campaigns?on_conflict=id", {
      method: "POST",
      useSession: true,
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify(rows),
    });
    if (rows[0]?.id) {
      await confirmSupabaseRow(`/campaigns?select=id&id=eq.${encodeURIComponent(rows[0].id)}&limit=1`, "Campanha");
    }
    persistCampaigns();
    setAdminSyncMessage("Alterações salvas no servidor com sucesso.", "success");
    renderCampaigns();
    renderAdmin();
    return true;
  } catch (error) {
    console.warn("Não foi possível salvar campanhas no Supabase.", error);
    setAdminSyncMessage(`Não foi possível salvar no servidor. Verifique login, conexão ou permissões do Supabase. Detalhe: ${error.message}`, "error");
    return false;
  }
}

async function saveCampaignToSupabase(campaign) {
  if (!(await ensureAdminSession())) {
    setAdminSyncMessage("Não foi possível salvar no servidor. Verifique login, conexão ou permissões do Supabase.", "error");
    return false;
  }
  try {
    const index = Math.max(0, campaigns.findIndex((entry) => entry.id === campaign.id));
    const savedImage = await uploadDataUrlToSupabase(campaign.image, "campaigns", campaign.id);
    campaign.image = savedImage;
    const currentIndex = campaigns.findIndex((entry) => entry.id === campaign.id);
    if (currentIndex >= 0) {
      campaigns[currentIndex] = { ...campaigns[currentIndex], image: savedImage };
    }
    const [savedRow] = await supabaseJson("/campaigns?on_conflict=id&select=id,title,image,updated_at", {
      method: "POST",
      useSession: true,
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify([campaignToDb(campaign, index)]),
    });
    await confirmSupabaseRow(`/campaigns?select=id,title,image,updated_at&id=eq.${encodeURIComponent(campaign.id)}&limit=1`, "Campanha");
    persistCampaigns();
    const savedAt = savedRow?.updated_at ? new Date(savedRow.updated_at).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    setAdminSyncMessage(`Alterações salvas no servidor com sucesso. Campanha: ${campaign.title}. Horário: ${savedAt}.`, "success");
    renderCampaigns();
    renderAdmin();
    return true;
  } catch (error) {
    console.warn("Não foi possível salvar campanha no Supabase.", error);
    setAdminSyncMessage(`Não foi possível salvar no servidor. Verifique login, conexão ou permissões do Supabase. Detalhe: ${error.message}`, "error");
    return false;
  }
}

async function deleteCampaignFromSupabase(id) {
  if (!(await ensureAdminSession())) {
    setAdminSyncMessage("Sessão expirada. Entre novamente no admin para excluir no servidor.", "error");
    return false;
  }
  try {
    await supabaseJson(`/campaigns?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
      useSession: true,
      headers: { Prefer: "return=minimal" },
    });
    setAdminSyncMessage("Alterações salvas no servidor com sucesso.", "success");
    return true;
  } catch (error) {
    console.warn("Não foi possível excluir campanha no Supabase.", error);
    setAdminSyncMessage(`Não foi possível excluir. Detalhe: ${error.message}`, "error");
    return false;
  }
}

async function saveStoreSettingsToSupabase() {
  if (!(await ensureAdminSession())) {
    setAdminSyncMessage("Não foi possível salvar no servidor. Verifique login, conexão ou permissões do Supabase.", "error");
    return false;
  }
  try {
    if (storeSettings.heroImage?.startsWith("data:")) {
      storeSettings.heroImage = await uploadDataUrlToSupabase(storeSettings.heroImage, "store", "hero");
    }
    if (storeSettings.logoImage?.startsWith("data:")) {
      storeSettings.logoImage = await uploadDataUrlToSupabase(storeSettings.logoImage, "store", "logo");
    }
    if (storeSettings.storyImage?.startsWith("data:")) {
      storeSettings.storyImage = await uploadDataUrlToSupabase(storeSettings.storyImage, "store", "story");
    }
    await supabaseJson("/store_settings?on_conflict=id", {
      method: "POST",
      useSession: true,
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify([{ id: "main", settings: storeSettings, updated_at: new Date().toISOString() }]),
    });
    await confirmSupabaseRow("/store_settings?select=id&id=eq.main&limit=1", "Configuração da loja");
    persistStoreSettings();
    setAdminSyncMessage("Alterações salvas no servidor com sucesso.", "success");
    renderStoreSettings();
    return true;
  } catch (error) {
    console.warn("Não foi possível salvar dados da loja no Supabase.", error);
    setAdminSyncMessage(`Não foi possível salvar no servidor. Verifique login, conexão ou permissões do Supabase. Detalhe: ${error.message}`, "error");
    return false;
  }
}

async function uploadDataUrlToSupabase(dataUrl, folder, filename) {
  if (!dataUrl?.startsWith("data:")) return dataUrl;
  if (!(await ensureAdminSession())) throw new Error("Sessão expirada. Entre novamente para enviar fotos.");
  const blob = await fetch(dataUrl).then((response) => response.blob());
  const extension = blob.type.includes("png") ? "png" : "jpg";
  const safeName = String(filename || "imagem")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .toLowerCase() || "imagem";
  const path = `${folder}/${safeName}-${Date.now()}.${extension}`;
  const upload = () => fetch(`${SUPABASE_URL}/storage/v1/object/${SUPABASE_STORAGE_BUCKET}/${path}`, {
    method: "PUT",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${adminSession.access_token}`,
      "Content-Type": blob.type,
      "x-upsert": "true",
    },
    body: blob,
  });
  let response = await upload();
  if (response.status === 401 && (await refreshAdminSession())) {
    response = await upload();
  }
  if (!response.ok) throw new Error(supabaseErrorMessage(response.status, await response.text()));
  return `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_STORAGE_BUCKET}/${path}`;
}

function fileToOptimizedDataUrl(file, options = {}) {
  const maxWidth = options.maxWidth || 1200;
  const maxHeight = options.maxHeight || 1600;
  const quality = options.quality || 0.86;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("error", () => reject(new Error("Não consegui ler a foto escolhida.")));
    reader.addEventListener("load", () => {
      const image = new Image();
      image.addEventListener("error", () => reject(new Error("Não consegui abrir essa foto. Tente outra imagem.")));
      image.addEventListener("load", () => {
        const scale = Math.min(1, maxWidth / image.width, maxHeight / image.height);
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      });
      image.src = reader.result;
    });
    reader.readAsDataURL(file);
  });
}

async function applyImageFileToInput(file, inputSelector, previewUpdater, options = {}) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    setAdminSyncMessage("Escolha um arquivo de imagem válido.", "error");
    return;
  }
  setAdminSyncMessage("Preparando foto para salvar...", "info");
  try {
    const dataUrl = await fileToOptimizedDataUrl(file, options);
    $(inputSelector).value = dataUrl;
    previewUpdater(dataUrl);
    setAdminSyncMessage("Foto pronta. Agora toque em salvar para enviar ao servidor.", "success");
  } catch (error) {
    setAdminSyncMessage(error.message, "error");
  }
}

function findAdminAccount(email) {
  return adminAccounts.find((account) => account.email === email);
}

function isAdminAuthorized() {
  return !!adminSession?.access_token;
}

function renderAdminAccess() {
  const authorized = isAdminAuthorized();
  $("#adminContent").classList.toggle("hidden", !authorized);
  $("#adminLoginForm").classList.toggle("hidden", authorized);
  $("#adminLogoutButton").classList.toggle("hidden", !authorized);
  $("#adminRole").textContent = authorized ? `Admin: ${adminSession.email}` : "Acesso restrito";
  setAdminSyncMessage(
    authorized ? "Admin conectado ao servidor. Ao salvar, outros telefones receberão as alterações." : "Entre no admin para salvar as alterações no servidor.",
    authorized ? "success" : "info",
  );
  if (authorized) {
    renderAdmin();
    showAdminTab(adminActiveTab);
  }
}

function showAdminTab(tab) {
  adminActiveTab = tab || "summary";
  const isSummary = adminActiveTab === "summary";
  $("#admin-summary")?.classList.toggle("hidden", !isSummary);
  $("#metricGrid")?.classList.toggle("hidden", !isSummary);
  document.querySelectorAll(".admin-panels > article").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.adminTab !== adminActiveTab);
  });
  document.querySelectorAll(".admin-menu [data-admin-tab]").forEach((link) => {
    const active = link.dataset.adminTab === adminActiveTab;
    link.classList.toggle("active", active);
    link.setAttribute("aria-current", active ? "page" : "false");
  });
  $("#adminContent")?.scrollTo?.({ top: 0, behavior: "smooth" });
}

function openAdminPanel() {
  adminActiveTab = "summary";
  $("#admin").classList.remove("hidden");
  $("#admin").setAttribute("aria-hidden", "false");
  document.body.classList.add("admin-panel-open");
  renderAdminAccess();
  if (isAdminAuthorized()) loadAdminOrders();
  showAdminTab("summary");
  $("#admin").scrollTop = 0;
  setTimeout(() => {
    const target = isAdminAuthorized() ? "#admin-summary" : "#adminEmail";
    document.querySelector(target)?.focus?.();
  }, 80);
}

function closeAdminPanel() {
  $("#admin").classList.add("hidden");
  $("#admin").setAttribute("aria-hidden", "true");
  document.body.classList.remove("admin-panel-open");
  if (!isAdminAuthorized()) {
    $("#adminEmail").value = "";
    $("#adminPassword").value = "";
  }
}

function loginAdmin(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const account = findAdminAccount(normalizedEmail);
  if (!account || account.password !== password) {
    $("#adminLoginMessage").textContent = "E-mail ou senha incorretos.";
    return;
  }
  adminSession = { email: normalizedEmail, role: account.role, loggedAt: new Date().toISOString() };
  localStorage.setItem("cacaue:adminSession", JSON.stringify(adminSession));
  $("#adminLoginMessage").textContent = "Login realizado com sucesso.";
  $("#adminPassword").value = "";
  renderAdminAccess();
}

async function loginAdminSupabase(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  $("#adminLoginMessage").textContent = "Entrando...";
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: supabaseHeaders(),
    body: JSON.stringify({ email: normalizedEmail, password }),
  });
  if (!response.ok) {
    $("#adminLoginMessage").textContent = "E-mail ou senha incorretos.";
    return;
  }
  const session = await response.json();
  adminSession = {
    email: session.user?.email || normalizedEmail,
    role: "Admin",
    access_token: session.access_token,
    refresh_token: session.refresh_token,
    expires_at: session.expires_at || Math.floor(Date.now() / 1000) + Number(session.expires_in || 3600),
    loggedAt: new Date().toISOString(),
  };
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    adminSession = null;
    persistAdminSession();
    $("#adminLoginMessage").textContent = "Este e-mail ainda não está autorizado no painel.";
    setAdminSyncMessage("Confira se o e-mail está cadastrado como administrador no Supabase.", "error");
    return;
  }
  persistAdminSession();
  $("#adminLoginMessage").textContent = "Login realizado com sucesso.";
  $("#adminPassword").value = "";
  await loadRemoteData();
  await loadAdminOrders();
  if (!localStorage.getItem("cacaue:adminTutorialSeen")) {
    adminActiveTab = "tutorial";
    localStorage.setItem("cacaue:adminTutorialSeen", "true");
  }
  renderAdminAccess();
}

function logoutAdmin() {
  adminSession = null;
  persistAdminSession();
  $("#adminEmail").value = "";
  $("#adminPassword").value = "";
  renderAdminAccess();
}

function resetProductForm() {
  $("#productId").value = "";
  $("#productName").value = "";
  $("#productCategory").value = "Vitrine";
  $("#productSubcategory").value = "";
  $("#productSubcategoryCustom").value = "";
  $("#productPrice").value = "";
  $("#productMinimum").value = "1";
  $("#productImage").value = "assets/products/doces-finos.png";
  $("#productImageFile").value = "";
  $("#productImageFit").value = "cover";
  $("#productImagePosition").value = "center";
  updateProductImagePreview("assets/products/doces-finos.png");
  $("#productShort").value = "";
  $("#productDescription").value = "";
  $("#productTags").value = "";
  $("#productAvailable").checked = true;
  $("#productShowcase").checked = true;
  $("#productMadeToOrder").checked = true;
  updateSubcategoryField();
}

function fillProductForm(product) {
  $("#productId").value = product.id;
  $("#productName").value = product.name;
  $("#productCategory").value = product.category;
  $("#productPrice").value = product.price;
  $("#productMinimum").value = product.minimum;
  $("#productImage").value = product.image;
  $("#productImageFile").value = "";
  $("#productImageFit").value = product.imageFit || "cover";
  $("#productImagePosition").value = product.imagePosition || "center";
  updateProductImagePreview(product.image);
  $("#productShort").value = product.short;
  $("#productDescription").value = product.description;
  $("#productTags").value = (product.tags || []).join(", ");
  $("#productAvailable").checked = product.available;
  $("#productShowcase").checked = product.showcase || product.category === "Vitrine";
  $("#productMadeToOrder").checked = product.madeToOrder;
  updateSubcategoryField(product.subcategory || "");
  showAdminTab("product-add");
  document.querySelector("#admin-product-add").scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateProductImagePreview(src = "") {
  const preview = $("#productImagePreview");
  if (!preview) return;
  const image = preview.querySelector("img");
  image.src = src || "assets/products/doces-finos.png";
  image.style.objectFit = $("#productImageFit")?.value || "cover";
  image.style.objectPosition = $("#productImagePosition")?.value || "center";
}

function updateCampaignImagePreview(src = "") {
  const preview = $("#campaignImagePreview");
  if (!preview) return;
  const image = preview.querySelector("img");
  image.src = src || "assets/hero-cacaue.png";
}

function resetCampaignForm() {
  $("#campaignId").value = "";
  $("#campaignTitle").value = "";
  $("#campaignDescription").value = "";
  $("#campaignImage").value = "assets/hero-cacaue.png";
  $("#campaignImageFile").value = "";
  $("#campaignStart").value = "";
  $("#campaignEnd").value = "";
  updateCampaignImagePreview("assets/hero-cacaue.png");
}

function fillCampaignForm(campaign) {
  $("#campaignId").value = campaign.id || "";
  $("#campaignTitle").value = campaign.title || "";
  $("#campaignDescription").value = campaign.description || "";
  $("#campaignImage").value = campaign.image || "assets/hero-cacaue.png";
  $("#campaignStart").value = campaign.starts || "";
  $("#campaignEnd").value = campaign.ends || "";
  updateCampaignImagePreview(campaign.image || "assets/hero-cacaue.png");
  showAdminTab("campaigns");
  document.querySelector("#admin-campaigns").scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateStoreHeroPreview(src = "") {
  const preview = $("#storeHeroImagePreview");
  if (!preview) return;
  const image = preview.querySelector("img");
  image.src = src || "assets/hero-cacaue.png";
}

function updateStoreLogoPreview(src = "") {
  const preview = $("#storeLogoImagePreview");
  if (!preview) return;
  const image = preview.querySelector("img");
  image.src = src || "assets/logo-cacaue-app.jpg";
}

function updateStoreStoryPreview(src = "") {
  const preview = $("#storeStoryImagePreview");
  if (!preview) return;
  const image = preview.querySelector("img");
  image.src = src || "assets/hero-cacaue.png";
}

function subcategoriesForCategory(category) {
  const defaults = categoryConfig[category] || [];
  const custom = products
    .filter((product) => product.category === category && product.subcategory)
    .map((product) => product.subcategory);
  return [...new Set([...defaults, ...custom])];
}

function setCustomSubcategoryVisible(visible, { clear = false, focus = false } = {}) {
  const customInput = $("#productSubcategoryCustom");
  if (!customInput) return;
  customInput.classList.toggle("hidden", !visible);
  customInput.disabled = !visible;
  customInput.required = visible;
  if (!visible && clear) customInput.value = "";
  if (visible && focus) customInput.focus();
}

function updateSubcategoryField(preferredValue = null) {
  const category = $("#productCategory")?.value || "Vitrine";
  const subcategorySelect = $("#productSubcategory");
  const subcategoryField = $("#productSubcategoryField");
  const showcaseInput = $("#productShowcase");
  if (!subcategorySelect) return;
  const disabled = category === "Vitrine";
  const subcategories = subcategoriesForCategory(category);
  subcategoryField?.classList.toggle("hidden", disabled);
  subcategorySelect.disabled = disabled;
  subcategorySelect.required = !disabled;
  setCustomSubcategoryVisible(false, { clear: disabled });

  if (disabled) {
    subcategorySelect.innerHTML = "";
    subcategorySelect.value = "";
  } else {
    const currentSelection = subcategories.includes(subcategorySelect.value) ? subcategorySelect.value : "";
    const currentValue = preferredValue ?? (currentSelection || subcategories[0] || "");
    const hasCurrentValue = subcategories.includes(currentValue);
    subcategorySelect.innerHTML = [
      ...subcategories.map((subcategory) => `<option value="${subcategory}">${subcategory}</option>`),
      `<option value="__custom__">+ Nova subaba</option>`,
    ].join("");

    if (currentValue && !hasCurrentValue) {
      subcategorySelect.value = "__custom__";
      $("#productSubcategoryCustom").value = currentValue;
      setCustomSubcategoryVisible(true);
    } else if (subcategories.length) {
      subcategorySelect.value = currentValue;
    } else {
      subcategorySelect.value = "__custom__";
      setCustomSubcategoryVisible(true);
    }
  }

  if (showcaseInput) {
    showcaseInput.checked = disabled ? true : showcaseInput.checked;
    showcaseInput.disabled = disabled;
  }
}

function productFromForm() {
  const name = $("#productName").value.trim();
  const existingId = $("#productId").value.trim();
  const id = existingId || uniqueProductId(name);
  const category = $("#productCategory").value;
  const selectedSubcategory = $("#productSubcategory").value;
  const customSubcategory = $("#productSubcategoryCustom")?.value.trim() || "";
  const subcategory = category === "Vitrine" ? "" : selectedSubcategory === "__custom__" ? customSubcategory : selectedSubcategory;
  const tags = $("#productTags").value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  return {
    id,
    name,
    image: $("#productImage").value.trim() || "assets/products/doces-finos.png",
    imageFit: $("#productImageFit").value || "cover",
    imagePosition: $("#productImagePosition").value || "center",
    category,
    subcategory,
    price: Number($("#productPrice").value || 0),
    short: $("#productShort").value.trim(),
    description: $("#productDescription").value.trim(),
    minimum: Math.max(1, Number($("#productMinimum").value || 1)),
    available: $("#productAvailable").checked,
    showcase: category === "Vitrine" ? true : $("#productShowcase").checked,
    madeToOrder: $("#productMadeToOrder").checked,
    tags: tags.length ? tags : existingId ? ["Editado"] : ["Novo"],
  };
}

async function saveProductFromForm() {
  const product = productFromForm();
  const previousProducts = products.map((entry) => ({ ...entry, tags: [...(entry.tags || [])] }));
  const index = products.findIndex((entry) => entry.id === product.id);
  product._pendingServerSave = true;
  product._localTouchedAt = Date.now();
  if (index >= 0) {
    products[index] = { ...products[index], ...product };
  } else {
    products = [product, ...products];
  }
  setAdminSyncMessage("Salvando produto no servidor...", "info");
  const saved = await saveProductToSupabase(product);
  if (saved) {
    persistProducts();
    resetProductForm();
    renderProducts();
    renderAdmin();
    return;
  }
  products = previousProducts;
  renderProducts();
  renderAdmin();
}

function isCampaignActive(campaign) {
  const today = new Date();
  const starts = new Date(`${campaign.starts}T00:00:00`);
  const ends = new Date(`${campaign.ends}T23:59:59`);
  return today >= starts && today <= ends;
}

function productCard(product, index = 0) {
  const favorited = favorites.includes(product.id);
  const statusClass = product.available ? "status" : "status soldout";
  const statusText = product.available ? "Disponível" : "Esgotado";
  const orderText = product.madeToOrder ? `Sob encomenda · mínimo ${product.minimum}` : `Pronta entrega · mínimo ${product.minimum}`;
  const hasPrice = product.price > 0;
  const actionDisabled = !product.available || !hasPrice;
  const subtitle =
    selectedCategory === "Encomendas"
      ? [product.category, product.subcategory].filter(Boolean).join(" · ")
      : selectedCategory === "Vitrine"
        ? ""
        : product.subcategory || "";

  return `
    <article class="menu-card" data-product="${product.id}">
      <div class="menu-card-media">
        <img src="${product.image}" alt="${product.name}" style="object-fit: ${product.imageFit || "cover"}; object-position: ${product.imagePosition || "center"};" />
      </div>
      <div class="menu-card-body">
        <div class="badge-row">${(product.tags || []).filter((tag) => tag.toLowerCase() !== "canva").map((tag) => `<span class="badge">${tag}</span>`).join("")}</div>
        <div class="menu-card-title">
          <h3>${product.name}</h3>
          <button class="heart ${favorited ? "active" : ""}" type="button" data-favorite="${product.id}" aria-label="Favoritar ${product.name}">♡</button>
        </div>
        ${subtitle ? `<span class="menu-card-subtitle">${subtitle}</span>` : ""}
        <p>${product.short}</p>
        <span class="menu-meta">${orderText}</span>
        <div class="product-footer">
          <div>
            <span class="price">${hasPrice ? money.format(product.price) : "Consultar"}</span>
            <span class="${statusClass}">${statusText}</span>
          </div>
          <button class="add-button" type="button" data-quick-add="${product.id}" ${actionDisabled ? "disabled" : ""}>${!product.available ? "Esgotado" : hasPrice ? "Adicionar" : "Consultar"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderCare() {
  $("#careGrid").innerHTML = careItems
    .map(([letter, title, text]) => `<article class="value-card"><span>${letter}</span><h3>${title}</h3><p>${text}</p></article>`)
    .join("");
}

function renderCampaigns() {
  const active = campaigns.filter(isCampaignActive);
  $("#campaignGrid").innerHTML = active
    .map(
      (campaign) => `
        <article class="campaign-card">
          <img src="${campaign.image}" alt="${campaign.title}" />
          <div class="campaign-copy">
            <span class="campaign-date">Até ${new Date(campaign.ends).toLocaleDateString("pt-BR", { timeZone: "UTC" })}</span>
            <h3>${campaign.title}</h3>
            <p>${campaign.description}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function getCategories() {
  return customerMenuModes;
}

function getVisibleSubcategories(category, list = products) {
  if (category === "Vitrine") return [];
  if (category === "Encomendas") {
    return orderMenuCategories.filter((menuCategory) => list.some((product) => product.category === menuCategory));
  }
  const defaults = categoryConfig[category] || [];
  const existing = list
    .filter((product) => product.category === category && product.subcategory)
    .map((product) => product.subcategory);
  return [...new Set([...defaults, ...existing])];
}

function productsForMenu(list = products) {
  if (selectedCategory === "Vitrine") return list.filter((product) => product.showcase || product.category === "Vitrine");
  if (selectedCategory === "Encomendas") {
    return list.filter((product) => {
      const isOrderProduct = product.category !== "Vitrine";
      const sameCategory = selectedSubcategory === "Todos" || product.category === selectedSubcategory;
      return isOrderProduct && sameCategory;
    });
  }
  return list.filter((product) => {
    const sameCategory = product.category === selectedCategory;
    const sameSubcategory = selectedSubcategory === "Todos" || product.subcategory === selectedSubcategory;
    return sameCategory && sameSubcategory;
  });
}

function renderCategoryTabs() {
  $("#categoryTabs").innerHTML = getCategories()
    .map((category) => `<button class="${category === selectedCategory ? "active" : ""}" type="button" data-category="${category}">${category}</button>`)
    .join("");
}

function renderSubcategoryTabs(list = products) {
  const target = $("#subcategoryTabs");
  if (!target) return;
  const subcategories = getVisibleSubcategories(selectedCategory, list);
  target.classList.toggle("hidden", selectedCategory === "Vitrine" || !subcategories.length);
  if (selectedCategory === "Vitrine" || !subcategories.length) {
    target.innerHTML = "";
    selectedSubcategory = "Todos";
    return;
  }
  if (selectedSubcategory !== "Todos" && !subcategories.includes(selectedSubcategory)) {
    selectedSubcategory = "Todos";
  }
  target.innerHTML = ["Todos", ...subcategories]
    .map((subcategory) => `<button class="${subcategory === selectedSubcategory ? "active" : ""}" type="button" data-subcategory="${subcategory}">${subcategory}</button>`)
    .join("");
}

function renderProducts(list = products) {
  renderSubcategoryTabs(list);
  const menuProducts = productsForMenu(list);
  $("#menuProducts").classList.add("premium-layout");
  $("#menuTitle").textContent = selectedCategory === "Vitrine" ? "Vitrine do dia" : "Sob encomenda";
  $("#menuCount").textContent = `${menuProducts.length} ${menuProducts.length === 1 ? "item" : "itens"}`;
  $("#menuProducts").innerHTML = renderProductGroups(menuProducts);
  renderCategoryTabs();
}

function renderProductGroups(menuProducts) {
  if (!menuProducts.length) return `<p>Nenhum produto nesta seleção.</p>`;
  if (selectedCategory === "Encomendas" && selectedSubcategory === "Todos") {
    const groups = new Map();
    menuProducts.forEach((product) => {
      const key = product.category || "Encomendas";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(product);
    });
    return [...groups.entries()]
      .map(([category, groupProducts]) => {
        const cards = groupProducts.map((product) => productCard(product)).join("");
        return `
          <section class="menu-subgroup">
            <h3 class="menu-subtitle">${category}</h3>
            <div class="menu-subgrid premium-subgrid">${cards}</div>
          </section>
        `;
      })
      .join("");
  }
  const shouldGroup = selectedCategory !== "Vitrine" && selectedSubcategory === "Todos" && menuProducts.some((product) => product.subcategory);
  if (!shouldGroup) return menuProducts.map(productCard).join("");

  const groups = new Map();
  menuProducts.forEach((product) => {
    const key = product.subcategory || "Outros";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(product);
  });

  let count = 0;
  return [...groups.entries()]
    .map(([subcategory, groupProducts]) => {
      const cards = groupProducts.map((product) => productCard(product, count++)).join("");
      return `
        <section class="menu-subgroup">
          <h3 class="menu-subtitle">${subcategory}</h3>
          <div class="menu-subgrid premium-subgrid">${cards}</div>
        </section>
      `;
    })
    .join("");
}

function renderOrderCategories() {
  $("#orderCategories").innerHTML = orderCategories
    .map(([title, lead, detail]) => `<article class="order-card"><span class="eyebrow">${title}</span><h3>${lead}</h3><strong>${detail}</strong></article>`)
    .join("");
}

function renderReviews() {
  $("#reviewGrid").innerHTML = approvedReviews
    .map(([name, text]) => `<article class="review-card"><strong>${name}</strong><p>${text}</p></article>`)
    .join("");
}

function orderItemLabel(order) {
  const items = Array.isArray(order.items) ? order.items : [];
  if (!items.length) return "Pedido sem itens";
  const first = items[0];
  const suffix = items.length > 1 ? ` +${items.length - 1}` : "";
  return `${first.quantity || 1}x ${first.name || first.product_id || "Item"}${suffix}`;
}

function orderDateLabel(value) {
  if (!value) return "sem data";
  return new Date(value).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

function clientsFromOrders() {
  const grouped = new Map();
  orders.forEach((order) => {
    const name = order.customer?.name || "Cliente sem nome";
    const current = grouped.get(name) || {
      name,
      whatsapp: order.customer?.whatsapp || "",
      count: 0,
      total: 0,
      last: order.created_at,
    };
    current.count += 1;
    current.total += Number(order.total || 0);
    if (new Date(order.created_at) > new Date(current.last || 0)) current.last = order.created_at;
    grouped.set(name, current);
  });
  return [...grouped.values()].sort((a, b) => new Date(b.last || 0) - new Date(a.last || 0));
}

function whatsappLinkFromText(value) {
  const digits = value.replace(/\D/g, "");
  return digits ? `https://wa.me/55${digits.replace(/^55/, "")}` : "https://wa.me/";
}

function whatsappOrderLink(message) {
  const digits = String(storeSettings.whatsapp || "").replace(/\D/g, "").replace(/^55/, "");
  const phone = digits ? `55${digits}` : "5564992538620";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function renderStoreSettings() {
  const contactItems = document.querySelectorAll(".contact-grid a, .contact-grid span");
  if (contactItems[0]) {
    contactItems[0].textContent = storeSettings.whatsapp;
    contactItems[0].setAttribute("href", whatsappLinkFromText(storeSettings.whatsapp));
  }
  if (contactItems[1]) {
    contactItems[1].textContent = "Instagram";
    contactItems[1].setAttribute("href", storeSettings.instagram);
  }
  if (contactItems[2]) contactItems[2].textContent = storeSettings.city;
  if (contactItems[3]) contactItems[3].textContent = `${storeSettings.weekHours} / ${storeSettings.sundayHours}`;

  const storeInfoItems = document.querySelectorAll(".store-info span");
  if (storeInfoItems[0]) storeInfoItems[0].textContent = storeSettings.weekHours;
  if (storeInfoItems[1]) storeInfoItems[1].textContent = storeSettings.sundayHours;

  const heroImage = $(".menu-cover .hero-image");
  const brandLogo = $(".brand-logo-img");
  const heroLogo = $(".hero-logo-img");
  const heroEyebrow = $(".menu-cover .eyebrow");
  const heroTitle = $(".menu-cover h1");
  const heroText = $(".menu-cover p");
  if (heroImage) heroImage.src = storeSettings.heroImage || "assets/hero-cacaue.png";
  if (brandLogo) brandLogo.src = storeSettings.logoImage || "assets/logo-cacaue-app.jpg";
  if (heroLogo) heroLogo.src = storeSettings.logoImage || "assets/logo-cacaue-app.jpg";
  if (heroEyebrow) heroEyebrow.textContent = storeSettings.heroEyebrow || "Cardápio online";
  if (heroTitle) heroTitle.textContent = storeSettings.heroTitle || "Bem-vindo à Cacauê";
  if (heroText) heroText.textContent = storeSettings.heroText || "Mais do que confeitaria, criamos momentos especiais através de sabores únicos, feitos com amor e dedicação.";
  const storyEyebrow = $("#storyEyebrow");
  const storyTitle = $("#storyTitle");
  const storyText = $("#storyText");
  const storyImage = $("#storyImage");
  if (storyEyebrow) storyEyebrow.textContent = storeSettings.storyEyebrow || "Nossa história";
  if (storyTitle) storyTitle.textContent = storeSettings.storyTitle || "Uma confeitaria criada para transformar afeto em experiência.";
  if (storyText) storyText.textContent = storeSettings.storyText || "";
  if (storyImage) storyImage.src = storeSettings.storyImage || "assets/hero-cacaue.png";

  if ($("#storeSettingsForm")) {
    $("#storeWhatsapp").value = storeSettings.whatsapp;
    $("#storeInstagram").value = storeSettings.instagram;
    $("#storeCity").value = storeSettings.city;
    $("#storeWeekHours").value = storeSettings.weekHours;
    $("#storeSundayHours").value = storeSettings.sundayHours;
    $("#storeOrderRule").value = storeSettings.orderRule;
    $("#storeHeroEyebrow").value = storeSettings.heroEyebrow || "";
    $("#storeHeroTitle").value = storeSettings.heroTitle || "";
    $("#storeHeroText").value = storeSettings.heroText || "";
    $("#storeHeroImage").value = storeSettings.heroImage || "assets/hero-cacaue.png";
    $("#storeLogoImage").value = storeSettings.logoImage || "assets/logo-cacaue-app.jpg";
    $("#storeStoryEyebrow").value = storeSettings.storyEyebrow || "";
    $("#storeStoryTitle").value = storeSettings.storyTitle || "";
    $("#storeStoryText").value = storeSettings.storyText || "";
    $("#storeStoryImage").value = storeSettings.storyImage || "assets/hero-cacaue.png";
    updateStoreHeroPreview(storeSettings.heroImage || "assets/hero-cacaue.png");
    updateStoreLogoPreview(storeSettings.logoImage || "assets/logo-cacaue-app.jpg");
    updateStoreStoryPreview(storeSettings.storyImage || "assets/hero-cacaue.png");
  }

  if ($("#storeSettingsPreview")) {
    $("#storeSettingsPreview").innerHTML = [
      ["WhatsApp", storeSettings.whatsapp],
      ["Instagram", storeSettings.instagram],
      ["Cidade", storeSettings.city],
      ["Funcionamento", `${storeSettings.weekHours} / ${storeSettings.sundayHours}`],
      ["Pedidos", storeSettings.orderRule],
      ["Capa", storeSettings.heroTitle || "Bem-vindo à Cacauê"],
      ["História", storeSettings.storyTitle || "Configurada"],
      ["Logo", storeSettings.logoImage ? "Configurada" : "Padrão"],
    ]
      .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
      .join("");
  }
}

function renderAdmin() {
  const todayKey = new Date().toISOString().slice(0, 10);
  const todayOrders = orders.filter((order) => String(order.created_at || "").slice(0, 10) === todayKey);
  const todayRevenue = todayOrders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const showcaseProducts = products.filter((product) => product.showcase || product.category === "Vitrine");
  const unavailableProducts = products.filter((product) => !product.available);

  $("#metricGrid").innerHTML = [
    ["Pedidos hoje", String(todayOrders.length)],
    ["Faturamento hoje", money.format(todayRevenue)],
    ["Na Vitrine", String(showcaseProducts.length)],
    ["Esgotados", String(unavailableProducts.length)],
  ]
    .map(([label, value]) => `<article class="metric-card"><span>${label}</span><strong>${value}</strong></article>`)
    .join("");

  $("#orderList").innerHTML = orders.length
    ? orders
        .slice(0, 20)
        .map(
          (order) => `
            <div class="admin-row">
              <strong>${order.protocol}</strong>
              <span>${order.customer?.name || "Cliente"} · ${orderDateLabel(order.created_at)}</span>
              <span>${orderItemLabel(order)}</span>
              <b>${money.format(order.total || 0)}</b>
            </div>
          `,
        )
        .join("")
    : `<p>Nenhum pedido recebido ainda.</p>`;

  $("#adminCampaigns").innerHTML = campaigns.length
    ? campaigns
        .map(
          (campaign) => `
            <div class="admin-campaign-row">
              <img src="${campaign.image}" alt="${campaign.title}" />
              <div>
                <strong>${campaign.title}</strong>
                <p>${campaign.description}</p>
                <span>${campaign.starts} até ${campaign.ends} - ${isCampaignActive(campaign) ? "Ativa" : "Fora do período"}</span>
                <div class="admin-row-actions">
                  <button class="text-button compact" type="button" data-edit-campaign="${campaign.id}">Editar</button>
                  <button class="text-button compact" type="button" data-delete-campaign="${campaign.id}">Excluir</button>
                </div>
              </div>
            </div>
          `,
        )
        .join("")
    : `<p>Nenhuma campanha cadastrada.</p>`;

  $("#pendingReviews").innerHTML = pendingReviews.length
    ? pendingReviews.map((review, index) => `<div class="admin-row"><strong>${review.name}</strong><span>${review.message || "Avaliação sem texto"}</span><div class="admin-row-actions"><button class="text-button compact" type="button" data-approve-review="${index}">Aprovar</button><button class="text-button compact" type="button" data-delete-review="${index}">Excluir</button></div></div>`).join("")
    : `<p>Nenhuma avaliação pendente.</p>`;

  const clients = clientsFromOrders();
  $("#clientList").innerHTML = clients.length
    ? clients
        .map((client) => `<div class="client-row"><div><strong>${client.name}</strong><p>${client.count} ${client.count === 1 ? "pedido" : "pedidos"} · Última compra: ${orderDateLabel(client.last)}${client.whatsapp ? ` · ${client.whatsapp}` : ""}</p></div><b>${money.format(client.total)}</b></div>`)
        .join("")
    : `<p>Os clientes aparecem aqui depois dos primeiros pedidos.</p>`;

  renderAdminProducts();
  renderStoreSettings();
}

function renderAdminProducts() {
  const filter = $("#adminCategoryFilter");
  const list = $("#adminProductList");
  if (!filter || !list) return;

  filter.innerHTML = adminCategoryFilterOptions.map((category) => `<option value="${category}">${category}</option>`).join("");
  filter.value = adminSelectedCategory;
  $("#productCategory").innerHTML = menuCategories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");
  if (!$("#productCategory").value) $("#productCategory").value = "Vitrine";
  updateSubcategoryField();

  const visibleProducts = adminSelectedCategory === "Todos" ? products : products.filter((product) => product.category === adminSelectedCategory);
  $("#adminProductCount").textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "item" : "itens"}`;
  list.innerHTML = visibleProducts
    .map(
      (product) => `
        <div class="admin-product-row">
          <img src="${product.image}" alt="${product.name}" style="object-fit: ${product.imageFit || "cover"}; object-position: ${product.imagePosition || "center"};" />
          <div>
            <strong>${product.name}</strong>
            <p>Status: ${product.available ? "Disponível" : "Esgotado"} · ${product.showcase ? "Na Vitrine" : "Fora da Vitrine"}</p>
            <p>${product.category}${product.subcategory ? ` / ${product.subcategory}` : ""} · ${product.madeToOrder ? "Sob encomenda" : "Pronta entrega"} · mínimo ${product.minimum}</p>
          </div>
          <span>${product.price > 0 ? money.format(product.price) : "Consultar"}</span>
          <div class="admin-row-actions">
            <button class="text-button compact" type="button" data-edit-product="${product.id}">Editar</button>
            <button class="text-button compact" type="button" data-delete-product="${product.id}">Excluir</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderCounts() {
  const count = bag.reduce((sum, item) => sum + item.quantity, 0);
  $("#favoriteCount").textContent = favorites.length;
  $("#bagCount").textContent = count;
  $("#bagButton").classList.toggle("has-items", count > 0);
  if (count === 0) {
    $("#bagSummary").classList.add("hidden");
  }
  updateBagSummary();
}

function bagSubtotal() {
  return bag.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function updateBagSummary(lastProductName = "") {
  const count = bag.reduce((sum, item) => sum + item.quantity, 0);
  if (!$("#bagSummary")) return;
  $("#bagSummaryTitle").textContent = lastProductName ? `${lastProductName} adicionado` : `${count} ${count === 1 ? "item" : "itens"} na sacola`;
  $("#bagSummaryMeta").textContent = count > 0 ? `${money.format(bagSubtotal())} até agora` : "Sua sacola está vazia.";
}

function showBagSummary(productName = "") {
  $("#bagSummary").classList.remove("hidden");
  updateBagSummary(productName);
  window.clearTimeout(bagSummaryTimer);
  bagSummaryTimer = window.setTimeout(() => {
    $("#bagSummary")?.classList.add("hidden");
  }, 3600);
}

function openProduct(id) {
  const product = products.find((entry) => entry.id === id);
  if (!product) return;

  let quantity = product.minimum || 1;
  const favorited = favorites.includes(product.id);
  $("#productDetail").innerHTML = `
    <div class="detail-media"><img src="${product.image}" alt="${product.name}" style="object-fit: ${product.imageFit || "cover"}; object-position: ${product.imagePosition || "center"};" /></div>
    <div>
      <div class="badge-row">${(product.tags || []).filter((tag) => tag.toLowerCase() !== "canva").map((tag) => `<span class="badge">${tag}</span>`).join("")}</div>
      <h2 id="modalTitle">${product.name}</h2>
      <p class="price">${product.price > 0 ? money.format(product.price) : "Consultar preço"}</p>
      <p>${product.description}</p>
      <p><strong>Pedido mínimo:</strong> ${product.minimum} ${product.minimum > 1 ? "unidades" : "unidade"}</p>
      <div class="quantity">
        <button type="button" data-qty="-1">-</button>
        <span id="detailQty">${quantity}</span>
        <button type="button" data-qty="1">+</button>
      </div>
      <div class="hero-actions">
        <button class="secondary-button" type="button" data-favorite="${product.id}">${favorited ? "Favorito" : "Favoritar"}</button>
        <button class="primary-button" type="button" data-add-bag="${product.id}" ${product.price > 0 && product.available ? "" : "disabled"}>${product.price > 0 && product.available ? "Adicionar à Sacola" : "Consultar no WhatsApp"}</button>
      </div>
    </div>
  `;

  $("#productModal").classList.add("open");
  $("#productModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  $("#productDetail").querySelectorAll("[data-qty]").forEach((button) => {
    button.addEventListener("click", () => {
      quantity = Math.max(product.minimum || 1, quantity + Number(button.dataset.qty));
      $("#detailQty").textContent = quantity;
    });
  });

  $("#productDetail").querySelector("[data-add-bag]").addEventListener("click", () => {
    addToBag(product.id, quantity);
    closeProduct();
    showBagSummary(product.name);
  });
}

function closeProduct() {
  $("#productModal").classList.remove("open");
  $("#productModal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function toggleFavorite(id) {
  favorites = favorites.includes(id) ? favorites.filter((entry) => entry !== id) : [...favorites, id];
  persist();
  renderProducts();
  renderCounts();
  renderAdmin();
}

function addToBag(id, quantity = 1) {
  const product = products.find((entry) => entry.id === id);
  const existing = bag.find((item) => item.id === id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    bag.push({ id, quantity });
  }
  persist();
  renderBag();
  renderCounts();
  if (product) showBagSummary(product.name);
}

function updateBag(id, delta) {
  bag = bag
    .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
    .filter((item) => item.quantity > 0);
  persist();
  renderBag();
  renderCounts();
}

function renderBag() {
  $("#bagItems").innerHTML = bag.length
    ? bag
        .map((item) => {
          const product = products.find((entry) => entry.id === item.id);
          return `
            <div class="bag-row">
              <img src="${product.image}" alt="${product.name}" />
              <div><strong>${product.name}</strong><p>${money.format(product.price)}</p></div>
              <div class="bag-controls">
                <button type="button" data-bag="${product.id}" data-delta="-1">-</button>
                <span>${item.quantity}</span>
                <button type="button" data-bag="${product.id}" data-delta="1">+</button>
              </div>
            </div>
          `;
        })
        .join("")
    : `<p>Sua sacola está vazia.</p>`;

  const subtotal = bag.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);
  const delivery = fulfillmentMode === "entrega" && subtotal > 0 ? 12 : 0;
  $("#totals").innerHTML = `
    <div><span>Subtotal</span><strong>${money.format(subtotal)}</strong></div>
    <div><span>Taxa de entrega</span><strong>${money.format(delivery)}</strong></div>
    <div><span>Total geral</span><strong>${money.format(subtotal + delivery)}</strong></div>
  `;

  document.querySelectorAll("[data-bag]").forEach((button) => {
    button.addEventListener("click", () => updateBag(button.dataset.bag, Number(button.dataset.delta)));
  });
}

function openBag() {
  $("#bagDrawer").classList.add("is-open");
  $("#bagDrawer").setAttribute("aria-hidden", "false");
}

function closeBag() {
  $("#bagDrawer").classList.remove("is-open");
  $("#bagDrawer").setAttribute("aria-hidden", "true");
}

function openCheckout() {
  openBag();
  setTimeout(() => $("#customerName").focus(), 150);
}

async function checkout() {
  customer = {
    name: $("#customerName").value.trim(),
  };

  if (!customer.name || bag.length === 0) {
    $("#thanksBox").classList.remove("hidden");
    $("#thanksBox").textContent = "Informe o nome e adicione pelo menos um produto.";
    return;
  }

  const protocol = `CAC-${Date.now().toString().slice(-6)}`;
  const summary = bag
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return `• ${item.quantity}x ${product?.name || item.id} - ${money.format((product?.price || 0) * item.quantity)}`;
    })
    .join("\n");
  const subtotal = bagSubtotal();
  const delivery = fulfillmentMode === "entrega" && subtotal > 0 ? 12 : 0;
  const total = subtotal + delivery;
  const fulfillmentText =
    fulfillmentMode === "entrega"
      ? [
          "🚚 *Entrega*",
          `📍 Endereço: ${document.querySelector("#deliveryFields input:nth-child(1)")?.value || "não informado"}`,
          `Nº: ${document.querySelector("#deliveryFields input:nth-child(2)")?.value || "não informado"}`,
          `Complemento: ${document.querySelector("#deliveryFields input:nth-child(3)")?.value || "-"}`,
          `Bairro: ${document.querySelector("#deliveryFields input:nth-child(4)")?.value || "não informado"}`,
          `Referência: ${document.querySelector("#deliveryFields input:nth-child(5)")?.value || "-"}`,
        ].join("\n")
      : [`🛍️ *Retirada*`, `📅 Data: ${$("#pickupDate").value || "a combinar"}`, `⏰ Horário: ${$("#pickupTime").value || "a combinar"}`].join("\n");
  const whatsappMessage = [
    `Olá, Cacauê! 💛`,
    `Quero finalizar este pedido: *${protocol}*`,
    "",
    `👤 *Cliente:* ${customer.name}`,
    "",
    "🍰 *Itens escolhidos:*",
    summary,
    "",
    fulfillmentText,
    "",
    "💳 *Resumo:*",
    `Subtotal: ${money.format(subtotal)}`,
    `Taxa de entrega: ${money.format(delivery)}`,
    `*Total: ${money.format(total)}*`,
    "",
    "Aguardo a confirmação do pedido. ✨",
  ]
    .filter((line) => line !== "")
    .join("\n");
  const whatsappUrl = whatsappOrderLink(whatsappMessage);
  const orderItems = bag.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return {
      product_id: item.id,
      name: product?.name || item.id,
      quantity: item.quantity,
      price: product?.price || 0,
    };
  });
  const localOrder = {
    id: `local-${Date.now()}`,
    protocol,
    customer,
    items: orderItems,
    subtotal,
    delivery_fee: delivery,
    total,
    status: "novo",
    created_at: new Date().toISOString(),
  };

  try {
    await supabaseJson("/orders", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify([
        {
          protocol,
          customer,
          items: orderItems,
          subtotal,
          delivery_fee: delivery,
          total,
          status: "novo",
        },
      ]),
    });
  } catch (error) {
    console.warn("Pedido ficou local porque o Supabase ainda não aceitou o envio.", error);
  }

  orders = [localOrder, ...orders.filter((order) => order.protocol !== protocol)];
  bag = [];
  persist();
  renderBag();
  renderCounts();
  renderAdmin();
  $("#thanksBox").classList.remove("hidden");
  $("#thanksBox").innerHTML = `Pedido ${protocol} salvo. <a href="${whatsappUrl}" target="_blank" rel="noreferrer">Enviar mensagem para a loja</a>`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

function bindEvents() {
  document.body.addEventListener("click", (event) => {
    const productCardElement = event.target.closest("[data-product]");
    const favoriteButton = event.target.closest("[data-favorite]");
    const quickAddButton = event.target.closest("[data-quick-add]");
    const editProductButton = event.target.closest("[data-edit-product]");
    const deleteProductButton = event.target.closest("[data-delete-product]");
    const editCampaignButton = event.target.closest("[data-edit-campaign]");
    const deleteCampaignButton = event.target.closest("[data-delete-campaign]");
    const approveReviewButton = event.target.closest("[data-approve-review]");
    const deleteReviewButton = event.target.closest("[data-delete-review]");

    if (favoriteButton) {
      event.stopPropagation();
      toggleFavorite(favoriteButton.dataset.favorite);
      return;
    }

    if (quickAddButton) {
      event.stopPropagation();
      addToBag(quickAddButton.dataset.quickAdd, 1);
      return;
    }

    if (editProductButton) {
      event.stopPropagation();
      const product = products.find((entry) => entry.id === editProductButton.dataset.editProduct);
      if (product) {
        fillProductForm(product);
      }
      return;
    }

    if (deleteProductButton) {
      event.stopPropagation();
      const previousProducts = products.map((product) => ({ ...product, tags: [...(product.tags || [])] }));
      products = products.filter((entry) => entry.id !== deleteProductButton.dataset.deleteProduct);
      setAdminSyncMessage("Excluindo produto no servidor...", "info");
      deleteProductFromSupabase(deleteProductButton.dataset.deleteProduct).then((saved) => {
        if (saved) {
          persistProducts();
          renderProducts();
          renderAdmin();
          return;
        }
        products = previousProducts;
        renderProducts();
        renderAdmin();
      });
      return;
    }

    if (editCampaignButton) {
      event.stopPropagation();
      const campaign = campaigns.find((entry) => entry.id === editCampaignButton.dataset.editCampaign);
      if (campaign) fillCampaignForm(campaign);
      return;
    }

    if (deleteCampaignButton) {
      event.stopPropagation();
      const previousCampaigns = campaigns.map((campaign) => ({ ...campaign }));
      campaigns = campaigns.filter((entry) => entry.id !== deleteCampaignButton.dataset.deleteCampaign);
      setAdminSyncMessage("Excluindo campanha no servidor...", "info");
      deleteCampaignFromSupabase(deleteCampaignButton.dataset.deleteCampaign).then((saved) => {
        if (saved) {
          persistCampaigns();
          renderCampaigns();
          renderAdmin();
          return;
        }
        campaigns = previousCampaigns;
        renderCampaigns();
        renderAdmin();
      });
      return;
    }

    if (approveReviewButton) {
      event.stopPropagation();
      const index = Number(approveReviewButton.dataset.approveReview);
      const [review] = pendingReviews.splice(index, 1);
      if (review) approvedReviews.unshift([review.name, review.message || "Experiência aprovada pela Cacauê."]);
      persist();
      localStorage.setItem("cacaue:approvedReviews", JSON.stringify(approvedReviews));
      renderReviews();
      renderAdmin();
      setAdminSyncMessage("Avaliação aprovada no painel.", "success");
      return;
    }

    if (deleteReviewButton) {
      event.stopPropagation();
      pendingReviews.splice(Number(deleteReviewButton.dataset.deleteReview), 1);
      persist();
      renderAdmin();
      setAdminSyncMessage("Avaliação removida.", "success");
      return;
    }

    if (productCardElement) openProduct(productCardElement.dataset.product);
  });

  $("[data-close-modal]").addEventListener("click", closeProduct);
  $("#productModal").addEventListener("click", (event) => {
    if (event.target === $("#productModal")) closeProduct();
  });
  $("#bagButton").addEventListener("click", openBag);
  $("#closeBag").addEventListener("click", closeBag);
  $("#checkoutButton").addEventListener("click", checkout);
  $("#summaryOpenBag").addEventListener("click", openBag);
  $("#summaryCheckout").addEventListener("click", openCheckout);
  document.querySelectorAll("[data-open-admin]").forEach((button) => {
    button.addEventListener("click", openAdminPanel);
  });
  document.querySelectorAll(".admin-menu a, button[data-admin-tab]").forEach((entry) => {
    entry.addEventListener("click", (event) => {
      const href = entry.getAttribute("href") || "";
      const tab = entry.dataset.adminTab || {
        "#admin-summary": "summary",
        "#admin-product-add": "product-add",
        "#admin-products": "products",
        "#admin-orders": "orders",
        "#admin-campaigns": "campaigns",
        "#admin-reviews": "reviews",
        "#admin-clients": "clients",
        "#admin-settings": "settings",
      }[href];
      if (!tab) return;
      event.preventDefault();
      showAdminTab(tab);
    });
  });
  $("#closeAdminButton").addEventListener("click", closeAdminPanel);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && $("#productModal").classList.contains("open")) {
      closeProduct();
      return;
    }
    if (event.key === "Escape" && !$("#admin").classList.contains("hidden")) {
      closeAdminPanel();
    }
  });
  $("#adminLoginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    loginAdminSupabase($("#adminEmail").value, $("#adminPassword").value);
  });
  $("#adminLogoutButton").addEventListener("click", logoutAdmin);
  $("#refreshAdminData").addEventListener("click", async () => {
    setAdminSyncMessage("Atualizando dados do servidor...", "info");
    await loadRemoteData();
    await loadAdminOrders();
  });
  $("#toggleAdminPassword").addEventListener("click", () => {
    const input = $("#adminPassword");
    const showing = input.type === "text";
    input.type = showing ? "password" : "text";
    $("#toggleAdminPassword").textContent = showing ? "👁" : "Ocultar";
    $("#toggleAdminPassword").setAttribute("aria-label", showing ? "Mostrar senha" : "Ocultar senha");
  });
  $("#productForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveProductFromForm();
  });
  $("#cancelProductEdit").addEventListener("click", resetProductForm);
  $("#productCategory").addEventListener("change", () => updateSubcategoryField());
  $("#productSubcategory").addEventListener("change", () => {
    const isCustom = $("#productSubcategory").value === "__custom__";
    setCustomSubcategoryVisible(isCustom, { clear: !isCustom, focus: isCustom });
  });
  $("#productImage").addEventListener("input", (event) => {
    updateProductImagePreview(event.target.value);
  });
  $("#productImageFit").addEventListener("change", () => {
    updateProductImagePreview($("#productImage").value);
  });
  $("#productImagePosition").addEventListener("change", () => {
    updateProductImagePreview($("#productImage").value);
  });
  $("#productImageFile").addEventListener("change", async (event) => {
    const [file] = event.target.files;
    await applyImageFileToInput(file, "#productImage", updateProductImagePreview, { maxWidth: 1200, maxHeight: 1600 });
  });
  $("#favoriteButton").addEventListener("click", () => {
    document.querySelector("#cardapio").scrollIntoView();
    selectedCategory = "Vitrine";
    selectedSubcategory = "Todos";
    renderProducts(products.filter((product) => favorites.includes(product.id)));
  });
  $("#showFavoritesOnly").addEventListener("click", () => {
    selectedCategory = "Vitrine";
    selectedSubcategory = "Todos";
    renderProducts(products.filter((product) => favorites.includes(product.id)));
  });
  $("#showAllProducts").addEventListener("click", () => {
    selectedCategory = "Vitrine";
    selectedSubcategory = "Todos";
    renderProducts();
  });

  $("#categoryTabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    selectedCategory = button.dataset.category;
    selectedSubcategory = "Todos";
    renderProducts();
  });

  $("#subcategoryTabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-subcategory]");
    if (!button) return;
    selectedSubcategory = button.dataset.subcategory;
    renderProducts();
  });

  $("#adminCategoryFilter").addEventListener("change", (event) => {
    adminSelectedCategory = event.target.value;
    renderAdminProducts();
  });

  document.querySelectorAll(".segmented button").forEach((button) => {
    button.addEventListener("click", () => {
      fulfillmentMode = button.dataset.mode;
      document.querySelectorAll(".segmented button").forEach((entry) => entry.classList.toggle("active", entry === button));
      $("#pickupFields").classList.toggle("hidden", fulfillmentMode !== "retirada");
      $("#deliveryFields").classList.toggle("hidden", fulfillmentMode !== "entrega");
      renderBag();
    });
  });

  $("#reviewButton").addEventListener("click", () => {
    $("#reviewModal").classList.add("open");
    $("#reviewModal").setAttribute("aria-hidden", "false");
  });
  $("[data-close-review]").addEventListener("click", () => {
    $("#reviewModal").classList.remove("open");
    $("#reviewModal").setAttribute("aria-hidden", "true");
  });
  $("#reviewForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    pendingReviews.push({ name: formData.get("name"), message: formData.get("message") });
    persist();
    event.currentTarget.reset();
    $("#reviewModal").classList.remove("open");
    renderAdmin();
  });
  $("#campaignForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const previousCampaigns = campaigns.map((campaign) => ({ ...campaign }));
    const campaign = {
      id: formData.get("id") || "",
      title: formData.get("title"),
      image: formData.get("image") || "assets/hero-cacaue.png",
      description: formData.get("description"),
      starts: formData.get("starts"),
      ends: formData.get("date"),
    };
    campaign.id = campaignId(campaign, campaigns.length);
    const campaignIndex = campaigns.findIndex((entry) => entry.id === campaign.id);
    if (campaignIndex >= 0) {
      campaigns[campaignIndex] = { ...campaigns[campaignIndex], ...campaign };
    } else {
      campaigns.push(campaign);
    }
    setAdminSyncMessage("Salvando campanha no servidor...", "info");
    const saved = await saveCampaignToSupabase(campaign);
    if (saved) {
      persistCampaigns();
      resetCampaignForm();
      renderCampaigns();
      renderAdmin();
      return;
    }
    campaigns = previousCampaigns;
    renderCampaigns();
    renderAdmin();
  });
  $("#campaignImage").addEventListener("input", (event) => {
    updateCampaignImagePreview(event.target.value);
  });
  $("#campaignImageFile").addEventListener("change", async (event) => {
    const [file] = event.target.files;
    await applyImageFileToInput(file, "#campaignImage", updateCampaignImagePreview, { maxWidth: 1400, maxHeight: 1400 });
  });
  $("#cancelCampaignEdit").addEventListener("click", resetCampaignForm);
  $("#storeHeroImage").addEventListener("input", (event) => {
    updateStoreHeroPreview(event.target.value);
  });
  $("#storeHeroImageFile").addEventListener("change", async (event) => {
    const [file] = event.target.files;
    await applyImageFileToInput(file, "#storeHeroImage", updateStoreHeroPreview, { maxWidth: 1600, maxHeight: 1100 });
  });
  $("#storeLogoImage").addEventListener("input", (event) => {
    updateStoreLogoPreview(event.target.value);
  });
  $("#storeLogoImageFile").addEventListener("change", async (event) => {
    const [file] = event.target.files;
    await applyImageFileToInput(file, "#storeLogoImage", updateStoreLogoPreview, { maxWidth: 1200, maxHeight: 500 });
  });
  $("#storeStoryImage").addEventListener("input", (event) => {
    updateStoreStoryPreview(event.target.value);
  });
  $("#storeStoryImageFile").addEventListener("change", async (event) => {
    const [file] = event.target.files;
    await applyImageFileToInput(file, "#storeStoryImage", updateStoreStoryPreview, { maxWidth: 1200, maxHeight: 1200 });
  });
  $("#storeSettingsForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const previousSettings = { ...storeSettings };
    storeSettings = normalizeStoreSettings({
      whatsapp: formData.get("whatsapp"),
      instagram: formData.get("instagram"),
      city: formData.get("city"),
      weekHours: formData.get("weekHours"),
      sundayHours: formData.get("sundayHours"),
      orderRule: formData.get("orderRule"),
      heroEyebrow: formData.get("heroEyebrow") || "Cardápio online",
      heroTitle: formData.get("heroTitle") || "Bem-vindo à Cacauê",
      heroText: formData.get("heroText") || "Mais do que confeitaria, criamos momentos especiais através de sabores únicos, feitos com amor e dedicação.",
      heroImage: formData.get("heroImage") || "assets/hero-cacaue.png",
      logoImage: formData.get("logoImage") || "assets/logo-cacaue-app.jpg",
      storyEyebrow: formData.get("storyEyebrow") || "Nossa história",
      storyTitle: formData.get("storyTitle") || "Uma confeitaria criada para transformar afeto em experiência.",
      storyText:
        formData.get("storyText") ||
        "A Cacauê nasceu do cuidado com os detalhes: receitas autorais, ingredientes selecionados e uma apresentação feita para que cada pedido tenha sabor de momento especial.",
      storyImage: formData.get("storyImage") || "assets/hero-cacaue.png",
    });
    setAdminSyncMessage("Salvando configurações da loja no servidor...", "info");
    const saved = await saveStoreSettingsToSupabase();
    if (saved) {
      persistStoreSettings();
      renderStoreSettings();
      renderAdmin();
      return;
    }
    storeSettings = previousSettings;
    renderStoreSettings();
  });
}

function hydrateCustomer() {
  $("#customerName").value = customer.name || "";
}

function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
}

function showInstallPrompt(isManualFallback = false) {
  if (isStandaloneApp() || localStorage.getItem("cacaue:installDismissed") === INSTALL_PROMPT_VERSION) return;
  const prompt = $("#installAppPrompt");
  if (!prompt) return;
  $("#installAppText").textContent = isManualFallback
    ? "Toque no menu do navegador e escolha Instalar app ou Adicionar a tela inicial."
    : "Acesse a vitrine mais rápido pela tela inicial.";
  $("#installAppButton").classList.toggle("hidden", isManualFallback || !deferredInstallPrompt);
  prompt.classList.remove("hidden");
}

function hideInstallPrompt(remember = false) {
  $("#installAppPrompt")?.classList.add("hidden");
  if (remember) localStorage.setItem("cacaue:installDismissed", INSTALL_PROMPT_VERSION);
}

function setupInstallApp() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch((error) => {
      console.warn("Service worker não registrado.", error);
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    showInstallPrompt();
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    hideInstallPrompt(true);
  });

  $("#installAppButton")?.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    hideInstallPrompt(true);
  });

  $("#dismissInstallApp")?.addEventListener("click", () => hideInstallPrompt(true));

  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isAndroid = /android/i.test(navigator.userAgent);
  setTimeout(() => {
    if (!deferredInstallPrompt && (isIos || isAndroid)) showInstallPrompt(true);
  }, 2500);
}

function init() {
  setupInstallApp();
  renderStoreSettings();
  renderCare();
  renderCampaigns();
  renderProducts();
  renderOrderCategories();
  renderReviews();
  renderBag();
  renderCounts();
  hydrateCustomer();
  bindEvents();
  resetProductForm();
  renderAdminAccess();
  loadRemoteData();
}

init();





