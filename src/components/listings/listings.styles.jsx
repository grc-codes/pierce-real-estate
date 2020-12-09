import styled from 'styled-components';

export const ListingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

    @media screen and (min-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
`;

export const EmptyListingMessage = styled.div`
    padding: 100px 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.5;
    color: #1c1d1e;
    text-align: center;
    margin: 0 auto;
`;
