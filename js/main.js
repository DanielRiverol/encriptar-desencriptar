console.log("hola tarola");
//variables globales
const textMessage = document.querySelector("#plain-text"),
  textEncrypt = document.querySelector("#encrypt-text"),
  btnEncrypt = document.querySelector(".btn.btn-encrypt");

console.log(textEncrypt, textMessage);

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */
//funciones
const encrypt = (message) => {
  for (let i = 0; i < message.length; i++) {
    if (message[i].indexOf("a") !== -1) {
      message = message.replace("a", "ai");
    }
   
  }
  return message;
};
console.log(encrypt("esta"));
