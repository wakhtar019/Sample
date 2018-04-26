import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import codePush from 'react-native-code-push';

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL

};

 class App extends Component {

  constructor(props) {
    super(props);
    this.updateDevEnv = this.updateDevEnv.bind(this);
    this.state = { logs: [] };
  }
   updateDevEnv() {  
     this.setState({logs : ['Started at ' + new Date().getDate()]});     
    codePush.sync({      
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
      //deploymentKey: "miNywvdXHeMwPtyrWC8zkSkKkIBlHk3B-Ks2z"
    }, (status) => {
      for(var key in codePush.SyncStatus){
        if(status === codePush.SyncStatus[key]){
          this.setState(prevState => ({ logs: [...prevState.logs, key.replace(/_/g, ' ')]}));
        }
      }
    });
  }

  updateSitEnv() {  
        
    codePush.sync({      
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey: "lWx5wXGE3kGg1msVPB-16KPhn1pzH1sDZYi2G"
    });
  }

  updateUatEnv() {  
        
    codePush.sync({      
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey: "y8izXC2dEd7f1UbiDGe9XTLQCoQ1rJidZts3f"
    });
  }

  updateProdEnv() {  
        
    codePush.sync({      
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey: "5u1vYhVzE97GbLGnoDJeydj4yguHH1FNJYsnz"
    });
  }

 render() {
   return (
     <View style={styles.container}>
     <Text style={styles.codePush}>Code push Demo Update agian</Text>
       <TouchableOpacity onPress={ () => this.updateDevEnv() }
         style={styles.button}>
         <Text> Connect To Dev </Text>
       </TouchableOpacity >
       <View>
       <TouchableOpacity onPress={this.updateSitEnv}
         style={styles.button}>
         <Text> Connect To SIT </Text>
       </TouchableOpacity>
       </View>
       <View>
       <TouchableOpacity onPress={this.updateUatEnv }
         style={styles.button}>
         <Text> Connect To UAT </Text>
       </TouchableOpacity>
       </View>
       <View>
       <TouchableOpacity onPress={this.updateProdEnv}
         style={styles.button}>
         <Text> Connect To Prod </Text>
       </TouchableOpacity>
       </View>
       <View>
         {this.state.logs.map((log, i)=> <Text> {log} </Text>)}
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
  },
  codePush:
  {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  }
})
App = codePush(codePushOptions)(App);
export default App;

