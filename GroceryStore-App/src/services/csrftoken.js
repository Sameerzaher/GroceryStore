import React from 'react';
import getCookie from 'react-cookie'
const csrftoken = getCookie('csrftoken');

const CSRFTOKEN = () => {
    return (
        <input name="csrfmiddlewaretoken" value={csrftoken} type="hidden" />
    );
};

export default CSRFTOKEN;