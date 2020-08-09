import { StyleSheet } from "react-native";
import { timing } from "react-native-reanimated";

export default StyleSheet.create({
  container: {
    height: 98,
    alignSelf: "stretch",
    marginHorizontal: 8,
    backgroundColor: "#fff",
    elevation: 2,
    marginTop: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },

  description: {
    fontSize: 18,
    color: "#444"
  },

  cardValue: {
    fontSize: 18,
    color: "#444",
    marginBottom: 18
  },

  rightSide: {
    flexDirection: "row",
    alignItems: "center",
  },

  createdDate: {
    fontSize: 16,
    textAlign: "right"
  },

  actionsButtons: {
    marginLeft: 12
  },

  actionBtn: {
    height: 35,
    width: 35,
    marginTop: 5,
    backgroundColor: '#F2994A',
    elevation: 2,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  }
})