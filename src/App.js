import './App.css';

function App() {
  const boxes = [1, 2, 3, 4];

  return (
    <div className='App'>
      <div className='container'>
        <div className='ul'>
          {boxes.map((box) => (
            <div key={box} className={`box box-${box}`}>
              {box}
            </div>
          ))}
        </div>
      </div>

      <div className='box-btn'>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default App;
