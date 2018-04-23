import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {
  /*constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }*/

 render() {
   return (
     <View style={styles.container}>
       <TouchableOpacity
         style={styles.button}
         //onPress={this.onPress}
       >
         <Text> Connect To Dev </Text>
       </TouchableOpacity>
       <View>
       <TouchableOpacity
         style={styles.button}
         //onPress={this.onPress}
       >
         <Text> Connect To SIT </Text>
       </TouchableOpacity>
       </View>
       <View>
       <TouchableOpacity
         style={styles.button}
         //onPress={this.onPress}
       >
         <Text> Connect To UAT </Text>
       </TouchableOpacity>
       </View>
       <View>
       <TouchableOpacity
         style={styles.button}
         //onPress={this.onPress}
       >
         <Text> Connect To Prod </Text>
       </TouchableOpacity>
       </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    margin: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5
  }
})

AppRegistry.registerComponent('App', () => App)