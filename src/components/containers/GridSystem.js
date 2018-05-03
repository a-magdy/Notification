import React from 'react';
import { Grid } from 'semantic-ui-react';
import ImportMessage from '../elements/Message';
import MessageList from '../elements/MessageList';


class ImportGridSystem extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state={
        topLeftMessages : [{title: "Title", content:"There is a notification message", position:"top-left",color: "green"}],
        topCenterMessages : [],
        topRightMessages: [],
        bottomLeftMessages: [],
        bottomCenterMessages: [],
        bottomRightMessages: []

  };

  }

  render() {
    return (

      <div>

        <Grid style={{position: 'fixed', width: '100%', height: 'auto', top: 8, left: 10, zIndex: 889}}>


          <Grid.Column computer={4} tablet={5} mobile={16}>
            <MessageList messages = {this.state.topLeftMessages} />
          </Grid.Column>
          <Grid.Column computer={8} tablet={5} mobile={16}>
            <ImportMessage/>
          </Grid.Column>
          <Grid.Column computer={4} tablet={5} mobile={16}>
            <ImportMessage/>
          </Grid.Column>
        </Grid>

        <Grid verticalAlign="bottom"
              style={{position: 'fixed', width: '100%', height: 'auto', bottom: 8, left: 10, zIndex: 889}}>
          <Grid.Column computer={4} tablet={5} mobile={16}>
            <ImportMessage/>
          </Grid.Column>
          <Grid.Column computer={8} tablet={5} mobile={16}>
            <ImportMessage/>
          </Grid.Column>
          <Grid.Column computer={4} tablet={5} mobile={16}>
            <ImportMessage/>
          </Grid.Column>


        </Grid>
      </div>

    );
  }

}


export default ImportGridSystem;
