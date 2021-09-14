import '../styles/Cart.css'
import { useState } from 'react'

function Cart({ cart, updateCart }) {

    // const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    // const monstera = 8
    // const lierre = 10
    // const bouquet = 15

    return isOpen ? (
            <div className='lmj-cart'>
                <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
                <h1>Panier</h1>
                <ul>
                    {/*<li>monstera = {monstera}€</li>*/}
                    {/*<button onClick={() => updateCart(cart + 1)}>
                        Ajouter
                    </button>*/}
                    {/*<li>lierre = {lierre}€</li>*/}
                    {/*<li>bouquet de fleur = {bouquet}€</li>*/}
                </ul>
                {/*total = {monstera+lierre+bouquet}€*/}
                {/*<h3>Total : {monstera * cart}€</h3>*/}
                <button onClick={() => updateCart(0)}>
                    Vider la panier
                </button>
            </div>) : (
            <div className='lmj-cart-closed'>
    			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>
    				Ouvrir le Panier
    			</button>
    		</div>
    )
}

export default Cart
