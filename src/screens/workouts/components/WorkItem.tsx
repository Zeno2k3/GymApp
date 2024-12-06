
import { ImageBackground, ImageRequireSource, ImageSourcePropType, StyleProp, View, ViewStyle } from 'react-native'
import { ButtonComponent, TextComponent } from '../../../components'
import { ArrowRight2 } from 'iconsax-react-native'
import { appColors } from '../../../constants/appColor'
import { globalStyles } from '../../../styles/globalStyles'
import SectionComponent from '../../../components/SectionComponent'
import { appFontFamilies } from '../../../constants/appFontFamilies'

interface Props {
    pathImage: ImageRequireSource
    id: number
    title: string
    kalo: number
    level: 'Beginer' 
    | 'Intermediate' 
    | 'Advanced' 
    | 'Athlete' 
    | 'GOAT'
    time: number
   styles ?: StyleProp<ViewStyle>
   isnotDay ?: boolean
   onPress ?: () => void
}
const WorkItem = (props: Props) => {
    const {pathImage, id, title, kalo, level, time, styles, onPress, isnotDay} = props
  return (
    <ImageBackground
     style = {[
        globalStyles.item2,globalStyles.shadow,
        {
            justifyContent: 'space-between',
            marginHorizontal: 10
        },
        styles
     ]}
     source={pathImage}
    >
        <View
            style = {{
                alignItems: 'flex-start',
                justifyContent: 'center',
                marginHorizontal: 10,
                marginTop: 20,
                paddingLeft: 5,
                borderRadius: 5,
                backgroundColor: appColors.textBtnLog,
                width:46,
                height: 20,
            }}
            >
            <TextComponent text={`${id} / 21`} styles = {{color: appColors.white}}
            />
        </View>
        <SectionComponent
            styles = {{
                alignItems: 'flex-start'
            }}
            >
            <TextComponent text={title} title  styles = {{
                color: appColors.white,
                fontFamily: appFontFamilies.medium,
                fontSize: 16,
                 textAlign:'left'
            }}/>
            <TextComponent text={`${time} Mins/${kalo} Kalo/ ${level} `}  
            styles = {{
                color: appColors.white,
                fontSize: 10,
                }}/>
            <ButtonComponent size={237}
            styles = {[globalStyles.shadow2, {
                marginHorizontal: 10,
                alignItems: 'center'
            }]}
            onPress={onPress}
            textStyles = {
                {
                    fontSize: 18,
                    paddingHorizontal: 40
                }
            }
            isLineGradient = {isnotDay}
            type = 'a' text = 'START' iconFlex='right' icon = {<ArrowRight2 size={24} color={appColors.white}/>}/>
        </SectionComponent>
    </ImageBackground>
  )
}

export default WorkItem