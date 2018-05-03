import React, {PropTypes} from 'react';
import MessageListRow from './MessageListRow';

const MessageList = ({messages}) =>{
  messages.map((message)=>{
    const id = messages.indexOf(message);
    message[id] = id;
  });

  return(
    <div className="message-list" >
      {
        messages.map((message)=>
          <MessageListRow
            key={message.id} message={message}
          />
        )
      }


    </div>
  );
};

MessageList.propTypes ={
  messages: PropTypes.array.isRequired
};


export default MessageList;
