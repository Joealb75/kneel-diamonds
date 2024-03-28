import { setStyleChoice } from "./transientState.js"

const handleStyleChoice = (event) => {
    if(event.target.name === "style"){
        setStyleChoice(parseInt(event.target.value))
    }
}

export const StyleOptions = async () => {

  document.addEventListener("change", handleStyleChoice)

    const response = await fetch("http://localhost:8088/styles")
    const convertData = await response.json() 
    
    let html = ""
    const divStrArray = convertData.map(
        (newData) => {
         return `<div>
         <input type='radio' name='style' value='${newData.id}' /> Style: ${newData.style}</div> `
       }
    )
    html += divStrArray.join("")
    console.log(html)
    return html
    }
