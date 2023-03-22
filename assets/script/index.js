
/*
  OOP JavaScript
  Yuhan Zhao

*/

'use strict';

function menuToggle() {
  const toggleMenu = document.querySelector(".menu");
  toggleMenu.classList.toggle("active");
}
class User {
  #id;
  #name;
  #userName;
  #email;
  constructor(id, name, userName, email) {
    this.#id = id;
    this.#name = name;
    this.#userName = userName;
    this.#email = email;
  }
  get id() { return this.#id; } 
  get name() { return this.#name; } 
  get userName() { return this.#userName; }
  get email() { return this.#email; } 
  getInfo() {
    return `${this.#id} ${this.#userName}\n${this.#email}`;
  }
}
class Subscriber extends User {
  #pages;
  #group;
  #canMonetize;
  constructor(id, name, userName, email, pages, group, canMonetize) {
    super(id, name, userName, email);
    this.#pages = pages;
    this.#group = group;
    this.#canMonetize = canMonetize;
  }
  get pages() { return this.#pages; } 
  get group() { return this.#group; } 
  get canMonetize() { return this.#canMonetize; } 
  getInfo() {
    return `${this.#pages}\n${this.#group}`;
  }
}

const xiaogou = new Subscriber(
  '3456', 
  'XiaoGou', 
  "NuoMi's biggest fan", 
  'xiaogou@meow.com',
  'NuoMi is best!\nNuoMi No.1!\nNuoMi forever!',
  'NuoMi Fan Club',
  false
);

const message = document.querySelector('.message');
const button = document.querySelector('.post');
const profile = document.querySelector('.profile-2');
const detail = document.querySelector('.detail');
const board = document.querySelector('.board');
const image = document.querySelector('#file-input');
const type = document.querySelector('textarea')

function getUserInfo(){
  profile.innerText = `\n#${xiaogou.id}\n${xiaogou.userName}\n${xiaogou.email}`;
}
function getUserDetail(){
  detail.innerText = `\n${xiaogou.getInfo()}`;
}
document.getElementById("file-input").onchange = function() {
  message.innerText = `${(document.getElementById("file-input").files[0].name)}`;
}

function checkInput(type, image) {
  const curFiles = image.files;
  if (type.value == '' && curFiles.length === 0){
    return false;
  }
  return true;
}
button.addEventListener('click', () => {
  if (checkInput(type, image)) {
    let postBox = document.createElement('div');
    postBox.classList.add("div");
    addPost(postBox, xiaogou);
    addImage(postBox, image);
  }
  type.value = '';
  message.innerText = '';
  image.value = '';
})
function addPost(postBox, obj) {
  let infoBox = document.createElement('div');
  infoBox.classList.add("flex");
  let icon = document.createElement('div');
  icon.classList.add("icon");
  icon.innerHTML = `<img src="./assets/image/icon.jpeg">`;
  let name = document.createElement('p');
  name.classList.add("name");
  name.innerText = `${obj.userName}`;
  const now = new Date();
  let time = document.createElement('p');
  time.classList.add("time");
  time.innerText = `${now.toDateString()}`;
  infoBox.append(icon, name, time);
  let para = document.createElement('p');
  para.classList.add("para");
  para.innerText = type.value;
  postBox.append(infoBox, para);
  board.prepend(postBox);
}
function addImage(postBox, img) {
  let file = img.files;
  if (file.length != 0) {
    let imgBox = document.createElement('div');
    imgBox.classList.add("image");
    const tempImage = document.createElement('img');
    tempImage.src = URL.createObjectURL(img.files[0]);
    imgBox.append(tempImage);
    postBox.append(imgBox);
  }
}
getUserInfo();
getUserDetail();
