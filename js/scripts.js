var acc = document.getElementsByClassName("faq-question");
console.log(acc);

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    console.log(this.children);
    this.firstElementChild.classList.toggle("active");
    let faq = this.nextElementSibling;
    if (faq.style.maxHeight) {
      faq.style.maxHeight = null;
    } else {
      faq.style.maxHeight = faq.scrollHeight + "px";
    }
  });
}
