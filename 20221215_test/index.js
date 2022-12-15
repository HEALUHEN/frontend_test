let btnList = document.querySelectorAll(".btnList li");

btnList[0].addEventListener("click", function () {
  document.querySelector(".slideList").style.transform = "translate(0%)";
});
btnList[1].addEventListener("click", function () {
  document.querySelector(".slideList").style.transform = "translate(-100%)";
});
btnList[2].addEventListener("click", function () {
  document.querySelector(".slideList").style.transform = "translate(-200%)";
});
