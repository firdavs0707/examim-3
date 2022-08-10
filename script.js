let elForm = document.querySelector('.form')
let elFormRadio = document.querySelector('.form-radio')
let body = document.querySelector('body');
let elSelect = document.querySelector('.hero__select');
let resultForBread = document.querySelector('.result');
let resultForSize = document.querySelector('.resultForSize');
let radio25 = document.querySelector('.size1-input');
let radio30 = document.querySelector('.size2-input')
let radio35 = document.querySelector('.size3-input')
let radio1 = document.querySelector('.radio1');
let radio2 = document.querySelector('.radio2')
let radio3 = document.querySelector('.radio3')
elForm.addEventListener('click', function(evt){
  evt.preventDefault();

  if (elSelect.value == 'Small') {
    resultForBread.textContent = 'Yupqa';
  } else if (elSelect.value == 'Medium') {
    resultForBread.textContent = `O'rtacha`;
  } else if (elSelect.value == 'Big') {
    resultForBread.textContent = 'Qalin';
  }
})

radio1.addEventListener('click', function(evt){
  evt.preventDefault();
  if (radio1.checked == true) {
    resultForSize.textContent = '';
    resultForSize.textContent = radio25.textContent;
  }
})

radio2.addEventListener('click', function(evt){
  evt.preventDefault();
  if (radio2.checked == true) {
    resultForSize.textContent = '';
    resultForSize.textContent = radio30.textContent;
  }
})

radio3.addEventListener('click', function(evt){
  evt.preventDefault();
  if (radio3.checked == true) {
    resultForSize.textContent = '';
    resultForSize.textContent = radio35.textContent;
  }
})

let formCheckbox = document.querySelector('.form-checkbox');
let list = document.querySelector('.list');
let createLi1 = document.createElement('li');
let createLi2 = document.createElement('li');
let createLi3 = document.createElement('li');
let createLi4 = document.createElement('li');
let createLi5 = document.createElement('li');
let createLi6 = document.createElement('li');
let box1 = document.querySelector('.checkbox1');
let box2 = document.querySelector('.checkbox2');
let box3 = document.querySelector('.checkbox3');
let box4 = document.querySelector('.checkbox4');
let box5 = document.querySelector('.checkbox5');
let box6 = document.querySelector('.checkbox6');
let pomidor = '- pomidor';
let Kurka = '- kurka goshti';
let zaytun = '- zaytun';
let TuzlanganBodiring = '- tuzlangan bodiring';
let Qoziqorin = '- qoziqorin';
let qazi = '- qazi';

box1.addEventListener('change', function(event){
  event.preventDefault();

  if (box1.checked == true) {
    createLi1.textContent = pomidor;
    list.appendChild(createLi1);
  } else if (box1.checked == false) {
    list.removeChild(createLi1);
  }
})

box2.addEventListener('change', function(event){
  event.preventDefault();

  if (box2.checked == true) {
    createLi2.textContent = Kurka;
    list.appendChild(createLi2);
  } else if (box2.checked == false) {
    list.removeChild(createLi2);
  }
})

box3.addEventListener('change', function(event){
  event.preventDefault();

  if (box3.checked == true) {
    createLi3.textContent = zaytun;
    list.appendChild(createLi3)
  } else if (box3.checked == false) {
    list.removeChild(createLi3);
  }
})

box4.addEventListener('change', function(event){
  event.preventDefault();

  if (box4.checked == true) {
    createLi4.textContent = TuzlanganBodiring;
    list.appendChild(createLi4)
  } else if (box4.checked == false) {
    list.removeChild(createLi4);
  }
})

box5.addEventListener('change', function(event){
  event.preventDefault();

  if (box5.checked == true) {
    createLi5.textContent = Qoziqorin;
    list.appendChild(createLi5)
  } else if (box5.checked == false) {
    list.removeChild(createLi5);
  }
})

box6.addEventListener('change', function(event){
  event.preventDefault();

  if (box6.checked == true) {
    createLi6.textContent = qazi;
    list.appendChild(createLi6)
  } else if (box6.checked == false) {
    list.removeChild(createLi6);
  }
})

let createLiSpice = document.createElement('li');
let createLiSausage = document.createElement('li');
let extraBox1 = document.querySelector('.checkboxExtra1');
let extraBox2 = document.querySelector('.checkboxExtra2');
let extraList = document.querySelector('.list-extra')
let spice = '- achchiq';
let sausage = '- sasiskali'
extraBox1.addEventListener('change', function(event){
  event.preventDefault();

  if (extraBox1.checked == true) {
    createLiSausage.textContent = spice;
    extraList.appendChild(createLiSausage)
  } else if (extraBox1.checked == false) {
    extraList.removeChild(createLiSausage);
  }
})

extraBox2.addEventListener('change', function(event){
  event.preventDefault();

  if (extraBox2.checked == true) {
    createLiSpice.textContent = sausage;
    extraList.appendChild(createLiSpice)
  } else if (extraBox2.checked == false) {
    extraList.removeChild(createLiSpice);
  }
})