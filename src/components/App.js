import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import ShoppingList from './ShoppingList'


//import Categories from './Categories'

// import QuestionForm from './QuestionForm'
import Footer from './Footer'
import '../styles/Layout.css'
import { useState, useEffect } from 'react'

function App() {

    const [cart, updateCart] = useState(JSON.parse(localStorage.getItem('panier')))
    useEffect(() => {
        localStorage.setItem('panier', JSON.stringify(cart))
        console.log(localStorage.getItem('panier'))

        console.log(JSON.parse(localStorage.getItem('panier')))

    }, [cart])
    //
    // useEffect(() => {
    //     updateCart(JSON.parse(localStorage.getItem('panier')))
    //
    // }, [])

    //const [update, setUpdate] = useState('')
    // return <div><Banner /><Cart /><ShoppingList /></div>
    return <div>
                <Banner>
                    <img src={logo} alt='La maison jungle' className='lmj-logo' />
                    <h1 className='lmj-title'>La maison jungle</h1>
                </Banner>
                <div className='lmj-layout-inner'>
                    <Cart cart={cart} updateCart={updateCart} />
                    <ShoppingList cart={cart} updateCart={updateCart} />
    			</div>
    			<Footer />
                {/*<QuestionForm />*/}
            </div>
}

export default App
