import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Daysetting = () => {
    const [day, setday] = useState()
    const [month, setmonth] = useState()
    let dtformat = new Intl.DateTimeFormat('en-US',{
      hour:'numeric',
      minute:'numeric'
    })
    const d = new Date()
    // console.log(dtformat.format(d))
    const dayset = () => {
        switch (d.getDay()) {
            case 0:
                setday('Sunday')
                break;
            case 1:
                setday('Monday')
                break;
            case 2:
                setday('Tuesday')
                break;
            case 3:
                setday('Wednesday')
                break;
            case 4:
                setday('Thursday')
                break;
            case 5:
                setday('Friday')
                break;
            case 6:
                setday('Satureday')
                break;
        }
    }
    const Monthset = () => {
        switch (d.getMonth() + 1) {
            case 1:
                setmonth('January')
                break;
            case 2:
                setmonth('February')
                break;
            case 3:
                setmonth('March')
                break;
            case 4:
                setmonth('April')
                break;
            case 5:
                setmonth('May')
                break;
            case 6:
                setmonth('June')
                break;
            case 7:
                setmonth('July')
                break;
            case 8:
                setmonth('August')
                break;
            case 9:
                setmonth('September')
                break;
            case 10:
                setmonth('October')
                break;
            case 11:
                setmonth('November')
                break;
            case 12:
                setmonth('December')
                break;
        }
    }
    useEffect(() => {
        dayset()
        Monthset()
        // console.log(month);
    }, [])

    return (
        <View style={styles.container} >
        <Text style={styles.datetextstyle}>
            {day}, {d.getDate()} {month} {d.getFullYear()}
        </Text>
        <Text style={styles.datetextstyle}>{dtformat.format(d)}</Text>
        </View>
    )
}

export default Daysetting

const styles = StyleSheet.create({
    datetextstyle: {
        color: 'white',
        fontSize: 18,

    },
    container:{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:'2%'
        // backgroundColor:'green'
    }
})