import './toggle.css';

function Toggle(props) {
  const { handelToggle } = props;
  return (
    <div className="toggleWrapper z-10">
      <input type="checkbox" className="dn m-10" id="dn" />
      <label for="dn" className="toggle " onClick={handelToggle}>
        <span className="toggle__handler"></span>
      </label>
    </div>
  );
}

export default Toggle;
