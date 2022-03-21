import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

import React from 'react';
import colors from './colors';

function CustomLoader({visible}) {
  return (
    <Modal transparent={true} animationType={'none'} visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={visible} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    color: 'white',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default CustomLoader;
