//Variables globales
const textMessage = document.querySelector("#plain-text"),
  textEncrypt = document.querySelector("#encrypt-text"),
  btnEncrypt = document.querySelector(".btn.btn-encrypt"),
  btnDecrypt = document.querySelector(".btn.btn-decrypt"),
  btnCopy = document.querySelector(".btn-copy");
textMessage.value = "";
textEncrypt.value = "";

//Funciones
const encrypt = (message) => {
  if (message.indexOf("e") !== -1) {
    message = message.replaceAll("e", "enter");
  }
  if (message.indexOf("i") !== -1) {
    message = message.replaceAll("i", "imes");
  }
  if (message.indexOf("a") !== -1) {
    message = message.replaceAll("a", "ai");
  }
  if (message.indexOf("o") !== -1) {
    message = message.replaceAll("o", "ober");
  }
  if (message.indexOf("u") !== -1) {
    message = message.replaceAll("u", "ufat");
  }

  return message;
};
const decrypt = (message) => {
  if (message.indexOf("ai") !== -1) {
    message = message.replaceAll("ai", "a");
  }
  if (message.indexOf("enter") !== -1) {
    message = message.replaceAll("enter", "e");
  }
  if (message.indexOf("imes") !== -1) {
    message = message.replaceAll("imes", "i");
  }
  if (message.indexOf("ober") !== -1) {
    message = message.replaceAll("ober", "o");
  }
  if (message.indexOf("ufat") !== -1) {
    message = message.replaceAll("ufat", "u");
  }

  return message;
};
const validar = (input) => {
  return input.value !== ""
    ? input.value
    : input.setAttribute("placeholder", "No hay texto para mostrar");
};
const copyToClipboard = (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject(" API Clipboard no disponible.");
};

//Eventos
btnEncrypt.addEventListener("click", () => {
  validar(textMessage);
  let encryptCode = encrypt(textMessage.value);
  textEncrypt.value = encryptCode;
  textMessage.value = "";
});
btnDecrypt.addEventListener("click", () => {
  validar(textEncrypt);
  let decryptCode = decrypt(textEncrypt.value);
  textMessage.value = decryptCode;
  textEncrypt.value = "";
});
btnCopy.addEventListener("click", () => {
  copyToClipboard(textEncrypt.value);
});
