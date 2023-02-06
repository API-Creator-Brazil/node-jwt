import { createHash } from "crypto";

const hash = (algorithm) => {
  return createHash("sha256").update(algorithm).digest("hex");
};

const hash1 = hash("Diogo");
console.log(hash1);

class User {
  constructor(name, password) {
    this.name = name;
    this.hash = hash(password);
  }
  authenticate(name, password) {
    if (this.name === name && this.hash === hash(password)) {
      console.log("Usuário autenticado");
      return true;
    } else {
      console.log("Usuário não autenticado");
      return false;
    }
  }
}

const usuario = new User("Diogo", "dnsg494743@");
console.log(usuario);
usuario.authenticate("Diogo", "dnsg494743");
