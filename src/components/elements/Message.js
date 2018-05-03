import React,{PropTypes}from 'react';
import { Message, Icon} from 'semantic-ui-react';


class ImportMessage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
        header: "Title",
        content: "There is the message content",
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
            header={this.state.header}
            content={this.state.content}
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

ImportMessage .propTypes = {

  header: PropTypes.string,
  content: PropTypes.string

};

export default ImportMessage;
