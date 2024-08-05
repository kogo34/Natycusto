import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QouteSection() {
    return (
        <div className="sectionquote">
            <p className="quotetexte"> <FontAwesomeIcon icon={faQuoteLeft} /> Food is everything we are . it's an extension of nationalist feeling,
                etfnic feeling, your personal histor. your province, your region, your tribe,your grandma.it's insparable
                from those the get-got
            </p>
            <p className="quote-auther">- manu du coln</p>
        </div>
    )
}