import React, {useState} from 'react'
import { View, StyleSheet, Button } from 'react-native'
import  {THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { AppTextBold } from '../components/ui/AppTextBold'


export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
    const [modal, setModal] = useState(false)
    const saveHandler = title => {
        onSave(todo.id, title)
        setModal(false)
    } 

    return (
        <View>  
            <EditModal 
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}    
                onSave={saveHandler}
            />        
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>                
                <Button 
                    title='Edit'
                    onPress={() => setModal(true)} 
                />    
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button 
                        title='Back'
                        color={THEME.GREY_COLOR} 
                        onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button 
                        title='Delete'
                        color={THEME.DANGER_COLOR}  
                        onPress={() => onRemove(todo.id)}
                        />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})