import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Overview from '../pages/Overview'

const Drawer = createDrawerNavigator()

export default () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="overview" component={Overview} />
    </Drawer.Navigator>
  </NavigationContainer>
)
