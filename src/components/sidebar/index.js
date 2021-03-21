import React from 'react';
import Logo from '../../assets/img-brand-logo@2x.png';
import { SidebarContainer, Icon, LogoSide, CloseIcon, SidebarWrapper, SideBtnWrap, SidebarLink, SidebarRoute, SidebarMenu } from './SideBarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <LogoSide className="logo-container" to="/">
                <img className="logo" src={Logo} alt=""/>
            </LogoSide>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Paket Test Darah
                    </SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggle}>
                        Laboratorium
                    </SidebarLink>
                    <SidebarLink to="skill" onClick={toggle}>
                        Artikel
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="contact" onClick={toggle}>Daftar</SidebarRoute>
                </SideBtnWrap>
                <SideBtnWrap>
                    <SidebarRoute to="contact" onClick={toggle}>Masuk</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
