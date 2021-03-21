import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d579a;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const LogoSide = styled.div`
    text-align:center;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-tamplate-columns: 1fr;
    grid-tamplate-rows: repeat(3, 80px);
    text-align: center;
    margin-bottom: 20px;
    margin-top: -80px;

    @media screen and (max-width: 480px) [
        grid-tamplate-rows: repeat(3, 60px);
    ]
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
    padding: 10px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: rgb(255, 81, 32);
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    margin-left: 24px;
    justify-content: center;
    text-align: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: rgb(255, 81, 32);
    white-space: nowrap;
    padding: 12px 64px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`