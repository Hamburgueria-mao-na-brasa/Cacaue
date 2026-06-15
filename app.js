const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

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
  ...product,
  description: product.description
    .replace(/OpÃ§Ãµes extraÃ­das do Canva: /g, "Opcoes disponiveis: ")
    .replace(/Opções extraídas do Canva: /g, "Opcoes disponiveis: ")
    .replace(/Sabores extraÃ­dos do Canva: /g, "Sabores disponiveis: ")
    .replace(/Sabores extraídos do Canva: /g, "Sabores disponiveis: ")
    .replace(/Sabores extraÃ­dos do Canva\. /g, "")
    .replace(/Sabores extraídos do Canva\. /g, "")
    .replace(/Kit extraÃ­do do Canva\. /g, "")
    .replace(/Kit extraído do Canva\. /g, "")
    .replace(/PreÃ§o nÃ£o apareceu com seguranÃ§a no Canva\./g, "Preco sob consulta.")
    .replace(/Preço não apareceu com segurança no Canva\./g, "Preco sob consulta."),
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

const savedCampaigns = JSON.parse(localStorage.getItem("cacaue:campaigns") || "null");
if (Array.isArray(savedCampaigns)) {
  campaigns = savedCampaigns;
}

let storeSettings = JSON.parse(localStorage.getItem("cacaue:storeSettings") || "null") || {
  whatsapp: "(64) 99253-8620",
  instagram: "https://instagram.com/",
  city: "Mineiros - GO",
  weekHours: "Seg a sab 08h as 18h",
  sundayHours: "Domingo 09h as 15h",
  orderRule: "50% na confirmacao e restante na retirada",
  heroEyebrow: "Cardapio online",
  heroTitle: "Cacaue",
  heroText: "Bolos, doces, sobremesas, kits e presenteaveis feitos com carinho em Mineiros - GO.",
  heroImage: "assets/hero-cacaue.png",
};

const orderCategories = [
  ["Tortas", "Prazo mínimo: 48h", "Pedido mínimo: 1 unidade"],
  ["Bolos", "Prazo mínimo: 72h", "Pedido mínimo: 1 unidade"],
  ["Doces Finos", "Prazo mínimo: 5 dias", "Pedido mínimo: 24 unidades"],
  ["Kits", "Prazo mínimo: 48h", "Pedido mínimo: 1 kit"],
];

const approvedReviews = [
  ["Marina A.", "Tudo chegou impecável. A torta era linda e o sabor ainda mais especial."],
  ["Clara M.", "Atendimento cuidadoso e doces finos com apresentação de evento premium."],
  ["Renata F.", "A vitrine ajudou a escolher rápido sem perder a sensação de exclusividade."],
];

const clients = [
  ["Marina A.", "3 pedidos", "Última compra: 08/06", "R$ 486,00"],
  ["Clara M.", "5 pedidos", "Última compra: 04/06", "R$ 1.120,00"],
  ["Renata F.", "2 pedidos", "Última compra: 29/05", "R$ 264,00"],
];

const SUPABASE_URL = "https://zanqzdkfmhqmhgarzvct.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_z03cxeVF-6pUwiul8lPwZA_eT1ow2n5";
const SUPABASE_REST_URL = `${SUPABASE_URL}/rest/v1`;
const SUPABASE_STORAGE_BUCKET = "cacaue-images";

let favorites = JSON.parse(localStorage.getItem("cacaue:favorites") || "[]");
let bag = JSON.parse(localStorage.getItem("cacaue:bag") || "[]");
let customer = JSON.parse(localStorage.getItem("cacaue:customer") || "{}");
let pendingReviews = JSON.parse(localStorage.getItem("cacaue:pendingReviews") || "[]");
let fulfillmentMode = "retirada";
let selectedCategory = "Todos";
let adminSelectedCategory = "Todos";
let adminActiveTab = "summary";
let deferredInstallPrompt = null;
const INSTALL_PROMPT_VERSION = "pwa-v4";
const menuCategories = ["Todos", "Vitrine", "Doces Finos", "Despedida de Solteiro", "Bolos", "Bolos Simples", "Kits"];

const $ = (selector) => document.querySelector(selector);

function persist() {
  localStorage.setItem("cacaue:favorites", JSON.stringify(favorites));
  localStorage.setItem("cacaue:bag", JSON.stringify(bag));
  localStorage.setItem("cacaue:customer", JSON.stringify(customer));
  localStorage.setItem("cacaue:pendingReviews", JSON.stringify(pendingReviews));
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

function setAdminSyncMessage(message, type = "info") {
  const target = $("#adminSyncMessage");
  if (!target) return;
  target.textContent = message;
  target.dataset.type = type;
}

function supabaseHeaders(useSession = false) {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${useSession && adminSession?.access_token ? adminSession.access_token : SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
  };
}

async function supabaseJson(path, options = {}) {
  const response = await fetch(`${SUPABASE_REST_URL}${path}`, {
    ...options,
    headers: {
      ...supabaseHeaders(options.useSession),
      ...(options.headers || {}),
    },
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Supabase error ${response.status}`);
  }
  if (response.status === 204) return null;
  return response.json();
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
    console.warn("Nao foi possivel confirmar admin no Supabase.", error);
    return false;
  }
}

function productToDb(product, index = 0) {
  return {
    id: product.id,
    name: product.name,
    image: product.image,
    category: product.category,
    price: product.price,
    image_fit: product.imageFit || "cover",
    image_position: product.imagePosition || "center",
    short_description: product.short,
    description: product.description,
    minimum: product.minimum,
    available: product.available,
    made_to_order: product.madeToOrder,
    tags: product.tags || [],
    sort_order: index,
  };
}

function productFromDb(row) {
  return {
    id: row.id,
    name: row.name,
    image: row.image,
    category: row.category,
    price: Number(row.price || 0),
    imageFit: row.image_fit || "cover",
    imagePosition: row.image_position || "center",
    short: row.short_description || "",
    description: row.description || "",
    minimum: row.minimum || 1,
    available: row.available,
    madeToOrder: row.made_to_order,
    tags: row.tags || [],
  };
}

function campaignToDb(campaign, index = 0) {
  return {
    id: campaign.id || `campanha-${Date.now()}-${index}`,
    title: campaign.title,
    image: campaign.image,
    description: campaign.description,
    starts: campaign.starts,
    ends: campaign.ends,
    sort_order: index,
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

async function loadRemoteData() {
  try {
    const [remoteProducts, remoteCampaigns, remoteSettings] = await Promise.all([
      supabaseJson("/products?select=*&order=sort_order.asc"),
      supabaseJson("/campaigns?select=*&order=sort_order.asc"),
      supabaseJson("/store_settings?select=*&id=eq.main&limit=1"),
    ]);

    if (Array.isArray(remoteProducts) && remoteProducts.length) {
      products = remoteProducts.map(productFromDb);
      localStorage.setItem("cacaue:products", JSON.stringify(products));
    }
    if (Array.isArray(remoteCampaigns)) {
      campaigns = remoteCampaigns.map(campaignFromDb);
      localStorage.setItem("cacaue:campaigns", JSON.stringify(campaigns));
    }
    if (remoteSettings?.[0]) {
      storeSettings = { ...storeSettings, ...remoteSettings[0].settings };
      localStorage.setItem("cacaue:storeSettings", JSON.stringify(storeSettings));
    }

    renderStoreSettings();
    renderCampaigns();
    renderProducts();
    renderAdminAccess();
    setAdminSyncMessage("Dados carregados do servidor.", "success");
  } catch (error) {
    console.warn("Supabase ainda nao carregou dados remotos.", error);
    setAdminSyncMessage("Sem conexao com o servidor agora. As alteracoes podem ficar apenas neste telefone.", "warning");
  }
}

async function saveProductsToSupabase() {
  if (!adminSession?.access_token) {
    setAdminSyncMessage("Produto salvo apenas neste telefone. Entre no admin com Supabase para salvar no servidor.", "warning");
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
    persistProducts();
    setAdminSyncMessage("Produtos salvos no servidor. Outros telefones vao carregar essa alteracao.", "success");
    renderProducts();
    renderAdmin();
    return true;
  } catch (error) {
    console.warn("Nao foi possivel salvar produtos no Supabase.", error);
    setAdminSyncMessage(`Nao consegui salvar produtos no servidor: ${error.message}`, "error");
    return false;
  }
}

async function saveCampaignsToSupabase() {
  if (!adminSession?.access_token) {
    setAdminSyncMessage("Campanha salva apenas neste telefone. Entre no admin com Supabase para salvar no servidor.", "warning");
    return false;
  }
  try {
    const rows = [];
    for (const [index, campaign] of campaigns.entries()) {
      campaign.id = campaign.id || `campanha-${Date.now()}-${index}`;
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
    persistCampaigns();
    setAdminSyncMessage("Campanhas salvas no servidor.", "success");
    renderCampaigns();
    renderAdmin();
    return true;
  } catch (error) {
    console.warn("Nao foi possivel salvar campanhas no Supabase.", error);
    setAdminSyncMessage(`Nao consegui salvar campanhas no servidor: ${error.message}`, "error");
    return false;
  }
}

async function saveStoreSettingsToSupabase() {
  if (!adminSession?.access_token) {
    setAdminSyncMessage("Dados da loja salvos apenas neste telefone. Entre no admin com Supabase para salvar no servidor.", "warning");
    return false;
  }
  try {
    if (storeSettings.heroImage?.startsWith("data:")) {
      storeSettings.heroImage = await uploadDataUrlToSupabase(storeSettings.heroImage, "store", "hero");
    }
    await supabaseJson("/store_settings?on_conflict=id", {
      method: "POST",
      useSession: true,
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify([{ id: "main", settings: storeSettings }]),
    });
    persistStoreSettings();
    setAdminSyncMessage("Dados da loja e capa salvos no servidor.", "success");
    renderStoreSettings();
    return true;
  } catch (error) {
    console.warn("Nao foi possivel salvar dados da loja no Supabase.", error);
    setAdminSyncMessage(`Nao consegui salvar dados da loja no servidor: ${error.message}`, "error");
    return false;
  }
}

async function uploadDataUrlToSupabase(dataUrl, folder, filename) {
  if (!dataUrl?.startsWith("data:") || !adminSession?.access_token) return dataUrl;
  const blob = await fetch(dataUrl).then((response) => response.blob());
  const extension = blob.type.includes("png") ? "png" : "jpg";
  const safeName = String(filename || "imagem")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .toLowerCase() || "imagem";
  const path = `${folder}/${safeName}-${Date.now()}.${extension}`;
  const response = await fetch(`${SUPABASE_URL}/storage/v1/object/${SUPABASE_STORAGE_BUCKET}/${path}`, {
    method: "PUT",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${adminSession.access_token}`,
      "Content-Type": blob.type,
      "x-upsert": "true",
    },
    body: blob,
  });
  if (!response.ok) throw new Error(await response.text());
  return `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_STORAGE_BUCKET}/${path}`;
}

function fileToOptimizedDataUrl(file, options = {}) {
  const maxWidth = options.maxWidth || 1200;
  const maxHeight = options.maxHeight || 1600;
  const quality = options.quality || 0.86;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("error", () => reject(new Error("Nao consegui ler a foto escolhida.")));
    reader.addEventListener("load", () => {
      const image = new Image();
      image.addEventListener("error", () => reject(new Error("Nao consegui abrir essa foto. Tente outra imagem.")));
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
    setAdminSyncMessage("Escolha um arquivo de imagem valido.", "error");
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
    authorized ? "Admin conectado ao servidor. Ao salvar, outros telefones receberao as alteracoes." : "Entre no admin para salvar as alteracoes no servidor.",
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
    $("#adminLoginMessage").textContent = "E-mail não autorizado para acessar o painel.";
    return;
  }
  adminSession = { email: normalizedEmail, role: account.role, loggedAt: new Date().toISOString() };
  localStorage.setItem("cacaue:adminSession", JSON.stringify(adminSession));
  $("#adminLoginMessage").textContent = "Acesso liberado.";
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
    $("#adminLoginMessage").textContent = "E-mail ou senha incorretos, ou usuario ainda nao criado no Supabase.";
    return;
  }
  const session = await response.json();
  adminSession = {
    email: session.user?.email || normalizedEmail,
    role: "Admin",
    access_token: session.access_token,
    refresh_token: session.refresh_token,
    loggedAt: new Date().toISOString(),
  };
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    adminSession = null;
    localStorage.removeItem("cacaue:adminSession");
    $("#adminLoginMessage").textContent = "Login existe no Supabase, mas este e-mail nao esta autorizado em admin_profiles.";
    setAdminSyncMessage("Confira se o e-mail do Auth e igual ao e-mail em admin_profiles.", "error");
    return;
  }
  localStorage.setItem("cacaue:adminSession", JSON.stringify(adminSession));
  $("#adminLoginMessage").textContent = "Acesso liberado.";
  $("#adminPassword").value = "";
  await loadRemoteData();
  renderAdminAccess();
}

function logoutAdmin() {
  adminSession = null;
  localStorage.removeItem("cacaue:adminSession");
  $("#adminEmail").value = "";
  $("#adminPassword").value = "";
  renderAdminAccess();
}

function resetProductForm() {
  $("#productId").value = "";
  $("#productName").value = "";
  $("#productCategory").value = "Vitrine";
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
  $("#productMadeToOrder").checked = true;
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
  $("#productMadeToOrder").checked = product.madeToOrder;
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

function updateStoreHeroPreview(src = "") {
  const preview = $("#storeHeroImagePreview");
  if (!preview) return;
  const image = preview.querySelector("img");
  image.src = src || "assets/hero-cacaue.png";
}

function productFromForm() {
  const name = $("#productName").value.trim();
  const existingId = $("#productId").value.trim();
  const id = existingId || name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
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
    category: $("#productCategory").value,
    price: Number($("#productPrice").value || 0),
    short: $("#productShort").value.trim(),
    description: $("#productDescription").value.trim(),
    minimum: Math.max(1, Number($("#productMinimum").value || 1)),
    available: $("#productAvailable").checked,
    madeToOrder: $("#productMadeToOrder").checked,
    tags: tags.length ? tags : existingId ? ["Editado"] : ["Novo"],
  };
}

async function saveProductFromForm() {
  const product = productFromForm();
  const index = products.findIndex((entry) => entry.id === product.id);
  if (index >= 0) {
    products[index] = { ...products[index], ...product };
  } else {
    products = [product, ...products];
  }
  persistProducts();
  resetProductForm();
  renderProducts();
  renderAdmin();
  await saveProductsToSupabase();
}

function isCampaignActive(campaign) {
  const today = new Date();
  const starts = new Date(`${campaign.starts}T00:00:00`);
  const ends = new Date(`${campaign.ends}T23:59:59`);
  return today >= starts && today <= ends;
}

function fineSweetSubtitle(name) {
  const map = {
    "Brigadeiro Ninho com Nutella": "ninho com nutella",
    "Copinho de Cereja": "de cereja",
    "Surpresa de Uva": "de uva",
    "Copinho Physales": "physales",
    "Coração Dourado": "meio amargo",
    "Chanfrado de Café": "ganache de café",
    "Amêndoas": "doce de leite",
    "Gota de Maracujá": "gel cítrico",
    "Quadradinho de Coco": "coco cremoso",
    "Camafeu de Nozes": "noz dourada",
    "Flor de Sakura": "nutella crocante",
    "Jarrinho de Cereja": "ganache de cereja",
  };
  return map[name] || "";
}

function productCard(product, index = 0) {
  const favorited = favorites.includes(product.id);
  const statusClass = product.available ? "status" : "status soldout";
  const statusText = product.available ? "Disponível" : "Esgotado";
  const orderText = product.madeToOrder ? `Sob encomenda · mínimo ${product.minimum}` : `Pronta entrega · mínimo ${product.minimum}`;
  const hasPrice = product.price > 0;
  const actionDisabled = !product.available || !hasPrice;
  const usePremiumCard = true;
  const subtitle = fineSweetSubtitle(product.name) || product.category;

  return `
    <article class="menu-card ${usePremiumCard ? "fine-sweet-card" : ""}" data-product="${product.id}">
      ${usePremiumCard ? `<span class="fine-sweet-number">${String(index + 1).padStart(2, "0")}</span>` : ""}
      <div class="menu-card-media">
        <img src="${product.image}" alt="${product.name}" style="object-fit: ${product.imageFit || "cover"}; object-position: ${product.imagePosition || "center"};" />
      </div>
      <div class="menu-card-body">
        <div class="badge-row">${(product.tags || []).filter((tag) => tag.toLowerCase() !== "canva").map((tag) => `<span class="badge">${tag}</span>`).join("")}</div>
        <div class="menu-card-title">
          <h3>${product.name}</h3>
          <button class="heart ${favorited ? "active" : ""}" type="button" data-favorite="${product.id}" aria-label="Favoritar ${product.name}">♡</button>
        </div>
        ${subtitle ? `<span class="fine-sweet-subtitle">${subtitle}</span>` : ""}
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
  return menuCategories;
}

function productsForMenu(list = products) {
  if (selectedCategory === "Todos") return list;
  return list.filter((product) => product.category === selectedCategory);
}

function renderCategoryTabs() {
  $("#categoryTabs").innerHTML = getCategories()
    .map((category) => `<button class="${category === selectedCategory ? "active" : ""}" type="button" data-category="${category}">${category}</button>`)
    .join("");
}

function renderProducts(list = products) {
  const menuProducts = productsForMenu(list);
  $("#menuTitle").textContent = selectedCategory === "Todos" ? "Cardápio completo" : selectedCategory;
  $("#menuCount").textContent = `${menuProducts.length} ${menuProducts.length === 1 ? "item" : "itens"}`;
  $("#menuProducts").innerHTML = menuProducts.length ? menuProducts.map(productCard).join("") : `<p>Nenhum produto nesta seleção.</p>`;
  renderCategoryTabs();
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

function whatsappLinkFromText(value) {
  const digits = value.replace(/\D/g, "");
  return digits ? `https://wa.me/55${digits.replace(/^55/, "")}` : "https://wa.me/";
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
  const heroEyebrow = $(".menu-cover .eyebrow");
  const heroTitle = $(".menu-cover h1");
  const heroText = $(".menu-cover p");
  if (heroImage) heroImage.src = storeSettings.heroImage || "assets/hero-cacaue.png";
  if (heroEyebrow) heroEyebrow.textContent = storeSettings.heroEyebrow || "Cardapio online";
  if (heroTitle) heroTitle.textContent = storeSettings.heroTitle || "Cacaue";
  if (heroText) heroText.textContent = storeSettings.heroText || "Bolos, doces, sobremesas, kits e presenteaveis feitos com carinho em Mineiros - GO.";

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
    updateStoreHeroPreview(storeSettings.heroImage || "assets/hero-cacaue.png");
  }

  if ($("#storeSettingsPreview")) {
    $("#storeSettingsPreview").innerHTML = [
      ["WhatsApp", storeSettings.whatsapp],
      ["Instagram", storeSettings.instagram],
      ["Cidade", storeSettings.city],
      ["Funcionamento", `${storeSettings.weekHours} / ${storeSettings.sundayHours}`],
      ["Pedidos", storeSettings.orderRule],
      ["Capa", storeSettings.heroTitle || "Cacaue"],
    ]
      .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
      .join("");
  }
}

function renderAdmin() {
  const subtotal = bag.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
  const pricedProducts = products.filter((product) => product.price > 0);
  const consultProducts = products.filter((product) => product.price <= 0);
  const madeToOrderProducts = products.filter((product) => product.madeToOrder);
  const categoriesCount = menuCategories.length - 1;

  $("#metricGrid").innerHTML = [
    ["Itens no cardapio", String(products.length)],
    ["Categorias", String(categoriesCount)],
    ["Consultar preço", String(consultProducts.length)],
    ["Valor na sacola", money.format(subtotal)],
  ]
    .map(([label, value]) => `<article class="metric-card"><span>${label}</span><strong>${value}</strong></article>`)
    .join("");

  $("#orderList").innerHTML = [
    ["#CAC-1027", "Retirada 16:00", "Kit Festa Mini", "R$ 99,00"],
    ["#CAC-1028", "Entrega", "Bolo de Festa 17cm", "R$ 145,00"],
    ["#CAC-1029", "Encomenda", "Doces personalizados", "Consultar"],
  ]
    .map(([id, type, item, value]) => `<div class="admin-row"><strong>${id}</strong><span>${type}</span><span>${item}</span><b>${value}</b></div>`)
    .join("");

  $("#adminCampaigns").innerHTML = campaigns.length
    ? campaigns
        .map(
          (campaign) => `
            <div class="admin-campaign-row">
              <img src="${campaign.image}" alt="${campaign.title}" />
              <div>
                <strong>${campaign.title}</strong>
                <p>${campaign.description}</p>
                <span>${campaign.starts} ate ${campaign.ends} - ${isCampaignActive(campaign) ? "Ativa" : "Fora do periodo"}</span>
              </div>
            </div>
          `,
        )
        .join("")
    : `<p>Nenhuma campanha cadastrada.</p>`;

  $("#pendingReviews").innerHTML = pendingReviews.length
    ? pendingReviews.map((review) => `<div class="admin-row"><strong>${review.name}</strong><span>Pendente</span></div>`).join("")
    : `<p>Nenhuma avaliação pendente.</p>`;

  $("#clientList").innerHTML = clients
    .map(([name, orders, last, total]) => `<div class="client-row"><div><strong>${name}</strong><p>${orders} · ${last}</p></div><b>${total}</b></div>`)
    .join("");

  renderAdminProducts();
  renderStoreSettings();
}

function renderAdminProducts() {
  const filter = $("#adminCategoryFilter");
  const list = $("#adminProductList");
  if (!filter || !list) return;

  filter.innerHTML = menuCategories.map((category) => `<option value="${category}">${category}</option>`).join("");
  filter.value = adminSelectedCategory;
  $("#productCategory").innerHTML = menuCategories
    .filter((category) => category !== "Todos")
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");
  if (!$("#productCategory").value) $("#productCategory").value = "Vitrine";

  const visibleProducts = adminSelectedCategory === "Todos" ? products : products.filter((product) => product.category === adminSelectedCategory);
  $("#adminProductCount").textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "item" : "itens"}`;
  list.innerHTML = visibleProducts
    .map(
      (product) => `
        <div class="admin-product-row">
          <img src="${product.image}" alt="${product.name}" style="object-fit: ${product.imageFit || "cover"}; object-position: ${product.imagePosition || "center"};" />
          <div>
            <strong>${product.name}</strong>
            <p>Status: ${product.available ? "Disponivel" : "Esgotado"}</p>
            <p>${product.category} · ${product.madeToOrder ? "Sob encomenda" : "Pronta entrega"} · mínimo ${product.minimum}</p>
          </div>
          <span>${product.price > 0 ? money.format(product.price) : "Consultar"}</span>
          <button class="text-button compact" type="button" data-edit-product="${product.id}">Editar produto</button>
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
  $("#bagSummary").classList.toggle("hidden", count === 0);
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
        <button type="button" data-qty="-1">−</button>
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
                <button type="button" data-bag="${product.id}" data-delta="-1">−</button>
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
    whatsapp: $("#customerWhatsapp").value.trim(),
    email: $("#customerEmail").value.trim(),
  };

  if (!customer.name || !customer.whatsapp || bag.length === 0) {
    $("#thanksBox").classList.remove("hidden");
    $("#thanksBox").textContent = "Informe nome, WhatsApp e adicione pelo menos um produto.";
    return;
  }

  const protocol = `CAC-${Date.now().toString().slice(-6)}`;
  const summary = bag
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return `${item.quantity}x ${product.name}`;
    })
    .join(", ");
  const subtotal = bagSubtotal();

  try {
    await supabaseJson("/orders", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify([
        {
          protocol,
          customer,
          items: bag.map((item) => {
            const product = products.find((entry) => entry.id === item.id);
            return {
              product_id: item.id,
              name: product?.name || item.id,
              quantity: item.quantity,
              price: product?.price || 0,
            };
          }),
          subtotal,
          delivery_fee: 0,
          total: subtotal,
          status: "novo",
        },
      ]),
    });
  } catch (error) {
    console.warn("Pedido ficou local porque o Supabase ainda nao aceitou o envio.", error);
  }

  bag = [];
  persist();
  renderBag();
  renderCounts();
  renderAdmin();
  $("#thanksBox").classList.remove("hidden");
  $("#thanksBox").textContent = `Pedido ${protocol} salvo. Mensagem para WhatsApp gerada: ${summary}.`;
}

function bindEvents() {
  document.body.addEventListener("click", (event) => {
    const productCardElement = event.target.closest("[data-product]");
    const favoriteButton = event.target.closest("[data-favorite]");
    const quickAddButton = event.target.closest("[data-quick-add]");
    const editProductButton = event.target.closest("[data-edit-product]");

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

    if (productCardElement) openProduct(productCardElement.dataset.product);
  });

  $("[data-close-modal]").addEventListener("click", closeProduct);
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
        "#admin-settings": "settings",
      }[href];
      if (!tab) return;
      event.preventDefault();
      showAdminTab(tab);
    });
  });
  $("#closeAdminButton").addEventListener("click", closeAdminPanel);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !$("#admin").classList.contains("hidden")) {
      closeAdminPanel();
    }
  });
  $("#adminLoginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    loginAdminSupabase($("#adminEmail").value, $("#adminPassword").value);
  });
  $("#adminLogoutButton").addEventListener("click", logoutAdmin);
  $("#productForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveProductFromForm();
  });
  $("#cancelProductEdit").addEventListener("click", resetProductForm);
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
    selectedCategory = "Todos";
    renderProducts(products.filter((product) => favorites.includes(product.id)));
  });
  $("#showFavoritesOnly").addEventListener("click", () => {
    selectedCategory = "Todos";
    renderProducts(products.filter((product) => favorites.includes(product.id)));
  });
  $("#showAllProducts").addEventListener("click", () => {
    selectedCategory = "Todos";
    renderProducts();
  });

  $("#categoryTabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    selectedCategory = button.dataset.category;
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
    campaigns.push({
      title: formData.get("title"),
      image: formData.get("image") || "assets/hero-cacaue.png",
      description: formData.get("description"),
      starts: formData.get("starts"),
      ends: formData.get("date"),
    });
    persistCampaigns();
    event.currentTarget.reset();
    $("#campaignImage").value = "assets/hero-cacaue.png";
    updateCampaignImagePreview("assets/hero-cacaue.png");
    renderCampaigns();
    renderAdmin();
    await saveCampaignsToSupabase();
  });
  $("#campaignImage").addEventListener("input", (event) => {
    updateCampaignImagePreview(event.target.value);
  });
  $("#campaignImageFile").addEventListener("change", async (event) => {
    const [file] = event.target.files;
    await applyImageFileToInput(file, "#campaignImage", updateCampaignImagePreview, { maxWidth: 1400, maxHeight: 1400 });
  });
  $("#storeHeroImage").addEventListener("input", (event) => {
    updateStoreHeroPreview(event.target.value);
  });
  $("#storeHeroImageFile").addEventListener("change", async (event) => {
    const [file] = event.target.files;
    await applyImageFileToInput(file, "#storeHeroImage", updateStoreHeroPreview, { maxWidth: 1600, maxHeight: 1100 });
  });
  $("#storeSettingsForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    storeSettings = {
      whatsapp: formData.get("whatsapp"),
      instagram: formData.get("instagram"),
      city: formData.get("city"),
      weekHours: formData.get("weekHours"),
      sundayHours: formData.get("sundayHours"),
      orderRule: formData.get("orderRule"),
      heroEyebrow: formData.get("heroEyebrow") || "Cardapio online",
      heroTitle: formData.get("heroTitle") || "Cacaue",
      heroText: formData.get("heroText") || "Bolos, doces, sobremesas, kits e presenteaveis feitos com carinho em Mineiros - GO.",
      heroImage: formData.get("heroImage") || "assets/hero-cacaue.png",
    };
    persistStoreSettings();
    renderStoreSettings();
    await saveStoreSettingsToSupabase();
    renderStoreSettings();
  });
}

function hydrateCustomer() {
  $("#customerName").value = customer.name || "";
  $("#customerWhatsapp").value = customer.whatsapp || "";
  $("#customerEmail").value = customer.email || "";
}

function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
}

function legacyShowInstallPrompt(isIosFallback = false) {
  if (isStandaloneApp() || localStorage.getItem("cacaue:installDismissed") === "true") return;
  const prompt = $("#installAppPrompt");
  if (!prompt) return;
  $("#installAppText").textContent = isIosFallback
    ? "No iPhone, toque em compartilhar e escolha Adicionar à Tela de Início."
    : "Acesse a vitrine mais rápido pela tela inicial.";
  $("#installAppButton").classList.toggle("hidden", isIosFallback);
  prompt.classList.remove("hidden");
}

function legacyHideInstallPrompt(remember = false) {
  $("#installAppPrompt")?.classList.add("hidden");
  if (remember) localStorage.setItem("cacaue:installDismissed", "true");
}

function legacySetupInstallApp() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch((error) => {
      console.warn("Service worker nao registrado.", error);
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
  setTimeout(() => {
    if (!deferredInstallPrompt && isIos) showInstallPrompt(true);
  }, 2500);
}

function showInstallPrompt(isManualFallback = false) {
  if (isStandaloneApp() || localStorage.getItem("cacaue:installDismissed") === INSTALL_PROMPT_VERSION) return;
  const prompt = $("#installAppPrompt");
  if (!prompt) return;
  $("#installAppText").textContent = isManualFallback
    ? "Toque no menu do navegador e escolha Instalar app ou Adicionar a tela inicial."
    : "Acesse a vitrine mais rapido pela tela inicial.";
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
      console.warn("Service worker nao registrado.", error);
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
