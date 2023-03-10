function calcCartPriceAndDelivery() {

    const cartWrapper = document.querySelector('.cart-wrapper')
    const priceElement = cartWrapper.querySelectorAll('.price__currency')
    const totalPriceElement = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDeliveryElement = document.querySelector('[data-cart-delivery]')

    let priceTotal = 0

    priceElement.forEach(function (item) {

        const amountElement = item.closest('.cart-item').querySelector('[data-counter]')

        priceTotal += parseInt(item.innerText) * parseInt(amountElement.innerText)

    })

    totalPriceElement.innerText = priceTotal

    if (priceTotal > 0) {
        cartDeliveryElement.classList.remove('none')

    } else {
        
        cartDeliveryElement.classList.add('none')

    }

    if (priceTotal >= 600) {

        deliveryCost.classList.add('free')
        deliveryCost.innerText = 'бесплатно'


    } else {
        deliveryCost.classList.remove = ('free')
        deliveryCost.innerText = '250 ₽'


    }

}