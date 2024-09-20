import {Image, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import {Alunno} from '../../types/alunno.ts';
import {MailToRedirectCard} from './MailToRedirectCard.tsx';
import {TelRedirectCard} from './TelRedirectCard.tsx';
import {dettaglioStyles} from '../../assets/dettaglio/dettaglioStyles.ts';

interface Props {
  alunno: Alunno;
}

export function DettaglioAlunnoCard({alunno}: Props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={dettaglioStyles.container}>
      <View style={dettaglioStyles.imageContainer}>
        <TouchableOpacity onPress={() => Vibration.vibrate(24)}>
          <Image source={{uri: alunno.foto}} style={dettaglioStyles.image} />
        </TouchableOpacity>
      </View>

      <View style={dettaglioStyles.infoContainer}>
        <Text style={dettaglioStyles.sectionTitle}>Informazioni Personali</Text>
        <Text style={dettaglioStyles.infoText}>
          🧑🏻 Nome: {alunno.nome} {alunno.cognome}
        </Text>
        <Text style={dettaglioStyles.infoText}>🪪 Codice fiscale: {alunno.codiceFiscale}</Text>
        <Text style={dettaglioStyles.infoText}>🆔 Matricola: {alunno.matricola}</Text>
      </View>

      <View style={dettaglioStyles.infoContainer}>
        <Text style={dettaglioStyles.sectionTitle}>Dati di Nascita</Text>
        <Text style={dettaglioStyles.infoText}>🎂 Data di nascita: {alunno.dataNascita}</Text>
        <Text style={dettaglioStyles.infoText}>🏥 Comune di nascita: {alunno.comuneNascita}</Text>
        <Text style={dettaglioStyles.infoText}>🅱️ Provincia di nascita: {alunno.provNascita}</Text>
      </View>

      <View style={dettaglioStyles.infoContainer}>
        <Text style={dettaglioStyles.sectionTitle}>Dati di Residenza</Text>
        <Text style={dettaglioStyles.infoText}>🔢 Cap di residenza: {alunno.capResidenza}</Text>
        <Text style={dettaglioStyles.infoText}>🏠 Comune di residenza: {alunno.comuneResidenza}</Text>
        <Text style={dettaglioStyles.infoText}>🏡 Provincia di residenza: {alunno.provResidenza}</Text>
        <Text style={dettaglioStyles.infoText}>📍 Indirizzo di residenza: {alunno.indirizzoResidenza}</Text>
      </View>

      <View style={dettaglioStyles.contactCard}>
        <MailToRedirectCard
          email={alunno.emailPrincipale}
          children={'Email Principale'}
        />
      </View>

      <View style={dettaglioStyles.contactCard}>
        <MailToRedirectCard
          email={alunno.emailSecondaria}
          children={'Email Secondaria'}
        />
      </View>

      <View style={dettaglioStyles.contactCard}>
        <TelRedirectCard tel={alunno.cell} children={'Cellulare'} />
      </View>
    </ScrollView>
  );
}
