import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";

export default class EditScreenOne extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" name="md-arrow-back"/>
          </Button>
        </Left>
        <Body>
          <Title>Welcome</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  render() {
    return (
      <Container>
        <Content padder>
            <Card>
              <CardItem bordered>
                <Body>
                  <Text>
                     Successfully Logged In !!
                  </Text>
                </Body>
              </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}