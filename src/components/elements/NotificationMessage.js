import React from 'react';
import PropTypes from 'prop-types';
import {Message, Icon} from 'semantic-ui-react';


class NotificationMessage extends React.Component {
  constructor(props, context) {
    super(props, context);
    //console.log(this.props.onClick);
  }

// run one time when the component run after the render
  componentDidMount() {
    const {deleteTime, id} = this.props.notification;
    if (deleteTime || deleteTime === 0) {
      setTimeout(() => {
        this.delete(id);
      }, deleteTime);
    }
  }


  delete(id) {
    this.props.onClick(id);
  }

  render() {
    //console.log(!"");
    const {
      id,
      icon,
      color,
      title,
      content
    } = this.props.notification;

    return (
      // there is a old message
      <Message
        color={color}
        size='small'
        onClick={() => this.delete(id)}
      >
        <Message.Header>
          {icon && <Icon className="showIcon" name={icon}/>}
          {title}{id}
        </Message.Header>
        <Message.Content>{content}</Message.Content>
      </Message>
    );
  }
}

NotificationMessage.propTypes = {
  notification: PropTypes.object,
  onClick: PropTypes.func

};

export default NotificationMessage;
