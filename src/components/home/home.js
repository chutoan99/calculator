import { useEffect, useState } from 'react';
import BackGround from '../backGround/BackGround';
import ImgBackGround from '../imgBackGround/imgBackGround';
import './home.css';

function App() {
  const [indexImg, setIndexImg] = useState(0);
  const listBackground = [
    'background-02.jpg',
    'background-01.jpg',
    'background-03.jpg',
    'background-04.jpg',
    'background-05.jpg',
  ];
  useEffect(() => {
    document.addEventListener('keydown', handelKeyDown, true);
  }, []);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handelClick = (e) => {
    setInput(input.concat(e.target.name));
  };
  const handleDelete = () => {
    setInput('');
    setResult('');
  };
  const handelResult = () => {
    try {
      setResult(eval(input));
      setInput('');
    } catch {
      setResult('Erorr');
      setInput('');
    }
  };
  const handelBack = () => {
    setInput(input.slice(0, input.length - 1));
  };
  const handelKeyDown = (e) => {
    if (e.key === 'Enter') {
      handelResult();
    } else if (e.key === 'Backspace') {
      handelBack();
    }
  };
  const handelChange = (index) => {
    setIndexImg(index);
  };
  return (
    <div className="w-[100%] h-[100%]" id="app">
      <ImgBackGround listBackground={listBackground} indexImg={indexImg}></ImgBackGround>
      <BackGround listBackground={listBackground} handelChange={handelChange}></BackGround>
      <div className="flex items-center justify-center absolute w-full h-full ">
        <div className=" w-[21.875rem] h-[85%] px-[20px] py-[2.188rem] rounded-[16px] text-[#232323] wrapper">
          <div className="grid w-full h-full">
            <div className="rounded-[5px] text-[#2background-02.jpg32323] w-full h-full text-[1.5rem] p-[20px]">
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
            <div className="grid grid-cols-4">
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handleDelete}
              >
                <i class="fa-solid fa-c text-[#f78a11]" onClick={handleDelete}></i>
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelBack}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  onClick={handelBack}
                >
                  <i class="fa-sharp fa-solid fa-delete-left text-[#f78a11]"></i>
                </div>
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                name="("
                onClick={handelClick}
              >
                (
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                name=")"
                onClick={handelClick}
              >
                )
              </button>

              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="7"
              >
                7
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="8"
              >
                8
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="9"
              >
                9
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="/"
              >
                &divide;
              </button>

              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="4"
              >
                4
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="5"
              >
                5
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                name="6"
                onClick={handelClick}
              >
                6
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="*"
              >
                &times;
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="1"
              >
                1
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="2"
              >
                2
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="3"
              >
                3
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="-"
              >
                -
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="."
              >
                &middot;
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="0"
              >
                0
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
              >
                &permil;
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn"
                onClick={handelClick}
                name="+"
              >
                +
              </button>
              <button className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn">
                <i class="fa-solid fa-calculator text-[#f78a11]"></i>
              </button>
              <button
                className="text-[#ffff] w-full h-[3.125rem] text-[1.5rem] bg-transparent hover-btn flex justify-center items-center col-start-2 col-end-5"
                onClick={handelResult}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
