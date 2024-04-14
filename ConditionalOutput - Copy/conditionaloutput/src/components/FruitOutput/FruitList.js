import React from 'react'
import Fruit from './Fruit';
function FruitList() {

    const fruits = [
        {
            id: 1,
            name: 'Blueberry',
            calories: 57,
            color: 'blue'
        },
        {
            id: 2,
            name: 'Blackberry',
            calories: 43,
            color: 'black'
        },
        {
            id: 3,
            name: 'Apple',
            calories: 52,
            color: 'red'
        },
        {
            id: 4,
            name: 'Orange',
            calories: 47,
            color: 'orange'
        },
        {
            id: 5,
            name: 'Pineapple',
            calories: 50,
            color: 'yellow'
        },
        {
            id: 6,
            name: 'Mango',
            calories: 60,
            color: 'yellow'
        },
        {
            id: 7,
            name: 'Pear',
            calories: 57,
            color: 'green'
        },
        {
            id: 8,
            name: 'Grapes',
            calories: 69,
            color: 'purple'
        }
    ];


    let highCalorieAlert;
    const isHighCalorie = (calories) => (calories > 50 ? highCalorieAlert = <h2>High Calorie Fruit!</h2> : highCalorieAlert = <h2>Low calorie fruit.</h2>);


        
      let FruitsElement = fruits.map( item => <Fruit fruit={item} key= {item.id} />)

    return (
        <>
        <div className='row'>{FruitsElement}</div>
        </>
    )
}

export default FruitList
