function turnInputToParams(input) {
    if(isNaN(input)) {
        const inputs = input.split(' ');
        const state = inputs[inputs.length-1];
        inputs.pop();
        const city = inputs.join(' ');
        const params = {
            city: city,
            limit: '20',
            offset: '0',
            state_code: state,
            sort: 'relevance'
        };
        return params;
    } else {
        if(input < 99950 && input > 501) {
            const params = {
                city: 'New York City',
                limit: '20',
                offset: '0',
                state_code: 'NY',
                sort: 'relevance',
                postal_code: input.toString()
            };
            return params;
        } else {
            console.log('ZipCode is wrong');
        }
    }
}

export default turnInputToParams;