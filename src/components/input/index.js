import './input.css';

function Input(props) {
  const { input, result, setInput } = props;
  return (
    <div className="rounded-[5px]  w-full h-full text-[1.5rem] p-[20px]">
      <input
        className="text w-full h-[50%] outline-none text-white bg-transparent text-end"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        value={result}
        className="text text-5xl w-full h-[50%] outline-none  text-white bg-transparent text-end "
        id="result"
      />
    </div>
  );
}

export default Input;
