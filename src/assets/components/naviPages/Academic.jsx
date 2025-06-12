import { faHackerNews } from "@fortawesome/free-brands-svg-icons";
import { faBook, faBookAtlas, faComment, faComputer, faComputerMouse, faHatCowboy, faHome, faHomeAlt, faHomeLg, faHomeLgAlt } from "@fortawesome/free-solid-svg-icons";
import { faHomeUser } from "@fortawesome/free-solid-svg-icons/faHomeUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Academic = () => {
    return (
        <>
            <section className="p-20">
                <div className="relative block">
                    <h1 className="text-2xl lg:text-4xl text-center underline">កម្មវិធីសិក្សា</h1>
                    <div className="p-20">
                        <FontAwesomeIcon icon={faComputerMouse} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Academic;
