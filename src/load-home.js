const home = document.querySelector("#home")

const title = document.createElement("h1")
title.textContent = "Pete's Pizza Parlor (est. 1434)"
home.appendChild(title)

const directions = document.createElement("p")
directions.textContent = "Located at the intersection of every freeway, we're just 10 minutes from you - wherever you are!"
home.appendChild(directions)