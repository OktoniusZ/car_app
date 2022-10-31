import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    icon: { color: 'white' },
    menuText: { 
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
        textTransform: 'uppercase'
    },
    menuRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    menuTextBox: {
        flexGrow: 1
    },
    menuItems: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    arrowIcon: {
        color: '#4D4D4E'
    },
    subTitle: {
        color: 'grey',
        fontSize: 14,
        marginLeft: 15
    }
})

export default styles