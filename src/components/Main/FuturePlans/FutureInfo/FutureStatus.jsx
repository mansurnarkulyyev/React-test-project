// import Preloader from 'components/commons/Preloader';
import React from 'react';

class FutureStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        // console.log(this);
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    }
    render() {
        return (<>
            {!this.state.editMode
                ? <div><span
                    onDoubleClick={this.activateEditMode}
                >{this.props.status}</span></div>
                : <form>
                    <input style={{ backgroundColor: "white" }}
                        onBlur={this.deactivateEditMode}
                        autoFocus={true}
                        type="text"
                        value={this.props.status} />
                </form>}
        </>
        );
    }
};
export default FutureStatus;