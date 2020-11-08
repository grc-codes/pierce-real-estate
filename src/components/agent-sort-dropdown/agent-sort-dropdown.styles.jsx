import styled from 'styled-components';

export const AgentSortDropdownContainer = styled.div`
    position: absolute;
    top: 280px;
    left: 80px;
    min-width: 200px;
    background: #fff;
    border: 1px solid #a7a6ab;
    box-shadow: 0 0 2px #2a2a33;
    z-index: 999;
`;

export const AgentSortDropdownList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const AgentSortDropdownItem = styled.a`
    color: #2a2a33;
    display: block;
    padding: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: .75em;
    font-weight: 300;
    white-space: nowrap;
`;
