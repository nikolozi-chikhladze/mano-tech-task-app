import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    height: 350,
    aspectRatio: 1,
    marginTop: 24,
  },
  content: {
    width: '100%',
    marginHorizontal: 4,
    padding: 24,
    paddingTop: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  text: {
    marginBottom: 4,
    fontSize: 16,
  },
});
