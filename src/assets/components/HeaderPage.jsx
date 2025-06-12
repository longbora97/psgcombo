import { NavLink } from "react-router-dom"
import schoolLogo from "../images/PleromaSchoolForGirls.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faChalkboardUser, faCoins, faHouse, faImage, faLocationDot, faPhotoFilm, faPhotoVideo } from "@fortawesome/free-solid-svg-icons"

const HeaderPage = () => {
    return (
        <>
            {/* color: PINK #ff79cb */}
            <div className="bg-[#FF79CB] p-10 lg:px-9 lg:py-5">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="mx-auto mb-5 lg:mb-0 flex items-center">
                        <div className="mr-5">
                            <img src={schoolLogo} alt="" className="w-[5rem] h-auto" />
                        </div>
                        <div className="text-white">
                            <h1 className="text-xl drop-shadow-xs text-nowrap">សាលាបរិបូរសម្រាប់កុមារី</h1>
                            <h2 className="text-xl drop-shadow-xs text-nowrap">Pleroma School for Girls</h2>
                        </div>
                    </div>
                    <div className="lg:flex items-center lg:justify-end lg:col-span-2">
                        <div className="text-white lg:flex grid grid-cols-1 gap-5 text-[1.2rem] md:text-[1.1rem] header_navi">
                            <NavLink to="/" className="transition-all ease-in-out lg:hover:scale-110 hover:text-blue-950"><FontAwesomeIcon icon={faHouse} className="mb-0.5 mr-1" />ទំព័រដើម</NavLink>
                            <NavLink to="/academic" className="transition-all ease-in-out lg:hover:scale-110 hover:text-blue-950"><FontAwesomeIcon icon={faBook} className="mb-0.5 mr-1" />កម្មវិធីសិក្សា</NavLink>
                            <NavLink to="/price" className="transition-all ease-in-out lg:hover:scale-110 hover:text-blue-950"><FontAwesomeIcon icon={faCoins} className="mb-0.5 mr-1" />តម្លៃ</NavLink>
                            <NavLink to="/photos" className="transition-all ease-in-out lg:hover:scale-110 hover:text-blue-950"><FontAwesomeIcon icon={faImage} className="mb-0.5 mr-1" />កម្រងរូបភាព</NavLink>
                            <NavLink to="/location" className="transition-all ease-in-out lg:hover:scale-110 hover:text-blue-950"><FontAwesomeIcon icon={faLocationDot} className="mb-0.5 mr-1" />ទីតាំងសាលា</NavLink>
                            <NavLink to="/about" className="transition-all ease-in-out lg:hover:scale-110 hover:text-blue-950"><FontAwesomeIcon icon={faChalkboardUser} className="mb-0.5 mr-1" />អំពីយើង</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderPage