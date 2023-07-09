import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './Bottom.css'

function Bottom() {
    const userPosition = useSelector(state => state.login_reducer.user_position);
 
    return(
            <nav className="Wrapper">
                <div>
                    <Link to="/home">
                        <buton>
                            <FontAwesomeIcon
                                className='icon'
                                icon="home" 
                            />
                        </buton>
                    </Link>
                </div>
                <div>
                    <Link to="/photo">
                        <buton>
                            <FontAwesomeIcon
                                className='icon'
                                icon="image" 
                            />
                        </buton>
                    </Link>
                </div>
                <div>
                    <Link to="/record">
                        <buton>
                            <FontAwesomeIcon
                                className='icon'
                                icon="microphone" 
                            />
                        </buton>
                    </Link>
                </div>
                <div>
                    <Link to="/user">
                        <buton>
                            <FontAwesomeIcon
                                className='icon'
                                icon="user" 
                            />
                        </buton>
                    </Link>
                </div>
            </nav>
    )
}
export default Bottom;