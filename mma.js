// https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=12dc9d6f4daf4972babba4ecf6cc9682
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

})

let form1 = document.getElementById("form1")
let form2 = document.getElementById("form2")


let first = document.getElementById("first")
let second = document.getElementById("second")

let like1 = document.getElementById("like1")
let like2 = document.getElementById("like2")



const request = async () => {
    let req = await fetch("https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=12dc9d6f4daf4972babba4ecf6cc9682")
    let res = await req.json()
    console.log("data confirm", res[420].FirstName)

    if (form1) {
        
        form1.addEventListener('submit', (e) => {
              e.preventDefault();
            if (first.value === '' || first.value == null)
                alert("cant submit nothin");
            
            for (let i = 0; i <= res.length; i++){
            let fullname = first.value.split(" ")
            // if (fullname[0] !== res[i].FirstName && fullname[1]!==res[i].LastName) {
            //     alert("not found");
            //     console.log(first.value)
            //     break
            // }
            
            if (fullname[0] === res[i].FirstName && fullname[1] === res[i].LastName) {
                tag1.innerText = `${res[i].FirstName} ${res[i].LastName}`
                nickname1.innerText = res[i].Nickname
                wins1.innerHTML = `Wins: ${res[i].Wins}`
                Losses1.innerHTML = `Losses: ${res[i].Losses}` 
                height1.innerHTML = "Height: " + res[i].Height
                weight1.innerHTML = "Weight: " + res[i].Weight
                reach1.innerHTML = "Reach: " + res[i].Reach
                weightclass1.innerHTML = "Weightclass: " + res[i].WeightClass
                console.log("it worked", res[i].Wins,res[i].Losses)
                console.log(first.value) 
                break
            }}

            // else {
            //     alert("not found") 
            //    break
            // }}
        
                            })  
                                    }

    if (form2) {

        form2.addEventListener('submit', (e) => {
                e.preventDefault();
            if (second.value === '' || second.value == null)
                alert("cant submit nothin");
            
            for (let i = 0; i <= res.length; i++){
            let fullname = second.value.split(" ")
            // if (fullname[0] !== res[i].FirstName && fullname[1]!==res[i].LastName) {
            //     alert("not found");
            //     console.log(first.value)
            //     break
            // }
            
            if (fullname[0] === res[i].FirstName && fullname[1] === res[i].LastName) {
                tag2.innerText = `${res[i].FirstName} ${res[i].LastName}`
                nickname2.innerText = res[i].Nickname
                wins2.innerHTML = `Wins: ${res[i].Wins}`
                Losses2.innerHTML = `Losses: ${res[i].Losses}` 
                height2.innerHTML = "Height: " + res[i].Height
                weight2.innerHTML = "Weight: " + res[i].Weight
                reach2.innerHTML = "Reach: " + res[i].Reach
                weightclass2.innerHTML = "Weightclass: " + res[i].WeightClass
                console.log("it worked", res[i].Wins,res[i].Losses)
                console.log(second.value) 
                break
            }}

            // else {
            //     alert("not found") 
            //    break
            // }}
        
                            })  
                                    }

    like1.addEventListener("click", ()=>{
        like1.innerHTML = "Likes: " + ++like1.value
    })

    like2.addEventListener("click", ()=>{
        like2.innerHTML = "Likes: " + ++like2.value
    })

}
request()
