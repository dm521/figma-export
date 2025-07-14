import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeFemaleScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.style1}>
        <Text style={styles.buttonText}>立即开始</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.style2}>
        <Text style={styles.buttonText}>立即开始</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {"flex":1,"padding":16,"backgroundColor":"#fff"},
  style1: {"width":505.6875,"height":899,"backgroundColor":"#3399DD","borderRadius":8,"justifyContent":"center","alignItems":"center","marginBottom":16},
  buttonText: {"fontSize":18,"color":"#fff"},
  style2: {"width":674.4375,"height":1199,"backgroundColor":"#3399DD","borderRadius":8,"justifyContent":"center","alignItems":"center","marginBottom":16},
});

export default HomeFemaleScreen;