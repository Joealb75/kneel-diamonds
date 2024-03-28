
export const Orders = async () => { // async will return a promise 
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size") 
    const orders = await fetchResponse.json() // you use await to pause the execution of the function until the promise is completed 
    

    let ordersHTML = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `<section class="allOrders"><div class="options">Order ID: #${order.id} Price: $${orderPrice}</div></section>`
        }
    )
    return ordersHTML.join('') // .join is used to concatenate the array of orders into a single string 
}

