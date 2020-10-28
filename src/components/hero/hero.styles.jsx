import styled from 'styled-components';

export const HeroContainer = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
`;

export const HeroImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const HeroTextContainer = styled.div`
    padding: 20px;
    background: #2A2A36;
    width: 50%;
    color: #fff;
    position: relative;
    top: 80%;
    font-family: 'Roboto', sans-serif;
`;

export const NeighborhoodText = styled.h3`
    font-size: 1.5em;
    margin-bottom: .5em;
`;

export const CityText = styled.h4`
    font-size: 1em;
`;

export const LeftArrowContainer = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    background: yellow;
    top: 50%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RightArrowContainer = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    background: green;
    top: 50%;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;