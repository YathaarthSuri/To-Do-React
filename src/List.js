import './List.css'

function List ({itemList, updateItemList}){
    // use destructuring instead of using props.thisItem

    const deleteItemFromList = (key) => {
        const newList = itemList.filter((itemObj )=>{
            return itemObj.key !== key;
        })
        updateItemList(newList)
    }

    return(
        <div>
            {
                itemList.map((itemObj) => {                       // this item contains each and every item list from the array
                    return (
                        // we should give key in below to avoid any error (whenever using map, since we need to uniquely identify all elements of array)
                        <div key={itemObj.key} className="Item">        
                            <p onClick={()=>deleteItemFromList(itemObj.key)}>{itemObj.item}</p>
                            <button onClick={()=>deleteItemFromList(itemObj.key)}>X</button>        
                            {/* arrow function since we have parameters */}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default List