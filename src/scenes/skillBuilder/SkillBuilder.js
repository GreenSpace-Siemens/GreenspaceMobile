import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'native-base';
import { Colors } from '../../styles/index';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DatePicker from 'react-native-date-picker'

function SkillBuilder({navigation}) {

  const [bucket, setBucket] = React.useState(null);
  const [disciplines, setDisciplines] = React.useState([]);


  const getBucket = async(bucketName) => {
    setBucket(bucketName);
    const response = await firestore().collection('Disciplines').doc(bucketName).get();
    setDisciplines(response['_data']['subDisciplines']);
    firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .update({'profileCreationLevel': 1,})
      .then(() => {
        navigation.navigate('Discipline', {disciplineList: response['_data']['subDisciplines'], bucket: bucketName});
      });
  }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>I am best described as a...</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.link} onPress={() => getBucket('Engineer')} >Engineer</Text>
          <Text style={styles.link} onPress={() => selectBucket('Technician')} >Technician</Text>
          <Text style={styles.link} onPress={() => selectBucket('Scientist')} >Scientist</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
      container: {
          height: '100%',
          backgroundColor: Colors.WHITE,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 40,
          paddingRight: 40,
      },
      buttonContainer: {
          backgroundColor: Colors.WHITE,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
      },
      header: {
          backgroundColor: Colors.WHITE,
      },
      title: {
          textAlign: 'left',
          fontSize: 20,
          fontWeight: '600',
          color: Colors.GREEN,
      },
      link: {
        color: Colors.GREEN,
        textAlign: 'center',
        fontSize: 25,
        borderRadius: 8,
        borderWidth: 2,
        paddingTop: 40,
        paddingBottom: 40,
        borderColor: Colors.GREEN,
        marginTop: 20,
      },
  });


  export default SkillBuilder;
