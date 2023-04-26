import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Daysetting from '../components/Daysetting';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const WeatherscreenB = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#335FD1"
        barStyle='light-content'
        showHideTransition='slide'
      />
      <View style={styles.firstcontainer}>
        <View style={styles.datetimestyle}>
          <Daysetting />
        </View>
        <MaterialCommunityIcons name="weather-cloudy" size={99} color="#b8cfe1" style={styles.weathericonstyle} />
        <Text style={{ color: 'white', fontSize: 22, alignSelf: 'center' }}>18&deg;C</Text>
        <Text style={{ color: 'white', fontSize: 22, alignSelf: 'center', fontWeight: 'bold' }}>Cloudy Rain</Text>
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
          <Ionicons name="speedometer-outline" size={62} color="white" />

          <View style={{ marginLeft: 25 }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Cuaca esok hari kemungkinan</Text>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>akan terjadi hujan di siang hari</Text>
            <Text style={{ color: 'white', fontSize: 16 }}>Jangan lupa bawa payung ya</Text>
          </View>
        </View>
        <View style={styles.lastcontainerstyle}>
          <View style={styles.lastcontainersectionstyle}>
            <Ionicons name="speedometer-outline" size={32} color="white" />

            <View style={{ marginLeft: 25 }}>
              <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}>86%%</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>Kelembaban</Text>
            </View>
          </View>
          <View style={styles.lastcontainersectionstyle}>
            <Ionicons name="speedometer-outline" size={32} color="white" />

            <View style={{ marginLeft: 25 }}>
              <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}>86%%</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>Kelembaban</Text>
            </View>
          </View>
        </View>
        

      </View>

    </View>
  )
}

export default WeatherscreenB

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#201D1D',
    // backgroundColor:'white',
    height: deviceHeight,
    width: deviceWidth,
  },
  firstcontainer: {
    backgroundColor: '#335FD1',
    width: '100%',
    height: '35%',

  },
  datetimestyle: {
    width: '65%',
    alignSelf: 'center',
    marginTop: '4%',

  },
  weathericonstyle: {
    alignSelf: 'center',
    backgroundColor: '#9AB6FF',
    borderRadius: 33,
    padding: 5
  },
  rotateiconstyle: {
    marginTop: 5

  },
  recentupdatestyle: {
    color: 'white',
    fontSize: 18,
    marginRight: 11
  },
  lasttextblueconainer: {
    flexDirection: 'row',
    marginTop: '6%',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center'
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
    backgroundColor: '#242324',
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
    height:'40%'
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
    backgroundColor: '#242324',
    flexDirection: 'row',
    padding: '2%',
    borderRadius: 12,

  },
  lastcontainerstyle: {
    backgroundColor:'#242425',
    // backgroundColor: 'green',
    width: '100%',
    height: '27%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '3%',
  },
  lastcontainersectionstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '48%',
    backgroundColor: '#242425',
    padding: 5,
    borderRadius: 8,
  }
})