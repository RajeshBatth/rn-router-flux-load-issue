import React from "react";
import {Text, View} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux'

import {Screen1, Screen2} from "./Screens";

const AppRouter = (props) => {
console.log('AppRouter.props',props)
  return (
    <View style={{flexDirection: 'column', flex: 1, backgroundColor:'yellow'}}>

      <Router>
        <Stack key='root'>
          <Scene key='one' component={Screen1} initial={props.page === 'one'}/>
          <Scene key='two' component={Screen2} initial={props.page === 'two'}/>
        </Stack>
      </Router>
      <Text style={{
        backgroundColor: '#0008',
        color: 'white',
        padding: 8,
        alignSelf: 'center',
        position: 'absolute',
        top: 0
      }}>
        this should open SCREEN {props.page.toUpperCase()}
      </Text>
    </View>
  );
};

export default AppRouter
