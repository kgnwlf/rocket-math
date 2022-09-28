import { useState } from 'react';

function App() {
  const [stage, setStage] = useState(2);
  const [multiplyer, setMulti] = useState(2);
  const [userAns, setUserAns] = useState(0);

  const userSubmit = (e: any) => {
    e.preventDefault();

    console.log(userAns,'submitted!');

    if (stage * multiplyer !== userAns) {
      console.log('Please try again.');
      setUserAns(0);


      return;
    }

    console.log('Correct!');

    if (stage === 10) {
      setStage(2);
      setMulti(multiplyer+1);

    } else {
      setStage(stage+1);

    }


    setUserAns(0);
  }

  return (
    <div className="App">
      <div>
        What is { stage } x { multiplyer }?

        <form onSubmit={ userSubmit }>

          <input
          type="number"
          value={ userAns === 0 ? '' : userAns }
          onChange={ (e) => { setUserAns(Number(e.target.value)) } }
          />

          <input
          type="submit"
          />

        </form>
      </div>
    </div>
  );
}

export default App;
