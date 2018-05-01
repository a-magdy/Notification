import React from 'react';
import ImportForm from '../elements/Form';
import ImportMessage from '../elements/Message';

class HomePage extends React.Component{
    constructor(props, context){
        super(props, context);
    
      }
    
      render(){
        return(
          <div>
            <ImportMessage/>
            <div>
              <h1>Notification generator</h1>
              <ImportForm/>
            </div>
          </div>
    
        );
      }
    }
    export default HomePage;