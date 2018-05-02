import React,{PropTypes}from 'react';
import { Message, Icon} from 'semantic-ui-react';
import styles from './Message.css';

class MessageImport extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
        visible:true
    };
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss(){
    this.setState({ visible:false});

    setTimeout(() => {
      this.setState({ visible: true });
    }, 2000);
  }

  render() {
    if (this.state.visible){
      return (
        <div className="top-message">
          <Message
            warning
            size='huge'
            onDismiss={this.handleDismiss}
            header={this.props.header}
            content={this.props.content}
          />
        </div>
      );
    }
    return (
      <div className="top-message">
        <br />
        <i>The message will return in 2s</i>
        <br />
        <br />
      </div>
    );

  }
}

MessageImport.propTypes = {

  header: PropTypes.string,
  content: PropTypes.string

};

export default MessageImport;
