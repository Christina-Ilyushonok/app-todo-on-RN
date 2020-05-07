import React, {useState} from 'react';
import { StyleSheet, View, Button, TextInput, Alert } from 'react-native'; 

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value),
            setValue('')
        } else {
           Alert.alert('Todo is empty')
        }       
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={setValue}//{text => setValue(text)}
                value={value}
                placeholder={'Input name of todo...'}
                autoCorrect={false}
                autoCapitalize='none'
               // keyboardType='number-pad'
                >
            </TextInput>
            <Button title='add' onPress={pressHandler}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15
    },
    input: {
        width:'85 %',
        borderStyle:'solid',
        borderBottomColor:'#3949ab',
        borderBottomWidth:2,
        alignItems:'center',
        padding: 10

    }
})