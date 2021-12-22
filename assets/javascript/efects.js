const minusButton01 = document.querySelector('#nav__link-minus-01');
const minusButton02 = document.querySelector('#nav__link-minus-02');
const minusButton03 = document.querySelector('#nav__link-minus-03');
const minusButton04 = document.querySelector('#nav__link-minus-04');
const minusButton05 = document.querySelector('#nav__link-minus-05');
const minusButton06 = document.querySelector('#nav__link-minus-06');

const plusButton01 = document.querySelector('#nav__link-plus-01');
const plusButton02 = document.querySelector('#nav__link-plus-02');
const plusButton03 = document.querySelector('#nav__link-plus-03');
const plusButton04 = document.querySelector('#nav__link-plus-04');
const plusButton05 = document.querySelector('#nav__link-plus-05');
const plusButton06 = document.querySelector('#nav__link-plus-06');

const card01 = document.querySelector('#card-01');
const card02 = document.querySelector('#card-02');
const card03 = document.querySelector('#card-03');
const card04 = document.querySelector('#card-04');
const card05 = document.querySelector('#card-05');
const card06 = document.querySelector('#card-06');


plusButton01.addEventListener('click', showBlock01);
plusButton02.addEventListener('click', showBlock02);
plusButton03.addEventListener('click', showBlock03);
plusButton04.addEventListener('click', showBlock04);
plusButton05.addEventListener('click', showBlock05);
plusButton06.addEventListener('click', showBlock06);

minusButton01.addEventListener('click', hideBlock01);
minusButton02.addEventListener('click', hideBlock02);
minusButton03.addEventListener('click', hideBlock03);
minusButton04.addEventListener('click', hideBlock04);
minusButton05.addEventListener('click', hideBlock05);
minusButton06.addEventListener('click', hideBlock06);


function showBlock01(){
  minusButton01.classList.remove('nav__links-hide')
  plusButton01.classList.add('nav__links-hide')
  card01.classList.remove('card-hide')
}

function hideBlock01(){
  minusButton01.classList.add('nav__links-hide')
  plusButton01.classList.remove('nav__links-hide')
  card01.classList.add('card-hide')
}

function showBlock02(){
  minusButton02.classList.remove('nav__links-hide')
  plusButton02.classList.add('nav__links-hide')
  card02.classList.remove('card-hide')
}

function hideBlock02(){
  minusButton02.classList.add('nav__links-hide')
  plusButton02.classList.remove('nav__links-hide')
  card02.classList.add('card-hide')
}

function showBlock03(){
  minusButton03.classList.remove('nav__links-hide')
  plusButton03.classList.add('nav__links-hide')
  card03.classList.remove('card-hide')
}

function hideBlock03(){
  minusButton03.classList.add('nav__links-hide')
  plusButton03.classList.remove('nav__links-hide')
  card03.classList.add('card-hide')
}

function showBlock04(){
  minusButton04.classList.remove('nav__links-hide')
  plusButton04.classList.add('nav__links-hide')
  card04.classList.remove('card-hide')
}

function hideBlock04(){
  minusButton04.classList.add('nav__links-hide')
  plusButton04.classList.remove('nav__links-hide')
  card04.classList.add('card-hide')
}

function showBlock05(){
  minusButton05.classList.remove('nav__links-hide')
  plusButton05.classList.add('nav__links-hide')
  card05.classList.remove('card-hide')
}

function hideBlock05(){
  minusButton05.classList.add('nav__links-hide')
  plusButton05.classList.remove('nav__links-hide')
  card05.classList.add('card-hide')
}

function showBlock06(){
  minusButton06.classList.remove('nav__links-hide')
  plusButton06.classList.add('nav__links-hide')
  card06.classList.remove('card-hide')
}

function hideBlock06(){
  minusButton06.classList.add('nav__links-hide')
  plusButton06.classList.remove('nav__links-hide')
  card06.classList.add('card-hide')
}