import React, { Component } from 'react';
import { Form, Item, Input, Label } from 'native-base';

export default class FormContent extends Component {
  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>FirstName</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>LastName</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input />
        </Item>
      </Form>
    );
  }
}
