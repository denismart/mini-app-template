import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

const PanelDummy = ({ id }) => {
	const dispatch = useDispatch();

    useEffect(() => {
		dispatch(push('/'));
	}, []);

    return <Panel id={id} />;
};

PanelDummy.propTypes = {
    id: PropTypes.string,
};

export default PanelDummy;
