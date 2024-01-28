import React from 'react'
import ForecastForm from "./ForecastForm.jsx";
import HistoryModal from "./HistoryModal.jsx";

class App extends React.Component {
    render() {
        return (
            <>
                <header style={styles.header}>Slim Forecast</header>
                <main style={styles.main}>
                    <ForecastForm data={this.props.data} />
                    <HistoryModal data={this.props.data}/>
                </main>
                <footer style={styles.footer}>&copy; {new Date().getFullYear()}</footer>
            </>
        );
    }
}

export default App;

const styles = {
    header: {
        backgroundColor: '#222222',
        color: '#fff',
        minHeight: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        padding: '10px 10%'
    },
    footer: {
        padding: '0 10%',
        marginTop: '50px'
    }
}