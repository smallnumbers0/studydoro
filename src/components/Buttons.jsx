import './Buttons.css'

function Buttons(props) {
    return (
        <div className="button-container">
            <button type="button" className="button">Start</button>
            <button type="button" className="button">Stop</button>
            <button type="button" className="button">Reset</button>
        </div>
    )
}

export default Buttons;
