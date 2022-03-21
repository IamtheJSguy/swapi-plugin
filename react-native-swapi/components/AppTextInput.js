import {StyleSheet, TextInput, View} from 'react-native';

import React from 'react';
import colors from './colors';
import defaultStyles from './styles';

function AppTextInput({inputStyle, inputTextStyle, ...otherProps}) {
  return (
    <View style={[styles.container, inputStyle]}>
      <TextInput
        style={[defaultStyles.text, inputTextStyle, styles.inputField]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    alignSelf: 'stretch',
    placeholderTextColor: colors.dark,
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
  },
  inputField: {
    width: '100%',
    height: 40,
    fontSize: 14,
    color: 'black',
  },
});

export default AppTextInput;
