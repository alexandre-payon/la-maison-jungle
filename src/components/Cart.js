import '../styles/Cart.css'
import { useState, useEffect } from 'react'

import Categories from './Categories'

function Cart({ cart, updateCart, update}) {

    // const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(true)

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    //alert(`J'aurai ${total}€ à payer 💸`)
    //remplace l'alerte classique
    useEffect(() => {
        alert(`J'aurai ${total}€ à payer 💸`)
    }, [total, update])
    //ative l'alerte seulement quant il y a un changement pour la somme totale

    // const monstera = 8
    // const lierre = 10
    // const bouquet = 15

    return isOpen ? (
            <div className='lmj-cart'>
                <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
                    {cart.length > 0 ? (
    				<div>
    					<h2>Panier</h2>
    					<ul>
    						{cart.map(({ name, price, amount }, index) => (
    							<div key={`${name}-${index}`}>
    								{name} {price}€ x {amount}
    							</div>
    						))}
    					</ul>
    					<h3>Total :{total}€</h3>
    					<button onClick={() => updateCart([])}>Vider le panier</button>
    				</div>
    			) : (
    				<div>Votre panier est vide</div>
    			)}
                {/*<h1>Panier</h1>*/}
                {/*<ul>*/}
                    {/*<li>monstera = {monstera}€</li>*/}
                    {/*<button onClick={() => updateCart(cart + 1)}>
                        Ajouter
                    </button>*/}
                    {/*<li>lierre = {lierre}€</li>*/}
                    {/*<li>bouquet de fleur = {bouquet}€</li>*/}
                {/*</ul>*/}
                {/*total = {monstera+lierre+bouquet}€*/}
                {/*<h3>Total : {monstera * cart}€</h3>*/}
                {/*<button onClick={() => updateCart(0)}>*/}
                    {/*Vider la panier*/}
                {/*</button>*/}
            </div>) : (
            <div className='lmj-cart-closed'>
    			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>
    				Ouvrir le Panier
    			</button>
    		</div>
    )
}

export default Cart
