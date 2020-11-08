import styled from 'styled-components';

export const AgentResultContainer = styled.div`
    width: calc(100% - 20px);
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto 10px;
    border-bottom: 1px solid #a7a6ab;
`;

export const AgentResultTopRow = styled.div`
    width: 100%;
    margin: 0 1.5em;
    height: 150px;
    display: flex;
    padding: 15px 0;
    background: green;
`;

export const AgentResultImageContainer = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: blue;
`;

export const AgentResultContactContainer = styled.div`
    padding: 15px 0 15px 15px;
    background: red;
    width: calc(100% - 120px);
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-content: flex-start;
    align-items: center;
`;

export const AgentResultAgentName = styled.p`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    color: #006aff;
    font-weight: 700;
    margin-bottom: 5px;
`;

export const AgentResultPhoneNumber = styled.p`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 5px;
`;

export const AgentResultRating = styled.div`
    width: 100%;
    display: flex;
    padding: 5px 0;
    margin-bottom: 5px;
    & .fas {
        margin-right: 3px;
        color: #3DCA5A;
        font-size: .9em;
    }
`;

export const AgentResultReviews = styled.p`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: .75em;
    color: #006aff;
`;

export const AgentResultBottomRow = styled.div`
    width: 100%;
    margin: 0 1.5em;
    height: 175px;
    background: #fff;
`;

export const AgentResultLocalLabel = styled.p`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    color: #2a2a33; 
    margin-bottom: 5px;
`;

export const AgentResultLocalSummary = styled.div`
    width: 100%;
    height: 110px;
    background: #70b4f6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 10px;
    margin-bottom: 5px;
`;

export const AgentResultLocalReviews = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    color: #fff;
`;

export const AgentResultLocalSales = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    color: #fff;
`;

export const AgentResultLocalListings = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    color: #fff;
`;

export const AgentResultBusinessName = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: .75em;
    font-weight: 700;
    color: #2a2a33;
    text-align: right;
`;
