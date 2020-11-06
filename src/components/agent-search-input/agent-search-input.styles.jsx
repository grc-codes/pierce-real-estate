import styled from 'styled-components';

export const AgentSearchInputContainer = styled.div`
    width: 49.5%;
    display: flex;
    background: #fff;
    border: 1px solid #aeadb1;
`;

export const AgentSearchInputField = styled.input`
    width: 80%;
    border: none;
    padding: 5px;
    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: .9em;
    }
    &:focus {
        outline: none;
    }
`;

export const AgentSearchButton = styled.div`
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
    & .fas {
        color: #2279ff;
        font-size: 1.2em;
    }
`;