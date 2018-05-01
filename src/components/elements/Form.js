import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const ImportFormForm = () => {
  return(
    <Form>
      <Form.Field>
        <label>First Name: </label>
        <input placeholder='First Name'/>
      </Form.Field>
      <Form.Field>
        <label>Last Name:</label>
        <input placeholder='Last Name'/>
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
    <Button type='submit'>Notify!</Button>
  </Form>
  );

};

export default ImportFormForm;



