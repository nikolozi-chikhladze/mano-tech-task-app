import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {RootStack} from './src/routes/RootStack';
import {SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({container: {flex: 1}});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
