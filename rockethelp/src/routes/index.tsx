import { NavigationContainer } from '@react-navigation/native'

import { AppRoute } from "./app.routes"

import  SingIn  from "../screens/SingIn"

export function Routes(){
    return (
        <NavigationContainer>
            <AppRoute/>
        </NavigationContainer>
    )
}