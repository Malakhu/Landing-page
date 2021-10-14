//select all sections with class sec
const sec = document.querySelectorAll(".sec");
//select first  navbar with class navbar_menu
const nav = document.querySelector(".navbar_menu");

// function to dynamically add section names to the navbar and to navigate to the sections using anchors
// note value of id attribute is same as data-nav attribute
function buildNav() {
  for (let n = 0; n < sec.length; n++) {
    const name = sec[n].getAttribute("data-nav");
    let elem= document.createElement("li");
    nav.append(elem);
    //select list items inside the navbar
    const list = document.querySelectorAll("li");
    list[n].innerHTML = `<a href="#${name}">${name}</a>`
    //add navbar_items class to all list items in the navbar
    for (let x = 0; x < list.length; x++) {
     list[x].classList.add("navbar_items");
    }
  }
}
buildNav();
// smooth scrolling\
for (var i = 0; i <   document.querySelectorAll('a[href^="#"]').length; i++) {
  document.querySelectorAll('a[href^="#"]')[i].addEventListener('click', function (elm) {
          elm.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
}

//respond to scrolling by giving navbar active state for current section
document.addEventListener("scroll", function() {
  const scrollPos = document.body.scrollTop;
  let pos = 0;
  for (let i = 0; i < sec.length; i++) {
    // determining pos of current section
    pos += sec[i].offsetHeight;
    let secPos = sec[i].getBoundingClientRect().y;
    secPos - scrollPos <= 0 && secPos + pos >= scrollPos ? sec[i].classList.add("active") : sec[i].classList.remove("active")

  }
})

//    collapse sections 2-4 ()
const toggleHide = document.getElementsByClassName("collapse");
for (let i = 0; i < toggleHide.length; i++) {
  toggleHide[i].addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("hide");
  });
}
