import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Apiaxios = () => {
  const [text, settext] = useState()
  const getData = async () => {
    try {
      const fetch = await axios.get('https://fakestoreapi.com/products')
      // console.log(fetch.data);
      settext(fetch.data)
    } catch (error) {
      console.log(error);
    }
  }
  const addProduct = async (id) => {
    try {
      const fetch = await axios.delete(`https://fakestoreapi.com/products/6`)
    await getData();
    console.log(fetch.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <ScrollView>
      
      {
        text?.map((index, key) => {
          return (
            <ScrollView key={key}>
              <Text style={{ color: 'black', fontSize: 15 }}>{index.title}</Text>
              <Text style={{ color: 'black', fontSize: 15 }}>{index.price}</Text>
              <Button title='delete' onPress={()=>addProduct(key)} />
            </ScrollView>
          )
        })
      }
    </ScrollView>
  )
}

export default Apiaxios

const styles = StyleSheet.create({})