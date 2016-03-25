import React from 'react';
import { render } from 'react-dom';
import PhoneNumberInput from './components/PhoneNumberInput';

const App = React.createClass({
    render() {
        return (
            <div className="app">
                <PhoneNumberInput />
            </div>
        )
    }
});

const mount = document.getElementById('mount');
render(<App />, mount);
