import { Dimensions, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ant from 'react-native-vector-icons/AntDesign';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
let date = new Date();
const TodoAsycStorage = () => {
    const [text, settext] = useState("")
    const [list, setlist] = useState([])
    const arr1 = [text];
    const storeData = async () => {
        // const arr= arr1.concat(data)
        const arr = arr1.concat(list)
        console.log(arr);
        try {
            await AsyncStorage.setItem(
                'text', JSON.stringify(arr),
            );
        } catch (error) {
            console.log(error);
        }
        settext("");
    };
    const GetData = async () => {
        try {
            const value = await AsyncStorage.getItem('text');
            if (value !== null) {
                setlist(JSON.parse(value))
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        GetData()
    }, [list])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>TODO App</Text>
            <View style={styles.inputcontainer}>

                <TextInput
                    placeholder='Add Task'
                    style={styles.inputstyle}
                    value={text}
                    onChangeText={(t) => settext(t)}
                />
                <Octicons.Button
                    name="diff-added"
                    backgroundColor='#e2efde'
                    color="black"
                    size={29}
                    onPress={() => storeData()}
                />
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

export default TodoAsycStorage

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: 'white',
        borderWidth: 7,
        borderColor: '#abcca2',
    },
    inputcontainer: {
        flexDirection: 'row',
        marginHorizontal: "6%",
        backgroundColor: '#e2efde',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 36,
        color: 'black',
        marginLeft: '5%',
        marginBottom: 14,
    },
    inputstyle: {
        backgroundColor: '#e2efde',
        color: 'black',
        paddingLeft: 15,
        fontSize: 19,
        // margin:"3%"
        width: "90%",
        height: 46,

    },
    listview: {
        width: '90%',
        backgroundColor: '#e2efde',
        borderWidth: 3,
        borderColor: '#abcca2',
        borderRadius: 9,
        padding: 8,
        alignSelf: 'center',
        marginVertical: 22,
    },
    txtstyle: {
        fontSize: 22,
        color: 'black',
    },
    listiconstyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
})