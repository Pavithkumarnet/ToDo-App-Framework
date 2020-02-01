import * as React from 'react';
import { TextInput, View, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  state = {
    inputValue: '',
    todos: []
  };
  
  changeText = value => {
    this.setState({
      inputValue: value
    });
  };

  addItem = () => {
    if (this.state.inputValue !== ''){
      this.setState(prevState => {
        const newToDo = {
          title: this.state.inputValue,
          createdAt: Date.now(),
        };

        var todos = this.state.tados.concat(newToDo);

        this.setState({
          todos: todos,
        });
      });
    }
  };

  render() {
    const todos = this.state.todos.reverse().map((todo, key) =>
    <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <TouchableOpacity style={{
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    margin: 15    
      }}>

          </TouchableOpacity>
         <Text style={{ paddingLeft:5, marginTop:10, fontSize:28, color: 'white'}}>{todo.title}
        </view>  
    );

    return (
        <LinearGradient colors={['#667eea', '#764ba2']} style={{ flex:1 }}>
          <StatusBar barStyle="light-content" />
          <View>
            <TextInput
  style={styles.input}
  onSubmitEditing={this.addItem}
  onChangeText={this.changeText}
  placeholder="Type here to add a to do."
  value={this.state.inputValue}
  placeholderTextColor={'#fff'}
  multiline={true}
  autoCapitalize="sentences"
  underlineColorAndroid="transport"
  selectionColor={'white'}
  maxLength={30}
  returnKeyType="done"
  autoCorrect={false}
  blurOnSubit={true}
  />
          </View>
          <view>
          {todos}
          </view>  
          </LinearGradient>
    );
  }
}

const styles ={
  input:
  {
    marginTop: 30,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 34,
    color: 'white',
    fontweight: '500'
  }
}