import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';

const labelStyle = {
    color: 'rgba(0, 0, 0, 0.498039)',
    fontSize: '12px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'normal',
};

class WysiwygInput extends Component {
    handleChange(value) {
        this.setState({ value });
        this.props.onChange(this.props.source, value.toString('html'));
    }

    initialValue() {
        const { record, source } = this.props;

        if (!record[source]) {
            return RichTextEditor.createEmptyValue();
        }

        return RichTextEditor.createValueFromString(record[source], 'html');
    }

    state = {
        value: this.initialValue(),
    };

    render() {
        const { label } = this.props;

        return (<div>
            <p style={labelStyle}>{label}</p>
            <RichTextEditor
                value={this.state.value}
                onChange={::this.handleChange}
            />
        </div>);
    }
}

WysiwygInput.propTypes = {
    source: PropTypes.string.isRequired,
    label: PropTypes.string,
    record: PropTypes.object,
    options: PropTypes.object,
    onChange: PropTypes.func,
    includesLabel: PropTypes.bool.isRequired,
};

WysiwygInput.defaultProps = {
    record: {},
    options: {},
    includesLabel: true,
};

export default WysiwygInput;
