import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import { Colors } from '../../../styles/index';

function About({ navigation }) {
    const textRef = React.createRef();

    let [aboutValue, setAboutvalue] = React.useState('');

    const handleAbout = jsx => {
        setAboutvalue(jsx);
    };

    return (
        <View style={styles.container}>
            <RichEditor
                ref={textRef}
                editorStyle={{
                    color: Colors.GRAY_DARK,
                }}
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
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.WHITE,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
    },
});

export default About;
