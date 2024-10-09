import pizzaImg from './images/pizza.jpg'

const content = document.querySelector("#content")

const pizza = document.createElement("img")
pizza.src = pizzaImg
pizza.alt = "Pizza with all the fixings"
content.appendChild(pizza)

const title = document.createElement("h1")
title.textContent = "Pete's Pizza Parlor"
content.appendChild(title)

const desc = document.createElement("p")
desc.textContent = "Get your hot pizza! With all the fixings!"
content.appendChild(desc)