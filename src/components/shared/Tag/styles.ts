import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: 'row',
  },
  label: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  available: {
    backgroundColor: 'green',
  },
  unavailable: {
    backgroundColor: 'darkred',
  },
  text: {color: '#fff'},
});
