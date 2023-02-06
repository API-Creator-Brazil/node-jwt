import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const mensagem = "Batata com açucar e melhor que batata com sal";
const chave = randomBytes(32);
const vi = randomBytes(16); // vetor de inicialização

const hash = ("aes256", chave, vi);
const mensagemCifrada =
  hash.update(mensagem, "utf8", "hex") + hash.final("hex");

console.log(mensagemCifrada);
