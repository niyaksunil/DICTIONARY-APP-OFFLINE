import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import dictionary from "./localDb";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text : '',
      word : '',
      lexicalCategory : '',
      definition : '',
      isButtonPressed : ''
    }
  }

  getWord = (text)=>{
    var text = text.toLowerCase()
    try{
      var word = dictionary[text]["word"]
      var lexicalCategory = dictionary[text]["lexicalCategory"]
      var definition = dictionary[text]["definition"]
      this.setState({
        "word":word,
        "lexicalCategory":lexicalCategory,
        "definition": definition
      })
  }catch(err){
      alert("Sorry this word is not available for you")
      this.setState({
        'text':'',
        'isButtonPressed':false
      })
    }
  }


  render(){
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
        <Header
            backgroundColor = {"#76212d"}
            centerComponent = {{
            text:"DICTIONARY APP",
            style :{color:"white",fontSize:20},
          }}/>  

          <TextInput 
            style = {styles.inputBox}
            onChangeText={(text)=>{
              this.setState({text:text})
            }}
            value = {this.state.text}
          />

          <TouchableOpacity style = {styles.button}
            onPress = {()=>{this.getWord(this.state.text);}}>
            Search
         </TouchableOpacity>

         <Text style = {styles.wordText}>Word : {this.state.word}</Text>
         <Text style = {styles.typeText}>Type : {this.state.lexicalCategory}</Text>
         <Text style = {styles.typeText}>Definition : {this.state.definition}</Text>
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdff2',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign : 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 100,
    height: 50,
    marginLeft: 70,
    backgroundColor:"#165673",
    color:"white"
  },
  inputBox: {
    marginTop: 100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
   
  },
  wordText:{
    fontSize:20,
    textAlign : "left",
    marginTop:50,
    colour:"#67213c"
  },
  typeText:{
    fontSize:20,
    textAlign : "left",
    marginTop:20,
    colour:"#67213c"
  }
  
});
