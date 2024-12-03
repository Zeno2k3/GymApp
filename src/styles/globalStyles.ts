import { StyleSheet } from "react-native";
import { appColors } from "../constants/appColor";

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1, 
    },
    text: {
        fontSize: 16,
        color: appColors.white,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: appColors.textBtnLog,
    }
})