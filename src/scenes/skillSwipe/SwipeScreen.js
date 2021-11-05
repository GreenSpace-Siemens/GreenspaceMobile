import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'native-base';
import { Colors } from '../../styles/index';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Swiper from 'react-native-deck-swiper';

function SwipeScreen({route, navigation}) {

  const {subDiscipline, discipline, bucket} = route.params;
  const [skills, setSkills] = React.useState([]);
  const [disciplines, setDisciplines] = React.useState([]);
  const [userSkills, setUserSkills] = React.useState(null);


  const goToQuestion = (jobID, questions) => {
      console.log(questions);
  };

  const denySkill = (jobID) => {
      console.log(`Not interested in job with ID: ${jobID}`);
  };

  const fetchAllSkills = async() => {
    const skillsDoc = firestore().collection('Skills').doc(bucket);
    const skillsData = await skillsDoc.get();
    var skillsTmp = [];
    skillsData['_data']['Disciplines'].map(s=>{
      s['subDisciplines'].map(d=>{
          if (d['name'] == subDiscipline) {
            setSkills(d['skills']);
          }
      })
    })
  }

  const fetchUserSkills = async() => {
    const userID = auth().currentUser.uid;
    const user = firestore().collection('Users').doc(userID);
    const userData = await user.get();
    setUserSkills(userData['_data']['skills']);
  }

  React.useEffect(() => {
    fetchAllSkills();
  }, [])


  React.useEffect(() => {
    console.log(skills);
    fetchUserSkills();
  }, [skills])

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{subDiscipline}</Text>
        <View style={styles.cardContainer}>
        {skills.length > 0 &&
          <Swiper
              cards={skills}
              renderCard={skill => {
                  return (
                      <Text style={styles.skillCard}>{skill['skillName']}</Text>
                  );
              }}
              backgroundColor={Colors.WHITE}
              cardVerticalMargin={0}
              verticalSwipe={false}
              horizontalThreshold={100}
              onSwipedRight={jobID => goToQuestion(jobID, skills[jobID]['questions'])}
              onSwipedLeft={jobID => denySkill(jobID)}
          />
        }
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>My {subDiscipline} Skills</Text>
          <View style={styles.skillsContainer}>
            {userSkills && userSkills[subDiscipline].map(function(name, index){
                return (
                  <View style={styles.skillText}>
                    <Text key={ index }>{name}</Text>
                  </View>
                )})
            }
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.finishedButton}>I'm Done</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          height: '100%',
          backgroundColor: Colors.WHITE,
          display: 'flex',
          flexDirection: 'column',
          padding: 40,
      },
      title: {
          textAlign: 'left',
          fontSize: 20,
          fontWeight: '600',
          color: Colors.GREEN,
          flex: 1,
          backgroundColor: Colors.RED,
      },
      cardContainer: {
        flex: 2,
      },
      skillCard: {
        borderRadius: 8,
        borderColor: Colors.GREEN,
        borderWidth: 2,
      },
      buttonContainer: {
        flex: 1,
      },
      subTitleContainer: {
        flex: 1,
        backgroundColor: Colors.RED,
      },
      subTitle: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '600',
        color: Colors.GREEN,
        flex: 1,
      },
      skillsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      skillText: {
        margin: 5,
      },
      finishedButton: {
        color: Colors.GREEN,
        textAlign: 'center',
        fontSize: 25,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: Colors.GREEN,
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20
      }
  });




  export default SwipeScreen;
