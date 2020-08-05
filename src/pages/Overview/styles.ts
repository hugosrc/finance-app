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
  }
})