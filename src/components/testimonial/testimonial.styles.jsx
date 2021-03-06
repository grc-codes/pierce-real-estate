import styled from 'styled-components';

export const TestimonialContainer = styled.div`
    padding: 120px 10%;
    width: 100%;
    background: #1c1d21;

    @media screen and (min-width: 1200px) {
        padding: 120px 0;
    }
`;

export const TestimonialDesktopWrapper = styled.div`
    @media screen and (min-width: 1024px) {
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export const TestimonialText = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 1.25em;
    color: #fff;
    line-height: 1.5;
    margin-bottom: 1.6em;
`;

export const TestimonialClientContainer = styled.div`
    margin-bottom: 1.9em;
    display: block;
`;

export const TestimonialClientName = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 1.15em;
    color: #4ba4db;
    font-weight: 600;
    display: block;
`;

export const TestimonialClientTitle = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: .9em;
    color: #fff;
    opacity: .9;
    color: #1c1d21;
    display: block;
    font-style: italic;
`;