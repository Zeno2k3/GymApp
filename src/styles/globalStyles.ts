import { StyleSheet } from "react-native";
import { appColors } from "../constants/appColor";
import { appInfors } from "../constants/appInfors";

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: appColors.white 
    },
    text: {
        fontSize: 16,
        color: appColors.white,
        textAlign: 'center'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: appColors.textBtnLog,
        marginBottom: 15
    },
    process: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: appInfors.sizes.WIDTH * 0.8
    },
    section: {
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    shadow: {
        shadowColor: 'rbga(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.25,
        elevation: 10
    },
    shadow2: {
        shadowColor: 'rbga(0,0,0,0.9)',
        shadowOffset: {
            width: 10,
            height: 4
        },
        shadowRadius: 100,
        shadowOpacity: 1,
        elevation: 1
    },
    item: {
        width: 159,
        height: 162,
        backgroundColor: appColors.gray2,
        borderRadius: 8,
    },
    item2: {
        width: 288,
        height: 343,
        borderRadius: 8,
    }

})