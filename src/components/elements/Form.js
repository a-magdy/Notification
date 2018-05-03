import React, {PropTypes} from 'react';
import {Form, Button} from 'semantic-ui-react';
import styles from '../styles/Form.css';



const ImportForm  = ({message, onChange, onSave}) => {


    return (
      <div>
        <Form className='form' style={{ fontSize: 14}}>
          <h1>Notification generator</h1>

            <label>Title </label>
            <input
                  type='text'
                  placeholder='Title'
                   name = "title"
                   value = {message.title}
                   onChange = {onChange}
            />



            <label>Message</label>
            <input
                   type='text'
                   placeholder='Message'
                   name = "content"
                   value = {message.content}
                   onChange={onChange}
            />

          <label>position</label>
          <select name='position' value={message.position} onChange={onChange}>
              <option selected="selected" value="Top left">Top left</option>
              <option value="Top right">Top right</option>
              <option value="Top center">Top center</option>
              <option value="Bottom left">Bottom left</option>
              <option value="Bottom right">Bottom right</option>
              <option value="Bottom center">Bottom center</option>
          </select>

          <label>Type</label>
          <select name='color' value={message.color} onChange={onChange}>
              <option value="yellow">Warning</option>
              <option selected="selected" value="green">Positive</option>
              <option value="red">Negative</option>
          </select>
          <Form.Field>
            <Button
              fluid
              type='submit'
              color="green"
              onClick={onSave}
            >
              Submit
            </Button>
          </Form.Field>

        </Form>
      </div>
    );

};

ImportForm .propTypes = {
  message : PropTypes.object,
  onSave : PropTypes.func,
  onChange : PropTypes.func
};


export default ImportForm;



