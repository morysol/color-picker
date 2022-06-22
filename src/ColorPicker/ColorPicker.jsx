import React from "react";
import rgbHex from "rgb-hex";
import PropTypes from "prop-types";

import s from "./ColorPicker.module.css";
import InfoPanel from '../InfoPanel/InfoPanel'

class ColorPicker extends React.Component {
    state = {
        colorLabel: "Шестнадцатеричный код цвета",
        colorHexValue: "пока не указан",
    };

    onColorPick = (e) => {

        this.setState({ colorHexValue: rgbHex(e.target.style.backgroundColor).toUpperCase() });
    };
    render() {
        return (
            <div className={s.container}>
                <h2 className={s.title}>Color Picker</h2>
                <InfoPanel color={this.state}></InfoPanel>
                <div>
                    {this.props.options.map((option) => (
                        <span
                            className={s.option}
                            key={option.label}
                            onClick={this.onColorPick}
                            style={{
                                backgroundColor: option.color,
                                outline: "2px dotted green",
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
