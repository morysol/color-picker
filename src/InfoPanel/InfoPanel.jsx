// import ColorPicker from "../ColorPicker/ColorPicker";
import s from "./InfoPanel.module.css";

function InfoPanel({ color }) {
    return (
        <div className={s.panel}>
            <p className={s.label}>{color.colorLabel}</p>
            <p className={s.value}>{color.colorHexValue}</p>
        </div>
    );
}

export default InfoPanel;