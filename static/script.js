document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname;
  let noHome = document.querySelector(".home");

  if (currentPage === "/") {
    if (noHome) {
      noHome.remove();
    }
  }
});
