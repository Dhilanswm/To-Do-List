import { StyleSheet, Text, View, FlatList, ScrollView, Image, Button, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

type Task = {
  id: number;
  task: string;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, task: "go to gym " },
    { id: 2, task: "learn how to ice skate" },
    { id: 3, task: "learn how to create generational wealth" },
    { id: 4, task: "learn mutlipe lanuages" },
    { id: 5, task: "tweak out" },

  ]);

  const [taskId, setTaskId] = useState<string>('');
  const [taskName, setTaskName] = useState<string>('');

  const AddTaskOnPress = () => {
    const newTask = { id: parseInt(taskId), task: taskName };
    setTasks([...tasks, newTask]);
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.heading}>TO DO LIST</Text>
      <FlatList
        style={styles.listStyle}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.childView}>
            <Text style={styles.subHeading}>Task ID: {item.id}</Text>
            <Text style={styles.subHeading}>Task: {item.task}</Text>
          </View>
        )}
      />
      <View style={styles.userInputView}>
        <TextInput
          style={styles.input}
          placeholder="Task ID"
          value={taskId}
          onChangeText={setTaskId}
        />
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          value={taskName}
          onChangeText={setTaskName}
        />
        <TouchableOpacity onPress={AddTaskOnPress} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    backgroundColor: 'grey',
    justifyContent: 'flex-start',
  },
  subHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  heading: {
    margin: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },
  userInputView: {
    width: 500,
    height: 250,
    marginVertical: 15,
    backgroundColor: 'black',
    padding: 20,
    marginTop: 100,
  },
  listStyle: {
    maxHeight: 600,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  childView: {
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 60,
    marginVertical: 10,
    alignItems: 'center',
    marginTop: 40,

  }
});

export default App;