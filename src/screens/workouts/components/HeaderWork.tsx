import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode } from 'react'
import { appInfors } from '../../../constants/appInfors'
import { appColors } from '../../../constants/appColor'
import { ArrowLeft } from 'iconsax-react-native'
import { ImageRequireSource } from 'react-native'
import { TextComponent } from '../../../components'
import SectionComponent from '../../../components/SectionComponent'
import { Colen, Line, Lock23, Nen, Other, Outher } from '../../../image/Svg'
import RowComponent from '../../../components/RowComponent'

interface Props {
    pathimage: ImageRequireSource
    title: string,
    time: number,
    kcal: number,
    workouts: number,
    icon ?: ReactNode,
    onPress ?: () => void,
}

const HeaderWork = (props : Props) => {
    const {title, time, kcal, workouts, icon, onPress, pathimage} = props
  return (
    <ImageBackground
    style = {{
      flex: 0.4,
      paddingVertical: 50,
      width: appInfors.sizes.WIDTH,
      backgroundColor: appColors.black,
      }}
    resizeMode='contain'
    source={pathimage}>
    <StatusBar barStyle='light-content'
    backgroundColor="transparent"
    translucent />
    <SectionComponent
        styles = {{
            flex: 1,
        }}
        >
        <TouchableOpacity
            style = {{
                paddingHorizontal: 30,
                paddingVertical: 30,
                width: 30,
            }}
            onPress={onPress}>
            <ArrowLeft size={24} color={appColors.white}/>
        </TouchableOpacity>
        <View
        style = {{
            paddingHorizontal: 30,
            paddingVertical: 30,
        }}>
            <TextComponent title text={title} styles = {{
                width: appInfors.sizes.WIDTH * 0.8,
                color: appColors.white,
                fontSize: 20,
                letterSpacing: 0,
                textAlign: 'left'
            }}/>
                <View style= {{
                    width: 297,
                    height: 64,
                    backgroundColor: appColors.black,
                    borderRadius: 8,
                    opacity: 0.8
                }}>
                    <RowComponent
                        styles = {{
                       
                        justifyContent: 'space-around',
                        alignItems: 'center'
                        }}
                    >
                        <View style = {{
                            paddingVertical: 10,
                            alignItems: 'center'
                       }}
                        >
                            <Lock23/>
                            <TextComponent text= {`${time}`} 
                            styles= {{
                                color: appColors.white,
                                fontSize: 15
                            }}/>
                            <TextComponent text={'Mins'} 
                            styles= {{
                                color: appColors.textBtnLog,
                                fontSize: 10
                            }}/>
                        </View>
                        <Line/>
                        <View
                            style = {{
                                paddingVertical: 12,
                                alignItems: 'center',
                                
                           }}
                        >
                            <Colen/>
                            <TextComponent text = {`${kcal}`} 
                            styles= {{
                                color: appColors.white,
                                fontSize: 15
                            }}/>
                            <TextComponent text={'Kcal'} 
                            styles= {{
                                color: appColors.textBtnLog,
                                fontSize: 10
                            }}/>
                        </View>
                        <Line/>
                        <View
                            style = {{
                                paddingVertical: 10,
                                alignItems: 'center'
                           }}
                        >
                            <Outher/>
                            <TextComponent text={`${workouts}`}  
                            styles= {{
                                color: appColors.white,
                                fontSize: 15
                            }}/>
                            <TextComponent text={'Workouts'} 
                            styles= {{
                                color: appColors.textBtnLog,
                                fontSize: 10
                            }}/>
                        </View>

                    </RowComponent>
                </View>
        </View>
    </SectionComponent>
  </ImageBackground>
  )
}

export default HeaderWork