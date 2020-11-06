import React from 'react';
import {
    AgentSearchInputContainer,
    AgentSearchInputField,
    AgentSearchButton
} from './agent-search-input.styles';

const AgentSearchInput = ({ placeholder }) => (
    <AgentSearchInputContainer>
        <AgentSearchInputField placeholder={placeholder} />
        <AgentSearchButton>
            <i className='fas fa-search' />
        </AgentSearchButton>
    </AgentSearchInputContainer>
);

export default AgentSearchInput;
