import styled from 'styled-components';

export const SearchHeaderContainer = styled.div`
    width: 100%;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
`;

export const SearchHeaderInputContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    padding: 5px;
    margin: 0 auto;
    border-bottom: 1px solid #e6e6e6;
`;

export const SearchHeaderInputButton = styled.button`
    width: 10%;
    border: none;
    background: transparent;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    & .fas {
        font-size: 1.5em;
        color: darkgrey;
    }

    &:focus {
        outline: none;
    }
`;