import React from 'react';
import PropTypes from 'prop-types';
import ImportForm from '../elements/Form';
import NotificationGrid from './NotificationGrid';
import {connect} from 'react-redux';


class Notifications extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      notification: Object.assign({}, this.props.notification), //put properties of message into a object
      notifications: [],
      id: 0
    };
    //console.log(this.state.message);
    this.updateNotificationState = this.updateNotificationState.bind(this);
    this.createNotification = this.createNotification.bind(this);
    this.deleteNotification = this.deleteNotification.bind(this);
  }

  updateNotificationState(event) {
    const field = event.target.name;
    let notification = this.state.notification;
    notification [field] = event.target.value;
    //console.log(this.state.message);
    this.setState({notification});
  }


  createNotification(event) {
    event.preventDefault();
    const newId = this.state.id + 1;
    this.setState({id: newId});
    const createdNotification = {
      id: newId,
      title: this.state.notification.title,
      content: this.state.notification.content,
      position: this.state.notification.position,
      color: this.state.notification.color,
      icon: this.state.notification.icon,
      deleteTime: this.state.notification.deleteTime
    };
    //console.log(createdMessage);
    this.positionSelected(createdNotification.position, createdNotification);
  }

  positionSelected(position, createdNotification) {
    if (createdNotification.position === "topLeft" || createdNotification.position === "topCenter" || createdNotification.position === "topRight") {
      this.setState({notifications: this.state.notifications.concat(this.state.notifications, createdNotification)});
    } else {
      this.setState({notifications: [createdNotification, ...this.state.notifications]});
    }
  }


  //delete function
  deleteNotification(idToRemove) {
    this.setState({notifications: this.state.notifications.filter(notification => notification.id !== idToRemove)});
  }


  render() {
    return (
      <div>
        <ImportForm
          onChange={this.updateNotificationState}
          onSave={this.createNotification}
          notification={this.state.notification}
        />
        <NotificationGrid
          notifications={this.state.notifications}
          onClick={this.deleteNotification}
        />
      </div>

    );
  }
}


//propTypes
Notifications.propTypes = {
  notification: PropTypes.object.isRequired
};

//map states to props
function mapStateToProps(state, ownProps) {

  let notification = {
    id: null,
    title: "",
    content: "",
    position: "",
    color: "",
    icon: "",
    deleteTime: ""
  };

  return {
    notification: notification

  };
}

export default connect(mapStateToProps)(Notifications);
