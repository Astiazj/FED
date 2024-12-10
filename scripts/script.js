// JavaScript Document
console.log("hi");

const menuButton = document.querySelector("nav > ul > li:nth-of-type(3) > nav > button");
const deNav = document.querySelector("nav > ul > li:nth-of-type(3) > nav");
const zoekButton = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(2) > nav > button");
const zoekNav = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(2) > nav");
const sluitZoek = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(2) > nav > section > button");
const winkelButton = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(1) > section > button:nth-of-type(1)");
const sluitWinkel = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(1) > section > section > button > img");
const winkelNav = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(1) > section");
const rechtsButton = document.querySelector("main > section:nth-of-type(2) > section > button:nth-of-type(2)");
const linksButton = document.querySelector("main > section:nth-of-type(2) > section > button:nth-of-type(1)");
const artikelList = document.querySelector("main > section:nth-of-type(2) > section > ul");

menuButton.onclick = toggleMenu;
zoekButton.onclick = aanZoek;
sluitZoek.onclick = uitZoek;
winkelButton.onclick = aanWinkel;
sluitWinkel.onclick = uitWinkel;
rechtsButton.onclick = gaVolgende;
linksButton.onclick = gaTerug;


function toggleMenu() {
    deNav.classList.toggle("toonMenu");
}

function aanZoek() {
    zoekNav.classList.add("toonZoek");
}

function uitZoek() {
    zoekNav.classList.remove("toonZoek");
}

function aanWinkel() {
    winkelNav.classList.add("toonWinkel");
}

function uitWinkel() {
    winkelNav.classList.remove("toonWinkel");
}

function gaVolgende() {
    artikelList.scrollLeft = artikelList.scrollLeft + artikelList.offsetWidth;
}

function gaTerug() {
    artikelList.scrollLeft = artikelList.scrollLeft - artikelList.offsetWidth;
}


