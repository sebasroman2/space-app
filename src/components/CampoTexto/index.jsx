import search from "./search.png"

import styled from "styled-components"

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`

const CampoTextoEstilizado = styled.input`
    height: 56px;
    width: 566px;
    box-sizing: border-box;
    background: transparent;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconoLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = ({ setFiltro }) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado
                placeholder="Busca una foto"
                type="text"
                onChange={(e) => { setFiltro(e.target.value) }}
            />
            <IconoLupa src={search} alt="Ícono de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto