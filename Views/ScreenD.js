import React from 'react'
import { View, Button } from 'react-native'
import CenterText from '../components/centerText'

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                    title='Open'
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            setInterval(() => {
                                props.navigation.toggleDrawer()
                            }, 1000)
                        }, 3000)
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <CenterText corFundo='#33fa72' corTexto='#000'>
                    Tela D
                </CenterText>
            </View>
        </View>
    )
}