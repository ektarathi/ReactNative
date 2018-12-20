import React, { Component } from 'react';
import { Header, Left, Body, Right, Icon, Title, Button } from 'native-base';

export default class HeaderContent extends Component {
  render() {
    return (
        <Header>
          <Left>
            { 
              this.props.onBack &&
              <Button transparent
                onPress={() => this.props.onBack()}>
                <Icon name='ios-arrow-back' name="md-arrow-back"/>
              </Button>
            }
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='ios-menu' name="md-menu"/>
            </Button>
          </Right>
        </Header>
    );
  }
}