'use strict';

const burgerBtn = document.querySelector('.burger');
const barsIcon = document.querySelector('.fa-bars');
const xIcon = document.querySelector('.fa-times');
const nav = document.querySelector('nav ul');

const handleNav = () => {
  nav.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  barsIcon.classList.toggle('hide');
  xIcon.classList.toggle('hide');
};

burgerBtn.addEventListener('click', handleNav);
