import { saveUserChoices } from "./transientState.js";

const handleOrderPlacementClick = (clickEvent) =>{
    if(clickEvent.target.id === "order"){
        saveUserChoices()  // Calls this function to save the users selections to the orders array in database.json
    }
}

export const placeOrderButton = async () =>{
    document.addEventListener('click', handleOrderPlacementClick)

    return `
    <div class="button"><button id="orderButton">Place Order</button></div>
    `
}