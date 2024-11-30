//cotacao de moedas do dia
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;
//obtendo os elementos do formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result")

//manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

//capturando o evento de submit (enviar) do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(currency.value);

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
});

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    //fazendo a conta e exibindo o resultado total
    let total = amount*price

    if(isNaN(total)){
      return alert('Por favor digite o valor corretamente para converter')
    }

    result.textContent = formatCurrencyBRL(total).replace("R$", "")
    //aplica a classe que exibe o footer com o resultado
    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);
    footer.classList.remove("show-result");
    alert("Não foi possivel converter, tente novamente mais tarde.");
  }
}

//formata a moeda em real brasileiro
function formatCurrencyBRL(value){
  //converte para numero para usar o localestring e formatar no padrao brl
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
}