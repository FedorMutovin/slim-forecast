import React from "react";

class HistoryEntry extends React.Component {
    render() {
        const { date, weight } = this.props;

        return (
            <ul>
                <li>{date}: {weight} kg</li>
            </ul>
        )
    }
}

export default HistoryEntry