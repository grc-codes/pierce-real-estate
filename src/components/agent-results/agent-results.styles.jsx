import styled from 'styled-components';

export const AgentResultsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const AgentSortContainer = styled.div`
    width: 55%;
    margin: 0 auto;
    display: flex;
    padding: 20px 0 10px;
    border-bottom: 1px solid #a7a6ab;
    margin-bottom: 10px;
`;

export const AgentSortText = styled.a`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: .8em;
    font-weight: 300;
    text-transform: uppercase;
    color: #2a2a33;
    display: flex;
    align-items: center;
    & span {
        margin: 0 5px;
    }
    & .fas {
        font-size: .5em;
    }
`;