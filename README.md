# Landing-page
Landing page for a dental clinic
##Index:
project title
Overview
built-with
my-process
section-I-am-proud-of
what-i-learned


##project title
 Landing page for a dental clinic
## overview
This project consists of 4 sections (home, offers, about, contact) .
HOME: has a dental image and title to give  clue on the page aim
OFFERS: offers made by the clinic
ABOUT: some info about the clinic
CONTACT: form so that the client can contact the clinic through the page
The main aim of the project is to create an automatically updating navbar as sections are added to a the landing page.
The navbar elements respond to scrolling by having an active state to navbar item corresponding to the needed section.
The last 3 sections are collapsible ( can be hidden);
## built-with
The project is built with:
html: index.html which has the main content of the page
css: styles.css determines the styling of the page
javascript: app.js which determines the behavior of the page
css grid
flex box
##my-process
I started by adding the content to my html file, followed by linking the stylesheet and script files to it.
After adding all the content, I styled the page using an external stylesheet.
proceeding styling was completed, I started giving my pages some functionality by manipulating the DOM using javascript.

{Manipulating the DOM:
Building navbar: I created a function (buildNav) which fills the navbar automatically as sections are added using the id and data-nav attributes.

Give active states: I added an event listener to listen to page scrolls hence can determine which section is currently being viewed and give the navbar an active state accordingly.

Hiding the navbar: I added an event listener to hide navbar when the user is not scrolling

Allow collapsible sections: Allow the sections to be collapsible on clicking
##section-I-am-proud-of
app.js:
(document.addEventListener("scroll", function() {
  const scrollPos = document.body.scrollTop;
  let pos = 0;
  for (let i = 0; i < sec.length; i++) {
    // determining pos of current section
    pos+=sec[i].offsetHeight ;
    let secPos = sec[i].getBoundingClientRect().y;
    secPos - scrollPos <= 0 && secPos + pos >= scrollPos ? list[i].classList.add("active") : list[i].classList.remove("active")
    }
  });)
This code was the most challenging for me to build
##what-i-learned
I learned how to make sections collapsible using css and improved by javascript skills by searching through the web.
## author
This project is made by Malak Hussien Abdelbary
email: mlk.hussien13@gmail.com
## GitHub repository link
