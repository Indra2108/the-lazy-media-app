import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1b1f27'
    },
    // headers: {

    // },
    backgroundSearchs: {
        backgroundColor: '#101319',
        flexDirection: 'row',
        padding: '5%',
        borderRadius: 10
    },
    textSearchs: {
        color: '#4d5361'
    },
    lups: {
        width: '6.5%',
        height: '100%',
        marginRight: '5%'
    },
    articleCards: {
        marginTop: '6%',
        justifyContent: 'space-between'
    },
    backgroundTag: {
        backgroundColor: '#fbad18',
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 13,
        borderTopStartRadius: 10,
        borderBottomEndRadius: 10
    },
    teksTag: {
        fontWeight: 'bold',
        color: 'black'
    },
    pictArticleCards: {
        borderRadius: 10,
        width: '100%',
    },
    titleArticle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    backgroundTitleArticle: {
        position: 'absolute',
        bottom: '19%',
        padding: 7
    },
    backgroundInfoArticle: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        padding: 7,
        flexDirection: 'row'
    },
    infoArticle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pictInfoArticle: {
        width: '11%',
        height: '100%',
        marginRight: '5%'
    },
    authorInfoArticle: {
        color: 'white',
        marginRight: '5%',
        fontSize: 10
    },
    dateInfoArticle: {
        color: 'white',
        fontSize: 10
    }
})