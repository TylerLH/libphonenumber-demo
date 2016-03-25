import React from 'react';
import { AsYouTypeFormatter } from 'google-libphonenumber';

const formatter = new AsYouTypeFormatter('US');

// Keycodes
const BACKSPACE = 8;

const PhoneNumberInput = React.createClass({
    getInitialState() {
        return {
            formattedInput: ''
        }
    },

    handleKeyDown(e) {
        e.persist();
        const key = e.which || e.keyCode;
        if (key === BACKSPACE) {

        }
        const str = String.fromCharCode(key);
        if (/\d/g.test(str)) {
            this.setState({ formattedInput: formatter.inputDigit(str) });
        }
    },

    render() {
        const {formattedInput} = this.state;

        return (
            <div className="phone-number-input">
                <input
                    type="tel"
                    name="phone"
                    ref="phoneInput"
                    value={formattedInput}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        )
    }
});

export default PhoneNumberInput;
