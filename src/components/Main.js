import { Link } from 'react-router-dom';
import Nav from './Nav';
const Main = () => {
  return (
    <main  >
        <h1>Jason's Projects</h1>
    <div className='home'>
      <h3>
        Twitter Clone (TOOT):
         <div className='links'>
           <button className='link'><a href='https://twitter-clone-33714.web.app/'>Website </a> </button>
                 <button className='link'><a href='https://github.com/jw287962/twitter-clone'>Github</a></button>
         </div>
      </h3>
      <h3>
        Knight Travils Clone:
        <div className='links'>
         <button className='link'><a href='https://jw287962.github.io/knight_travails/'>Website </a> </button>
        <button className='link'><a href='https://github.com/jw287962/knight_travails'>Github</a></button>
        </div>
      </h3>
      <h3>
        Weather App:
        <div className='links'>
        <button className='link'><a href='https://jw287962.github.io/weather/'>Website </a> </button>
        <button className='link'><a href='https://github.com/jw287962/weather'>Github</a></button>
        </div>
      </h3>
      <h3>
       Todo App:
       <div className='links'>
       <button className='link'><a href='https://jw287962.github.io/todo/'>Website </a> </button>
        <button className='link'><a href='https://github.com/jw287962/todo'>Github</a></button>
       </div>
      
      </h3>
      <h3>
       Battleship Game:
       <div className='links'>
       <button className='link'><a href='https://jw287962.github.io/battleship/'>Website </a> </button>
        <button className='link'><a href='https://github.com/jw287962/battleship'>Github</a></button>
        </div>
      
      </h3>
      <h3>
        Calculator:
        <div className='links'>
        <button className='link'><a href='https://jw287962.github.io/calculator/'>Website </a> </button>
        <button className='link'><a href='https://github.com/jw287962/calculator'>Github</a></button>
        </div>
      
      </h3>
    </div>
    </main>
  )
}

export default Main;