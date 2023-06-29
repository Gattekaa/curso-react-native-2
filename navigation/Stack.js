import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenA from '../Views/ScreenA'
import ScreenB from '../Views/ScreenB'
import ScreenC from '../Views/ScreenC'
import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="ScreenA"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="ScreenA"
            options={{ title: 'Informações Iniciais' }}>
            {props => (
                <PassoStack {...props} avancar="ScreenB">
                    <ScreenA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="ScreenB">
            {props => (
                <PassoStack {...props} voltar avancar="ScreenC"
                    avancarParams={{ numero: 1007 }}>
                    <ScreenB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="ScreenC">
            {props => (
                <PassoStack {...props} voltar avancar="ScreenC">
                    <ScreenC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)