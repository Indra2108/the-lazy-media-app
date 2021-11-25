import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// IMPORT STYLES
import styles from './styles';

export default Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headers}>
                <View style={styles.searchs}>
                    <Image />
                    <Text style={styles.textSearchs}>Cari Artikel</Text>
                </View>
            </View>
        </View>
    )
}