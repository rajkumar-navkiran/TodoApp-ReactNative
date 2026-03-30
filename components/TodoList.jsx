import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TodoItems from './TodoItems';

const TodoList = ({ todos, deleteTodo, markAsCompleted }) => {
    return (
        <View style={styles.container}>
            <FlatList data={todos} renderItem={({ item }) => <TodoItems todo={item} deleteTodo={deleteTodo} markAsCompleted={markAsCompleted} />} keyExtractor={(item) => item.id.toString()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
export default TodoList;