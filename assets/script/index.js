'use strict';

import { Subscriber } from "./Subscriber.js?v=1.1"

const avatar = document.querySelector(".ava-cls");
const inputSelimg = document.querySelector(".selpic-cls");
const textContent = document.querySelector(".form-content");
const imgSel = document.querySelector(".color-css");
const imgInfo = document.querySelector(".imgInfo-cls");
const submit = document.querySelector(".form-submit");
const cardsDiv = document.querySelector(".cards-div-cls");
const modalDiv = document.querySelector(".modal-cls");
const pUserName = document.querySelector(".uname-cls");
const pEmail = document.querySelector(".email-cls");


let imgData;
let subscriber;
const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jue", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

window.onload = function () {
    subscriber = new Subscriber();
    subscriber.id = "id2321";
    subscriber.name = "Jones";
    subscriber.userName = "Henry Jones";
    subscriber.email = "HenryJones@gmail.com";

    console.log(subscriber.getInfo());
}
avatar.onclick = function () {
    pUserName.innerHTML = `Username: ${subscriber.getInfo().userName}`;
    pEmail.innerHTML = `Email: ${subscriber.getInfo().email}`;
    if (modalDiv.style.display === "none") {
        modalDiv.style.display = "block";
    }
    else {
        modalDiv.style.display = "none";
    }
}
imgSel.onclick = function () {
    inputSelimg.click();
}
inputSelimg.onchange = function () {
    const file = this.files[0];
    imgInfo.innerHTML = file.name.trim();
    imgData = getObjectURL(file);

}
submit.onclick = function () {
    if (textContent.value.trim() === "") {
        alert("Please enter new content!");
        return false;
    }
    const div = createMsgCard();
    cardsDiv.appendChild(div);
    return false;
}
function createMsgCard() {
    console.log(subscriber.getInfo());
    //Create main div
    const divContainer = document.createElement("div");
    divContainer.classList.add("card-div-cls");

    //Create sub div header
    const divTitle = document.createElement("div");
    divTitle.classList.add("card-div-title-cls");
    const imgAva = document.createElement("img");//Create avatar
    imgAva.classList.add("card-ava-cls");
    imgAva.src = avatar.src;
    const pNickName = document.createElement("p"); //Create Nickname
    pNickName.innerHTML = subscriber.getInfo().userName;
    pNickName.classList.add("card-nickname-cls");
    const pTime = document.createElement("p"); //Create date
    pTime.innerHTML = `${monthArr[new Date().getMonth()]} ${new Date().getDate()}, ${new Date().getFullYear()}`;
    pTime.classList.add("card-time-cls");
    const divSub = document.createElement("div");
    divSub.classList.add("card-div-title-sub-cls");
    divSub.appendChild(imgAva);
    divSub.appendChild(pNickName);
    divTitle.appendChild(divSub); //Add to divTitle
    divTitle.appendChild(pTime);

    divContainer.appendChild(divTitle);//Add to divContainer

    //Create content
    const pContent = document.createElement("p");
    pContent.innerHTML = textContent.value;
    pContent.classList.add("card-content-cls");

    divContainer.appendChild(pContent);//Add to divContainer

    //Create img
    if (imgData !== undefined) {
        const imgContent = document.createElement("img");//Create avatar
        imgContent.classList.add("card-content-img-cls");
        imgContent.src = imgData;
        divContainer.appendChild(imgContent);//Add to divContainer
    }
    return divContainer;

}

function getObjectURL(file) {

    var url = null;


    if (window.createObjectURL != undefined) { // basic

        url = window.createObjectURL(file);

    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);

    } else if (window.webkitURL != undefined) { // webkit or chrome

        url = window.webkitURL.createObjectURL(file);

    }

    return url;

}