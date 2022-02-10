import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Button, Input } from 'native-base';
import { Colors } from '../../styles/index';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function QuestionScreen({route, navigation}) {

  const [dimensions, setDimensions] = useState({ window, screen });
  const {question, concentration} = route.params;
  const goBack = () => {

  }

  const getQuestion = async() => {
    const skillsDoc = firestore().collection('Skills').doc(bucket);
    const skillsData = await skillsDoc.get();
    var skillsTmp = [];
    let disciplineList = skillsData['_data']['Disciplines'][discipline];
    [...Object.keys(disciplineList['subDisciplines'])].map(s=>{
          if (s == subDiscipline) {
            organizeSkills(disciplineList['subDisciplines'][s]);
          }
    })
  }

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return (
        <View stlye={styles.timer}>
          <Text stlye={styles.value}>Time's Up</Text>
        </View>
    );
    }

    return (
      <View stlye={styles.timer}>
        <Text stlye={styles.value}>{remainingTime}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{skill} Question</Text>
        <View style={styles.timerWrapper}>
          <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={[Colors.GREEN]}
            onComplete={ () => {
                console.log("TIMER IS UP")
              }
            }
          >
          {renderTime}
          </CountdownCircleTimer>
        </View>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.question} onClick={goBack()}>I'm Done</Text>
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
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30
    },
    titleContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleText: {
      flex: 2,
      color: Colors.GREEN,
      fontSize: 16
    },
    timer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    value: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '600',
      color: Colors.GREEN,
    },
    questionContainer: {
      flex: 4,
      paddingTop: 20,
    },
    buttonContainer: {
      flex: 1,
    }

});


export default QuestionScreen;
