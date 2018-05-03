import React, {PropTypes} from 'react';
import { Message} from 'semantic-ui-react';
import MessageList from "./MessageList";



const MessageListRow = ({message}) => {
  return(
    <Message
      color={message.color}
      size= 'huge'
      header={message.title}
      content={message.content}
    />
    );

};

MessageListRow .propTypes ={
  message: PropTypes.object
};

export default MessageListRow;
