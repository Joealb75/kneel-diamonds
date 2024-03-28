import { setMetalChoice } from "./transientState.js"

const handleMetalChoice = (event) => {
    if(event.target.name === "metal"){
        setMetalChoice(parseInt(event.target.value))
    }
}

export const MetalOptions = async () => {

    document.addEventListener("change", handleMetalChoice)

    const response = await fetch("http://localhost:8088/metals")
    const convertData = await response.json()
    let html = ""

    const divStrArray = convertData.map(
        (newData) =>{
            html += `<div>
            <input type='radio' name='metal' value='${newData.id}' /> ${newData.metal}</div>
           `
        }
    )
   
    html += divStrArray.join("")
    return html
}

