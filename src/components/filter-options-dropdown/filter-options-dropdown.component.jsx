import React from 'react';
import {
    FilterOptionsDropdownContainer,
    ServicesNeededContainer,
    HomeTypeContainer,
    HomePriceContainer,
    LanguagesContainer,
    SpecialtiesContainer,
    FilterDropdownTitle,
    ServicesNeededSelect,
    HomeTypeSelect,
    HomePriceSelectRow,
    HomePriceSelect,
    LanguagesSelect,
    SpecialtiesSelect
} from './filter-options-dropdown.styles';

const FilterOptionsDropdown = () => (
    <FilterOptionsDropdownContainer>
        <ServicesNeededContainer>
            <FilterDropdownTitle>
                Service Needed
            </FilterDropdownTitle>
            <ServicesNeededSelect>
                <option value selected='selected'>
                    Buying or selling
                </option>
                <option value='buying'>
                    Buying
                </option>
                <option value='selling'>
                    Selling
                </option>
            </ServicesNeededSelect>
        </ServicesNeededContainer>
        <HomeTypeContainer>
            <FilterDropdownTitle>
                Home Type
            </FilterDropdownTitle>
            <HomeTypeSelect>
                <option value selected='selected'>
                    Any
                </option>
                <option value='houses'>
                    Houses
                </option>
                <option value='houses'>
                    Houses
                </option>
                <option value='apartments'>
                    Apartments
                </option>
                <option value='condo-coops'>
                    Condo/co-ops
                </option>
                <option value='townhomes'>
                    Townhomes
                </option>
                <option value='manufactured'>
                    Manufactured
                </option>
                <option value='lots-land'>
                    Lots/Land
                </option>
            </HomeTypeSelect>
        </HomeTypeContainer>
        <HomePriceContainer>
            <FilterDropdownTitle>
                Home Price
            </FilterDropdownTitle>
            <HomePriceSelectRow>
                <HomePriceSelect>
                    <option value selected='selected'>
                        Min
                    </option>
                    <option value='50'>
                        Min: $50K
                    </option>
                    <option value='75'>
                        Min: $75K
                    </option>
                    <option value='100'>
                        Min: $100K
                    </option>
                    <option value='150'>
                        Min: $150K
                    </option>
                    <option value='200'>
                        Min: $200K
                    </option>
                    <option value='250'>
                        Min: $250K
                    </option>
                    <option value='300'>
                        Min: $300K
                    </option>
                    <option value='400'>
                        Min: $400K
                    </option>
                    <option value='500'>
                        Min: $400K
                    </option>
                    <option value='1000'>
                        Min: $1M
                    </option>
                    <option value='5000'>
                        Min: $5M
                    </option>
                </HomePriceSelect>
                <span>to</span>
                <HomePriceSelect>
                    <option value selected='selected'>
                        Max
                    </option>
                    <option value='50'>
                        Max: $50K
                    </option>
                    <option value='75'>
                        Max: $75K
                    </option>
                    <option value='100'>
                        Max: $100K
                    </option>
                    <option value='150'>
                        Max: $150K
                    </option>
                    <option value='200'>
                        Max: $200K
                    </option>
                    <option value='250'>
                        Max: $250K
                    </option>
                    <option value='300'>
                        Max: $300K
                    </option>
                    <option value='400'>
                        Max: $400K
                    </option>
                    <option value='500'>
                        Max: $400K
                    </option>
                    <option value='1000'>
                        Max: $1M
                    </option>
                    <option value='5000'>
                        Max: $5M
                    </option>
                </HomePriceSelect>
            </HomePriceSelectRow>
        </HomePriceContainer>
        <LanguagesContainer>
            <FilterDropdownTitle>
                Languages
            </FilterDropdownTitle>
            <LanguagesSelect>
                <option selected value='english'>
                    English
                </option>
                <option value='arabic'>
                    Arabic
                </option>
                <option value='bengali'>
                    Bengali
                </option>
                <option value='cantonese'>
                    Cantonese
                </option>
                <option value='farsi'>
                    Farsi
                </option>
                <option value='french'>
                    French
                </option>
                <option value='german'>
                    German
                </option>
                <option value='greek'>
                    Greek
                </option>
                <option value='hebrew'>
                    Hebrew
                </option>
                <option value='hindi'>
                    Hindi
                </option>
                <option value='hungarian'>
                    Hungarian
                </option>
                <option value='italian'>
                    Italian
                </option>
                <option value='japanese'>
                    Japanese
                </option>
                <option value='korean'>
                    Korean
                </option>
                <option value='mandarin'>
                    Mandarin
                </option>
                <option value='polish'>
                    Polish
                </option>
                <option value='portuguese'>
                    Portuguese
                </option>
                <option value='russian'>
                    Russian
                </option>
                <option value='spanish'>
                    Spanish
                </option>
                <option value='tagalog'>
                    Tagalog (Filipino)
                </option>
                <option value='thai'>
                    Thai
                </option>
                <option value='turkish'>
                    Turkish
                </option>
                <option value='viatnamese'>
                    Viatnamese
                </option>
            </LanguagesSelect>
        </LanguagesContainer>
        <SpecialtiesContainer>
            <FilterDropdownTitle>
                Specialties
            </FilterDropdownTitle>
            <SpecialtiesSelect>
                <option value selected='selected'>
                    Any
                </option>
                <option value='buyer-agent'>
                    Buyer's Agent
                </option>
                <option value='listing-agent'>
                    Listing Agent
                </option>
                <option value='relocation'>
                    Relocation
                </option>
                <option value='foreclosure'>
                    Foreclosure
                </option>
                <option value='short-sale'>
                    Short Sale
                </option>
                <option value='consulting'>
                    Consulting
                </option>
                <option value='other'>
                    Other
                </option>
            </SpecialtiesSelect>
        </SpecialtiesContainer>
    </FilterOptionsDropdownContainer>
);

export default FilterOptionsDropdown;