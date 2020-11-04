import styled from 'styled-components';

export const SearchResultsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;

export const SearchResultsTotalContainer = styled.div`
    width: 100%;
`;

export const SearchResultsTotalText = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 1.5em;
    margin-bottom: 25px;
    font-weight: 300;
    span {
        font-weight: 600;
    }
`;
