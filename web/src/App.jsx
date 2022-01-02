import './App.css'
import { useVisible } from './context/Provider'

function App() {
  
  const { visible, setVisible } = useVisible()

  return (
    <div className='App'>
      {visible ? 
          <div className='Home'>
            <p>React with FiveM and Vite</p>
            <img src={image} alt='' />
          </div> 
        : 
          null
      }
      <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default App
