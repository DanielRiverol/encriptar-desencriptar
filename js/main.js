//Variables globales
const textMessage = document.querySelector("#plain-text"),
  textEncrypt = document.querySelector("#encrypt-text"),
  btnEncrypt = document.querySelector(".btn.btn-encrypt"),
  btnDecrypt = document.querySelector(".btn.btn-decrypt"),
  btnCopy = document.querySelector(".btn-copy");
textMessage.value = "";
textEncrypt.value = "";

//Funciones

function encrypt(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function decrypt(texto) {
  return texto
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}
const validar = (input) => {
  return input.value !== ""
    ? input.value
    : input.setAttribute("placeholder", "No hay texto para mostrar");
};
const copyToClipboard = (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject("API Clipboard no disponible.");
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
