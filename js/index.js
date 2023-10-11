const spans = document.querySelectorAll("span");
const select = document.querySelector(".select");
const first_page = document.querySelector(".first-page");
const thank_page = document.querySelector(".thank-page");
const button = document.querySelector(".cta");

spans.forEach(function (span) {
  span.addEventListener("click", () => {
    span.classList.toggle("clicked");
  });

  let rate = span.innerText;
  select.textContent = `You selected ${rate} out of 5`;
});

button.addEventListener("click", () => {
  first_page.classList.add("submit");
  thank_page.classList.add("show");
});
