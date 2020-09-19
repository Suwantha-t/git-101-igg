import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios'

export default function MovieDetail({ navigation, route }) {

    const [movies, setMovies] = useState({
        genre: [],

    })

    useEffect(() => {
        const ItemId = route.params.id
        axios.get(`https://movie-api.igeargeek.com/movies/${ItemId}`)
            .then(res => {
                const movies = res.data;
                setMovies(movies)
                // setLoading(false)
            })
    }, [])

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}>
            <WebView
                allowsFullscreenVideo
                source={{ uri: movies.youtubeUrl }}
                style={{ height: 200 }}
            />
            <View style={{ flex: 2, padding: 15, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: movies.posterUrl }}
                        style={{ flex: 1, height: 180 }}
                        resizeMode={'stretch'}
                    />
                    <View style={{ flex: 2, marginLeft: 15, padding: 5 }}>
                        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>{movies.name}</Text>
                        <Text style={{ color: 'black', fontSize: 17,  }} >Genre: {movies.genre.join(',  ')}</Text>
                        <Text style={{ color: 'black', fontSize: 17 }}>Release Date: {movies.showingAt}</Text>
                        <Text style={{ color: 'black', fontSize: 17 }}>Time: {movies.duration} min</Text>

                    </View>
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5, marginVertical: 15 }}></View>

                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flex: 1, marginTop: 10, padding: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Story:</Text>
                        <Text style={{ fontSize: 15, padding: 2, lineHeight: 20 }}>{movies.description}</Text>
                    </View>

                </View>
            </View>

        </ScrollView>

    )
}
