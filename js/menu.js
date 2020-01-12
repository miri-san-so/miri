//Logging down and up arrow key
    //current = document.getElementById("menuitem1");
    children = document.getElementsByClassName("menuitem");
    count = 0;
    children[count].focus();
    children[count].setAttribute("style", "  outline: 1px solid cyan;");
    children[count].style.animation = "pulseate2 1s infinite";
    children[count].firstElementChild.setAttribute(
              "style",
              "opacity : 1"
            );
    document.onkeydown = function (event) {
      if (count > 3) {
        count = 3;
      }
      if (count < 0) {
        count = 0;
      }
      console.log(children[count]);

      switch (event.keyCode) {
        case 38: // up key
          count = count - 1;
          children[count].focus();
          children[count].setAttribute("style", "  outline: 1px solid cyan;");
          children[count].style.animation = "pulseate2 1s infinite";
          children[count].firstElementChild.setAttribute(
            "style",
            "opacity : 1"
          );
          children[count + 1].setAttribute("style", "  outline: none");
          children[count + 1].firstElementChild.setAttribute(
            "style",
            "opacity : 0"
          );
          break;
        case 40: // down key
          count = count + 1;
          children[count].focus();
          children[count].setAttribute("style", "outline: 1px solid cyan;");
          children[count].style.animation = "pulseate2 1s infinite";
          children[count].firstElementChild.setAttribute(
            "style",
            "opacity : 1"
          );
          children[count - 1].firstElementChild.setAttribute(
            "style",
            "opacity : 0"
          );
          children[count - 1].setAttribute("style", "  outline: none;");
          break;
        case 13: //ENter key
          var link = children[count].children[1].children[0];
          console.log(link);
          link.click();
      }
    };