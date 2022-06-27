import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Character = styled.div`
    position: absolute;
    transition-timing-function: linear;
`;

const HpBar = styled.div`
    position: absolute;
    width: 2rem;
    height: 0.2rem;
    top: -0.5rem;
    border: 0.5px solid #000;
`;

const Hp = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f00;  
`;

const CharacterBody = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: #fad;
`;

const User = (props) => {
    const { mX, mY } = props;
    const characterRef = useRef();
    const hpBarRef = useRef();
    const hpRef = useRef();
    const characterBodyRef = useRef();
    const [hp, setHp] = useState(100);
    const [curPos, setCurPos] = useState({});
    
    let interval;

    useEffect(() => {
        characterRef.current.style.left = mX + 8 +'px';
        characterRef.current.style.top = mY + 8 + 'px';
        interval = setInterval(() => {
        setCurPos({ ...curPos, x: characterRef.current.getBoundingClientRect().left, y: characterRef.current.getBoundingClientRect().top });
            console.log(curPos);
        }, 100);
    }, []);

    useEffect(() => {
        const curX = characterRef.current.getBoundingClientRect().x;
        const curY = characterRef.current.getBoundingClientRect().y;
        const distance = Math.round(Math.sqrt((Math.abs(curX - mX) ** 2) + (Math.abs(curY - mY) ** 2)));
        console.log(4 + (distance * 0.02) + 's');
        characterRef.current.style.transitionDuration = 1 + (distance * 0.02) + 's';
        characterRef.current.style.left = mX + 8 +'px';
        characterRef.current.style.top = mY + 8 +'px';
        console.log(characterRef.current.getBoundingClientRect());
    }, [mX, mY]);

    useEffect(() => {
        hpRef.current.style.width = hp + '%';
    }, [hp]);

    useEffect(() => {
        if (hp <= 0) {
            characterRef.current.style.transition = 'left 99999999s, top 99999999s';
            characterRef.current.style.left = characterRef.current.getBoundingClientRect().x + 'px';
            characterRef.current.style.top = characterRef.current.getBoundingClientRect().y + 'px';
            
            characterBodyRef.current.style.transition = 'background-color 2s';
            characterBodyRef.current.style.backgroundColor = '#0000';
            hpBarRef.current.style.transition = 'border-color 2s';
            hpBarRef.current.style.borderColor = '#0000';
            // characterRef.current.style.display = 'none';
        }
    });

    useEffect(() => {
        if (curPos.x === mX + 8 && curPos.y === mY + 8) {
            console.log('reach target');
            clearInterval(interval);
        }
    }, [curPos])

    return (
        <Character ref={characterRef}>
            <HpBar ref={hpBarRef}>
                <Hp ref={hpRef} />
            </HpBar>
            <CharacterBody onClick={() => setHp(hp - 10)} ref={characterBodyRef} />
        </Character>
    );
};

export default User;