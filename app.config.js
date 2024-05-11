module.exports = {
  name: 'Habits+',
  slug: 'habits-plus',
  version: process.env.APP_VERSION,
  orientation: 'portrait',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  ios: {
    supportsTablet: true
  },
  web: {
    bundler: 'metro',
    output: 'static'
  },
  plugins: [
    'expo-router'
  ],
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: process.env.EXPO_PROJECT_ID
    }
  },
  owner: process.env.EXPO_ACCOUNT
};