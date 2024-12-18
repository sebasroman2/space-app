import styled from "styled-components";

const FigureEstilizada = styled.figure`
    max-width: 100%;
    min-height: 328px;
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-grow: 1;
    align-items: center;
    border-radius: 20px;
    margin: 0;
`;

const TituloEstilizado = styled.h1`
    max-width: 300px;
    line-height: 48px;
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    padding: 0 64px;
`

const Banner = ({ texto, backgroundImage }) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado>{texto}</TituloEstilizado>
        </FigureEstilizada>
    )
}

export default Banner;