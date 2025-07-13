import "./Totals.css"

function Totals() {
    return (
        <div className="totals-container">
            <h2>Total Work Time {localStorage.getItem("totalStudyTime") || 0} minutes</h2>
            <h2>Total Scroll Time: {localStorage.getItem("totalBreakTime") || 0} minutes</h2>
        </div>
    )
}

export default Totals;