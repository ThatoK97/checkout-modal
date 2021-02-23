import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import InputForm from './input-fom';

describe('Input Form', async assert => {
    const $ = render(<InputForm />);

    assert({
        given: 'no arguments',
        should: 'render the text input field',
        actual: $('.text-input').length,
        expected: 1
    })
})