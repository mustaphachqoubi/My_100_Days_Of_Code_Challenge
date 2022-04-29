const hamburger = document.querySelector('.hamburger-container');
const lineOne = document.querySelector('.lineOne');
const lineTwo = document.querySelector('.lineTwo');
const lineThree = document.querySelector('.lineThree');


hamburger.addEventListener('click', () => {
    // lineTwo.style.background = 'transparent';
    lineOne.style.transform = 'rotate(45deg)'
    lineTwo.style.display = 'none';
    lineThree.style.transform = 'rotate(-45deg)'
})