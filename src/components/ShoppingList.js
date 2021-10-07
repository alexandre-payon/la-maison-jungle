import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import Categories from './Categories'

// import CareScale from './CareScale'
import PlantItem from './PlantItem'


import { useState } from 'react'

/*const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]*/
/*const category= [];

plantList.forEach(function(item){
    if(!category.includes(item.category))
    {category.push(item.category)};
});*/




function ShoppingList({ cart, updateCart, update, setUpdate }) {


    //const [update, setUpdate] = useState('')

    const categories= [];

    plantList.forEach(function(item){
        if(!categories.includes(item.category))
        {categories.push(item.category)};
    });
    /*return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{ plant }</li>
            ))}
        </ul>
    )*/

    function addToCart(name, price) {
    	const currentPlantSaved = cart.find((plant) => plant.name === name)
    	if (currentPlantSaved) {
    		const cartFilteredCurrentPlant = cart.filter(
    			(plant) => plant.name !== name
    		)
    		updateCart([
    			...cartFilteredCurrentPlant,
    			{ name, price, amount: currentPlantSaved.amount + 1 }
    		])
    	} else {
    		updateCart([...cart, { name, price, amount: 1 }])
    	}
    }
    return (
        <div className='lmj-shopping-list'>
        <Categories categories={categories} setUpdate={setUpdate} update={update} />


            {/*console.log(update)*/}
            {/*<ul>
            {category.map((cat) => (
                <li key={cat}>{cat}</li>
            ))}
            </ul>*/}


            <ul className='lmj-plant-list'>
            {/*{plantList.map((plant) => (*/}
					{/*<li key={plant.id}  className='lmj-plant-item'>*/}
                        {/* {plant.name} */}
                        {/*plant.isBestSale ? <span>🔥</span> : null*/ /*affiche uniquement pour les meilleures ventes*/}


                        {/*plant.isBestSale && <span>🔥</span>*/ /*affiche uniquement pour les meilleures ventes*/}

                        {/* {plant.isSpecialOffer && <span className='lmj-sales'>Solde</span>} */}
                        {/* Commentaire */}
                        {/* <CareScale careType='water' scaleValue={plant.water} /> */}
                        {/* <CareScale careType='light' scaleValue={plant.light} /> */}
                        {/*plant.isBestSale && plant.category === "classique" && <span>🔥</span>*/  /*affiche uniquement si c'est une meilleure vente et une plante classiques */}
                    {/*</li>*/}
				{/*))}*/}
                {plantList.map(({id, name, cover, light, water, price, category}) =>
                    !update || update === category ?

                    (<div key={id}>
                        <PlantItem
                            id={id}
                            name={name}
                            cover={cover}
                            light={light}
                            water={water}
                            price={price}
                            category={category}
                        />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>) : null
                )}
            </ul>
            </div>
            )
}

export default ShoppingList
