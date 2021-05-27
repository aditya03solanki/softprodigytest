import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Message = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.message}>Message</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 20,
    color: 'white',
  },
});

export default Message;
