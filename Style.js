import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

class Style extends React.Component {
    static navigationOptions = { title: "Learn about Props" }
    render() {
      return (
        <View>
          <Text>Style</Text>
        </View>
      )
    }
  }
  export default Style;