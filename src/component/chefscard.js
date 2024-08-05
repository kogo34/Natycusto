import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons"
export default function ChiefCard({ Chief }) {
    return (
        <div className="chief-card">
            <div className="chief-card-image">
                <img src={Chief.img} alt="" />
                <div className="chief-card-info">
                    <h3 className="chief-card-name"> {Chief.name} </h3>
                    <p className="chief-recipe-compte"> recipe:<b> {Chief.recipesCount} </b></p>
                    <p className="chief-cuisine"> cuisine:<b> {Chief.cuisine} </b></p>
                    <p className="chief-icons" >
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTelegram} />
                        <FontAwesomeIcon icon={faInstagram} />

                    </p>

                </div>
            </div>
        </div>
    )
}