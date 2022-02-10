import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'native-base';
import { Colors } from '../../styles/index';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DatePicker from 'react-native-date-picker'

function SubDiscipline({ route, navigation }) {

  const {concentrationList, discipline, bucket} = route.params;
  const [skills, setSkills] = React.useState([])
  const [conc, setConc] = React.useState()

  const getSkills = async(concentration) => {
    setConc(concentration)
    const response = await firestore().collection('SubDisciplines').doc(discipline).collection(concentration).doc('skills').get();
    setSkills(response['_data']['names']);
    firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .update({'profileCreationLevel': 0,})
  }

  React.useEffect(() => {
    if (skills.length > 0) {
      firestore()
        .collection('Users')
        .doc(auth().currentUser.uid)
        .update({'profileCreationLevel': 0})
        .then(() => {
          navigation.navigate('SwipeScreen', {skillList: skills, concentration: conc, discipline: discipline});
        });
    }
  }, [skills])

  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={()=>print()}>{concentrationList[0]}</Text>
      <View style={styles.dContainer}>
    {
      concentrationList && concentrationList.map((d, id)=>{
          return(
            <Text key={id} style={styles.link} onPress={()=>getSkills(d)}>{d}</Text>
          )
        })
    }
      </View>
      <Text style={styles.regLink}>Let's see some jobs!</Text>
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
  dContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
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
    borderColor: Colors.GREEN,
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  regLink: {
    paddingTop: 20,
    color: Colors.GREEN,
    textAlign: 'center',
    fontSize: 14
  },
});


export default SubDiscipline;
