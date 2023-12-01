export default function hoverMenu() {
  document.querySelectorAll(".navigation-item").forEach((item) => {
    item.addEventListener("mouseover", function () {
      document.querySelector(".header-navigation__black").style.display =
        "block";
    });
  });

  document.querySelectorAll(".navigation-item").forEach((item) => {
    item.addEventListener("mouseout", function () {
      document.querySelector(".header-navigation__black").style.display =
        "none";
    });
  });
}
