import s from './InfoPanel.module.css';

function InfoPanel({ label, value }) {
    return (
        <div className={s.panel}>
            <p className={s.label}>{label}</p>
            <p className={s.value}>{value}</p>
        </div>
    );
}

export default InfoPanel;
