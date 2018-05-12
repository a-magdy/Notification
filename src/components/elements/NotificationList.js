import React, {PropTypes} from 'react';
import NotificationMessage from './NotificationMessage';


class NotificationList extends React.Component {
  constructor(props, context) {
    super(props, context);
    //console.log(this.props.onClick);
  }

  render() {
    // remember this way to call props !!!!
    const {
      notifications,
      onClick
    } = this.props;

    return (
      <div className="message-list">
        {
          notifications.map((notification) =>

            <NotificationMessage
              key={notification.id}
              notification={notification}
              onClick={onClick}
            />
          )
        }
      </div>
    );
  }
}


NotificationList.propTypes = {
  notifications: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};


export default NotificationList;
