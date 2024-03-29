import { saveUserChoices } from "./transientState.js";

const handleOrderPlacementClick = (clickEvent) =>{
    if(clickEvent.target.id === "orderButton"){
        saveUserChoices()  // Calls this function to save the users selections to the orders array in database.json
        debugger
    }
}

export const placeOrderButton = async () =>{
    document.addEventListener('click', handleOrderPlacementClick)

    return `
    <div class="button"><button id="orderButton">Place Order</button></div>
    `
}