import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Page = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    video: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    header: {
      fontSize: 36,
      fontWeight: '900',
      textTransform: 'uppercase',
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 20,
      marginBottom: 60,
      paddingHorizontal: 20,
    },
  });
export default Page