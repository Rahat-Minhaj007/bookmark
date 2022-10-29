import React from "react";

const Input = ({
  name = null,
  id = null,
  type = "text",
  value = "",
  placeholder = null,
  onChange = null,
  onBlur = null,
  onClick = null,
  className = null,
  disabled = false,
  readOnly = false,
  error = "",
  accept = "",
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        accept={accept}
        onWheel={(e) => e.target.blur()}
        autoComplete="off"
      />
      {error && (
        <p className="text-[12px] text-red-500 font-[500] lowercase pt-2">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
