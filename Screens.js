import React from 'react'
import {View, Text} from 'react-native'

const Screen = ({screenColor, screenName}) => (
  <View style={{
    flex: 1,
    backgroundColor: screenColor,
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <Text style={{fontSize: 35, color: 'white', fontWeight: 'bold'}}>{screenName}</Text>
  </View>
)


export const Screen1 = () => (<Screen screenColor={'red'} screenName={'SCREEN ONE'}/>)
Screen1.navigationOptions = {
  header: null
};
export const Screen2 = () => (<Screen screenColor={'green'} screenName={'SCREEN TWO'}/>)
Screen2.navigationOptions = {
  header: null
};
