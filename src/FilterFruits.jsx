import { useMemo, useState } from "react";
 
 const fruits = [
    { id: '1', item: 'apple'},
    { id: '2', item: 'kiwi'},
    { id: '3', item: 'plum'},
    { id: '4', item: 'cherry'},
    { id: '5', item: 'banana'},
    { id: '6', item: 'pineapple'},
    { id: '7', item: 'watermelon'},
    { id: '8', item: 'melon'},
    { id: '9', item: 'strawberry'},
    { id: '10', item: 'raspberry'},
    { id: '11', item: 'blueberry'},
    { id: '12', item: 'pear'},
    { id: '13', item: 'mango'}
    ];
 
 function FilterFruits() {

    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    const handleText = (e) => {
        // console.log(e.target.value)
        setText(e.target.value);
    }

    const handleSearch = () => {
        setSearch(text)
    }

    // const filteredFruits = fruits.filter((fruit) => {
    //     console.log('rerender')
    //     return fruit.item.toLowerCase().includes(search.toLowerCase())
    // })

    const filteredFruits = useMemo( () => fruits.filter((fruit) => {
        console.log('filtering')
        return fruit.item.toLowerCase().includes(search.toLowerCase())
    }), [search])

    return (
        <div className="container">

            <h2>Filtering</h2>

            <input type="text" onChange={handleText}></input>
            <button type="button" onClick={handleSearch}>SEARCH</button>

            <div>
                {filteredFruits.map((filteredFruit) => (
                    <p key={filteredFruit.id}>{filteredFruit.item}</p>
                ))}
            </div>

            {/* SECOND WAY TO RENDER */}
                {/* {filteredFruits.map((element) => {
                    const {id, item} = element;
                    return (
                        <div key={id}>
                            <p>{item}</p>
                        </div>
                    )
                })} */}

        </div>
    )
 }

 export default FilterFruits;