'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle('active'); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");

select.addEventListener("click", function ()  { elementToggleFunc("this"); });

// add event in all select items
for (let  i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item");

const filterFunc = function (selectedValue) {
    for (let  i = 0; i < filterItems.length; i++) {
        if (selectedValue == "all") {
            filterItems[i].classList.add("active");
        }else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        }else {
            filterItems[i].classList.remove("active");
            }
    }

}