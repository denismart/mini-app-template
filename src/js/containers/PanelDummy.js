import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

const PanelDummy = ({ id }) => {
    useEffect(() => {}, []);

    return <Panel id={id} />;
};

PanelDummy.propTypes = {
    id: PropTypes.string,
};

export default PanelDummy;
