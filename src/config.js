export const WHATSAPP_NUMBER = "5511999999999";
export const WHATSAPP_MESSAGE = "Olá! Quero indicar um cliente para a Five Delivery.";

export const getWhatsAppUrl = () => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
};

export const STEPS_DATA = [
  {
    number: "01",
    title: "Chame no WhatsApp",
    desc: "Diga quem é você e envie o contato do cliente que você quer indicar.",
    icon: "chat"
  },
  {
    number: "02",
    title: "A gente fecha",
    desc: "Nossa equipe entra em contato e apresenta a condição, com a Black Friday ativa.",
    icon: "users"
  },
  {
    number: "03",
    title: "Você ganha 1%",
    desc: "Fechou? Você recebe 1% sobre a fatura mensal do indicado.",
    icon: "coins"
  }
];

export const EARNINGS_DATA = [
  {
    height: "30%",
    value: "R$ 300",
    clients: "1 cliente"
  },
  {
    height: "50%",
    value: "R$ 900",
    clients: "3 clientes"
  },
  {
    height: "72%",
    value: "R$ 1.500",
    clients: "5 clientes"
  },
  {
    height: "100%",
    value: "R$ 3.000",
    clients: "10 clientes"
  }
];

export const RULES_DATA = [
  {
    text: "Vale sobre a fatura quinzenal ou mensal do indicado",
    badge: "1%"
  },
  {
    text: "A primeira indicação registrada é a que vale",
    symbol: "✓"
  },
  {
    text: "Sem limite de indicações",
    symbol: "∞"
  },
  {
    text: "Ganho enquanto o indicado rodar com a Five",
    symbol: "✓"
  }
];
