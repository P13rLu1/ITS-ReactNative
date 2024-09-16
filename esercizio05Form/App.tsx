import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Input from './src/input';
import Button from './src/button';

function App(): React.JSX.Element {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    setError(text ? '' : 'This field is required');
  }, [text]);

  return (
    <>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <SafeAreaView style={{padding: 20}}>
        <Input value={text} onChangeText={setText} error={error} />
        <Input
          value={username}
          onChangeText={setUsername}
          // error={error}
        />
        <Input
          value={password}
          onChangeText={setPassword}
          // error={error}
        />

        <Button onPress={() => {}} title="Pulsante senza type" />
        <Button onPress={() => {}} title="Pulsante primary" type="primary" />
        <Button onPress={() => {}} title="Pulsante danger" type="danger" />
      </SafeAreaView>
    </>
  );
}

export default App;
