list = document.querySelector("#list");
field = document.querySelector("#field");
addButton = document.querySelector("#addButton");
clearButton = document.querySelector("#clearButton");

if (localStorage.getItem("items") == null) {
    items = []
    localStorage.setItem("items", JSON.stringify(items))
} else {
    items = JSON.parse(localStorage.getItem("items"));
}

function displayList() {
    list.innerHTML = ""
    for (let i = 0; i<items.length; i++) {
        let newItem = document.createElement("li");
        let newImg = document.createElement("img");
        newImg.setAttribute("src","pics/Circles/" + items[i][1] + ".png");
        newImg.setAttribute("height", "20px");
        newImg.setAttribute("width", "20px");
        newImg.setAttribute("id", "status");
        let newTextSpan = document.createElement("p");
        newTextSpan.setAttribute("id", "text-span");
        newTextSpan.appendChild(document.createTextNode(items[i][0]));
        deleteButton = document.createElement("img");
        deleteButton.setAttribute("src", "pics/Icons/X.png");
        deleteButton.setAttribute("id","delete-button");
        deleteButton.setAttribute("height", "10px");
        deleteButton.setAttribute("width","10px");
        newItem.appendChild(newImg);
        newItem.appendChild(newTextSpan);
        newItem.appendChild(deleteButton);
        list.appendChild(newItem);
    }
    allBullets = document.querySelectorAll("#status");
    for (let n=0; n<allBullets.length; n++) {
        allBullets[n].addEventListener("click", change)
    }
    allDeleteButtons = document.querySelectorAll("#delete-button");
    for (let i=0; i<allDeleteButtons.length; i++) {
        allDeleteButtons[i].addEventListener("click", function () {
            allDeleteButtons[i].parentElement.remove();
            for (let k=0; k<items.length; k++) {
                if (items[k][0] == allDeleteButtons[i].parentElement.querySelector("#text-span").innerText) {
                    items.splice(k,1);
                    localStorage.setItem("items", JSON.stringify(items));
                }
            }
        })
    }
    allListItems = document.querySelectorAll("li");
    for (let j=0; j<allListItems.length; j++) {
        allListItems[j].addEventListener("mouseover", function () {
            allListItems[j].querySelector("#delete-button").style.display = "inline";
        })
        allListItems[j].addEventListener("mouseout", function () {
            allListItems[j].querySelector("#delete-button").style.display = "none";
        })
    }
}

displayList();
function notInList(entry) {
    for (let l=0; l<items.length; l++) {
        if (items[l][0] == entry) {
            return false;
        }
    }
    return true;
}

errorLine = document.querySelector("#errors");
errorLine.innerText = "";

addButton.addEventListener("click", function () {
    if (field.value != "") {
        if (notInList(field.value)) {
            items = JSON.parse(localStorage.getItem("items"));
            items.push([field.value,"todo"]);
            localStorage.setItem("items", JSON.stringify(items));
            displayList();
            field.value = "";
            errorLine.innerText = "";
        }
        else {
            errorLine.innerText = "Entry already in list!";
            displayList();
            field.value = "";
        }
    } else {
        errorLine.innerText = "Entry cannot be empty!";
        displayList();
        field.value = "";
    }
})

clearButton.addEventListener("click", function () {
        items = [];
        localStorage.setItem("items",JSON.stringify(items));
        displayList();
        errorLine.innerText = "";   
})

function change (e) {
    items = JSON.parse(localStorage.getItem("items"));
    for (let k = 0; k<items.length; k++){
        if (items[k][0] == e.target.parentElement.querySelector("p").innerText){
            switch (items[k][1]) {
                case ("todo"):
                    items[k][1] = "doing"
                    break;
                case ("doing"):
                    items[k][1] = "done";
                    break;
                case("done"):
                    items[k][1] = "todo";
                    break;
            }
            localStorage.setItem("items",JSON.stringify(items));
            displayList();
        }
    }
}

let themeButton = document.querySelector("#img-container");
let root = document.querySelector(":root");
let theme = null;
if (localStorage.getItem("theme") == null) {
    theme = 0;
    localStorage.setItem("theme", JSON.stringify(theme));
} else {
    theme = JSON.parse(localStorage.getItem("theme"));
}

function displayTheme (theme) {
    switch (theme) {
        case 1: 
            root.style.setProperty("--THEME-BG","url(pics/backgrounds/BG3.png)");
            root.style.setProperty("--THEME-COLOR", "#FFB6C1");
            root.style.setProperty("--THEME-COLOR-HOVER","#F08080");
            root.style.setProperty("--THEME-COLOR-ACTIVE","#FF6767");
            root.style.setProperty("--LI-HOVER","rgba(255, 255, 255, 0.15)");
            root.style.setProperty("--TEXT-COLOR", "whitesmoke");
            document.querySelector("header img").setAttribute("src","pics/icons/themeb.png");
            break;
        case 2: 
            root.style.setProperty("--THEME-BG","url(pics/Backgrounds/BG1.png)");
            root.style.setProperty("--THEME-COLOR", "peachpuff");
            root.style.setProperty("--THEME-COLOR-HOVER","rgb(255, 194, 141)");
            root.style.setProperty("--THEME-COLOR-ACTIVE","rgb(255, 166, 88)");
            root.style.setProperty("--LI-HOVER","rgba(128, 128, 128, 0.15)");
            root.style.setProperty("--TEXT-COLOR", "black");
            document.querySelector("header img").setAttribute("src","pics/Icons/themeb.png");
            break;
        default:
            root.style.setProperty("--THEME-BG","url(pics/Backgrounds/BG2.png)");
            root.style.setProperty("--THEME-COLOR", "aliceblue");
            root.style.setProperty("--THEME-COLOR-HOVER","lightskyblue");
            root.style.setProperty("--THEME-COLOR-ACTIVE","cornflowerblue");
            root.style.setProperty("--LI-HOVER","rgba(255, 255, 255, 0.15)");
            root.style.setProperty("--TEXT-COLOR", "whitesmoke");
            document.querySelector("header img").setAttribute("src","pics/Icons/themeb.png");
    }
}

displayTheme(theme);

themeButton.addEventListener("click", function () {
    switch (theme) {
        case 1: 
            theme += 1;
            localStorage.setItem("theme", JSON.stringify(theme));
            displayTheme(theme);
            break;
        case 2:
            theme = 0;
            localStorage.setItem("theme", JSON.stringify(theme));
            displayTheme(theme);
            break;
        default:
            theme += 1;
            localStorage.setItem("theme", JSON.stringify(theme));
            displayTheme(theme);
    }
});