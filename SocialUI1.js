import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    StatusBar,
} from 'react-native';

import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons/';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Fonts
import { useFonts } from 'expo-font';
import NSLight from '../../assets/fonts/NunitoSans/NunitoSansLight.ttf';
import NSRegular from '../../assets/fonts/NunitoSans/NunitoSansRegular.ttf';
import NSBold from '../../assets/fonts/NunitoSans/NunitoSansBold.ttf';
import NSExtraBold from '../../assets/fonts/NunitoSans/NunitoSansExtraBold.ttf';

function Home() {
    const [loaded] = useFonts({
        NSLight,
        NSRegular,
        NSBold,
        NSExtraBold,
    });

    const [currentUser] = useState({
        profile_image: 'https://randomuser.me/api/portraits/men/73.jpg',
    });

    const [posts] = useState([
        {
            name: 'John Doe',
            username: 'johndoe',
            userProfileImage: 'https://randomuser.me/api/portraits/men/26.jpg',
            postText:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
            likes: 245,
            comments: 19,
        },
        {
            name: 'Adam Walker',
            username: 'adam_walker16',
            userProfileImage: 'https://randomuser.me/api/portraits/men/71.jpg',
            postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            postImage:
                'https://images.pexels.com/photos/4881622/pexels-photo-4881622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            likes: 132,
            comments: 26,
        },
        {
            name: 'Hailey Diaz',
            username: 'hailey192',
            userProfileImage: 'https://randomuser.me/api/portraits/women/73.jpg',
            postText: 'Lorem ipsum 🐶',
            postImage:
                'https://images.pexels.com/photos/2691779/pexels-photo-2691779.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            likes: 459,
            comments: 133,
        },
    ]);

    if (!loaded) {
        return (
            <View>
                <ActivityIndicator size='large' />
            </View>
        );
    }

    function getRandomImage() {
        let max = 100;
        let min = 1;
        let n = Math.floor(Math.random() * (max - min + 1) + min);
        let url = `https://randomuser.me/api/portraits/${n % 2 == 0 ? 'men' : 'women'
            }/${n}.jpg`;
        return url;
    }

    function Post({ post }) {
        return (
            <View style={styles.postView}>
                {/* Post Header */}
                <View style={styles.postHeader}>
                    <View>
                        <Image
                            style={{ width: 50, height: 50, borderRadius: 100 }}
                            source={{
                                uri: post.userProfileImage,
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                        <Text style={{ color: '#fff', fontFamily: 'NSBold', fontSize: 18 }}>
                            {post.name}
                        </Text>
                        <Text
                            style={{ color: '#fff', fontFamily: 'NSRegular', fontSize: 16 }}
                        >
                            {post.username}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name='more-horizontal' color='#fff' size={28} />
                    </TouchableOpacity>
                </View>
                {/* Post Content */}
                <View style={{ marginTop: 10 }}>
                    <Text
                        style={{
                            color: '#fafafa',
                            fontFamily: 'NSRegular',
                            fontSize: 14,
                            paddingHorizontal: 10,
                        }}
                    >
                        {post.postText}
                    </Text>
                    {post.postImage ? (
                        <Image
                            style={{ width: '100%', height: 300, marginTop: 10 }}
                            source={{ uri: post.postImage }}
                        />
                    ) : null}
                </View>
                {/* Post Stats */}
                <View
                    style={{ marginTop: 10, flexDirection: 'row', paddingHorizontal: 10 }}
                >
                    <TouchableOpacity style={styles.postStatsOpacity}>
                        <Icon name='heart' color='#fff' size={16} />
                        <Text
                            style={{
                                marginLeft: 6,
                                fontFamily: 'NSRegular',
                                color: '#fff',
                            }}
                        >
                            {post.likes}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            ...styles.postStatsOpacity,
                            marginLeft: 10,
                        }}
                    >
                        <Icon name='message-circle' color='#fff' size={16} />
                        <Text
                            style={{
                                marginLeft: 6,
                                fontFamily: 'NSRegular',
                                color: '#fff',
                            }}
                        >
                            {post.comments}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={{ ...styles.container }}>
            <ScrollView>
                {/* Search Bar View */}
                <View style={{ ...styles.searchBarView }}>
                    <View style={{ ...styles.searchBar }}>
                        <Icon name='search' size={22} color='#c1c1c1' />
                        <TextInput
                            style={{
                                paddingHorizontal: 6,
                                color: '#c1c1c1',
                                fontFamily: 'NSRegular',
                                fontSize: 16,
                            }}
                            placeholder='Search'
                            placeholderTextColor='#c1c1c1'
                        />
                    </View>
                    <TouchableOpacity>
                        <Image
                            style={{ ...styles.userProfileImage }}
                            source={{ uri: currentUser.profile_image }}
                        />
                    </TouchableOpacity>
                </View>
                {/* Stories View */}
                <View style={{ ...styles.storiesView }}>
                    <View style={styles.storiesViewTitleView}>
                        <Text style={{ ...styles.storiesViewTitle }}>Stories</Text>
                        <Text style={{ ...styles.showAllText }}>Show all</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            {Array(10)
                                .fill(0)
                                .map((s) => (
                                    <TouchableOpacity style={{ ...styles.storyUserProfile }}>
                                        <Image
                                            style={styles.storyUserProfileImage}
                                            source={{ uri: getRandomImage() }}
                                        />
                                    </TouchableOpacity>
                                ))}
                        </View>
                    </ScrollView>
                </View>
                {/* Posts View */}
                <View style={styles.postsView}>
                    {posts.map((post) => (
                        <Post post={post} />
                    ))}
                </View>
                <View style={{ height: 20 }}></View>
            </ScrollView>
        </View>
    );
}
function Explore() {
    return (
        <View style={{ ...styles.container }}>
            <Text
                style={{
                    color: '#fff',
                    paddingHorizontal: 10,
                    fontFamily: 'NSExtraBold',
                    fontSize: 30,
                }}
            >
                Explore
            </Text>
        </View>
    );
}
function Chats() {
    return (
        <View style={{ ...styles.container }}>
            <Text
                style={{
                    color: '#fff',
                    paddingHorizontal: 10,
                    fontFamily: 'NSExtraBold',
                    fontSize: 30,
                }}
            >
                Chats
            </Text>
        </View>
    );
}
function Notifications() {
    return (
        <View style={{ ...styles.container }}>
            <Text
                style={{
                    color: '#fff',
                    paddingHorizontal: 10,
                    fontFamily: 'NSExtraBold',
                    fontSize: 30,
                }}
            >
                Notifications
            </Text>
        </View>
    );
}
function Settings() {
    return (
        <View style={{ ...styles.container }}>
            <Text
                style={{
                    color: '#fff',
                    paddingHorizontal: 10,
                    fontFamily: 'NSExtraBold',
                    fontSize: 30,
                }}
            >
                Settings
            </Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();
export default function SocialUI1() {
    StatusBar.setBarStyle('light-content', true);
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#ED4C67',
                inactiveTintColor: '#fafafa',
                activeBackgroundColor: '#222',
                inactiveBackgroundColor: '#222',
                showLabel: false,
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='home' color={color} size={size - 4} />
                    ),
                }}
            />
            <Tab.Screen
                name='Explore'
                component={Explore}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='globe' color={color} size={size - 4} />
                    ),
                }}
            />
            <Tab.Screen
                name='Chats'
                component={Chats}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='message-square' color={color} size={size - 4} />
                    ),
                }}
            />
            <Tab.Screen
                name='Notifications'
                component={Notifications}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='bell' color={color} size={size - 4} />
                    ),
                }}
            />
            <Tab.Screen
                name='Settings'
                component={Settings}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='settings' color={color} size={size - 4} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
        paddingTop: 40,
    },
    searchBarView: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    searchBar: {
        flex: 1,
        height: 40,
        backgroundColor: '#3f3f3f',
        marginRight: 10,
        borderRadius: 4,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    storiesView: {
        paddingHorizontal: 10,
        marginTop: 10,
    },
    storiesViewTitleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    storiesViewTitle: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'NSExtraBold',
    },
    showAllText: {
        color: '#c1c1c1',
        fontFamily: 'NSBold',
        fontSize: 18,
    },
    storyUserProfile: {
        marginRight: 20,
        borderColor: '#B53471',
        borderWidth: 2.5,
        borderRadius: 100,
    },
    storyUserProfileImage: { width: 60, height: 60, borderRadius: 100 },
    postsView: { paddingHorizontal: 10, marginTop: 10 },
    postView: {
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: '#333',
        borderRadius: 10,
        shadowColor: '#1e1e1e',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 8,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    postStatsOpacity: {
        backgroundColor: '#222',
        padding: 8,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
});