import { StyleSheet } from "react-native";
import { width } from "../../constants/dimensions";

const styles = StyleSheet.create({
    actionBar: {
        justifyContent: "space-between",
        flexDirection:'row',
        width: width,
        paddingHorizontal: 24,
        marginTop: 48,
        marginBottom: 8,
    }
})

export default styles