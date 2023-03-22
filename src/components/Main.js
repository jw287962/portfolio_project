import { Link } from 'react-router-dom';
import battleship from '../img/battleship.png'
import twitter from '../img/twitterclone.png'
import weather from '../img/weather.png'
import todo from '../img/todo.png'
import calculator from '../img/calculator.png'
import github from '../img/Github.png';
import Nav from './Nav';
import arrow from '../img/arrow.png'
import { useEffect } from 'react';
const Main = () => {
  useEffect(()=> {

    let options = {
      rootMargin: "100px",
    }
    const observer = new IntersectionObserver((entries,options) => {
      entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
          entry.target.classList.add('show')

        }else{
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  });
  return (
    <main  >
      <base target="_blank"></base>
        <h1>Jason's Projects</h1>
    <div className='home'>
      <h3 className='hidden'>
            <div className='links'>
            <img src={twitter} className="projects"></img>
            <div>
              <h3>TOOT (Twitter Clone):</h3>
                <div>
                      <a href='https://twitter-clone-33714.web.app/' ><img className="weblink" height="30" width="30" src={arrow}></img></a>
                        <a href='https://github.com/jw287962/twitter-clone'><img height="38" width="38" src={github} ></img></a>
                </div>
              </div>
            </div>
      </h3>
   
      <h3 className='hidden'>
            <div className='links'>
            <img src={weather} className="projects"></img>
            <div>
              <h3>Weather App:</h3>
              <div>
               <a href='https://jw287962.github.io/weather/'><img className="weblink" height="30" width="30" src={arrow}></img></a>
               <a href='https://github.com/jw287962/weather'><img height="40" width="40" src={github} ></img></a>
              </div>
              </div>
            </div>
      </h3>
      <h3 className='hidden'>
          <div className='links'>
          <img src={todo} className="projects"></img>
            <div>
              <h3>Todo App:</h3>
                        <div>
                <a href='https://jw287962.github.io/todo/'><img className="weblink" height="30" width="30" src={arrow}></img></a>
               <a href='https://github.com/jw287962/todo'><img height="40" width="40" src={github} ></img></a>
                        </div>
                        </div>
            </div>
      </h3>
      <h3 className='hidden'>
          <div className='links'>
          <img src={battleship} className="projects"></img>
          <div>
            <h3>Battleship Game:</h3>
            <div>
                <a href='https://jw287962.github.io/battleship/'><img className="weblink" height="30" width="30" src={arrow}></img></a>
               <a href='https://github.com/jw287962/battleship'><img height="40" width="40" src={github} ></img></a>
            </div>
              </div>
            
          </div>
          </h3>
          <h3 className='hidden'>
        
          <div className='links'>
          <img src={calculator} className="projects"></img>
            <div>
              <h3> Calculator:</h3>
                        <div>
              <a href='https://jw287962.github.io/calculator/'><img className="weblink" height="30" width="30" src={arrow}></img></a>
               <a href='https://github.com/jw287962/calculator'><img height="40" width="40" src={github} ></img></a>
                        </div>
                        </div>
            </div>
        
          </h3>
          <h3 className='hidden'>
     
        
        <div className='links'>

        <h3>Knight Travils:</h3>
          <div>
            <div>
                      <a href='https://jw287962.github.io/knight_travails/'><img className="weblink" height="30" width="30" src={arrow}></img></a>
               <a href='https://github.com/jw287962/knight_travails'><img height="40" width="40" src={github} ></img></a>
            </div>
                    </div>
          </div>
      </h3>
    </div>
    </main>
  )
}

export default Main;