/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

class Note extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText} >{this.props.val.date}</Text>
                <Text style={styles.noteText} >{this.props.val.note}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete} >
                    <Text style={styles.noteDeleteText} >x</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default class Todo extends Component {
    state = {
        noteArray: [],
        noteText: '',
    }
    render() {
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)} />
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headertext} >ToDo</Text>
                </View>
                <ScrollView style={styles.ScrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer} >
                    <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                        <Text style={styles.addButtonText}> + </Text>
                    </TouchableOpacity>
                    <TextInput style={styles.textinput} onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder="输入新Todo"></TextInput>
                </View>
            </View>
        );
    }
    addNote() {
        if (this.state.noteText) {
            var d = new Date();
            this.state.noteArray.push({ 'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(), 'note': this.state.noteText });
            this.setState({ noteArray: this.state.noteArray });
            this.setState({ 'noteText': '' });
        }
    }
    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray });
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#3eb866',
        alignItems: 'center',
        justifyContent: 'center',
        //borderBottomWidth: 10,
        //borderBottomColor: '#ddd',
    },
    headertext: {
        color: '#333333',
        fontSize: 18,
        padding: 20,
    },
    ScrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
    },
    addButton: {
        backgroundColor: '#9fe0f6',
        width: 90,
        height: 90,
        borderRadius: 50,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 30,
    },
    textinput: {
        alignSelf: 'stretch',
        color: '#5b4947',
        padding: 15,
        paddingTop: 36,
        backgroundColor: '#f4f3ed',
    },
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        fontSize: 20,
        color: '#fff',
    }
});

AppRegistry.registerComponent('XiaoApp', () => Todo);
