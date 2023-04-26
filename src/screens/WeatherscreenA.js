import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ant from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Daysetting from '../components/Daysetting';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const WeatherscreenA = () => {
  const [hourlyweatherdata, sethourlyweatherdata] = useState([
    { key: 1, temp: '20', time: '4.00PM' }
  ])

  return (
    <View style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="#201D1D"
        barStyle='light-content'
        showHideTransition='slide'
      />

      <View style={styles.containerfirst}>

        <TextInput style={styles.searchinput} placeholder='Search' placeholderTextColor='black' />
        <Icon name='search' size={22} color="black" style={styles.searchiconstyle} />
      </View>
      <View style={styles.secondcontainer}>
        <Daysetting />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <MaterialCommunityIcons name="weather-cloudy" size={82} color="white" />
          <View style={styles.areatempratureconainer}>
            <View style={styles.tempraturecontainer}>
              <Text style={styles.tempraturetextstyle}>18</Text>
              <MaterialCommunityIcons name="temperature-celsius" size={32} color="white" />
            </View>
            <View>
              <Text style={styles.areanamestyle}>Hujan Berwan</Text>
            </View>

          </View>

        </View>
        <View style={styles.lasttextblueconainer}>
          <Text style={styles.recentupdatestyle}>Recent Update 3:00 am</Text>
          <Icon name="rotate-right" color='white' size={18} style={styles.rotateiconstyle} />
        </View>
      </View>
      <View style={styles.thirdcontainer}>
        <Text style={styles.Thirdcontainerheading}>Hourly Weather</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.hourlyweathercontainer}>
            <MaterialCommunityIcons name="weather-cloudy" size={62} color="white" />
            <Text style={{ color: 'white', fontSize: 22 }}>20&deg;</Text>
            <Text style={{ color: 'white', fontSize: 22 }}>4:00PM</Text>
          </View>
          <View style={styles.hourlyweathercontainer}>
            <MaterialCommunityIcons name="weather-cloudy" size={62} color="white" />
            <Text style={{ color: 'white', fontSize: 22 }}>29&deg;</Text>
            <Text style={{ color: 'white', fontSize: 22 }}>3:00PM</Text>
          </View>

        </View>
      </View>
      
      <View style={styles.fourthcontainer}>
        <Text style={styles.fourthcontainerheading}>Daily</Text>
        <View style={styles.fourthcontainerSection}>
          <MaterialCommunityIcons name="weather-cloudy" size={62} color="#E55C" />
          <View style={{ marginLeft: 25 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>jfjeojflejfedo</Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>jfjeojflejfedo</Text>
            <Text style={{ color: 'white', fontSize: 18 }}>jfjeojflejfedo</Text>
          </View>
        </View>
        <View style={[styles.fourthcontainerSection, { marginTop: '3%', backgroundColor: '#D2DFFF' }]}>
          <MaterialCommunityIcons name="weather-cloudy" size={42} color="#b8cfe1" style={styles.weathericonstyle} />
          <View style={{ marginLeft: 25 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>jfjeojflejfedo</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>jfjeojflejfedo</Text>
          </View>
        </View>
        <View style={[styles.fourthcontainerSection, { marginTop: '3%', backgroundColor: '#D2DFFF' }]}>
          <MaterialCommunityIcons name="weather-cloudy" size={42} color="#b8cfe1" style={styles.weathericonstyle} />
          <View style={{ marginLeft: 25 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>jfjeojflejfedo</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>jfjeojflejfedo</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default WeatherscreenA

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: '#201D1D'
  },
  containerfirst: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: '1%',
    alignItems: 'center',
  },
  locationheading: {
    fontSize: 22,
    marginLeft: "2%",
    color: 'black'
  },
  downiconstyle: {
    marginTop: 4,
    marginLeft: "2%",

  },
  searchiconstyle: {
    alignSelf: 'center',
    marginLeft: -38
  },
  secondcontainer: {
    backgroundColor: '#3B68DD',
    width: '90%',
    height: '25%',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: '2%',
    padding: 22
  },
  datetextstyle: {
    color: 'white',
    fontSize: 22,

  },
  searchinput: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    borderRadius: 12,
    paddingLeft: '6%',
    fontSize: 15
  },
  tempraturetextstyle: {
    color: 'white',
    fontSize: 23
  },
  tempraturecontainer: {
    flexDirection: 'row'
  },
  areanamestyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  recentupdatestyle: {
    color: 'white',
    fontSize: 18,
    marginRight: 11
  },
  lasttextblueconainer: {
    flexDirection: 'row',
    marginTop: '6%',
    alignItems: 'center',
  },
  rotateiconstyle: {
    marginTop: 5

  },
  thirdcontainer: {
    width: '90%',
    color: 'green',
    alignSelf: 'center',
    marginVertical: '1%'
  },
  Thirdcontainerheading: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25
  },
  hourlyweathercontainer: {
    backgroundColor: '#242222',
    width: 140,
    height: 140,
    borderRadius: 12,
    marginVertical: '.5%',
    marginRight: '2%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fourthcontainer: {
    width: '90%',
    alignSelf: 'center',
    // marginVertical: '1%'
  },
  fourthcontainerheading: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    marginBottom: '1%'
  },
  fourthcontainerSection: {
    width: '100%',
    backgroundColor: '#E7755C',
    flexDirection: 'row',
    padding: '2%',
    borderRadius: 12,
  },
  weathericonstyle: {
    backgroundColor: '#93B0F8',
    borderRadius: 35,
    padding: 5
  }
})