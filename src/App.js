import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import '@vkontakte/vkui/dist/vkui.css';
import AppRoot from '@vkontakte/vkui/dist/components/AppRoot/AppRoot';
import View from '@vkontakte/vkui/dist/components/View/View';
import routing from './js/classes/routing';
import PanelDummy from './js/containers/PanelDummy';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';
import './styles/style.scss';

const App = ({ pageId }) => {
    const isPanelAnimation = useSelector((state) => state.globals.isPanelAnimation);
    const activePanel = routing().getPanel(pageId);

    useEffect(() => {
        (async () => {})();
    }, []);

    return (
        <ConfigProvider isWebView transitionMotionEnabled={isPanelAnimation}>
			<AppRoot>
				<View id="view-main" activePanel={activePanel}>
					<PanelDummy id="panel-dummy" />
				</View>
			</AppRoot>
        </ConfigProvider>
    );
};

App.propTypes = {
    pageId: PropTypes.string,
};

App.defaultProps = {
    pageId: '',
};

export default App;
