import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
const deviceWidth= Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const Pr = () => {
  const [data, setdata] = useState([])
  const [nametext, setnametext] = useState("")
  const [rolltext, setrolltext] = useState("")
  // const [test, settest] = useState("")
const arr1 = [{name:nametext,roll:rolltext}];
  const addData = async () => {
    
    const arr= arr1.concat(data)
    // arr= arr.concat({name:nametext,roll:rolltext})
    // arr.push({name:nametext,roll:rolltext})
    try {
      await AsyncStorage.setItem(
        'obj1', JSON.stringify(arr),
      );
    } catch (error) {
      console.log(error);
    }
  };
  const GetData = async () => {
    try {
      const value = await AsyncStorage.getItem('obj1');
      if (value !== null) {
        setdata(JSON.parse(value))
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetData()
  }, [])
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter Name'
        style={{ borderWidth: 1, borderColor: 'black', margin: 22, padding: 10 }}
        value={nametext}
        onChangeText={(v) => setnametext(v)}
      />
      <TextInput placeholder='Enter Roll No' style={{ borderWidth: 1, borderColor: 'black', margin: 22, padding: 10 }} value={rolltext} onChangeText={(v) => setrolltext(v)}/>
      <Button title='Store Data' onPress={addData} />
      <Button title='Get Data' onPress={GetData} />
      {

        data.map((items, i) => {
          return (
            <View key={i} style={{alignItems:'center'}}>
              <Text>{items.name}</Text>
              <Text>{items.roll}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

export default Pr

const styles = StyleSheet.create({
  container:{
    height: deviceHeight,
    width: deviceWidth,
  }

})