import React from 'react';
import { 
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdAccountBox
} from 'react-icons/md';


import LogoImg from '../../assets/logo.png';
import {
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
} from './styles';


const Aside: React.FC = () => {
    return (

        <Container>
            <Header>
                <LogImg src={LogoImg} alt="Logo Mycash" />
                <Title>Mybank</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdAccountBox />
                    Social
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>

            </MenuContainer>
        </Container>

    )
}

export default Aside;