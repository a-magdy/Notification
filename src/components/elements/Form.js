import React, {PropTypes} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import MessageImport from "./Form";

class ImportFormForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };

  }


  render() {
    return (
      <div>
        <Form style={{fontSize: 14, marginTop: 150}}>
          <h1>Notification generator</h1>
          <Form.Field>
            <label>Title </label>
            <input placeholder='Title'
                   value = {this.props.header}
                   onChange={this.props.titleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Message</label>
            <input placeholder='Message'
                   value = {this.props.content}
                   onChange={this.props.contentChange}

            />
          </Form.Field>

          <Form.Field label='Position:' control='select'>
        <option value='Top left'>Top left</option>
        <option value='Top right'>Top right</option>
        <option value='Top center'>Top center</option>
        <option value='Bottom left'>Bottom left</option>
        <option value='Bottom right'>Bottom right</option>
        <option value='Bottom center'>Bottom center</option>
      </Form.Field>
          <Form.Field label='Level:' control='select'>
            <option value='Positive'>Positive</option>
            <option value='Negative'>Negative</option>
            <option value='Warning'>Warning</option>
          </Form.Field>
          <Button type='submit'
                  onSave={this.props.onSave}
          >
            Notify!
          </Button>
        </Form>
      </div>
    );
  }
}

export default ImportFormForm;



