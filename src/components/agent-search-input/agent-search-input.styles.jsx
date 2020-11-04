import styled from 'styled-components';

export const AgentSearchInputContainer = styled.div`
    width: 49%;
    display: flex;
    background: blue;
`;

export const AgentSearchInputField = styled.input`
    width: 80%;
`;

export const AgentSearchButton = styled.div`
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
    & .fas {
        color: orange;
    }
`;