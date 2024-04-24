import React from 'react';
import { View, FlatList, Image } from 'react-native';
import data from '../../constants/data'
import { width, height } from '../../constants/dimensions'



export default function HorizontalList({data}) {
    return (
            <FlatList
                data={data}
                keyExtractor={(item) => String(item)}
                showsHorizontalScrollIndicator={false}
                snapToOffsets={[...Array(data.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40)}
                horizontal
                snapToAlignment={'start'}
                ScrollEventThrottle={16}
                decelerationRate="fast"
                style={{marginTop: 20}}
                renderItem={({item}) => (
                    <View>

                    </View>

                )}
                
            />
)}