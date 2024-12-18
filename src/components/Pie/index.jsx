import styled from "styled-components";

const PieEstilizado = styled.footer`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    padding: 22px;
    background-color: #04244F;
`

const IconoContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    li {
        display: inline-block;
        margin-right: 32px;
    }
`

const PieTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`

const Pie = () => {
    return (
        <PieEstilizado>
            <IconoContainer>
                <li><a href="#"><img src="/imagenes/redes/facebook.svg" alt="Facebook" /></a></li>
                <li><a href="#"><img src="/imagenes/redes/twitter.svg" alt="Twitter" /></a></li>
                <li><a href="#"><img src="/imagenes/redes/instagram.svg" alt="Instagram" /></a></li>
            </IconoContainer>
            <PieTexto>Desarrollado por Alura.</PieTexto>
        </PieEstilizado>
    )
}

export default Pie