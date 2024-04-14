import React from 'react'

function Film(props) {

    let content;
    if(props.film.year === 2024){
        content = "New film!"
    }

    return (
        <div>
            <h3>{props.film.title}</h3>
            <p>Year: {props.film.year}</p>
            {content}
       </div>
    )
}

export default Film
