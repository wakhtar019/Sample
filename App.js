import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import codePush from 'react-native-code-push';

export default class App extends Component {

  constructor(props) {
    super(props);
  }
   updateDevEnv() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey: 'miNywvdXHeMwPtyrWC8zkSkKkIBlHk3B-Ks2z'
    });
  }

 render() {
   return (
     <View style={styles.container}>
       <TouchableOpacity onPress={this.updateDevEnv}
         style={styles.button}>
         <Text> Connect To Dev </Text>
       </TouchableOpacity >
       <View>
       <TouchableOpacity
         style={styles.button}
       >
         <Text> Connect To SIT </Text>
       </TouchableOpacity>
       </View>
       <View>
       <TouchableOpacity
         style={styles.button}
       >
         <Text> Connect To UAT </Text>
       </TouchableOpacity>
       </View>
       <View>
       <TouchableOpacity
         style={styles.button}
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

AppRegistry.registerComponent('App', () => App);