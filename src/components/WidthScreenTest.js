import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const deviceWidth= Dimensions.get('window').height;
const WidthScreenTest = () => {
  return (
    <View style={styles.contianer}>
      <Text>WidthScreenTest</Text>
    </View>
  )
}

export default WidthScreenTest

const styles = StyleSheet.create({
    contianer:{
        height: deviceWidth,
        backgroundColor:'green'
    }
})