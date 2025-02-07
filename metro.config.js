const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
});

config.resolver.extraNodeModules = {
  '@/tailwind.config': require.resolve('./tailwind.config'),
};

module.exports = withNativeWind(config, {input: './global.css'});
