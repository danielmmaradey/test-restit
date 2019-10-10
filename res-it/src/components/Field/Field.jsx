import React from "react";

const Field = props => {
  const {
    enable,
    NamePlaceHolder,
    error,
    data,
    datastate,
    NameValue,
    NameLabel,
    PrincipalClass,
    type,
    width
  } = props;

  const clase = error === "" ? "form-control" : "form-control is-invalid";

  const inputText = (
    <input
      className={clase}
      id={NameValue}
      name={NameValue}
      type="text"
      placeholder={NamePlaceHolder}
      onChange={e => props.onChangeField(e)}
      value={data}
      disabled={enable}
    />
  );

  const inputPass = (
    <input
      className={clase}
      id={NameValue}
      name={NameValue}
      type="password"
      placeholder={NamePlaceHolder}
      onChange={e => props.onChangeField(e)}
      value={enable ? data : datastate}
      disabled={enable}
    />
  );

  const typeLabel = type === undefined ? inputText : inputPass;

  return (
    <div id="field" className={PrincipalClass} style={props.styles}>
      <label className="control-label" id="readOnlyInput">
        {NameLabel}
      </label>
      {typeLabel}
      <label className="control-label" id="readOnlyInput" style={width}>
        {error}
      </label>
    </div>
  );
};

export default Field;
