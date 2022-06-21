import rgbHex from 'rgb-hex';

import s from "./ColorPicker.module.css"


function onColorPick(e) {
    if (e.target.tagName !== 'SPAN') { return; }
    // console.log(e.target.tagName);
    // console.log(e.target);
    // console.log(e.target.style.backgroundColor);
    // rgbHex('rgb(40, 42, 54)');
    console.log(rgbHex(e.target.style.backgroundColor).toUpperCase());
}

function ColorPicker({ options }) {

    return (
        <div className={s.container} onClick={onColorPick} >
            <h2 className={s.title}>Color Picker</h2>
            <div>
                {options.map(option => (
                    <span className={s.option} key={option.label} style={{ backgroundColor: option.color, outline: "2px dotted green" }}></span>
                ))}
            </div>
        </div>
    );
}

export default ColorPicker;