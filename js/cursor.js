const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 20) + "px;left: " + (e.pageX - 20) + "px;"
  );
  cursor2.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px;left: " + (e.pageX - 10) + "px;"
  );
});
