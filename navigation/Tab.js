import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ScreenA from '../Views/ScreenA'
import ScreenB from '../Views/ScreenB'
import ScreenC from '../Views/ScreenC'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName

                switch (route.name) {
                    case 'ScreenA':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break
                    case 'ScreenB':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break
                    case 'ScreenC':
                        iconName = focused ? 'ios-list-box' : 'ios-list'
                        break
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            showLabel: true,
            // labelStyle: { fontSize: 30 }
        }} initialRouteName="ScreenB">
        <Tab.Screen name="ScreenA" component={ScreenA}
            options={{ title: 'Inicial' }} />
        <Tab.Screen name="ScreenB" component={ScreenB}
            options={{ title: 'Meio' }} />
        <Tab.Screen name="ScreenC" component={ScreenC}
            options={{ title: 'Final' }} />
    </Tab.Navigator>
)