import React, { Component, useRef, useState } from 'react';
import styled from 'styled-components';
import PawImage from '../../images/paw.png';
import User from './User';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';

const Map = styled.ul`
    display: flex;
    width: 30rem;
    height: 30rem;
    flex-wrap: wrap;
    align-content: flex-start;
`;

const MapTile = styled.li`
    width: 3rem;
    height: 3rem;
    background-color: #5c5;
    border: 1px solid #3a3;
    &.clicked {
        background-image: url(${PawImage});
        background-size: cover;
    }
`;

const Map1 = (props) => {
    const { User } = props;
    const [clicked, setClicked] = useState(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const tileOnClick = (e, index) => {
        setClicked(index);
        const rect = e.target.getBoundingClientRect();
        setX(rect.x);
        setY(rect.y);
    }

    return (
        <>
            <Map>
                <User mX={x} mY={y} />
                {
                    [...Array(100)].map((n, index) => (
                        <MapTile key={index} className={index === clicked ? "clicked" : ""} onClick={e => tileOnClick(e, index)}/>
                    ))
                }
            </Map>
        </>
    );
};

export default Map1;