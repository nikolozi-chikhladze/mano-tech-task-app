import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {RootStack} from './src/routes/RootStack';
import {SafeAreaView, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/store';

const styles = StyleSheet.create({container: {flex: 1}});

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
