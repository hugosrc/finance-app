import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    alignSelf: "stretch",
    height: 256,
    backgroundColor: '#F2994A',
    paddingTop: 64,
    paddingHorizontal: 24
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 16,
    color: '#fff'
  },

  card: {
    height: 172,
    alignSelf: "stretch",
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 14,
    padding: 24
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: '#444'
  },

  cartValue: {
    fontSize: 62,
    fontWeight: "bold",
    color: '#444',
    marginTop: 12
  },

  dataBox: {
    backgroundColor: '#fff',
    padding: 24,
    marginTop: 96,
    marginHorizontal: 24,
    borderRadius: 14,
    height: 259, 
    alignSelf: "stretch",
    elevation: 2
  },

  dataType: {
    fontSize: 24,
  },

  data: {
    height: 52,
    alignSelf: "stretch",
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  buttonAndType: {
    flexDirection: "row",
    alignItems: "center"
  },

  button: {
    height: 52,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26
  },

  type: {
    fontSize: 18,
    color: '#444',
    marginHorizontal: 16
  },

  value: {
    fontSize: 20,
    color: '#444'
  }
})