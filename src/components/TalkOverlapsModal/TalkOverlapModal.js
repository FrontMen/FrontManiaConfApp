import React from 'react';
import {
    Button,
    Modal,
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import styles from './TalkOverlapModal.styles';

const TalkOverlapModal = ({isVisible, talk, overlappedTalk, onCancel, onApprove}) => (
    <Modal
        animationType="fade"
        visible={isVisible}
        onRequestClose={onCancel}
    >
        <SafeAreaView>
            <View style={styles.talkOverlapsModal}>
                <Text>
                    This talk overlaps with "{overlappedTalk && overlappedTalk.title}" talk
                    by "{overlappedTalk && overlappedTalk.speaker}".
                    Would you like to replace it?
                </Text>
                <View style={styles.talkOverlapsModalButtonsContainer}>
                    <Button
                        onPress={onCancel}
                        title="No"
                    />
                    <Button
                        onPress={() => onApprove(talk.id, overlappedTalk.id)}
                        title="Yes"
                    />
                </View>
            </View>
        </SafeAreaView>
    </Modal>
);

export default TalkOverlapModal;
