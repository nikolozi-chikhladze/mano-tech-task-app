import React from 'react';
import {View} from 'react-native';
import {Typography} from '../Typography/Typography';
import {styles} from './styles';

interface Props {
  label: string;
  isPositive?: boolean;
  text?: string;
}

export const Tag = ({label, text, isPositive = true}: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.label,
          isPositive ? styles.available : styles.unavailable,
        ]}>
        <Typography type="description" style={styles.text}>
          {label}
        </Typography>
      </View>
      {text && <Typography type="description">{text}</Typography>}
    </View>
  );
};
