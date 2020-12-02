import styled from 'styled-components';

export const SearchHeaderInputContainer = styled.input`
    width: 90%;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2em;
    font-weight: 700;
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: 1.1em;
        font-weight: 500;
    }
`;