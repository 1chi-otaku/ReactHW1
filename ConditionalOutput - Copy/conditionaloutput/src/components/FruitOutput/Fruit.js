import React from 'react'
function Fruit(props) {

    let highCalorieAlert;
    highCalorieAlert = props.fruit.calories > 50 ? <p>High Calorie Fruit!</p> : <p>Low calorie fruit.</p>;

    return (
       <div>
            <h3>{props.fruit.name}</h3>
            <p>Calories: {props.fruit.calories}</p>
            <p>Color: {props.fruit.color}</p>
            {highCalorieAlert}
       </div>
    )
}

export default Fruit
