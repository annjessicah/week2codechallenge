const characters={
    "characters": [
      {
        "id": 1,
        "name": "Mr. Cute",
        "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 2,
        "name": "Mx. Monkey",
        "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 3,
        "name": "Ms. Zebra",
        "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
        "votes": 0
      },
      {
        "id": 4,
        "name": "Dr. Lion",
        "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
        "votes": 0
      },
      {
        "id": 5,
        "name": "Mme. Panda",
        "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
        "votes": 0
      }
    ]
   }
   
   
   
//variables to keep track of the selected characterand elements
letselectedCharacter=null;
const characterList=document.getElementById("animal-list");
const characterDetails=document.getElementById("animal-details");

//function to display details of a character


let character = []
document.addEventListener("DOMContentLoaded", function(){
    getCharacters()
})

function getCharacters(){
    fetch("http://localhost:3000/characters", {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }    
    }).then(data=>data.json())
    .then(response =>{
        characters = [...response]
        displayCharacters(response)
        console.log(characters)
    })
}
//display characters on the front-end
function displayCharacters(characters){
    const characterbar = document.querySelector("#character-bar")
    for(character of characters){
        console.log(character.name)
        const span = document.createElement("span");
        span.innerText = character.name;
        span.setAttribute("id",character.id)
        span.addEventListener("click", (event)=> {
            displayCharacterDetails(getCharacterById(characters, parseInt(event.target.id)))

    })
        characterbar.appendChild(span);
    }
}

function displayCharacterDetails (character){
const image = document.querySelector("#image");
const voteButton = document.querySelector("#voteButton");
image.src = character.image;

}


function getCharacterById (characters, id){
    return characters.find((character)=>{
        return character.id === id
    }
    
    )}
