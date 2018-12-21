import React, { Component } from "react";
import Profile from "./Profile.js";
import SignInPage from "./SignInPage.js";
import SignUp from "./SignUp.js";
import WelcomePage from "./WelcomePage.js";
import { createStackNavigator, createAppContainer } from "react-navigation";

const RootStack = createStackNavigator(
  {
    Profile: { screen: Profile },
    SignInPage: { screen: SignInPage },
    SignUp: { screen: SignUp },
    WelcomePage: { screen: WelcomePage }
  },
  {
    initialRouteName: "Profile"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
