import React from "react";
import PropTypes from 'prop-types'
import TextInput from "./TextInput";

function TextSelect(props) {
    let wrapperClass = "form-group";
    if(props.error && props.error.length > 0) {
        wrapperClass += ' has error.'
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={props.label}>{props.label}</label>
            <div className="field">
                <select
                    id={props.id}
                    name={props.name}
                    onChange={props.onChange}
                    value={props.id || ""}
                    className="form-control">
                    <option value=""/>
                    <option value="1">Cory House</option>
                    <option value="2">Scott Allen</option>
                </select>
            </div>
            {
                props.error && <div className="alert alert-danger">{props.error}</div>
            }
        </div>
    )
}
TextSelect.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};
TextSelect.defaultProps = {
    error: ""
};
export default TextSelect
