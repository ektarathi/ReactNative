import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme, VictoryLine } from "victory-native";
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

export default class LineGraph extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" name="md-arrow-back"/>
          </Button>
        </Left>
        <Body>
          <Title>Line Graph</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  render() {
    return(
      <Container>
        <Content>
            <VictoryChart
              theme={VictoryTheme.material}>
              <VictoryLine
                style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc"}
                }}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 }
                ]}
              />
            </VictoryChart>
        </Content>
      </Container>
    );
  }
}