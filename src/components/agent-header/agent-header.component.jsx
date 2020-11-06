import React from 'react';
import {
    AgentHeaderContainer,
    AgentHeaderTitle,
    AgentSearchInputRow
} from './agent-header.styles';
import AgentSearchInput from '../../components/agent-search-input/agent-search-input.component';
import AgentFilterOptions from '../../components/agent-filter-options/agent-filter-options.component';

const AgentHeader = () => (
    <AgentHeaderContainer>
        <AgentHeaderTitle>
            Find an Agent
        </AgentHeaderTitle>
        <AgentSearchInputRow>
            <AgentSearchInput placeholder='Neighborhood/City/Zip' />
            <AgentSearchInput placeholder='Agent name' />
        </AgentSearchInputRow>
        <AgentFilterOptions />
    </AgentHeaderContainer>
);

export default AgentHeader;