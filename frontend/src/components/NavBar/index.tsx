import {iconGit} from '../../assets/icons/index';
import './styles.css';
export default function NavBar() {
    return(
        <header>
        <nav className='container'>
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/YtaloSauham">
                  <div className='dsmovie-contact-container'>
                    {iconGit()}
                   <p className='dsmovie-contact-link'>/YtaloSauham</p>
                    </div>
                    </a>
              </div>
        </nav>
    </header>
    )
}