const mensagem = "Alura";
// console.log(mensagem);

const cifra = (msg, crypto) => {
  const teste = msg.split("").map((letra) => {
    const codigoCaractere = letra.charCodeAt(0);
    return String.fromCharCode(codigoCaractere + crypto);
  });
  return teste.join("");
};

const msgCifra = cifra(mensagem, 4);
console.log(msgCifra);

const desCifra = (msg, crypto) => {
  const teste = msg.split("").map((letra) => {
    const codigoCaractere = letra.charCodeAt(0);
    return String.fromCharCode(codigoCaractere - crypto);
  });
  return console.log(teste.join(""));
};

const desCifrada = desCifra(msgCifra, 5);
