import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const CardWithCheckbox = () => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <Image
                    style={styles.icon}
                    source={{ uri: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678116-calendar-512.png' }}
                />
                <Text style={styles.title}>{'Title'}</Text>
            </View>
            <TouchableOpacity onPress={() => setSelection(!isSelected)}>
                <View style={[styles.checkbox, isSelected && styles.checked]} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 264,
        height: 48,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#757575',
    },
    checked: {
        backgroundColor: '#6200EA',
    },
});

export default CardWithCheckbox;
