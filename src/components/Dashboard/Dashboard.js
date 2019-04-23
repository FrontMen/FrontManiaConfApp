import React from 'react';
import {View} from 'react-native';
import RoomsMenu from '../RoomsMenu';
import TalksList from '../TalksList';
import styles from './Dashboard.styles';

const Dashboard = ({talks, goToTalkDetails, goToSpeakerDetails}) => (
    <View style={styles.dashboardContainer}>
        <RoomsMenu />
        <TalksList
            {...{
                talks,
                goToTalkDetails,
                goToSpeakerDetails,
            }}
        />
    </View>
);

export default Dashboard;
