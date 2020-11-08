import React from 'react';
import {
    AgentSortDropdownContainer,
    AgentSortDropdownList,
    AgentSortDropdownItem
} from './agent-sort-dropdown.styles';

const AgentSortDropdown = () => (
    <AgentSortDropdownContainer>
        <AgentSortDropdownList>
            <li>
                <AgentSortDropdownItem>
                    Most active
                </AgentSortDropdownItem>
            </li>
            <li>
                <AgentSortDropdownItem>
                    Most recent sales
                </AgentSortDropdownItem>
            </li>
            <li>
                <AgentSortDropdownItem>
                    Best local reviews
                </AgentSortDropdownItem>
            </li>
            <li>
                <AgentSortDropdownItem>
                    Most listings
                </AgentSortDropdownItem>
            </li>
        </AgentSortDropdownList>
    </AgentSortDropdownContainer>
);

export default AgentSortDropdown;