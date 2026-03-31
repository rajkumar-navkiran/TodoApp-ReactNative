import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { getData, storeData } from '../utils/storage';

const TodoListApp = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getData('todos').then((todos) => {
            if (todos) {    
                setTodos(JSON.parse(todos));
            } else {
                setTodos([]);
            }
        });
    }, []);

    useEffect(() => {
        storeData('todos', JSON.stringify(todos));
    }, [todos]);


    const addTodo = (text) => {
        if(text.trim() === ""){
            Alert.alert('Error','Todo is required');
            return;
        }

        if(todos.some((todo) => todo.text === text)){
            Alert.alert('Error','Todo already exists');
            return;
        }

        if (text.trim()) {
          setTodos([
            ...todos,
            {
              id: Math.random().toString(36).slice(2, 8),
              text,
              isCompleted: false
            }
          ]);
        }
      };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const markAsCompleted = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isCompleted: true } : todo));
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TodoList</Text>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} markAsCompleted={markAsCompleted} />  
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginHorizontal: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default TodoListApp;