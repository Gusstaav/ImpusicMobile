import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import Postar from '../Postar/Postar';


const ModalPost = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Feather name='arrow-left' style={styles.IconButtonClose} />
            </TouchableOpacity>

            <Postar />
           
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.buttonOpen} onPress={() => setModalVisible(true)}>
        <Feather name='plus' size={30} style={styles.ButtonIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  modalView: {
    marginTop: 450,
    backgroundColor: '#1d1d1d',
    height: 200,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 5,
    alignItems: "flex-start",
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 1,
  },
  buttonOpen: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#939",
    borderRadius: 70,
    marginBottom: 23,
    padding: 5,
    height: 55,
    width: 55,
    
  },
  ButtonIcon:{
    color: "#fff",
    padding: 5,
  },
  
  buttonClose: {
    backgroundColor: "transparent",
    padding: 5,
    margin: 5,
  },
  IconButtonClose:{
      color: "#fff",
      fontSize: 25,
      
  }
});

export default ModalPost;