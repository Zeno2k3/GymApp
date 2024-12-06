import SectionComponent from "../../components/SectionComponent"
import SpaceComponent from "../../components/SpaceComponent"
import { TextComponent } from "../../components"
import { FitnestX } from "../../image/Svg"
import React, { useEffect, useState } from "react"
import { View } from "react-native"
import * as Progress from 'react-native-progress';
import { appColors } from "../../constants/appColor"
import { globalStyles } from "../../styles/globalStyles"
import { appFontFamilies } from "../../constants/appFontFamilies"
import LinearGradient from "react-native-linear-gradient"




const EndSetingScreen = ({navigation}: any) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(interval);
          navigation.navigate('MainNavigator'); 
        }
        return Math.min(prev + 0.01, 1);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <View style = {{
      flex: 1,
      alignItems: 'center'
    }}
      >
      <SectionComponent>
    <SpaceComponent height={90} />
    <FitnestX />
  </SectionComponent>
    <SectionComponent>
      <TextComponent text="Creating Personalized Workout Plan For You" title />
    </SectionComponent>
    <SectionComponent>
      <TextComponent text="Please Wait..." />
    </SectionComponent>
    <SectionComponent>
      <Progress.Circle
        size={200}
        progress={progress}
        color={
          appColors.blue2
        }
        thickness={10}
        showsText={true}
        textStyle={{
          fontSize: 36,
          color: appColors.black,
          fontFamily: appFontFamilies.medium
        }}
        formatText={(p) => `${Math.round(p * 100)}%`}
      />
    </SectionComponent>

    <SectionComponent
      styles={{
        flex: 1,
        justifyContent: 'flex-end'
      }}
      >
      <TextComponent text="This will just take a moment. Get ready to transform your fitness journey!"/>
    </SectionComponent>
    </View>
  )

}
export default EndSetingScreen