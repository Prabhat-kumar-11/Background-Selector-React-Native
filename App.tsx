import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randomBackground, setRandomBackground] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  actionBtn: {
    borderRadius: 12,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#e4c1c1',
  },
});
