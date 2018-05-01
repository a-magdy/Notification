import React from 'react';
import { Message, Icon} from 'semantic-ui-react';

class MessageImport extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      visible: true
    };
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss (event){
     this.setState({ visible: false });

    setTimeout(() => {
      return this.setState({ visible: true });
    }, 2000);
  }

  render() {
    if (this.state.visible) {
      return (
        <Message icon>
          <Icon name='circle notched' loading />
          onDismiss={this.handleDismiss}
         <Message.Content>
          This is a special notification which you can dismiss.
         </Message.Content>
        </Message>
      );
    }

  }
}

export default MessageImport;
