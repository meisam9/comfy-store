const FormInput = ({ label, type, name, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label
        htmlFor={name}
        className="label"
        htmlFor={name}
        className="block mb-2"
      >
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};
export default FormInput;
