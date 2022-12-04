//Program of Collpsing and expanding menu
let collapseExpandMenuBtn = document.getElementById("collapse-expand-menu");
let collapsedMenu = document.querySelector(".menu-collapsed");
let expandedMenu = document.querySelector(".menu-expanded");
let body = document.body;

collapsedMenu.style.display = "block";
expandedMenu.style.display = "none";

collapseExpandMenuBtn.addEventListener("click", () => {
  if (collapsedMenu.style.display == "block") {
    collapsedMenu.style.display = "None";
    expandedMenu.style.display = "block";
    body.style.gridTemplateColumns = "200px 1fr";
  } else {
    collapsedMenu.style.display = "block";
    expandedMenu.style.display = "none";
    body.style.gridTemplateColumns = "70px 1fr";
  }
});

//Program of showing dots if characters are out of limit

let expandedListItem = document.querySelectorAll(".expanded-menu-list li span");

for (let i = 0; i <= expandedListItem.length; i++) {
  if (expandedListItem[i].innerText.length > 15) {
    let newItem = expandedListItem[i].innerText.slice(0, 15) + "...";
    expandedListItem[i].innerText = newItem;
  }
}
