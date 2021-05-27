import React from 'react';
import {Image, Platform, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import Message from './message';
import {NavigationContainer} from '@react-navigation/native';
import TabHeader from '../components/tabHeader';

const Tab = createBottomTabNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'black',
          labelStyle: styles.labelStyle,
          keyboardHidesTabBar: true,
        }}
        tabBar={props => <TabHeader {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Message" component={Message} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    lineHeight: 14,
    paddingBottom: 10,
  },
});
