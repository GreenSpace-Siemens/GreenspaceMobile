import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Button, Input } from 'native-base';
import { Colors } from '../../styles/index';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Swiper from 'react-native-deck-swiper';

function SwipeScreen({route, navigation}) {

  const {skillList, concentration, discipline} = route.params;
  const [questions, setQuestions] = React.useState([]);
  const [disciplines, setDisciplines] = React.useState([]);
  const [userSkills, setUserSkills] = React.useState(null);
  const [didSwipeAll, setDidSwipeAll] = React.useState(false);


  const goToQuestion = async(jobID, skillName) => {
    const response = await firestore().collection('SubDisciplines').doc(discipline).get(concentration).doc('skills').get();
    setQuestionsList(response['_data']);
    console.log(questionsList)
    firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .update({'profileCreationLevel': 0,})
  }

  React.useEffect(() => {
    if (questions.length > 0) {
      firestore()
        .collection('Users')
        .doc(auth().currentUser.uid)
        .update({'profileCreationLevel': 0})
        .then(() => {
          navigation.navigate('QuestionScreen', {question: questions[0], concentration: concentration});
        });
    }
  }, [questions])

  const denySkill = (jobID) => {
      console.log(`Not interested in job with ID: ${jobID}`);
  };

  // React.useEffect(() => {
  //   if (skills.length > 0) {
  //     firestore()
  //       .collection('Users')
  //       .doc(auth().currentUser.uid)
  //       .update({'profileCreationLevel': 0})
  //       .then(() => {
  //         navigation.navigate('SubDiscipline', {concentrationList: subDisciplines, discipline: selectedDiscipline, bucket: bucket});
  //       });
  //   }
  // }, [subDisciplines])

  const swipedAll = (jobID) => {
    setDidSwipeAll(true)
  }

  function CardSection() {
    if (didSwipeAll || !skillList.length > 0) {
      return (
        <View style={styles.noMoreContainer}>
          <Text style={styles.noMoreText}>No More Skills</Text>
        </View>
      )
    } else {
      return (
        <Swiper
            cards={skillList}
            renderCard={(skill) => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.cardText}>{skill}</Text>
                  </View>
                )
            }}
            backgroundColor={Colors.WHITE}
            verticalSwipe={false}
            onSwipedRight={jobID => goToQuestion(jobID, skillList[jobID])}
            onSwipedLeft={jobID => denySkill(jobID)}
            onSwipedAll={jobID => swipedAll()}
        />
      )
    }
  }

  const goBack = () => {
  //   navigation.navigate('SubDiscipline', {disciplineList: subDiscipline, discipline: discipline, bucket: bucket});
   }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Commercial</Text>
        </View>
        <View style={styles.cardContainer}>
          <CardSection />
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>My Commercial Skills</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.finishedButton} onClick={goBack()}>I'm Done</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: Colors.WHITE,
      },
      titleContainer: {
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          flex: 1,
          padding: 20,
      },
      titleText: {
        fontSize: 40,
        fontWeight: '600',
        color: Colors.GREEN,
      },
      cardContainer: {
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: Colors.WHITE,
      },
      card: {
        borderRadius: 5,
        borderWidth: 5,
        borderColor: Colors.GREEN,
        justifyContent: 'center',
        backgroundColor: Colors.WHITE,
      },
      cardText: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: Colors.WHITE,
        color: Colors.GREEN,
      },
      noMoreContainer: {
        display: 'none',
        flex: 1,
        justifyContent: 'center',
      },
      noMoreText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: Colors.GREEN,
      },
      subTitleContainer: {
        flex: 1,
        padding: 20,
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
      buttonContainer: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
      },
      finishedButton: {
        color: Colors.GREEN,
        textAlign: 'center',
        fontSize: 25,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: Colors.GREEN,
        paddingTop: 20,
        paddingBottom: 20
      }
  });

  /* <View style={styles.skillsContainer}>
    {userSkills && userSkills[subDiscipline].map(function(name, index){
        return (
          <View style={styles.skillText}>
            <Text key={ index }>{name}</Text>
          </View>
        )})
    }
  </View> */




  export default SwipeScreen;
