/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class XiaoApp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// TodoList 组件是一个整体的组件，最终的React渲染也将只渲染这一个组件
// 该组件用于将『新增』和『列表』两个组件集成起来
// var TodoList = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <TypeNew  />
//                 <ListTodo />
//             </div>
//         );
//     }
// });

// // TypeNew 组件用于新增数据，
// var TypeNew = React.createClass({
//     render: function () {
//         return (
//             <form>
//                 <input type="text" placeholder="typing a newthing todo" autoComplete="off" />
//             </form>
//         );
//     }
// });

// // ListTodo 组件用于展示列表，并可以删除某一项内容，
// var ListTodo = React.createClass({
//     render: function () {
//         return (
//             <ul id="todo-list">
//                 {/* 其中显示数据列表 */}
//             </ul>
//         );
//     }
// });

// // 将 TodoList 组件渲染到页面
// React.render(<TodoList />, document.getElementById('container'));
AppRegistry.registerComponent('XiaoApp', () => Todo);
