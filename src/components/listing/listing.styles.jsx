import styled from 'styled-components';

export const ListingContainer = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 1.5em;
    border-radius: 5px;
    background: lightgray;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const ListingImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    border-radius: 5px;
`;

export const ForTag = styled.div`
    width: 65px;
    background: #fdc125;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
    font-size: .7em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-weight: 600;
    position: relative;
    top: 15px;
    left: 15px;
    border-radius: 5px;
`;

export const ListingOverlayContainer = styled.div`
    width: 100%;
    height: calc(100% - 21px);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
`;

export const ListingDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`;


export const ListingPricingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

export const ListingTitle = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 1.1em;
    font-weight: 600;
    color: #fff;
    margin-bottom: 5px;
`;


export const ListingLocationText = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: .8em;
    font-weight: 300;
    display: flex;
    & .fas {
        font-size: .7em;
        margin-right: 5px;
    }
`;

export const ListingPriceText = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 1.1em;
    font-weight: 600;
    color: #fff;
    margin-bottom: 5px;
`;

export const ListingRatingText = styled.p`
    display: flex;
    font-family: 'Raleway', sans-serif;
    font-size: .8em;
    font-weight: 300;
    & .fas {
        font-size: .8em;
        margin-right: 5px;
        color: #fac917;
    }
`;