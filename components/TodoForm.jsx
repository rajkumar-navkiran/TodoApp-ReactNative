import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');
    const handleAddTodo = () => {
        if (text.trim()) {
            addTodo(text);
        }
        setText('');
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Add a new todo"
                style={styles.input}
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity
                onPress={handleAddTodo}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        marginBottom: 10,
        width: '80%',
        borderRadius: 5,
        marginRight: 10,
    },

    button: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 10,
        marginBottom: 10,
        width: '20%',
        borderRadius: 5,        
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default TodoForm;