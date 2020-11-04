import styled from 'styled-components';

export const SearchHeaderContainer = styled.div`
    width: 100%;
    background: #fff;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
`;

export const SearchHeaderInputContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    width: 90%;
    padding: 5px;
    margin: 0 auto;
    border-bottom: 1px solid #000;
`;

export const SearchHeaderInput = styled.input`
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
    }

    &:focus {
        outline: none;
    }
`;

export const SearchHeaderFiltersContainer = styled.div`
    padding: 25px 0 0 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const SearchHeaderFilterButtons = styled.div`
    display: flex;
    padding: 0 20px;
    width: 75%;
`;

export const SearchHeaderFilterButton = styled.button`
    width: 80px;
    padding: 10px;
    margin-right: 10px;
    background: #fff;
    border: 1px solid #E6E6E6;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    color: #1d1d1d;
    font-weight: 600;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    &:focus {
        outline: none;
    }
`;

export const SearchHeaderMoreFilters = styled.div`
    padding: 0 20px;
    width: 25%;
    font-family: 'Raleway', sans-serif;
    color: #1d1d1d;
    font-size: 1.1em;
    font-weight: 600;
`;