import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'semantic-ui-react';
import NotificationList from '../elements/NotificationList';


class NotificationGrid extends React.Component {
  constructor(props, context) {
    super(props, context);
    //console.log(this.props.onClick);
  }

  render() {

    // for different message, ever message has function with initial acc, do not forger to return when use {}, if there is only one line filter,
    //use (), do not need return.
    const {onClick} = this.props;
    const {
      topLeft,
      topCenter,
      topRight,
      bottomLeft,
      bottomCenter,
      bottomRight
    } = this.props.notifications.reduce((acc, notification) => {
      acc[notification.position].push(notification);

      return acc;
    }, {
      topLeft: [],
      topCenter: [],
      topRight: [],
      bottomLeft: [],
      bottomCenter: [],
      bottomRight: []
    });

    return (
      <div>
        <Grid style={{position: 'fixed', width: '100%', height: 'auto', top: 8, left: 10}}>

          <Grid.Column computer={4} tablet={5} mobile={16}>
            <NotificationList
              notifications={topLeft}
              onClick={onClick}
            />
          </Grid.Column>
          <Grid.Column computer={8} tablet={5} mobile={16}>
            <NotificationList
              notifications={topCenter}
              onClick={onClick}
            />
          </Grid.Column>
          <Grid.Column computer={4} tablet={5} mobile={16}>
            <NotificationList
              notifications={topRight}
              onClick={onClick}
            />
          </Grid.Column>
        </Grid>

        <Grid
          verticalAlign="bottom"
          style={{
            position: 'fixed',
            width: '100%',
            height: 'auto',
            bottom: 8,
            left: 10
          }}
        >
          <Grid.Column computer={4} tablet={5} mobile={16}>
            <NotificationList
              notifications={bottomLeft}
              onClick={onClick}
            />
          </Grid.Column>
          <Grid.Column computer={8} tablet={5} mobile={16}>
            <NotificationList
              notifications={bottomCenter}
              onClick={onClick}
            />
          </Grid.Column>
          <Grid.Column computer={4} tablet={5} mobile={16}>
            <NotificationList
              notifications={bottomRight}
              onClick={onClick}
            />
          </Grid.Column>
        </Grid>

      </div>

    );
  }
}

NotificationGrid.propTypes = {
  id: PropTypes.number.isRequired,
  notifications: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NotificationGrid;
