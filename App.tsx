import { Button, Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ant from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import React, { useState } from 'react'
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const App = () => {
  const [text, settext] = useState("")
  const [list, setlist] = useState([])
  const [btnstate, setbtnstate] = useState(false)
  let date = new Date();
  function Addtask() {
    const arr = [...list, text]
    setlist(arr);
    settext("")
  }
  const DelItem = (index) => {
    const arr1 = list.filter((item, key) => {
      return key != index
    })
    setlist(arr1)
  }
  const UpdateItem = (index) => {
    settext(list[index])
    setbtnstate(true)
    return <Text>faisal mumtazfjehfkdjfhudfi</Text>
  }
  const EditItem = (index) => {
    list.splice(index, 1, text)
    setlist([...list])
    settext("")
    setbtnstate(false)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO App</Text>
      <View style={styles.inputcontainerstyle}>
        <TextInput
          placeholder='Add New Task'
          style={styles.inputstyle}
          value={text}
          onChangeText={(txt) => { settext(txt) }}
        />
        {
          btnstate ? <Button title='update' onPress={() => EditItem(key)} /> 
          :
          <Octicons.Button
          name="diff-added"
          backgroundColor='#e2efde'
          color="black"
          size={29}
          onPress={() => Addtask()}
          
        ></Octicons.Button>
        
        
        }
      </View>
      <ScrollView>
      {
        list.map((item, key) => {
          return (
            <View style={styles.listview} key={key}>
              <Text style={styles.txtstyle}>
                {item}
              </Text>
              <Text>
                {date.getDate() + "-" + date.getMonth() + 1 + "-" + date.getFullYear()}
              </Text>
              <View style={styles.listiconstyle}>
                <Icon.Button
                  name="edit"
                  backgroundColor='#e2efde'
                  color="black"
                  size={20}
                  onPress={() => {
                    UpdateItem(key)
                  }}
                >
                </Icon.Button>
                <Ant.Button
                  name="delete"
                  backgroundColor='#e2efde'
                  color="black"
                  size={18}
                  onPress={() => {
                    DelItem(key)
                  }}
                >
                </Ant.Button>
              </View>
              {/* {btnstate ? <Button title='update' onPress={() => EditItem(key)} /> : <View style={{ height: 0, width: 0 }}></View>} */}
            </View>
          )
        })
      }
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flex: 1,
    backgroundColor: 'white',
    borderWidth: 7,
    borderColor: '#abcca2',
    width: deviceWidth,
    height: deviceHeight,
  },
  listview: {
    width: '90%',
    backgroundColor: '#e2efde',
    borderWidth: 3,
    borderColor: '#abcca2',
    borderRadius: 9,
    padding: 8,
    alignSelf: 'center',
    marginVertical: 22
  },
  txtstyle: {
    fontSize: 22,
    color: 'black',
  },
  listiconstyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 36,
    color: 'black',
    marginLeft: '5%',
    marginBottom: 14,
  },
  inputcontainerstyle: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 22,
    borderRadius: 11,
    alignItems: 'center',
    backgroundColor: '#e2efde',
  },
  inputstyle: {
    backgroundColor: '#e2efde',
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    width:29,
    
  }
})