import { ActivityIndicator, View } from "react-native";
import style from "./style";

function Loader() {
  return (
    <View style={style.loader}>
      <ActivityIndicator size={'large'} color={"white"} />
    </View>
  )
}

export default Loader;