// JavaScript Document
console.log("hi");

const menuButton = document.querySelector("nav > ul > li:nth-of-type(3) > nav > button");
const deNav = document.querySelector("nav > ul > li:nth-of-type(3) > nav");
const zoekButton = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(2) > nav > button");
const zoekNav = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(2) > nav");
const sluitZoek = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(2) > nav > section > button");
const winkelButton = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(1) button");
const sluitWinkel = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(1) > section > section > div:nth-of-type(1) > img:nth-of-type(2)");
const winkelNav = document.querySelector("nav > ul:nth-of-type(1) > li:nth-of-type(1) > section");

menuButton.onclick = toggleMenu;
zoekButton.onclick = aanZoek;
sluitZoek.onclick = uitZoek;
winkelButton.onclick = aanWinkel;
sluitWinkel.onclick = uitWinkel;


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

