import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    height: 82,
    alignSelf: "stretch",
    backgroundColor: '#F2994A',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 24,
    paddingHorizontal: 24,
  },

  leftSide: {
    flexDirection: "row",
    alignItems: "center"
  },

  headerTitle: {
    marginLeft: 48,
    fontSize: 24,
    color: '#fff',
    fontWeight: "bold"
  },

  saveButton: {
    height: 39,
    width: 82,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12
  },

  saveText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff"
  },

  input: {
    fontSize: 22,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    height: 50,
    alignSelf: "stretch",
    marginHorizontal: 24,
    marginTop: 24,
  },

  dateInput: {
    height: 50,
    alignSelf: "stretch",
    marginTop: 24,
    marginHorizontal: 24,
    justifyContent: "center",
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    width: '50%'
  },

  dateValue: {
    fontSize: 22,
    color: "#999"
  }
})