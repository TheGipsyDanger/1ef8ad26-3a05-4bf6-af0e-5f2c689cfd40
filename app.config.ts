import {ExpoConfig} from 'expo/config'

const config: ExpoConfig = {
    name: 'GitRepo',
    slug: 'git-repo-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    experiments: {
        tsconfigPaths: true
    },
    splash: {
        image: './assets/splash-icon.png',
        resizeMode: 'contain',
        backgroundColor: '#50277C'
    },
    ios: {
        supportsTablet: true,
        bundleIdentifier: 'com.githubAppTest.app'
    },
    android: {
        adaptiveIcon: {
            foregroundImage: './assets/splash-icon.png',
            backgroundColor: '#50277C'
        },
        package: 'com.githubAppTest.app'
    },
    plugins: ['expo-font']
}

export default config
