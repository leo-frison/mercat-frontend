import React, {Component} from 'react';
import './index.css';
import { connect } from 'react-redux'
import {disableNotify} from '../../actions'

class Notification extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentWillUpdate(nextProps) {
        if(this.id)
            clearTimeout(this.id);
        this.id = undefined;
        if(nextProps.showNotification)
            this.id = setTimeout(() => this.props.disableNotify(), 3000);
    }
    componentWillUnmount() {
        if(this.id)
            clearTimeout(this.id);
    }
    render() {
        if(this.props.showNotification)
            return (
                    <div className="notificationBar">
                    El artículo ha sido agregado al carrito
                    </div>
            );
        else return (
                <div></div>
        );
    };
}

const mapStateToProps = state => {
    return {
        showNotification: state.showNotification
    }
};

const mapDispatchToProps = dispatch => {
    return {
        disableNotify: id => {
            dispatch(disableNotify(id))
        }
    }
};

const VisibleNotification = connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification);

export default VisibleNotification