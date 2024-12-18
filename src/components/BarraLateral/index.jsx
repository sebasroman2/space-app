import styled from "styled-components"

import ItemNavegacion from "./ItemNavegacion"

import items from "./items.json"

const ListaEstilizada = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    {items.map((item) => 
                        <ItemNavegacion
                            iconoActivo={`icon/${item.icono}-activo.png`}
                            iconoInactivo={`icon/${item.icono}-inactivo.png`}
                            activo={item.activo}
                            key={item.id}
                        >
                            {item.titulo}
                        </ItemNavegacion>
                    )}
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral