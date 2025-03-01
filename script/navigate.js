eventHandler("discover-new", function (e) {
    console.log(e, "navigate.js", 2);
    e.preventDefault();
    window.location.href = "./blog.html";
  });