const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");


let originalTransform = "translate(0, 0)";

yesBtn.addEventListener("click", () => {
  response.textContent = "YAYYY 💞 Best decision ever!!";
  response.classList.remove("hidden");


  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  noBtn.style.transform = originalTransform;
});
