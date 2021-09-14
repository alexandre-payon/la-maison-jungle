import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {

	const [inputValue, setInputValue] = useState('exemple@exemple.fr')

    function checkValue(value, event) {
        if (!value.includes('@')) {
            alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide.')
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
                <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onBlur={(e) => checkValue(e.target.value)}>
                </input>
            </div>


		</footer>
	)
}

export default Footer
