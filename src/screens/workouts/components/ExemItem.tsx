import {  Image, ImageRequireSource, View } from 'react-native'
import RowComponent from '../../../components/RowComponent'
import { Group } from '../../../image/Svg'
import { appColors } from '../../../constants/appColor'
import { globalStyles } from '../../../styles/globalStyles'
import { TextComponent } from '../../../components'
import { appFontFamilies } from '../../../constants/appFontFamilies'


interface Props {
    title : string,
    content: string, 
    path: ImageRequireSource,  
}

const ExemItem = (props: Props) => {
    const {title, content, path} = props 
  return (
    <RowComponent
        styles = {{alignItems: 'center'}}
    >
        <Group/>
        <View
        style={[{
            width: 95,
            height: 76,
            backgroundColor: appColors.textBtnLog,
            marginHorizontal: 20,
            borderRadius: 8,
            
        }, globalStyles.shadow]}
        >
        <Image source={path} style={{
            resizeMode: 'cover',
            position: 'absolute',
            width: 66,
            height: 64,
            marginHorizontal: 15,
            marginVertical: 5
            
        }}/>
        </View>
        <View
        >
            <TextComponent text={title} title styles = {{
                fontSize: 20
            }} />
            <TextComponent text={content}/>
        </View>
    </RowComponent>
  )
}

export default ExemItem