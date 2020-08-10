import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 120,
    right: 80,
  },

  button: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: '#F2994A',
  },

  option: {
    width: 96,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F2994A',
    flexDirection: 'row',
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
