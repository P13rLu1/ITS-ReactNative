import React, { useState } from 'react';
import { Button, FlatList } from 'react-native';
import { Utente, Utenti } from './src/types/utenti';
import CardUtente from './src/components/card-utente';
import EmptyList from './src/components/empty-list';
import Loader from './src/components/loader';

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [utenti, setUtenti] = useState<Utente[]>([]);
  const url = "https://randomuser.me/api/?results=50";
  const getUtenti = () => {
    setIsLoading(true);
    fetch(url).then(res => res.json()).then((data: Utenti) => {
      setTimeout(() => {
        setUtenti(data.results);
        setIsLoading(false);
      }, 2000);
    });
  };

  const renderItem = ({ item }: { item: Utente }) => {
    return <CardUtente utente={item} />
  };

  return (
    <>
      <FlatList
        data={utenti}
        renderItem={renderItem}
        ListHeaderComponent={() => <Button title='Get utenti' onPress={getUtenti} />}
        style={{ backgroundColor: '#cce0ff' }}
        keyExtractor={(_, index) => String(index)}
        ListEmptyComponent={EmptyList}
      />
      {isLoading && <Loader />}
    </>
  );
}

export default App;
