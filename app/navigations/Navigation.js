import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Autorizaciones from "../screens/Autorizaciones";
import Credito from "../screens/Credito";
import Reportes from "../screens/Reportes";
import Solicitudes from "../screens/Solicitudes";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="solicitudes"
                    component={Solicitudes}
                    options={{ title: "SOLICITUD" }}
                />
                <Tab.Screen
                    name="autorizaciones"
                    component={Autorizaciones}
                    options={{ title: "AUTORIZACIONES" }}
                />
                <Tab.Screen
                    name="credito"
                    component={Credito}
                    options={{ title: "CREDITO "}}
                />   
                <Tab.Screen
                    name="reportes"
                    component={Reportes}
                    options={{ title: "REPORTES"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


