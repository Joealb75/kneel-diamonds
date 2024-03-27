
export const SizeOptions = async () => {
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