import React from 'react';
// import rgbHex from 'rgb-hex';
import PropTypes from 'prop-types';

import s from './ColorPicker.module.css';
import InfoPanel from '../InfoPanel/InfoPanel';

class ColorPicker extends React.Component {
    state = {
        colorHexValue: 'пока не указан',
        colorIdx: 0,
    };

    onColorPick = (e, i) => {

        this.setState({
            // colorHexValue: rgbHex(e.target.style.backgroundColor).toUpperCase(),
            colorHexValue: this.props.options[i].color,
            colorIdx: i,
        });
    };

    render() {
        return (
            <div className={s.container}>
                <h2 className={s.title}>Color Picker</h2>
                <InfoPanel label='Шестнадцатеричный код цвета' value={this.state.colorHexValue}>  </InfoPanel>
                <div>
                    {this.props.options.map((option, i) => (
                        <span
                            className={s.option}
                            key={option.label}
                            onClick={(e) => { this.onColorPick(e, i) }}
                            style={{
                                backgroundColor: option.color,
                            }}
                        ></span>
                    ))}
                </div>
            </div>
        );
    }
}

ColorPicker.protoTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default ColorPicker;
