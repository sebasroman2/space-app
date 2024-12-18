import styled from "styled-components"

import tags from "./tags.json"

const TagContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background-color: rgba(217, 217, 217, 0.3);
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 12px;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        border-color: #C98CF1;
    }
`

const Tags = ({ setTag }) => {
    return (
        <TagContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            <Div>
                {tags.map(tag => <Tag key={tag.id} onClick={() => setTag(tag.tag)} >{tag.titulo}</Tag>)}
            </Div>
        </TagContainer>
    )
}

export default Tags