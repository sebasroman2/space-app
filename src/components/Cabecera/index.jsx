import logo from "/img/logo.png"

import CampoTexto from "../CampoTexto"

import styled from "styled-components"

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
`

const LogoEstilizado = styled.img`
    width: 212px;
`

const Cabecera = ({filtro, setFiltro}) => {
    return <HeaderEstilizado>
        <LogoEstilizado src={logo} alt="Logo de Space App" />
        <CampoTexto filtro={filtro} setFiltro={setFiltro} />
    </HeaderEstilizado>
}

export default Cabecera