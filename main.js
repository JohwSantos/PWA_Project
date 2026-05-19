import Pessoa from "./model/Pessoa.js";
import Aluno from "./model/Aluno.js";
import Usuario from "./model/Usuario.js";

let meuarraydeusuarios = [];
let u1 = new Usuario("JohwSantos", 1234);
let u2 = new Usuario("Gomes", 1111);


meuarraydeusuarios.push(u1, u2);



let p1 = new Pessoa("Jonathan", 28);
let a1 = new Aluno("Joao Paulo", 41, "DEV");

const formLogin = document.getElementById("formLogin");
if (formLogin) {
  formLogin.addEventListener("submit", event => {
    event.preventDefault();
    const nome = formLogin.nome.value.trim();
    const senha = formLogin.senha.value;
    const usuario = meuarraydeusuarios.find(u => u.nome === nome && u.senha == senha);
    if (usuario) {
      alert(`Bem-vindo, ${usuario.nome}!`);
    } else {
      alert("Usuário ou senha incorretos.");
    }
  });
}

window.addEventListener("load", () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./meuserviceworker.js')
      .then(function(registration){
        console.log('SW registrado', registration);
      })
      .catch(function(error){
        console.log('Erro ao registrar SW', error);
      });
  } else {
    console.log('Service Workers não são suportados');
  }
});

console.log(p1.nome);
console.log(a1.nome);