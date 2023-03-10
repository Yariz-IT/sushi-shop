const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function (event) {

    let counter

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {


        const counterWrapper = event.target.closest('.counter-wrapper')
        counter = counterWrapper.querySelector('[data-counter]')
    }



    if (event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText
    }


    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {

            counter.innerText = --counter.innerText

        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {

            event.target.closest('.cart-item').remove()

            toggleCartStatus()

            calcCartPriceAndDelivery()

        }

        if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {

            calcCartPriceAndDelivery()
        }

    }




    if (event.target.hasAttribute('data-cart')) {

        const card = event.target.closest('.card')

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }


        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]')

            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)

        } else {

            const cartItemHTML = `
        <div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                    <div class="cart-item__details">

                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
        }

        card.querySelector('[data-counter]').innerText = '1'


        toggleCartStatus()

        calcCartPriceAndDelivery()

    }

})





// const btnMinus = document.querySelector('[data-action="minus"]')
// const btnPlus = document.querySelector('[data-action="plus"]')
// const counter = document.querySelector('[data-counter]')

// btnMinus.addEventListener('click', function () {

//     if (parseInt(counter.innerText) > 1) {

//         counter.innerText = --counter.innerText

//     }

// })

// btnPlus.addEventListener('click', function () {
//     counter.innerText = ++counter.innerText
// })