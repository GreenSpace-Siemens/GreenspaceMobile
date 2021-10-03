import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Modal } from 'native-base';
import { Colors } from '../../../styles/index';
import ToolBar from '../toolbar/ToolBar';

import AddEducation from '../addeducation/AddEducation';
import AddExperience from '../addexperience/AddExperience';
import AddSkill from '../addskill/AddSkill';

function CustomModal({
    open,
    toggleModal,
    navigation,
    title,
    leftButton,
    rightButton,
}) {
    const form = () => {
        if (title === 'Add Skill') {
            return <AddSkill />;
        } else if (title === 'Add Experience') {
            return <AddExperience />;
        } else {
            return <AddEducation />;
        }
    };

    return (
        <Modal isOpen={open} animationPreset="slide">
            <TouchableOpacity
                activeOpacity={1}
                style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                }}
                onPress={() => toggleModal()}>
                <Modal.Content
                    style={{
                        width: '100%',
                        maxWidth: '100%',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        padding: 10,
                        backgroundColor: Colors.WHITE,
                    }}>
                    <Modal.Header>
                        <ToolBar
                            navigation={navigation}
                            title={title}
                            leftButton={leftButton}
                            rightButton={rightButton}
                            toggleModal={toggleModal}
                        />
                    </Modal.Header>
                    <Modal.Body>{form()}</Modal.Body>
                </Modal.Content>
            </TouchableOpacity>
        </Modal>
    );
}

export default CustomModal;
