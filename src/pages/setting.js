import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
export default function Setting() {
    const [theme, setTheme] = useState("light")
    const primarycolors = [
        "rgb(255,0,86)",
        "rgb(33,150,243)",
        "rgb(255,193,7)",
        "rgb(0,200,83)",
        "rgb(156,39,176)"
    ]
    return (
        <div>
            <div className="section d-block">
                <h2>preferred theme</h2>
                <div className="optioncontainer">
                    {/*<div className="option ligth">
                        <div className="check">
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        {theme === "ligth" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>*/}
                    {primarycolors.map((color, index) => (
                        <div className="option ligth">
                            {theme === "true" && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>primary color</h2>
                <div className="optioncontainer">
                    <div className="option ligth">
                        <div className="check">
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        {theme === "ligth" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className="option drack">
                        {theme === "drack" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}