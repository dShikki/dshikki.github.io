console.log("index.js file is loaded correctly!");
function fade() {
	$(".preloader").fadeOut("slow");
}
setTimeout(fade, 3000);

$(".dropdown").hover(function () {
	$(".dropdown_content").toggleClass("show");
});

let btn = document.querySelector(".wrapper");

btn.addEventListener("click", () => {
  setTimeout(() => {
    btn.classList.add("load");
    btn.innerHTML = `<div class="loader"></div>`;
  }, 1000);

  setTimeout(() => {
    btn.classList.add("check");
    btn.innerHTML = `<div class="check"><i class="fas fa-check"></i></div>`;
  }, 4500);

  setTimeout(() => {
    btn.className = "wrapper";
    btn.innerHTML = `<div class="button anim">
    <i class="fas fa-download"></i>
    Download
  </div>`;
  }, 6000);
});