window.onload = function() {
  // business logic
  const buttonDark = document.querySelector("button.button-dark");
  const buttonLight = document.querySelector("button.button-light");
  const largeFont = document.querySelector("button.button-lgfont");
  const mediumFont = document.querySelector("button.button-mdfont")
  const body = document.querySelector("body");

  // ui logic
  buttonDark.onclick = function darkTheme() {
    body.style.backgroundColor = "navy";
    body.style.color = "white";
  }

  buttonLight.onclick = function lightTheme() {
    body.style.backgroundColor = "";
    body.style.color = "";
  }

  largeFont.onclick = function largeText() {
    body.style.fontSize = "30px";
    body.style.lineHeight = "40px";
  }

  mediumFont.onclick = function mediumText() {
    body.style.fontSize = "";
    body.style.lineHeight = "";
  }
}