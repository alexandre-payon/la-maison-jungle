//formulaire non controlé
/*function QuestionForm() {
    return (<form onSubmit={handleSubmit}>
        <input type='text' name='my_input' defaultValue='Tapez votre texte' />
        <button type='submit'>Entrer</button>
    </form>)
}*/

import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const isInputError = inputValue.includes('a')

    //fonction ne permettant de pas écrire la lettre 'f' dans value
    function checkValue(value, event) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
                // onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
            {isInputError && (
                <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "a" ici.</div>
            )}
        </div>
    )
}

function handleSubmit(e) {
    e.preventDefault() //empeche le rafraichissement de la page
    alert(e.target['my_input'].value)
}

export default QuestionForm
