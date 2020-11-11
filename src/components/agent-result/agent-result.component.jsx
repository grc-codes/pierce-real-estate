import React from 'react';
import {
    AgentResultContainer,
    AgentResultTopRow,
    AgentResultImageContainer,
    AgentResultContactContainer,
    AgentResultAgentName,
    AgentResultPhoneNumber,
    AgentResultRating,
    AgentResultReviews,
    AgentResultBottomRow,
    AgentResultLocalLabel,
    AgentResultLocalSummary,
    AgentResultLocalReviews,
    AgentResultLocalSales,
    AgentResultLocalListings,
    AgentResultBusinessName
} from './agent-result.styles';

const AgentResult = ({ agentImageUrl }) => (
    <AgentResultContainer>
        <AgentResultTopRow>
            <AgentResultImageContainer agentImageUrl='https://photos.zillowstatic.com/h_g/IStgc5j7cgerzr1000000000.jpg'/>
            <AgentResultContactContainer>
                <AgentResultAgentName>
                    Griffith Home Team
                </AgentResultAgentName>
                <AgentResultPhoneNumber>
                    (720) 580-4887
                </AgentResultPhoneNumber>
                <AgentResultRating>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </AgentResultRating>
                <AgentResultReviews>
                    11 total reviews (10 local)
                </AgentResultReviews>
            </AgentResultContactContainer>
        </AgentResultTopRow>
        <AgentResultBottomRow>
            <AgentResultLocalLabel>
                In Thornton:
            </AgentResultLocalLabel>
            <AgentResultLocalSummary>
                <AgentResultLocalReviews>
                    35 Local Reviews
                </AgentResultLocalReviews>
                <AgentResultLocalSales>
                    3 Recent Sales
                </AgentResultLocalSales>
                <AgentResultLocalListings>
                    No Listings
                </AgentResultLocalListings>
            </AgentResultLocalSummary>
            <AgentResultBusinessName>
                HomeSmart Cherry Creek
            </AgentResultBusinessName>
        </AgentResultBottomRow>
    </AgentResultContainer>
);

export default AgentResult;