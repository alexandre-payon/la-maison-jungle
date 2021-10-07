//import { plantList } from '../datas/plantList'


function Categories({setUpdate, categories, update}) {

    /*const category= [];

    plantList.forEach(function(item){
        if(!category.includes(item.category))
        {category.push(item.category)};
    });*/

    return (
    <div>
        <select value={update} onChange={(e) => setUpdate(e.target.value)}>
            <option value=''>Categories</option>
            {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
    </div>
    )


}

export default Categories
