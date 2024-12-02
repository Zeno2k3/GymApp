/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { appFontFamilies } from '../../constants/appFontFamilies';

export default function MainScreen(props: any): React.JSX.Element {
    const { navigation } = props
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Text style={
                    { 
                        fontSize: 60, 
                        fontFamily: appFontFamilies.light 
                    }}>MainScreen Return</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
});


