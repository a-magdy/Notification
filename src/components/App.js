// this component handles  the App template used for every page.

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends React.Component{
    render(){
        return(
            <div >
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
