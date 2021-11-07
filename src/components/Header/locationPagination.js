import React, { useEffect, useState } from 'react';

import LeftPaginationButton from '../../images/left.png';
import RightPaginationButton from '../../images/right.png';

const LocationPagination = (props, children) => {
    const [locations, setLocations] = useState([]);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        let loadAPI = async () => {
            try {
                const response = await fetch('https://joshbloom.github.io/dws1/data/hikersguide.json');
                const data = await response.json();
                if (data.length === 0) {
                    alert("No results.");
                }
                else {
                    setLocations(data.locations);
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        loadAPI();
    }, []);
    let city, state, title, text;
    if (locations[index] === undefined) {
        city = state = title = text = 'Loading';
    }
    else {
        city = locations[index].city;
        state = locations[index].state;
        title = locations[index].title;
        text = locations[index].text;
    }
    let paginateUp = () => {
        if (index === locations.length - 1) setIndex(0);
        else setIndex(index + 1)
    }
    let paginateDown = () => {
        if (index === 0) setIndex(locations.length - 1);
        else setIndex(index - 1)
    }
    return (
        <div>
            <LocationPaginationButton src={LeftPaginationButton} method={paginateUp} alt={"Paginate Up"} />
            <LocationPaginationButton src={RightPaginationButton} method={paginateDown} alt={"Paginate Up"} />
            <section>
                <h2>{city}, {state} {index}</h2>
                <h3>{title}</h3>
                <p>{text}</p>
                <LocationPaginationDots listLength={locations.length} currentLocationIndex={index} />
            </section>
        </div >
    );
}

export default LocationPagination;

const LocationPaginationButton = (props, children) => {
    return (
        <button className="pagination" onClick={props.method}> <img src={props.src} alt={props.alt} /></ button>
    );
}
const LocationPaginationDots = (props, children) => {
    return (
        <svg>
            <circle cx="260" cy="300" r="23" />
            <circle cx="330" cy="300" r="23" />
            <circle cx="400" cy="300" r="23" />
            <circle cx="470" cy="300" r="23" />
            <circle cx="540" cy="300" r="23" />
        </svg >
    );
}