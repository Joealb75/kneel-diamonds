
export const StyleOptions = async () => {
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
