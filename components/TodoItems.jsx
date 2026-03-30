import { Feather } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

const TodoItems = ({ todo, deleteTodo, markAsCompleted }) => {
    const swipeableRef = useRef(null);

    const closeThen = (fn) => {
        swipeableRef.current?.close();
        fn();
    };

    return (
        <GestureHandlerRootView>
            {/* margin lives outside Swipeable so row height matches the gray card */}
            <View style={styles.rowSpacing}>
                <Swipeable
                    ref={swipeableRef}
                    renderRightActions={() => (
                        <TouchableOpacity
                            style={styles.deleteSwipeAction}
                            activeOpacity={0.8}
                            onPress={() => closeThen(() => deleteTodo(todo.id))}
                        >
                            <Feather name="trash" size={20} color="white" />
                        </TouchableOpacity>
                    )}
                    renderLeftActions={() =>
                        !todo.isCompleted ? (
                            <TouchableOpacity
                                style={styles.completedSwipeAction}
                                activeOpacity={0.8}
                                onPress={() => closeThen(() => markAsCompleted(todo.id))}
                            >
                                <Feather name="check" size={20} color="white" />
                            </TouchableOpacity>
                        ) : null
                    }
                >
                    <View style={styles.items}>
                        <Text
                            style={[
                                styles.itemText,
                                {
                                    textDecorationLine: todo.isCompleted ? 'line-through' : 'none',
                                    color: todo.isCompleted ? 'green' : 'black',
                                },
                            ]}
                        >
                            {todo.text}
                        </Text>
                    </View>
                </Swipeable>
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    rowSpacing: {
        marginBottom: 10,
    },
    items: {
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 5,
        width: '100%',
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'none',
        color: 'black',
    },
    deleteSwipeAction: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    completedSwipeAction: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
});

export default TodoItems;
