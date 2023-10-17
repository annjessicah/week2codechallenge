
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
   
   
   
   



let Animal =[]
document.addEventListener("DOMContentLoaded", function(){
    getAnimal()
})

function getAnimal(){
    fetch("http://localhost:3000/characters", {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }    
    }).then(data=>data.json())
    .then(response =>{
        Animal = [...response]
        displayAnimal(response)
        console.log(Animal)
    })
}
//display characters on the front-end
function displayAnimal(Animal){
    const Animalbar = document.querySelector("#Animal-bar")
    for(Animal of Animals){
        console.log(Animal.name)
        const span = document.createElement("span");
        span.innerText = Animal.name;
        span.setAttribute("id",Animal.id)
        span.addEventListener("click", (event)=> {
            displayAnimalDetails(getAnimalById(Animal, parseInt(event.target.id)))

    })
        Animalbar.appendChild(span);
    }
}

function displayAnimalDetails (Animal){
const image = document.querySelector("#image");
const voteButton = document.querySelector("#voteButton");
image.src = Animal.image;

}


function getAnimalById (Animal, id){
    return Animal.find((Animal)=>{
        return Animal.id === id
    }
    
    )}