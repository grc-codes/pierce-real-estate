import React from 'react';
import {
    AgentResultsContainer,
    AgentSortContainer,
    AgentSortText
} from './agent-results.styles';
import { selectSortDropdownHidden } from '../../redux/agents/agents.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AgentSortDropdown from '../agent-sort-dropdown/agent-sort-dropdown.component';
import { toggleSortDropdown } from '../../redux/agents/agents.actions';
import AgentResult from '../agent-result/agent-result.component';

const AgentResults = ({ sortDropdownHidden, toggleSortDropdown }) => (
    <AgentResultsContainer>
        <AgentSortContainer>
            <AgentSortText onClick={toggleSortDropdown}>
                Sort By: <span>Most Recent Sales</span> <i className='fas fa-sort-down' />
            </AgentSortText>
        </AgentSortContainer>
        {
            (sortDropdownHidden) ?
            null :
            <AgentSortDropdown />
        }
        <AgentResult />
        <AgentResult />
        <AgentResult />
        <AgentResult />
    </AgentResultsContainer>
);

const mapStateToProps = createStructuredSelector({
    sortDropdownHidden: selectSortDropdownHidden
});

const mapDispatchToProps = dispatch => ({
    toggleSortDropdown: () => dispatch(toggleSortDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(AgentResults);