import React, { Component } from 'react';
import { Item, Input, Label } from 'native-base';

export default class InputField extends Component {
  render() {
    return (
      <Item floatingLabel>
        <Label>{this.props.name}</Label>
        <Input secureTextEntry={this.props.secureTextEntry}/>
      </Item>
    );
  }
}
