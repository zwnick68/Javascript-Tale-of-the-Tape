// https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=12dc9d6f4daf4972babba4ecf6cc9682
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

})

let searchInputFirstFighterFirstName = document.getElementById("searchFirstFighterFirstName")
let searchInputFirstFighterLastName = document.getElementById("searchFirstFighterLastName")
let searchInputSecondFighterFirstName = document.getElementById("searchSecondFighterFirstName")
let searchInputSecondFighterLastName = document.getElementById("searchSecondFighterLastName")


let label = document.getElementById("label")
let button1 = document.getElementById("submitbutton1")
let button2 = document.getElementById("submitbutton2")

let fighters1 = [];
let fighters2 = [];
let fighter1 = document.getElementById("fighter1")
let fighter2 = document.getElementById("fighter2")

let tag1 = document.getElementById("tag1")
let tag2 = document.getElementById("tag2")

let wins1 = document.getElementById("wins1")
let wins2 = document.getElementById("wins2")

let Losses1 = document.getElementById("Losses1")
let Losses2 = document.getElementById("Losses2")

let nickname1 = document.getElementById("nickname1")
let nickname2 = document.getElementById("nickname2")

let like1 = document.getElementById("like1")
let like2 = document.getElementById("like2")



const request = async () => {
    let req = await fetch("http://localhost:3000/fighters")
    let res = await req.json()
    console.log("data confirm", res[420].FirstName)

    //create a search bar that accesses all fighters
    //label.innerHTML = "Choose ya fighters"
searchInputFirstFighterFirstName.addEventListener("keypress", (element) =>{
    
    const value1 = element.target.value
    if (element.key === "Enter"){
    console.log("what i just typed", value1)
    
        for (let i = 0; i <= res.length; i++)
        if (value1 === res[i].FirstName) 
        return fighters1.push(value1)
        //console.log("value", res[i].FirstName)
        preventDefault()
        
    }
})  


searchInputFirstFighterLastName.addEventListener("keypress", (element) =>{
    
    const value2 = element.target.value
    if (element.key === "Enter"){
    console.log("what i just typed", value2)
    
        for (let i = 0; i <= res.length; i++)
        if (value2 === res[i].LastName) 
        return fighters1.push(value2)
        //console.log("value", res[i].LastName)
        preventDefault()

    }

    })

    searchInputSecondFighterFirstName.addEventListener("keypress", (element) =>{
    
        const value3 = element.target.value
        if (element.key === "Enter"){
        console.log("what i just typed", value3)
        
            for (let i = 0; i <= res.length; i++)
            if (value3 === res[i].FirstName) 
            return fighters2.push(value3)
            //console.log("value", res[i].LastName)
            preventDefault()
    
        }
    
        })

        searchInputSecondFighterLastName.addEventListener("keypress", (element) =>{
    
            const value4 = element.target.value
            if (element.key === "Enter"){
            console.log("what i just typed", value4)
            
                for (let i = 0; i <= res.length; i++)
                if (value4 === res[i].LastName) 
                return fighters2.push(value4)
                //console.log("value", res[i].LastName)
                preventDefault()
        
            }
        
            })    

button1.addEventListener('click',()=>{
    if (fighters1.length===2){
        
        tag1.innerHTML= fighters1[0] +" "+ fighters1[1]
        //fighter1.append(tag1)

        console.log("fighter array", fighters1)
        for (let i = 0; i <= res.length; i++)
        if(res[i].FirstName === fighters1[0] || res[i].LastName === fighters1[1]){
            nickname1.innerText = res[i].Nickname
            wins1.innerHTML = `Wins: ${res[i].Wins}`
        Losses1.innerHTML = `Losses: ${res[i].Losses}` 
        //stats1.innerHTML = "Losses: " + res[i].Losses
        return console.log("it worked", res[i].Wins,res[i].Losses)
        
        }
        preventDefault()
        
    }
})

    button2.addEventListener('click',()=>{
        if (fighters2.length===2){
            
            tag2.innerHTML= fighters2[0] +" "+ fighters2[1]
            //fighter2.append(tag2)
    
            console.log("fighter array", fighters2)
            for (let i = 0; i <= res.length; i++)
            if(res[i].FirstName === fighters2[0] || res[i].LastName === fighters2[1]){
                nickname2.innerText = res[i].Nickname
                wins2.innerHTML = `Wins: ${res[i].Wins}`
            Losses2.innerHTML = `Losses: ${res[i].Losses}`
            return console.log("it worked", res[i].Wins,res[i].Losses)
            
            }
            preventDefault()
        }

})

    like1.addEventListener("click", ()=>{
        like1.innerHTML = "Likes: " + ++like1.value
    })

    like2.addEventListener("click", ()=>{
        like2.innerHTML = "Likes: " + ++like2.value
    })



// let tape1 = document.createElement("div")
// let tape2 = document.createElement("div")

// tape1 = "choose ya fighter"
// tape2 = "choose another fighter"
// document.body.append(tape1, tape2)

}
request()
