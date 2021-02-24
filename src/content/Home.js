import hc from "../img/headshot.jpg"
import ReactTypingEffect from 'react-typing-effect';
import Social from "../common/Social";

const Home = () => {
    return <div className="contents home"> 
    <img src={hc} alt="Helen Cross" className="display-picture"/>
    <ReactTypingEffect className='typing-effect' text={"My name is Helen, I am learning to use React."} />
    <Social />
    </div>;
};

export default Home;