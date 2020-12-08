import styled from 'styled-components';

export const FeaturedContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const FeaturedListingsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

export const FeaturedListingContainer = styled.div`
    width: 100%;
    height: 500px;
    background-position: center center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-size: cover;
`;

export const FeaturedListingGradientContainer = styled.div`
    height: 100%;
    width: 100%;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%);
    background: -webkit-linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%);
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1024px) {
        background: rgb(0,0,0);
        background: -moz-linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%);
        background: -webkit-linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%);
        background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
        transition: all .3s ease-in-out;
        
        &:hover {
            cursor: pointer;
            background: rgb(75,164,219);
            background: -moz-linear-gradient(180deg, rgba(75,164,219,0.5) 0%, rgba(75,164,219,0.5) 100%);
            background: -webkit-linear-gradient(180deg, rgba(75,164,219,0.5) 0%, rgba(75,164,219,0.5) 100%);
            background: linear-gradient(180deg, rgba(75,164,219,0.5) 0%, rgba(75,164,219,0.5) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4ba4db",endColorstr="#4ba4db",GradientType=1);
            h4 {
                opacity: 1;
            }
        }
    }
`;

export const FeaturedListingCity = styled.h4`
    font-family: 'Roboto', sans-serif;
    color: #fff;
    opacity: .6;
    font-size: 1.25em;
    margin-bottom: 1em;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const FeaturedListingPrice = styled.h2`
    font-family: 'Raleway', sans-serif;
    color: #fff;
    font-size: 2.2em;
    font-weight: 700;
`;