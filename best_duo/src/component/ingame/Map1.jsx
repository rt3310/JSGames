import React from 'react';
import styled from 'styled-components';

const MapTile = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})
    
`;

const Map1 = () => {
    return (
        <>
            <MapTile/>
        </>
    );
};

export default Map1;