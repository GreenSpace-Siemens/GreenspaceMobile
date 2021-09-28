import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import { Colors } from '../../../styles/index';

function About({ navigation }) {
    const textRef = React.createRef();

    return (
        <View style={styles.container}>
            <RichEditor
                ref={textRef}
                editorStyle={{
                    color: Colors.GRAY_DARK,
                }}
                initialHeight="85%"
                placeholder="Enter about description here..."
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
