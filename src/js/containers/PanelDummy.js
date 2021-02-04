import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { replace } from 'react-router-redux';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

const PanelDummy = ({ id }) => {
	const dispatch = useDispatch();

    useEffect(() => {
		dispatch(replace('/'));
	}, []);

    return <Panel id={id} />;
};

PanelDummy.propTypes = {
    id: PropTypes.string,
};

export default PanelDummy;
