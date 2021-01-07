const routing = () => {
    const getPanel = (page) => {
        switch (page) {
            default:
            case 'dummy':
                return 'panel-dummy';
        }
    };

    return { getPanel };
};

export default routing;
