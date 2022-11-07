import { Link } from 'react-router-dom';
import "../styles/navbar.css";

function Navbar() {

  return (
    <ul className='ul'>
      <li className='li'>
          <Link to="/" className='messagePage'>Message Page</Link>
      </li>
      <li className='li'>
          <Link to="/messageshistory" className='messageHistory'>Messages History</Link>
      </li>
    </ul>
  );
}

export default Navbar