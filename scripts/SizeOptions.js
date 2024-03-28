import { setCaretsChoice } from "./transientState.js"

const handleSizeChoice = (event) => {
    if(event.target.name === "size"){
        setCaretsChoice(parseInt(event.target.value))
    }
}


export const SizeOptions = async () => {

    document.addEventListener("change", handleSizeChoice)

    const response = await fetch("http://localhost:8088/sizes")
    const convertData = await response.json()

    let html = ""
    const divStrArray = convertData.map(
        (newData) =>{
            return `<div>
            <input type='radio' name='size' value='${newData.id}' /> Carets: ${newData.carets}c</div> `
        }
    )
    html += divStrArray.join("")
    console.log(html)
    return html

}