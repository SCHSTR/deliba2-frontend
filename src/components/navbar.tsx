import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { BtnDefault } from "../styles/global";


const Navbar: React.FC = () => {

    const [menuOpened, updatedMenu] = useState(false)
    const active = classNames('menu-content', {open: menuOpened})
    const menu_btn = classNames ('menu-btn', {open: menuOpened})

    function openMenu(){
        updatedMenu(!menuOpened)
    }

    return (
        <Nav>
            <div className="margin">
                <div className="logo-box">
                    Deliba
                </div>
                <div className={active}>
                    <a className="link" href="#">Sobre</a>
                    <a className="link" href="#">Github</a>
                    <a className="link" href="#">Login</a>
                    <div className="btn-placeholder">
                    <BtnDefault>Registrar Encomendas‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎🚚</BtnDefault>
                    </div>
                </div>
                <div className={menu_btn} onClick={openMenu}>
                    <div className="menu-stroke bar1"></div>
                    <div className="menu-stroke bar2"></div>
                    <div className="menu-stroke bar3"></div>

                </div>
            </div>
        </Nav>
    )
  }
  
  export default Navbar

const Nav = styled.div`
    color: ${props => props.theme.light_theme.text};
    padding: 24px 0;
    font-size: 14px;
    font-weight: 300;

    .margin{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 5vw;

        @media only screen and (min-width: 768px) {
            max-width: none;
            padding: none;

            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .logo-box{
        position: relative;
        z-index: 15;
        font-size: 16px;
        color: ${props => props.theme.light_theme.primary}
    }

    .menu-content{
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: white;
        visibility: hidden;
        opacity: 0;
        transform: translateY(-35vh);
        transition: all 750ms;
        

        @media only screen and (min-width: 768px) {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            height: auto;
            width: auto;
            background: transparent;
            position: relative;
            display: flex;
            justify-content: unset;
            flex-direction: row;
            align-items: center;
        }
    }
    .btn-placeholder{
        margin-top: 36px;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: none;

        @media only screen and (min-width: 768px) {
            margin-top: 0;
            max-width: none;
            display: block;
        }
    }

    .menu-btn{
        padding: 18px 12px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: 15;


        .bar1, .bar2, .bar3{
            width: 2rem;
            opacity: 1;
            transition: all 200ms;
            position: relative;
            transform-origin: 1px;
            border-radius: 100px;
        }


        .menu-stroke{
            margin: 3px;
            width: 27px;
            height: 3px;
            background-color: ${props => props.theme.light_theme.primary};

            &:first-child{
                margin-top: 0px;
            }

            &:last-child{
                margin-bottom: 0px;
            }
        }

        @media only screen and (min-width: 768px) {
            display: none
        }
    }

    .open{
        opacity: 1;
        visibility: visible;
        transform: translateY(0);

        transition: all 750ms ease;
        
        .menu-stroke{
            background-color: #7b7b7b;
        }

        .bar1{
            transform: 
                rotate(45deg);
            
        }
        .bar2{
            opacity: 0;
        }
        .bar3{
            transform:
                rotate(-45deg);
        }
    }

    .link{
        font-size: ${props => props.theme.default.heading_2};
        color: inherit;
        text-decoration: none;
        margin: 5vw 5vh;
        transition: color 350ms;

        @media only screen and (min-width: 768px) {
            font-size: ${props => props.theme.default.paragraph};
            margin: 0 14px;
        }
    }

    a:hover{
        color: ${props => props.theme.light_theme.primary}
    }
`

  