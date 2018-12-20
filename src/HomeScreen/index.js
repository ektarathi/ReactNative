
import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import ProfileScreen from "../ProfileScreen/index.js";
import GraphScreen from "../GraphScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { createDrawerNavigator, createAppContainer  } from "react-navigation";

const HomeScreenRouter = createDrawerNavigator (
  {
    Home: { screen: HomeScreen },
    ProfileScreen: { screen: ProfileScreen },
    GraphScreen: { screen: GraphScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

const MyApp = createAppContainer(HomeScreenRouter);

export default (MyApp);