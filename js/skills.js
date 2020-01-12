const info_span = document.querySelector(".skill_info");
const help_text = document.querySelector(".content_help_text");
const info = document.querySelector(".info");

const html = document.querySelector(".html_pic");
const css = document.querySelector(".css_pic");
const js = document.querySelector(".js_pic");
const scss = document.querySelector(".scss_pic");
const mongo = document.querySelector(".mongo_pic");
const django = document.querySelector(".django_pic");
const python = document.querySelector(".python_pic");

html.addEventListener("mouseover", show => {
  html.setAttribute("style", "border: 1px solid cyan");
  info.setAttribute("style", "box-shadow: 0 0 50px rgb(6, 3, 26);");
  help_text.setAttribute("style", "display: none;");
  info_span.setAttribute("style", "display: visible;");
  info_span.innerHTML =
    "<h1>HTML5</h1><br><br><h3>One of my Superpowers for creating fabulous peices of art.</h3>";
});
html.addEventListener("mouseout", show => {
  html.setAttribute("style", "border: none");
  info.setAttribute("style", "");
  help_text.setAttribute("style", "display: visible;");
  info_span.setAttribute("style", "display: none;");
});

// for css
css.addEventListener("mouseover", show => {
  css.setAttribute("style", "border: 1px solid cyan");

  info.setAttribute("style", "box-shadow: 0 0 50px rgb(6, 3, 26);");

  help_text.setAttribute("style", "display: none;");
  info_span.setAttribute("style", "display: visible;");
  info_span.innerHTML =
    "<h1>CSS3</h1><br><br><h3>pretty good at it, can do animations, custom cursors and other cool stuff with it.</h3>";
});
css.addEventListener("mouseout", show => {
  css.setAttribute("style", "border: none");

  info.setAttribute("style", "");

  help_text.setAttribute("style", "display: visible;");
  info_span.setAttribute("style", "display: none;");
});

// for js
js.addEventListener("mouseover", show => {
  js.setAttribute("style", "border: 1px solid cyan");

  info.setAttribute("style", "box-shadow: 0 0 50px rgb(6, 3, 26); ");

  help_text.setAttribute("style", "display: none;");
  info_span.setAttribute("style", "display: visible;");
  info_span.innerHTML =
    "<h1>JavaScript</h1><br><br><h3>Haven't mastered it yet, but working on it</h3>";
});
js.addEventListener("mouseout", show => {
  info.setAttribute("style", "");
  js.setAttribute("style", "border: none");

  help_text.setAttribute("style", "display: visible;");
  info_span.setAttribute("style", "display: none;");
});

// for scss
scss.addEventListener("mouseover", show => {
  scss.setAttribute("style", "border: 1px solid cyan");

  info.setAttribute("style", "box-shadow: 0 0 50px rgb(6, 3, 26);");

  help_text.setAttribute("style", "display: none;");
  info_span.setAttribute("style", "display: visible;");
  info_span.innerHTML =
    "<h1>SASS</h1><br><br><h3>Beast of a Pre-Processor,Still trying to master it.</h3>";
});
scss.addEventListener("mouseout", show => {
  info.setAttribute("style", "");
  scss.setAttribute("style", "border: none");
  help_text.setAttribute("style", "display: visible;");
  info_span.setAttribute("style", "display: none;");
});

// for mongo
mongo.addEventListener("mouseover", show => {
  mongo.setAttribute("style", "border: 1px solid cyan");

  info.setAttribute("style", "box-shadow: 0 0 50px rgb(6, 3, 26);");

  help_text.setAttribute("style", "display: none;");
  info_span.setAttribute("style", "display: visible;");
  info_span.innerHTML =
    "<h1>mongoDB</h1><br><br><h3>HATED Databses after learning about SQL but mongoDB Brought me back to reality and I have been using mongoDB for most of my projects</h3>";
});
mongo.addEventListener("mouseout", show => {
  info.setAttribute("style", "");
  mongo.setAttribute("style", "border: none");
  help_text.setAttribute("style", "display: visible;");
  info_span.setAttribute("style", "display: none;");
});

// for django
django.addEventListener("mouseover", show => {
  django.setAttribute("style", "border: 1px solid cyan");

  info.setAttribute("style", "box-shadow: 0 0 50px rgb(6, 3, 26);");

  help_text.setAttribute("style", "display: none;");
  info_span.setAttribute("style", "display: visible;");
  info_span.innerHTML =
    "<h1>Django</h1><br><br><h3>While doing python my love of webdesign dragged me into this beautiful framework</h3>";
});
django.addEventListener("mouseout", show => {
  info.setAttribute("style", "");
  django.setAttribute("style", "border: none");
  help_text.setAttribute("style", "display: visible;");
  info_span.setAttribute("style", "display: none;");
});

// for python
python.addEventListener("mouseover", show => {
  python.setAttribute("style", "border: 1px solid cyan");

  info.setAttribute("style", "box-shadow: 0 0 50px rgb(6, 3, 26);");

  help_text.setAttribute("style", "display: none;");
  info_span.setAttribute("style", "display: visible;");
  info_span.innerHTML =
    "<h1>Python</h1><br><br><h3>Fell in love with it during my second year of graduation and have been doing it since</h3>";
});
python.addEventListener("mouseout", show => {
  info.setAttribute("style", "");
  python.setAttribute("style", "border: none");
  help_text.setAttribute("style", "display: visible;");
  info_span.setAttribute("style", "display: none;");
});

// PROJECTS PAGE
const project_info = document.querySelector(".project_info_span");
const elon = document.querySelector(".project_elon");
const daquest = document.querySelector(".project_daquest");
const zelig = document.querySelector(".project_zelig");
const ozone = document.querySelector(".project_ozone");
const pricechecker = document.querySelector(".project_pricechecker");


// elon sama
elon.addEventListener("mouseover", e => {
  console.log("hello there");
  project_info.setAttribute("style", "opacity: 1;");
  project_info.innerHTML = "Python Based Project. The main motive it to collect and analyze the amount of work a user does.It uses mongoDB as backend and also stores data into and excel file, matplotlib is used to display graphs";
});
elon.addEventListener("mouseout", f => {
  project_info.setAttribute("style", "opacity: 0;");
});

// daquest
daquest.addEventListener("mouseover", e => {
  console.log("hello there");
  project_info.setAttribute("style", "opacity: 1;");
  project_info.innerHTML = "It is a website created using Django, it can post Daily Questions for people to solve. There is a comment section for people to engage and the database used was mySQL.";
});
daquest.addEventListener("mouseout", f => {
  project_info.setAttribute("style", "opacity: 0;");
});

// zelig
zelig.addEventListener("mouseover", e => {
  console.log("hello there");
  project_info.setAttribute("style", "opacity: 1;");
  project_info.innerHTML = "Its a voice controlled To-Do list python program. Uses Google Text to Speech for user input and creates To-Do lists for user. Does not have a GUI";
});
zelig.addEventListener("mouseout", f => {
  project_info.setAttribute("style", "opacity: 0;");
});

// ozone
ozone.addEventListener("mouseover", e => {
  console.log("hello there");
  project_info.setAttribute("style", "opacity: 1;");
  project_info.innerHTML = "Inspired by U2F keys this Python project created with my friend which can encrypt the files with .ozone extension which can only be decrypted using a USB Key.";
});
ozone.addEventListener("mouseout", f => {
  project_info.setAttribute("style", "opacity: 0;");
});

// price check
pricechecker.addEventListener("mouseover", e => {
  console.log("hello there");
  project_info.setAttribute("style", "opacity: 1;");
  project_info.innerHTML = "Python Program that helps you keep a track of price for products on Flipkart. Sends an email to the user about the price drop. made GUI using Tkinter.";
});
pricechecker.addEventListener("mouseout", f => {
  project_info.setAttribute("style", "opacity: 0;");
});