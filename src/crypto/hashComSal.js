import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

const hash = (password) => {
  const salt = randomBytes(16).toString("hex");
  const hashPass = scryptSync(password, salt, 64).toString("hex");
  return `${salt}---------${hashPass}`;
};

class User {
  constructor(name, password) {
    this.name = name;
    [this.sal, this.hash] = hash(password).split("---------");
  }
  authenticate(name, password) {
    if (this.name === name) {
      const [sal, hashPass] = hash(password).split("---------");
      const newHash = scryptSync(password, sal, 64).toString("hex");
      return timingSafeEqual(Buffer.from(hashPass), Buffer.from(newHash)); // se for igual retorna true
    }
  }
}

const usuario = new User("Digo", "dnsg494743@");
console.log(usuario.authenticate("Diogo", ""));
