import React from 'react';
import PropTypes from 'prop-types';
import ImportForm from '../elements/Form';
import ImportMessage from '../elements/Message';

class HomePage extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state={
          header: 'Title',
          content:'There is a notification'
        };
      this.updateNotState = this.updateNotState.bind(this);
      this.updateNotContent= this.updateNotContent.bind(this);
      this.submitForm = this.submitForm.bind(this);
      }

      updateNotState(event){
          const notHead  = event.target.value;
          return this.setState({header:notHead});
      }

      updateNotContent(event){
        const notContent  = event.target.value;
        return this.setState({content:notContent});
      }

      submitForm(event){
          alert('A title was submitted: ' + this.state.header);
          event.preventDefault();

      }


      render(){
        return(
          <div>


              <ImportForm


                onSave={this.submitForm}
                header = {this.state.header}
                content = {this.state.content}
                titleChange={this.updateNotState}
                contentChange = {this.updateNotContent}
              />
              <ImportMessage

                header = {this.state.header}
                content = {this.state.content}
              />

          </div>

        );
      }
    }



HomePage.propTypes = {
  header : PropTypes.string,
  content : PropTypes.string

};
    export default HomePage;
