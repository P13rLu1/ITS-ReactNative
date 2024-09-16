import { Image, Linking, Pressable, Text, View } from "react-native"
import { Utente } from "../../types/utenti"
import style from "./style"
import commonStyles from "../../assets/style"

interface Props {
  utente: Utente
}

function CardUtente({ utente }: Props) {

  const inviaMail = () => {
    console.log("Aprire app mail");
    //Linking.openURL("mailto:" + utente.email);
    Linking.openURL("https://www.google.com");
  }

  return (
    <View style={style.cardUtente}>
      <Image source={{
        uri: utente.picture.thumbnail,
        width: 48,
        height: 48,
      }} />
      <View>
        <Text style={commonStyles.title}>
          {utente.name.first}
        </Text>
        <Pressable onPress={inviaMail}>
          <Text>{utente.email}</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CardUtente