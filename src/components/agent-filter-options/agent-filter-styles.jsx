import styled from 'styled-components';

export const AgentFilterOptionsContainer = styled.div`
    border-top: 1px solid #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const AgentFilterOptionsBtn = styled.button`
    padding: 15px 10px;
    color: #2a2a33;
    font-family: 'Raleway', sans-serif;
    font-size: .9em;
    font-weight: 600;
    border: none;
    width: 100%;
    height: 100%;
    background: rgb(205,204,208);
    background: -moz-linear-gradient(0deg, rgba(205,204,208,1) 0%, rgba(173,172,177,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(205,204,208,1) 0%, rgba(173,172,177,1) 100%);
    background: linear-gradient(0deg, rgba(205,204,208,1) 0%, rgba(173,172,177,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#cdccd0",endColorstr="#adacb1",GradientType=1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    &:focus {
        outline: none;
    }
`;
