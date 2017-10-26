import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

class ListViews extends React.Component {
    static navigationOptions = { title: "Learn about Props" }
    render() {
      return (
        <View>
          <Text>ListViews</Text>
        </View>
      )
    }
  }
  export default ListViews;