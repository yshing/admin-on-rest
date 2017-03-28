import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import shouldUpdate from 'recompose/shouldUpdate';
import FlatButton from 'material-ui/FlatButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import linkToRecord from '../../util/linkToRecord';
import translate from '../../i18n/translate';

const EditButton = ({ basePath = '', label, record = {}, translate, disabled }) => <FlatButton
    primary
    label={label || translate('aor.action.edit')}
    icon={<ContentCreate />}
    containerElement={!disabled?<Link to={linkToRecord(basePath, record.id)} />:<div />}
    style={{ overflow: 'inherit' }}
    disabled={disabled}
/>;

EditButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    translate: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export default translate(shouldUpdate((props, nextProps) =>
    props.record
    && props.record.id !== nextProps.record.id
    || props.basePath !== nextProps.basePath
)(EditButton));
