
// ************************ CARRE ROUGE *****************************
const blocRouge = document.getElementById("blocRouge")
blocRouge.style.cssText = `
    width: 100px;
    height: 100px;
    background-color: red;
    transition: background-color 2s, width 2s, height 2s ease-in-out 0s;
`

blocRouge.addEventListener("click", () => {
    let color = blocRouge.style.backgroundColor
    console.log("color", color)

    if (color == "red") {
        blocRouge.style.backgroundColor = "yellow"
        blocRouge.style.width = "500px"
    }
    else if (color == "yellow") {
        blocRouge.style.backgroundColor = "blue"
        blocRouge.style.width = "100px"
    }
    else if (color == "blue") {
        blocRouge.style.backgroundColor = "green"
        blocRouge.style.height = "500px"

    }
    else if (color == "green") {
        blocRouge.style.backgroundColor = "orange"
        blocRouge.style.width = "500px"
        blocRouge.style.height = "50px"

    }
    else if (color == "orange") {
        blocRouge.style.backgroundColor = "black"
        blocRouge.style.width = "500px"
        blocRouge.style.height = "50px"

    }
    else {
        blocRouge.style.backgroundColor = "red"
        blocRouge.style.width = "100px"
        blocRouge.style.height = "100px"
    }
})

// ************************ CARRE BLEU *****************************
const bloc2 = document.getElementById('bloc2')
bloc2.style.cssText = `
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: top 2s, width 2s, height 2s ease-in-out 0s;
`
bloc2.addEventListener("dblclick", () => {
    console.log("hello")
})

// ***************************** VIGNETTES *************************
const motos = document.querySelectorAll(".moto")
motos.forEach(element => {
    element.addEventListener("click", () => {
        showImage(element.src)
    })
})

const showImage = (src) => {
    document.querySelector(".show").innerHTML = `<img id="moto3" src="${src}" alt="" width="300px">`
}

// ***************************** CAROUSEL ***************************
let compteurImage = 1
const imgCarousel = document.querySelectorAll(".img-carousel")

// Au chargement de la page, masque toutes les images sauf la premiere
imgCarousel.forEach(element => {
    if(element.getAttribute("data-id") != 1){
        element.style.opacity = "0"
    }
});

// algo 
const changeCarsousel = (compter) => {
    // Réinitialise le compteur en cas de dépassement
    if (compter > 5) {
        compteurImage = 1
    } else if (compter < 1) {
        compteurImage = 5
    }

    //Parcours toutes les images et affiche l'image ou <data-id> == compteur 
    imgCarousel.forEach(element => {
        if (element.getAttribute("data-id") == compteurImage) {
            element.style.opacity = "1"
        } else {
            element.style.opacity = "0"
        }
    });
}

// Clique sur le bouton précedente
const btn1 = document.querySelector(".btn-1").addEventListener("click", () => {
    changeCarsousel(compteurImage -= 1)
})

// Clique sur le bouton suivante
const btn2 = document.querySelector(".btn-2").addEventListener("click", () => {
    changeCarsousel(compteurImage += 1)
})

// Déclenche une action dans un intervalle de temps 
let intervalId = setInterval(() => changeCarsousel(compteurImage += 1), 1000)

const carouselContent = document.querySelector(".carousel>div.carousel__boutons")
carouselContent.addEventListener("mouseenter", () => {
    // Stop une action dans un intervalle de temps 
    clearInterval(intervalId); 
})

carouselContent.addEventListener("mouseleave", () => {
    // Relance une action dans un intervalle de temps 
    intervalId = setInterval(() => changeCarsousel(compteurImage += 1), 1000)
})

carouselContent.addEventListener("dblclick", () => {
    
    document.getElementById("fullsize").innerHTML=`<img src="" alt="">`
})












