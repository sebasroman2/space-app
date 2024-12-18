import styled from "styled-components"

import Titulo from "../Titulo"

import Tags from "./Tags"
import Populares from "./Populares"
import Imagen from "./Imagen"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 30px;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`

const ImagenContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
`

const Galeria = ({ fotos = [], setTag, alSeleccionarFoto, alAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenContainer>
                        {fotos.map(foto => <Imagen
                            alSolicitarZoom={alSeleccionarFoto}
                            alAlternarFavorito={alAlternarFavorito}
                            foto={foto}
                            key={foto.id}
                        />)}
                    </ImagenContainer>
                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria