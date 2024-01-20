import { StyleSheet } from 'react-native'

export const DetailsStyles = StyleSheet.create({
    detailsContainer: {
        width: '30%',
        height: 'auto',
        maxHeight: '50%',
        paddingBottom: 10,
        paddingTop: 10,
        alignSelf: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsName: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: '700',
        fontSize: 12
    },
    detailsImage: {
        width: 100,
        height: 100,
    },
    tableHead: {
        width: 100
    },
    headDataText: {
        fontSize: 8
    },
    rowDataText: {
        fontSize: 8,
        textAlign: 'center'
    },
    noSelectionText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
})