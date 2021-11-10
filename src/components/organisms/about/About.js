import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import { Colors } from '../../../styles/index';

// Firebase
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Context from '../../../modules/context/Context';

function About({ navigation }) {
    const textRef = React.createRef();

    const { about, setAbout, setChanges } = React.useContext(Context);

    const onResult = QuerySnapshot => {
        const userData = QuerySnapshot.data();
        setAbout(userData.description['About Me']);
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
        return () => {
            setAbout(null);
        };
    }, []);

    return (
        <View style={styles.container}>
            {about === null || textRef === null ? (
                <ActivityIndicator size={60} color={Colors.GREEN} />
            ) : (
                <View style={styles.body}>
                    <RichEditor
                        ref={textRef}
                        editorStyle={{
                            color: Colors.GRAY_DARK,
                        }}
                        initialContentHTML={about}
                        initialHeight="85%"
                        placeholder="Enter about description here..."
                        onChange={event => {
                            setAbout(event);
                            setChanges(true);
                        }}
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
