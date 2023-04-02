window.onload = () => {
  let navElement = document.querySelector("nav ul");

  //When screen size change from mobile to desktop, change nav bar from menu to bar
  window.addEventListener("resize", () => {
    if (window.innerWidth < 650) {
      navElement.style.display = "none";
    } else {
      navElement.style.display = "flex";
    }
  });

  //Show or Hide Menu when menu icon is clicked
  document.getElementById("menuLogo").addEventListener("click", () => {
    if (getComputedStyle(navElement).display == "block") {
      navElement.style.display = "none";
    } else {
      navElement.style.display = "block";
    }
  });

  //Form Submit
  document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    if (document.querySelector('input[name="name"]').value != "" && document.querySelector('input[name="email"]').value != "") {
      alert("Form Submitted!");
    } else {
      document.querySelectorAll(".popUpMsg").forEach((e) => {
        e.style.visibility = "visible";
      });
    }
  });

  //Nav Bar item clicked
  document.getElementById("scrollToTopButton").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  document.getElementById("navHome").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (window.innerWidth < 650) {
      navElement.style.display = "none";
    }
  });

  document.getElementById("navTrousers").addEventListener("click", () => {
    window.scrollTo({
      top: document.getElementById("trousers").offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
    if (window.innerWidth < 650) {
      navElement.style.display = "none";
    }
  });

  document.getElementById("navTShirt").addEventListener("click", () => {
    window.scrollTo({
      top: document.getElementById("tShirt").offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
    if (window.innerWidth < 650) {
      navElement.style.display = "none";
    }
  });

  document.getElementById("navContact").addEventListener("click", () => {
    window.scrollTo({
      top: document.getElementById("contact").offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
    if (window.innerWidth < 650) {
      navElement.style.display = "none";
    }
  });
};
