
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
const image = document.querySelector('.file-input');
const type = document.querySelector('.type')

function getUserInfo(){
  profile.innerText = `\n#${xiaogou.id}\n${xiaogou.userName}\n${xiaogou.email}`;
}
function getUserDetail(){
  detail.innerText = `\n${xiaogou.getInfo()}`;
}
document.getElementById("file-input").onchange = function() {
  message.innerText = `${(document.getElementById("file-input").files[0].name)}`;
}
function checkInput(input1, input2) {
  if (input1.value == '' && input2.value == '')
    return false;
}
button.addEventListener('click', () => {
  if (checkInput(type, image)) {
    let postBox = document.createElement('div');
    postBox.classList.add("grid");
    addPost(postBox, xiaogou);
    if (image.value != '')
      addImage(postBox, image);
  }
  type.innerText = '';
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
  let time = document.createElement('p');
  time.classList.add("time");
  time.innerText = `${now.toDateString()}`;
  infoBox.append(icon, name, time);
  let para = document.createElement('p');
  para.innerText = type.value;
  postBox.append(infoBox, para);
}
function addImage(postBox, img) {
  let file = img.files;
  let imgBox = document.createElement('div');
  imgBox.classList.add("image");
  imgBox.innerHTML = `<img src="${URL.createObjectURL(file)}" alt="image">`;
  postBox.append(imgBox);
}

getUserInfo();
getUserDetail();
