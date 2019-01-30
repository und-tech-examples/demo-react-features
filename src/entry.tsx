import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CardUserFeature } from './view/CardUser';
import { HeaderFeature } from './view/Header';
import configureStore from './store'
import { Provider } from 'react-redux';
import { InnerWrapper } from './view/styled';

const store = configureStore();

const App = () => (
    <div>
        <HeaderFeature />
        <InnerWrapper>
            <CardUserFeature />
        </InnerWrapper>
    </div>
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));