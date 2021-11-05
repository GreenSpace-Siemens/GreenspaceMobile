import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'native-base';
import { Colors } from '../../styles/index';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DatePicker from 'react-native-date-picker'

function Discipline({ route, navigation }) {

  const {disciplineList, bucket} = route.params;
  const [subDisciplines, setSubDisciplines] = React.useState([]);
  const [selectedDiscipline, setSelectedDiscipline] = React.useState(null);

  const getSubDisciplines = (tmp) => {
    var subD = [];
    disciplineList.map(d=>{
      if (d['name'] == tmp) {
        d['subDisciplines'].map(s=> {
          subD.push(s['name'])
        })
      }
    })
    setSubDisciplines(subD);
    setSelectedDiscipline(tmp);
  }

  React.useEffect(() => {
    if (subDisciplines.length > 0) {
      firestore()
        .collection('Users')
        .doc(auth().currentUser.uid)
        .update({'profileCreationLevel': 2})
        .then(() => {
          navigation.navigate('SubDiscipline', {disciplineList: subDisciplines, discipline: selectedDiscipline, bucket: bucket});
        });
    }
  }, [subDisciplines])

  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={()=>print()}>{bucket}</Text>
      <View style={styles.dContainer}>
    {
      disciplineList && disciplineList.map(discipline=>{
          return(
            <Text key={discipline['name']} style={styles.link} onPress={()=>getSubDisciplines(discipline['name'])}>{discipline['name']}</Text>
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


export default Discipline;
