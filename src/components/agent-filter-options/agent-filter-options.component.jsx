import React from 'react';
import {
    AgentFilterOptionsContainer,
    AgentFilterOptionsBtn
} from './agent-filter-styles';
import FilterOptionsDropdown from '../filter-options-dropdown/filter-options-dropdown.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFilterHidden } from '../../redux/agents/agents.selectors';
import { toggleFilterHidden } from '../../redux/agents/agents.actions';

const AgentFilterOptions = ({ filterHidden, toggleFilterHidden }) => (
    <AgentFilterOptionsContainer>
        <AgentFilterOptionsBtn onClick={toggleFilterHidden}>
            FILTER OPTIONS
            <i className={`fas ${filterHidden ? `fa-chevron-down` : `fa-chevron-up`}`}></i>
        </AgentFilterOptionsBtn>
        {
            (filterHidden) ?
            null :
            <FilterOptionsDropdown />
        }
    </AgentFilterOptionsContainer>
);

const mapStateToProps = createStructuredSelector({
    filterHidden: selectFilterHidden
});

const mapDispatchToProps = dispatch => ({
    toggleFilterHidden: () => dispatch(toggleFilterHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(AgentFilterOptions);