// Set up the transient state data structure and provide initial values
const transientState = {
    "styleId": 0,
    "sizeId": 0,
    "metalId": 0,
}

// Functions to modify each property of transient state
export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

export const setCaretsChoice = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setMetalChoice = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

// Function to convert transient state to permanent state --- POST

export const saveUserChoices = async () => {
    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(transientState) // The data sent needs to be inside the body of the postOptions and HAS TO BE A STR
    }
    const response = await fetch ("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent('newOrderCreated')
    document.dispatchEvent(customEvent)
}

