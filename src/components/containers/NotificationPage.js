import React from 'react';
import PropTypes from 'prop-types';
import ImportForm from '../elements/Form';
import ImportGridSystem from './GridSystem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class HomePage extends React.Component{
    constructor(props, context) {
      super(props, context);
      this.state = {
        message : Object.assign({}, this.props.message) //put properties of message into a object
      };
      //console.log(this.state.message);
      this.updateMessageState = this.updateMessageState.bind(this);
      this.createMessage = this.createMessage.bind(this);
    }

      updateMessageState(event){
        const field =  event.target.name;
        let message  = this.state.message;
        message[field]= event.target.value;
        //console.log(this.state.message);
        return this.setState({message:message});


      }
      createMessage(event){
        console.log(this.state.message);
        event.preventDefault();

      }

      render(){
        return(
          <div>

              <ImportForm
                onChange={this.updateMessageState}
                onSave={this.createMessage}
                message = {this.state.message}
              />

              <ImportGridSystem/>
          </div>

        );
      }
    }


//propTypes
HomePage.propTypes = {
      message : PropTypes.object.isRequired
      };

//map states to props
function mapStateToProps(state, ownProps) {


  let message ={
    title: "",
    content: "",
    position: "",
    color: ""
  };


  return {
    message: message

  };

}

export default connect(mapStateToProps)(HomePage);
