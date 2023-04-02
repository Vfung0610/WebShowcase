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
  document.getElementById("meunBarLogo").addEventListener("click", () => {
    if (getComputedStyle(navElement).display == "block") {
      navElement.style.display = "none";
    } else {
      navElement.style.display = "block";
    }
  });

  //Nav Bar item clicked
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

  document.getElementById("navAllBooks").addEventListener("click", () => {
    window.scrollTo({
      top: document.getElementById("mainContent").offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
    if (window.innerWidth < 650) {
      navElement.style.display = "none";
    }
  });

  document.getElementById("navWhyUs").addEventListener("click", () => {
    window.scrollTo({
      top: document.getElementById("sideBar").offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
    if (window.innerWidth < 650) {
      navElement.style.display = "none";
    }
  });

  document.getElementById("navBookRecommendation").addEventListener("click", () => {
    window.scrollTo({
      top: document.getElementById("extraContent").offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
    if (window.innerWidth < 650) {
      navElement.style.display = "none";
    }
  });

  document.getElementById("navFeaturedBooks").addEventListener("click", () => {
    window.scrollTo({
      top: document.getElementById("relatedImages").offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
    if (window.innerWidth < 650) {
      navElement.style.display = "none";
    }
  });

  document.getElementById("navRecentEvent").addEventListener("click", () => {
    window.scrollTo({
      top: document.getElementById("relatedPosts").offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
    if (window.innerWidth < 650) {
      navElement.style.display = "none";
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
};
