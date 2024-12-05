import React, {  ReactNode } from "react"
import { ScrollView, View} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import RowComponent from "./RowComponent"
import { TouchableOpacity } from "react-native"
import { appColors } from "../constants/appColor"
import { ArrowLeft } from 'iconsax-react-native'
import { ProgressComponent, TextComponent } from "."
import SpaceComponent from "./SpaceComponent"
import { globalStyles } from "../styles/globalStyles"
import { appFontFamilies } from "../constants/appFontFamilies"

interface Props {
  children: ReactNode,
  percent : number
  back?: boolean
  title ?: string
  step ?: number
  steps ?: number
  onPress ?: () => void
}

const ContainerComponent = (props: Props) => {
  const {children, back, title, step, steps, onPress, percent} = props
  const headerComponent = () => {
    return (
    <View
      style = {[globalStyles.container]}>
        <SpaceComponent height={50}/>
        <RowComponent
        styles={{
          paddingHorizontal: 20,
        }}
        justyfi='center'>
          {back ? (
          <TouchableOpacity
            onPress={onPress}>
            <ArrowLeft size = {24} color = {appColors.black}/>
          </TouchableOpacity>
          ) : <SpaceComponent width={20}/>}
            <SpaceComponent width={20}/>
            <ProgressComponent height={10} percent={percent}/>
            <SpaceComponent width={20}/>
            <TextComponent text = {`${step}/${steps}`}
            styles = {
              { 
                fontSize: 16,
                fontFamily: appFontFamilies.medium,
              }
            }/>
        </RowComponent>
        <SpaceComponent height={20}/>
        <ScrollView
        style={{
          flex: 1,
          backgroundColor: appColors.white
        }}>
          {children}
        </ScrollView>
      </View>
      )
  }
  return (
    <SafeAreaView
    style= {
      {
        flex: 1
      }
    }>
     {headerComponent()}
    </SafeAreaView>
  )
}
export default ContainerComponent