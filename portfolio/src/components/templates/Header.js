import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Logo from '../atoms/Logo'
import Buttons from '../organisms/HeaderButtons'

const Box = styled.div`
display: flex;
justify-content: space-between;
width: auto;
height: 75px;
position: fixed;
top: 0px;
width: 100%;
z-index: 5;
box-shadow: 0;

transition: box-shadow 0.5s;

&.scrolled {
  box-shadow: 0 0 15px LightGray;
}
`

function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    const listener = () => {
        setIsScrolled(window.pageYOffset > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);

        return () => {
        window.removeEventListener("scroll", listener);
        };
    }, []);


    return (
        <Box className={isScrolled ? "scrolled" : undefined}>
            <Logo />
            <Buttons />   
        </Box>
    )
}

export default Header
