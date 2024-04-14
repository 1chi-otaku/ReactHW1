import React from 'react'
import Film from './Film';

function FilmList() {

    const films = [
        { id: 1, title: 'The Matrix Resurrections', year: 2024 },
        { id: 2, title: 'Dune', year: 2024 },
        { id: 3, title: 'No Time to Die', year: 2021 },
        { id: 4, title: 'Spider-Man: No Way Home', year: 2022 },
        { id: 5, title: 'Eternals', year: 2021 },
        { id: 6, title: 'Shang-Chi and the Legend of the Ten Rings', year: 2024 },
        { id: 7, title: 'Black Widow', year: 2020 },
        { id: 8, title: 'Jungle Cruise', year: 2023 },
        { id: 9, title: 'The Suicide Squad', year: 2021 },
        { id: 10, title: 'Free Guy', year: 2024 }
    ];

    let FilmsElement = films.map( item => <Film film={item} key= {item.id} />)



    return (
        <>
        <div className='row'>{FilmsElement}</div>
        </>
        
    )
}

export default FilmList
