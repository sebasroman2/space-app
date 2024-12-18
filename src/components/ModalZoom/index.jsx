import styled from "styled-components"

import Imagen from "../Galeria/Imagen"

import cerrar from "/icon/cerrar.png"
import BotonIcono from "../BotonIcono"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 24px;
    width: 60vw;
    display: flex;
    justify-content: center;
    background-color: transparent;
    padding: 0;
    border: 0;

    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoom = ({ foto, alCerrar, alAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay>
                    <DialogEstilizado open={!!foto} onClose={alCerrar} >
                        <Imagen expandida={true} foto={foto} alAlternarFavorito={alAlternarFavorito} />
                        <form method="dialog">
                            <BotonIcono formMethod="dialog">
                                <img src={cerrar} alt="Icono de cerrar" />
                            </BotonIcono>
                        </form>
                    </DialogEstilizado>
                </Overlay>
            </>}
        </>
    )
}

export default ModalZoom