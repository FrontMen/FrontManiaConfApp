import React from 'react';
import {View} from 'react-native';
import RoomsMenu from '../RoomsMenu';
import TalksList from '../TalksList';
import styles from './Dashboard.styles';

const Dashboard = ({goToDetails}) => (
    <View style={styles.dashboardContainer}>
        <RoomsMenu />
        <TalksList
            {...{
                goToDetails,
            }}
        />
    </View>
);

export default Dashboard;
