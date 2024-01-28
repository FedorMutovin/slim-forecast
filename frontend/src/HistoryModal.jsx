import React from "react";
import ReactDOM from "react-dom";
import History from "./History.jsx";

class HistoryModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {open: false}

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState(prevState => ({open: !prevState.open}));
    }

    render() {
        return (
            <>
                <button onClick={this.toggleModal}>
                    Show History
                </button>
                {
                    this.state.open && ReactDOM.createPortal(
                        <div style={styles.overlay}>
                            <div style={styles.body}>
                                <History history={this.props.data.history}/>
                                <button onClick={this.toggleModal}>Close</button>
                            </div>
                        </div>,
                        document.getElementById('modal-root')
                    )
                }
            </>
        )
    }
}

export default HistoryModal;

const styles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        backgroundColor: '#fff',
        padding: '10px'
    }
};