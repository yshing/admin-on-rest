import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import ImageEye from 'material-ui/svg-icons/image/remove-red-eye';
import linkToRecord from '../../util/linkToRecord';
import translate from '../../i18n/translate';

const ShowButton = ({ basePath = '', label, record = {}, translate, disabled }) => <FlatButton
    primary
    label={label || translate('aor.action.show')}
    icon={<ImageEye />}
    containerElement={!disabled?<Link to={`${linkToRecord(basePath, record.id)}/show`} />:<div />}
    style={{ overflow: 'inherit' }}
    disabled={disabled}
/>;

ShowButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    translate: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export default translate(ShowButton);
