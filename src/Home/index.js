import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// IMPORT STYLES
import styles from './styles';

// IMPORT IMAGES
import lup from './assets/lup.png';
import sample from './assets/sample.jpg'

export default Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headers}>
                <TouchableOpacity style={styles.backgroundSearchs}>
                    <Image source={lup} style={styles.lups} />
                    <Text style={styles.textSearchs}>Cari Artikel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.articleCard}>
                    <Image />
                </TouchableOpacity>
            </View>
        </View>
    )
}