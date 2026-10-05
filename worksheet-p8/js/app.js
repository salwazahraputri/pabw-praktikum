const tombolTema = document.getElementById("tombolTema");

tombolTema.addEventListener("click", function () {
  document.documentElement.classList.toggle("tema-gelap");

  if (document.documentElement.classList.contains("tema-gelap")) {
    tombolTema.textContent = "Tema terang";
  } else {
    tombolTema.textContent = "Tema gelap";
  }
});