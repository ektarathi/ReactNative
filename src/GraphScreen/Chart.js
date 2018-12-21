import React, { Component } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryTheme
} from "victory-native";
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

import LineGraph from "./LineGraph.js";

const data2012 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

const data2013 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
  { quarter: 4, earnings: 13000 }
];

const data2014 = [
  { quarter: 1, earnings: 11500 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 20000 },
  { quarter: 4, earnings: 15500 }
];

const data2015 = [
  { quarter: 1, earnings: 18000 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 12000 }
];

export default class BarChart extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis dependentAxis tickFormat={x => `$${x / 1000}k`} />
            <VictoryStack>
              <VictoryBar data={data2012} x="quarter" y="earnings" />
              <VictoryBar data={data2013} x="quarter" y="earnings" />
              <VictoryBar data={data2014} x="quarter" y="earnings" />
              <VictoryBar data={data2015} x="quarter" y="earnings" />
            </VictoryStack>
          </VictoryChart>
          <Button
            block
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("LineGraph")}
          >
            <Text>View Line Graph</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
BarChart.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="ios-menu" name="md-menu" />
          </Button>
        </Left>
        <Body>
          <Title>Bar Chart</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};
