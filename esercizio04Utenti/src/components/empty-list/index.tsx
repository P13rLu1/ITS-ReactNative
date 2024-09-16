import { Text, View } from "react-native";

function EmptyList() {
  return (
    <View style={{
      padding: 50,
      margin: 50,
      alignItems: 'center'
    }}>
      <Text style={{
        fontStyle: "italic",
        color: "blue"
      }}>Nessun elemento presente</Text>
    </View>
  )
}

export default EmptyList;