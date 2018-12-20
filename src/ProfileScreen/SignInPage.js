import React from "react";
import { Form } from 'native-base';
import styles from '../../assets/scss/main.scss';
import InputLabel from '../components/common/InputField';

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

export default class SignIn extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" name="md-arrow-back"/>
          </Button>
        </Left>
        <Body>
          <Title>Log In</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <InputLabel name="Email"/>
            <InputLabel name="Password" secureTextEntry={true}/>
            <Button
              block
              primary
              style={styles.loginButton}
              onPress={() => this.props.navigation.navigate("WelcomePage")}
            >
              <Text>Log In</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}