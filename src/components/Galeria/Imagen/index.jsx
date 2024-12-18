import styled from "styled-components"

import expandir from "/icon/expandir.png"

import BotonIcono from "../../BotonIcono"

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }     
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size:16px;
        }
    }
`

const Pie = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Imagen = ({ foto, alSolicitarZoom, alAlternarFavorito, expandida = false }) => {
    const favorito = foto.favorita ? "/icon/favorito-activo.png" : "/icon/favorito.png";

    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`} >
            <img src={foto.path} alt={foto.id} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Pie>
                    <h4>{foto.fuente}</h4>
                    <BotonIcono>
                        <img src={favorito} alt="Icono de favorito" onClick={() => alAlternarFavorito(foto)} />
                    </BotonIcono>
                    {!expandida && <BotonIcono aria-hidden={expandida} onClick={() => alSolicitarZoom(foto)} >
                        <img src={expandir} alt="Icono de expandir" />
                    </BotonIcono>}
                </Pie>
            </figcaption>
        </Figure>
    )
}

export default Imagen