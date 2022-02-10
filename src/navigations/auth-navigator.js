// * Login and Register
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// The pages and components for the signing and register process.
import Login from '../scenes/login/Login';
import Register from '../scenes/register/Register';
import SkillBuilder from '../scenes/skillBuilder/SkillBuilder';
import Discipline from '../scenes/skillBuilder/Discipline';
import SubDiscipline from '../scenes/skillBuilder/SubDiscipline';
import SwipeScreen from '../scenes/skillSwipe/SwipeScreen';
import QuestionScreen from '../scenes/skillSwipe/QuestionScreen';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="SkillBuilder" component={SkillBuilder} />
            <Stack.Screen name="Discipline" component={Discipline} />
            <Stack.Screen name="SubDiscipline" component={SubDiscipline} />
            <Stack.Screen name="SwipeScreen" component={SwipeScreen} />
          <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
