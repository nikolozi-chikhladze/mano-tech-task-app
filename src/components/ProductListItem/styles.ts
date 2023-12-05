import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 8,
    flex: 0.5,
    paddingVertical: 8,
    margin: 8,
    borderWidth: 1,
    borderColor: '#242424',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  image: {
    height: 180,
    width: '100%',
    borderWidth: 1,
  },
  imageContainer: {paddingHorizontal: 12, alignItems: 'center'},
  content: {paddingHorizontal: 12, flex: 1},
});
