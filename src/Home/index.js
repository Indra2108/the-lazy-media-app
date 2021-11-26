import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

// IMPORT STYLES
import styles from './styles';

// IMPORT IMAGES
import lup from './assets/lup.png';
import sample from './assets/sample.jpg';
import author from './assets/author.png';
import date from './assets/date.png';

export default Home = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.headers}> */}
            <TouchableOpacity style={styles.backgroundSearchs}>
                <Image source={lup} style={styles.lups} />
                <Text style={styles.textSearchs}>Cari Artikel</Text>
            </TouchableOpacity>
            {/* </View> */}

            <TouchableOpacity style={styles.articleCards}>
                <Image source={sample} style={styles.pictArticleCards} />

                <View style={styles.backgroundTag}>
                    <Text style={styles.teksTag}>news</Text>
                </View>
                <View style={styles.backgroundTitleArticle}>
                    <Text style={styles.titleArticle}>Battlefield 2042 Menjadi Game Dengan Rating Terburuk!</Text>
                </View>
                <View style={styles.backgroundInfoArticle}>
                    <View style={styles.infoArticle}>
                        <Image source={author} style={styles.pictInfoArticle} />
                        <Text style={styles.authorInfoArticle}>Aldy Wayong</Text>
                    </View>
                    <View style={styles.infoArticle}>
                        <Image source={date} style={styles.pictInfoArticle} />
                        <Text style={styles.dateInfoArticle}>November 19, 2021</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}