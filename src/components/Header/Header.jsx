import React from 'react';
import './Header.css';
class Header extends React.Component {
    render() { 
        const template = <header>
    
    <div class="starwars-demo">
        <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" class="star"/>
        <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" class="wars"/>
        <h2 class="byline" id="byline">The Force Awakens</h2>
    </div>
  
<audio id="bgAudio" controls autoplay loop>
  <source src="http://www.thesoundarchive.com/starwars/star-wars-theme-song.mp3" />
    Your browser does not support the audio element.
</audio>

        </header>;
        return <>{template}</>;
    }
}
export default Header;