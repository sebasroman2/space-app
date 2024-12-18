import styled from "styled-components";

import fotos from './fotos-populares.json'
import Titulo from "../../Titulo";

const ColumnaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Imagen = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Boton = styled.button`
    width: 100%;
    background-color: transparent;
    font-size: 20px;
    color: #FFFFFF;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    padding: 12px 20px;
    margin-top: 16px;
    cursor: pointer;
`

const Populares = () => {
    return (
        <section>
            <Titulo $align='center'>Populares</Titulo>
            <ColumnaFotos>
                {fotos.map(foto => <Imagen key={foto.id} src={foto.path} alt={foto.alt} />)}
            </ColumnaFotos>
            <Boton>Ver más</Boton>
        </section>
    )
}

export default Populares