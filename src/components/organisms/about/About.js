import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import { Colors } from '../../../styles/index';

// Firebase
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function About({ navigation }) {
    const textRef = React.createRef();

    let [aboutValue, setAboutvalue] = React.useState(null);

    const onResult = QuerySnapshot => {
        const userData = QuerySnapshot.data();
        setAboutvalue(userData.description['About Me']);
    };

    const onError = error => {
        console.error(error);
    };

    React.useEffect(() => {
        const fetchAbout = async () => {
            const userID = auth().currentUser.uid;
            await firestore()
                .collection('Users')
                .doc(userID)
                .onSnapshot(onResult, onError);
        };

        fetchAbout();
    }, []);

    const handleAbout = jsx => {
        setAboutvalue(jsx);
    };

    return (
        <View style={styles.container}>
            {aboutValue === null ? (
                <ActivityIndicator size={60} color={Colors.GREEN} />
            ) : (
                <View style={styles.body}>
                    <RichEditor
                        ref={textRef}
                        editorStyle={{
                            color: Colors.GRAY_DARK,
                        }}
                        initialContentHTML={aboutValue}
                        initialHeight="85%"
                        placeholder="Enter about description here..."
                        onChange={event => handleAbout(event)}
                    />
                    <RichToolbar
                        editor={textRef}
                        actions={[
                            'keyboard',
                            'bold',
                            'italic',
                            'underline',
                            'orderedList',
                            'unorderedList',
                            'indent',
                            'outdent',
                            'undo',
                            'redo',
                        ]}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.WHITE,
    },
    body: {
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
    },
});

export default About;
