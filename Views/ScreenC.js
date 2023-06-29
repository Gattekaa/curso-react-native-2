import React from 'react'
import CenterText from '../components/centerText'

export default props => {
    const r = props.route
    const numero = r && r.params && r.params.numero 
        ? props.route.params.numero : 0
    return (
        <CenterText corFundo='#9932cd'>
            Screen C - {numero}
        </CenterText>
    )
}