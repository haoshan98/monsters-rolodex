import React from 'react';

import './card.styles.css';
import { random } from 'node-forge';

export const Card = props => (
    <div className='card-container'>
        <img 
        alt='monster'
        src={`https://robohash.org/${props.monster.id + 2}?set=set4&size=180x180`}
        // src={`https://robohash.org/${props.monster.id * Math.ceil(Math.random() * 10)}?set=set4&size=180x180`}
        />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
);