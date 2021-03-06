import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Overview from '../pages/Overview';
import AddIncome from '../pages/AddIncome';
import Incomes from '../pages/Incomes';

const Drawer = createDrawerNavigator();

export default () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="overview" component={Overview} />
      <Drawer.Screen name="create-income" component={AddIncome} />
      <Drawer.Screen name="incomes" component={Incomes} />
    </Drawer.Navigator>
  </NavigationContainer>
);
