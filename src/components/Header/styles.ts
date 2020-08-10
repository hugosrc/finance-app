import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 82,
    alignSelf: 'stretch',
    backgroundColor: '#F2994A',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 24,
    paddingHorizontal: 24,
    elevation: 2,
  },

  backButton: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 29,
    marginRight: 32,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});
