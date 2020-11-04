import React from 'react';
import AgentHeader from '../../components/agent-header/agent-header.component';
import AgentResults from '../../components/agent-results/agent-results.component';

const AgentsPage = () => (
    <div className='agents-page'>
        <AgentHeader />
        <AgentResults />
    </div>
);

export default AgentsPage;