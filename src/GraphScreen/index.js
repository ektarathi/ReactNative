import React, { Component } from "react";
import Chart from "./Chart.js";
import LineGraph from './LineGraph.js';
import { createStackNavigator, createAppContainer  } from "react-navigation";

const RootStack = createStackNavigator(
  {
    Chart: { screen: Chart },
    LineGraph: { screen: LineGraph}
  },
  {
    initialRouteName: "Chart"
  }
);


const AppContainer = createAppContainer(RootStack);

export default AppContainer;