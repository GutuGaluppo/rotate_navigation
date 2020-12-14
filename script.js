const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const navBar = document.querySelectorAll(".anchor");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});

navBar.forEach((el) => {
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const bgCircle = document.querySelector(".circle");

  el.addEventListener("click", () => {
    let element = el.innerText;
    console.log(element);
    switch (element) {
      case "HOME":
        home.classList.remove("hide");
        about.classList.add("hide");
        contact.classList.add("hide");
        bgCircle.style.background = "rgb(255, 121, 121)";
        break;
      case "ABOUT":
        home.classList.add("hide");
        contact.classList.add("hide");
        about.classList.remove("hide");
        bgCircle.style.background = "rgb(121, 121, 255)";
        break;
      case "CONTACT":
        home.classList.add("hide");
        about.classList.add("hide");
        contact.classList.remove("hide");
        bgCircle.style.background = "rgb(121, 255, 121)";
        break;
      default:
    }
    container.classList.remove("show-nav");
  });
});
