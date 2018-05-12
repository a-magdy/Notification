import React, {PropTypes} from 'react';
import {Form, Button} from 'semantic-ui-react';
import styles from '../styles/Form.css';



const ImportForm  = ({notification, onChange, onSave}) => {


    return (
      <div>
        <Form className='form' style={{ fontSize: 14}}>
          <h1>Notification generator</h1>

            <label>Title </label>
            <input
                  type='text'
                  placeholder='Title'
                   name = "title"
                   value = {notification.title}
                   onChange = {onChange}
            />

            <label>Content</label>
            <input
                   type='text'
                   placeholder='Message'
                   name = "content"
                   value = {notification.content}
                   onChange={onChange}
            />

          <label>Icon</label>
          <input
            type='text'
            placeholder='Icon number'
            name = "icon"
            value = {notification.icon}s
            onChange={onChange}
          />

          <label>Position</label>
          <select name='position' value={notification.position} onChange={onChange}>
              <option value="/" >Select the position</option>
              <option value="topLeft">Top left</option>
              <option value="topCenter">Top center</option>
              <option value="topRight">Top right</option>
              <option value="bottomLeft">Bottom left</option>
              <option value="bottomCenter">Bottom center</option>
              <option value="bottomRight">Bottom right</option>
          </select>

          <label>Type</label>
          <select  name='color' value={notification.color} onChange={onChange}>
              <option value='/'>Select the message type</option>
              <option value='yellow'>Warning</option>
              <option value="green">Positive</option>
              <option value="red">Negative</option>
          </select>
          <label>Delete time</label>
          <input
            type='number'
            placeholder='Delete time '
            name = "deleteTime"
            value = {notification.deleteTime}
            onChange={onChange}
          />
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
  notification : PropTypes.object,
  onSave : PropTypes.func,
  onChange : PropTypes.func
};


export default ImportForm;



