import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as theme from './theme';

export default {
  'light': {
    name: 'Stream cam',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="camera-account"
        {...props}
      />
    ),
  },
  'ac': {
    name: 'Add face',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="face-recognition"
        {...props}
      />
    ),
  },
  'temperature': {
    name: 'Unlock door',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="account-lock-open"
        {...props}
      />
    ),
  },
  'fan': {
    name: 'Chart',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="chart-bell-curve"
        {...props}
      />
    ),
  },
  'wi-fi': {
    name: 'Wi-Fi',
    icon: ({size, color, ...props}) => (
      <FontAwesome
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="wifi"
        {...props}
      />
    ),
  },
  'electricity': {
    name: 'Electricity',
    icon: ({size, color, ...props}) => (
      <MaterialIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="power"
        {...props}
      />
    ),
  },
};