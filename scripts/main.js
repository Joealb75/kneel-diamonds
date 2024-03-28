import { MetalOptions } from './MetalOptions.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { placeOrderButton } from './placeOrder.js'
import { Orders } from './allOrders.js'

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const placeOrderHTML = await placeOrderButton()
    const ordersHTML = await Orders()


    const composedHTML = `
        <h1 class="head">Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2 class="head">Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2 class="head">Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
        
        ${placeOrderHTML}

        </article>

        <article class="customOrders">
            <h2 class="head">Custom Jewelry Orders</h2>
            ${ordersHTML}

        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderCreated", render)


render()