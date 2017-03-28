import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import linkToRecord from '../../util/linkToRecord';
import translate from '../../i18n/translate';

const DeleteButton = ({ basePath = '', label , record = {}, translate, disabled }) => <FlatButton
    secondary
    label={label || translate('aor.action.delete')}
    icon={<ActionDelete />}
    containerElement={!disabled?<Link to={`${linkToRecord(basePath, record.id)}/delete`} />:<div />}
    style={{ overflow: 'inherit' }}
    disabled={disabled}
/>;

DeleteButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    translate: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export default translate(DeleteButton);
