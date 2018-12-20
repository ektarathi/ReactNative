import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Accordion
} from "native-base";

const dataArray = [
  {
    title: "First Element",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    title: "Second Element",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
  },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" name="md-menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Accordion
            dataArray={dataArray}
            icon="ios-add"
            expandedIcon="ios-remove"
          />
          <Button
            block
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("ProfileScreen")}
          >
            <Text>View Profiles</Text>
          </Button>
          <Button
            block
            warning
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("GraphScreen")}
          >
            <Text>Display Graphs</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
