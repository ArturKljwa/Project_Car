'use strict'
// Create Tab
const tabItems = document.querySelectorAll('.tabs__btn-item');
const tabContents = document.querySelectorAll('.tabs__content_item');

tabItems.forEach(function(element) {
    element.addEventListener('click', open)
})
function open (evt) {
    const tabTarget = evt.currentTarget;
    console.log(tabTarget);
    const button = tabTarget.dataset.button;
    console.log(button);
    tabItems.forEach(function(item) {
        item.classList.remove('tabs__btn-item-active')
    })
    tabContents.forEach(function(item) {

        item.classList.remove('tabs__content_item_active')
    })
    tabTarget.classList.add('tabs__btn-item-active');
    document.querySelector(`#${button}`).classList.add('tabs__content_item_active')
}

// Hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation-mobile'),
    menuItem = document.querySelectorAll('.navigation-mobile__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation-mobile_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navigation-mobile_active');
        })
    })
})

