import React from 'react';
import {Provider} from 'react-redux';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './navigators/AppNavigator';
import store from './store';

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

export default App;