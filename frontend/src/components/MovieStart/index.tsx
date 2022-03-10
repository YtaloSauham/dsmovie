import { iconStarFull as StarFull, iconStarHalf as StarHalf, iconStarEmpty as StarEmpty } from "assets/icons";
import './styles.css';
export default function MovieStart() {
    
    return (
        <div className="dsmovie-stars-container">
            {StarFull }
            {StarFull }
            {StarFull }
            {StarHalf }
            {StarEmpty}
        </div>

    );
}