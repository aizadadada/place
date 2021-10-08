export const calcSubPrice = (item) => {
    return item.count * item.food.bill
}

export const calcTotalPrice = (place) => {
    let totalPrice = 0
    place.forEach(item => {
        console.log(item)
        totalPrice += item.subPrice
    })

    return totalPrice
}