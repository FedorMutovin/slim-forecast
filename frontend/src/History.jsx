import React from "react";
import HistoryEntry from "./HistoryEntry.jsx";

class History extends React.Component {
    render() {
        const {history} = this.props;
        const historyEntries = history.map((entry) =>
            <HistoryEntry key={entry.id} date={entry.date} weight={entry.weight}/>
        );

        return (
            <div>
                {historyEntries}
            </div>
        )
    }
}

export default History