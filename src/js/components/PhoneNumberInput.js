import React from 'react'
import { AsYouTypeFormatter } from 'google-libphonenumber'
import keyUtil from '../keyUtil'

const PhoneNumberInput = React.createClass({
    getInitialState() {
        return {
            rawInput: '',
            formattedInput: ''
        }
    },

    componentWillMount() {
      this.formatter = new AsYouTypeFormatter('US')
    },

    handleKeyDown(e) {
        e.persist()
        const { rawInput, formattedInput } = this.state;
        const keyCode = keyUtil.createKeyCode(e.key || e.which || e.keyCode)
        if (keyCode.isBackspace) {
          const newInput = rawInput.slice(-1);
          this.setState({
            rawInput: newVal,
            formattedInput: newVal
          })
          return;
        }
        const str = String.fromCharCode(key)
        if (/\d/g.test(str)) {
            this.setState({
              rawInput: e.target.value,
              formattedInput: formatter.inputDigit(str)
            })
        }
    },

    render() {
        const {formattedInput} = this.state

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
})

export default PhoneNumberInput
