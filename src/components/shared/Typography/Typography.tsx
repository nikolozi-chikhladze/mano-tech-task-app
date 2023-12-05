import React, {ReactNode} from 'react';
import {Text, TextProps} from 'react-native';
import {styles} from './styles';

interface Props extends TextProps {
  children: ReactNode;
  type: 'title' | 'description' | 'accent';
}

export const Typography = ({type, children, ...props}: Props) => {
  return (
    <Text style={styles[type]} {...props}>
      {children}
    </Text>
  );
};
