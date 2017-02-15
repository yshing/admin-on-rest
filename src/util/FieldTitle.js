import React, { PropTypes } from 'react';
import inflection from 'inflection';
import pure from 'recompose/pure';
import compose from 'recompose/compose';

import translate from '../i18n/translate';

const FieldTitle = ({ resource, source, label, translate }) => {
    switch (typeof label) {
    case 'string':
        return (<span>{label}</span>);
    case 'undefined':
        if (source) return (<span>{translate(`resources.${resource}.fields.${source}`, { _: inflection.humanize(source) })}</span>);
        return (<span />);
    default:
        return React.cloneElement(label, { resource, source, translate });
    }
};

FieldTitle.propTypes = {
    resource: PropTypes.string,
    source: PropTypes.string,
    label: PropTypes.string,
    translate: PropTypes.func.isRequired,
};

FieldTitle.defaultProps = {
    translate: x => x,
};

const enhance = compose(pure, translate);

export default enhance(FieldTitle);
