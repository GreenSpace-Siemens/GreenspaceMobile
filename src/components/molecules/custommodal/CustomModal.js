import React from 'react';
import { Modal, Slide } from 'native-base';
import { Colors } from '../../../styles/index';
import ToolBar from '../toolbar/ToolBar';

function CustomModal({ navigation, title, leftButton, rightButton }) {
    return (
        <Modal
            isOpen={true}
            style={{
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}
            animationPreset="slide">
            <Modal.Content
                style={{
                    width: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    padding: 10,
                    backgroundColor: Colors.WHITE,
                }}>
                <ToolBar
                    navigation={navigation}
                    title="Add New Skill"
                    leftButton="back"
                    rightButton="check"
                />
            </Modal.Content>
        </Modal>
    );
}

export default CustomModal;
