import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState<any>(null);
  const [safeMode, setSafemode] = useState<boolean>(false);

  let url = `https://v2.jokeapi.dev/joke/Any${safeMode?`?safe-mode`:``}`;

  const getJoke = () => {
    axios.get(url)
    .then(response => {
      if (response.data.type === 'single') {
        setJoke({ joke: response.data.joke, type: response.data.type });
      } else {
        setJoke({ joke: response.data.setup, punchLine: response.data.delivery, type: response.data.type });
      }
    }).catch(error => {

    });
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="App bg-gray-900 h-screen">
      <div className='flex flex-col justify-center h-1/2'>
        <div className='flex justify-center'>
          <h1 className='w-1/2 full border border-white text-5xl rounded-lg p-5 bg-gradient-to-r from-green-400 to-blue-500 m-10 text-white'>
            {joke ? joke.joke : ''}
          </h1>

        </div>
        <div className='flex justify-center'>
          {joke && joke.type === 'twopart' ?
            <h1 className='w-1/2 full border border-white text-5xl rounded-lg p-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 m-10 text-white'>
              {joke.punchLine}
            </h1> : null
          }
        </div>
      </div>
      <div>
      <input className='m-2' type='checkbox' checked={safeMode} onClick={()=>{setSafemode(!safeMode)}}/>
      <span className='text-white text-lg'>Don't show me offensive jokes</span>
      </div>
        <div>
        
          <button className='m-10 border border-white text-gray-900 bg-yellow-500 w-64 h-14 rounded-lg text-3xl' onClick={()=>getJoke()}>Give me another</button>
        </div>
    </div>
  );
}

export default App;
