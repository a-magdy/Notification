import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import NotificationPage from './components/containers/Notifications';


export default (
    <Route  path="/" component={App}>
        < IndexRoute  component={NotificationPage} />

    </Route>
);
