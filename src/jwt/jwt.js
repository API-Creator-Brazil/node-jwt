import jwt from "jsonwebtoken";

const key = "Banana com açucar e melhor que batata com sal";

const teste = jwt.sign({ id: 1, name: "DIogo Almeida" }, key, {
  expiresIn: "300ms",
});

console.log(teste);

const verify = jwt.verify(teste, key);
if (verify.exp) {
  console.log("Token inválido");
}
console.log(verify);
