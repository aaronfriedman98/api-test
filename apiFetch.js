document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const sibName = document.querySelector('input').value
    try{
        const response = await fetch(`https://siblings-api.herokuapp.com/api/${sibName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#name').innerText = data.fullName
        document.querySelector('#age').innerText = data.age
        document.querySelector('#location').innerText = data.location
    }
    catch(error){
        console.log(error)
    }
}