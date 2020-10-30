import styled from 'styled-components';

export const ServicesContainer = styled.div`
    padding-top: 60px;
    background: #C7D6DE;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ServicesTitle = styled.h2`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    font-weight: bold;
    color: #2A2A36;
    margin-bottom: 1em;
`;

export const ServicesTables = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ServicesTable = styled.div`
    width: 100%;
    padding: 30px 20px;


    &:nth-of-type(odd) {
        background: #fff;
    }
    &:nth-of-type(even) {
        background: lightslategray;
    }
`;

export const ServicesIconContainer = styled.div`
    width: 50px;
    height: 50px;
    background: red;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
    & .fas {
        color: #fff;
    }
`;

export const ServicesTableTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 1.5em;
    margin-bottom: .5em;
    color: #2A2A36;
    font-weight: bold;
`;

export const ServicesText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    color: #2A2A36;
`;
