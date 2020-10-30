import styled from 'styled-components';

export const FeaturedContainer = styled.div`
    padding: 60px 0;
    background: #F85757;
    width: 100%;
`;

export const FeaturedTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    font-weight: bold;
    color: #fff;
    margin-bottom: 1em;
    text-align: center;
`;

export const FeaturedListingsContainer = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
`;

export const FeaturedListingContainer = styled.div`
    width: 100%;
    height: 300px;
    background: red;
    margin-bottom: 15px;
    &:last-of-type {
        margin-bottom: 0;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const FeaturedListingCity = styled.h3`
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 1.5em;
    margin-bottom: .5em;
    width: 100%;
    text-align: center;
`;

export const FeaturedListingPrice = styled.p`
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 1em;
    width: 100%;
    text-align: center;
`;