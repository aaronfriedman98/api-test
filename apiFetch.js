document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const sibName = document.querySelector('input').value
    try{
        const response = await fetch(`https://siblings-api.herokuapp.com/api/${sibName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data
    }
    catch(error){
        console.log(error)
    }
}