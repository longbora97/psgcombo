import coverImage from "../../images/headerCoverPage.jpg";
import sectionOne from "../../images/sectionOne.jpg";
import sectionTwoimg1 from "../../images/categary/homepagePhotos/1 Chinses.jpg";
import sectionTwoimg2 from "../../images/categary/homepagePhotos/2 Math.jpg";
import sectionTwoimg3 from "../../images/categary/homepagePhotos/3 Computer.jpg";
import sectionTwoimg4 from "../../images/categary/homepagePhotos/4 Music.jpg";
import sectionTwoimg5 from "../../images/categary/homepagePhotos/5 Taikvando.jpg";
import sectionTwoimg6 from "../../images/categary/homepagePhotos/6 Dance.jpg";
import HomePagePhotos from "./innerComponent/HomepagePhotos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      {/* Header page - cover img */}
      <section className="header">
        <div className="relative block">
          <img
            src={coverImage}
            alt="Header Cover"
            className="w-full drop-shadow-xs"
          />
        </div>
      </section>

      {/* section one */}
      <section className="h-fit p-10 lg:p-20">
        <div className="lg:flex lg:h-full lg:items-center lg:gap-10">
          <div className="lg:w-1/2">
            <img
              src={sectionOne}
              alt="Student Picture"
              className="w-full h-auto drop-shadow-2xl aspect-square object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="underline font-bold text-2xl my-10 mb-5 text-center lg:text-4xl lg:m-0 lg:mb-5 lg:text-left">
              សាលាបរិបូរសម្រាប់កុមារី
            </h3>
            <p className="text-xl/8 lg:text-2xl/10 text-wrap text-left">
              ជាសាលាចំណេះទូទៅភាសាខែ្មរ និងភាសាបរទេសកម្រិតវិទ្យាល័យ
            </p>
            <p className="text-xl/8 lg:text-xl/10 text-wrap text-left ml-5"><FontAwesomeIcon icon={faCircleDot} /> សិក្សាពេញមួយថ្ងៃ</p>
            <p className="text-xl/8 lg:text-xl/10 text-wrap text-left ml-5"><FontAwesomeIcon icon={faCircleDot} /> សាលាបឋមសិក្សា ចាប់ផ្ដើមពីម៉ោង ៨:០០ ដល់ ៣:៤០រសៀល</p>
            <p className="text-xl/8 lg:text-xl/10 text-wrap text-left ml-5"><FontAwesomeIcon icon={faCircleDot} /> វិទ្យាល័យ ចាប់ផ្ដើមពីម៉ោង ៨:០០ ដល់ ៤:០០រសៀល</p>
            <p className="text-xl/8 lg:text-xl/10 text-wrap text-left ml-5"><FontAwesomeIcon icon={faCircleDot} /> សិក្សាផ្ទាល់ជាមួយគ្រូមានគរុកោស្យ-គ្រូជនជាតិខ្មែរ និងបរទេស</p>
            <p className="text-xl/8 lg:text-xl/10 text-wrap text-left ml-5"><FontAwesomeIcon icon={faCircleDot} /> ថ្នាក់កុំព្យូទ័រមានចាប់ពីថ្នាក់មូលដ្ឋាន ដល់កម្រិតខ្ពស់</p>
            <p className="text-xl/8 lg:text-xl/10 text-wrap text-left ml-5"><FontAwesomeIcon icon={faCircleDot} /> ដំណើរទស្សនកិច្ចសិក្សា</p>
            <p className="text-xl/8 lg:text-xl/10 text-wrap text-left ml-5"><FontAwesomeIcon icon={faCircleDot} /> កម្មវិធីកីឡា របាំ បំណិនជីវិត និងថ្នាក់ពិសោធន៍</p>
            <p className="text-xl/8 lg:text-xl/10 text-wrap text-left ml-5"><FontAwesomeIcon icon={faCircleDot} /> កម្មវិធីប្រកួតប្រជែងតែងកំណាព្យ សំណេរ គណិតវិទ្យា និងកីឡា</p>
          </div>
        </div>
      </section>

      {/* section two bg-[#cb6be6] */}
      <section className="h-fit p-10 lg:p-20 bg-linear-[0deg,#cb6be6_5%,#af53c9_90%] text-[#f7f7f7]">
        <div className="h-full lg:flex lg:items-center">
          <div>
            <div className="block relative mb-5">
              <h3 className="font-bold text-2xl lg:text-4xl underline text-center mb-5">
                សាលាបរិបូរសម្រាប់កុមារី
              </h3>
              <p className="text-xl/8 lg:text-2xl/10 text-justify">
                ជាសាលាចំណេះទូទៅភាសាខ្មែរ ដែលប្រើប្រាស់កម្មវិធីសិក្សាស្របតាម
                ក្រសួងអប់រំយុវជន និងកីឡា។ យើងផ្ដល់ចំណេះដឹងទូទៅពីថ្នាក់ទី១
                ដល់ទី១២ ដោយមានបន្ថែមនូវ ភាសាអង់គ្លេស ភាសាចិន
                ថ្នាក់វិទ្យាសាស្រ្តកុំព្យូទ័រ តន្ត្រី របាំ កីឡា ...។ល។
              </p>
            </div>
            <div className="relative grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-15">
              <img src={sectionTwoimg1} alt="topic image 1" className="aspect-4/3" />
              <img src={sectionTwoimg2} alt="topic image 2" className="aspect-4/3" />
              <img src={sectionTwoimg3} alt="topic image 3" className="aspect-4/3" />
              <img src={sectionTwoimg4} alt="topic image 1" className="aspect-4/3" />
              <img src={sectionTwoimg5} alt="topic image 2" className="aspect-4/3" />
              <img src={sectionTwoimg6} alt="topic image 3" className="aspect-4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* section three */}
      <HomePagePhotos />

    </>
  );
};

export default Home;
