import { ScrollView, View } from "react-native"
import { TextComponent } from "../../../components"
import { appColors } from "../../../constants/appColor"
import { appInfors } from "../../../constants/appInfors"
interface Props {
    start: number,
    end: number,
    type: string
}

const SelectScrollComponent = (props: Props) => {
  const {start, end, type} = props
  if (start > end) {
    console.warn("Start value should be less than or equal to End value.");
    return null;
  }
  const items = [];
  for (let i = start; i <= end; i++) {
    items.push(
      <View key={i}
      style={{
        padding: 20,
        borderBottomColor: appColors.blue,
      }}
      >
          <TextComponent text={`${type === "age" ? i + " tuổi" : i}`} />
      </View>
    );
  }
  return <ScrollView
      showsVerticalScrollIndicator = {false}
      style={{
        minWidth: appInfors.sizes.WIDTH * .5,
        overflow: 'hidden'
      }}>
        {items}
      </ScrollView>;
}

export default SelectScrollComponent