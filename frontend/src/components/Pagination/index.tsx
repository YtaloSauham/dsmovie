import {iconArrow} from '../../assets/icons/index';
import './styles.css';

export default function Pagination() {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                   {iconArrow}
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <div className="dsmovie-flip-horizontal" >{iconArrow}</div>
                </button>
            </div>
        </div>
    )
}