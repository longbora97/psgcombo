import { faFacebook, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faClock, faHouse, faHouseChimney, faLocationDot, faNoteSticky, faPenNib, faPenToSquare, faPhoneVolume, faSchool, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <>
      <div className="bg-[#f34ba8] py-10 px-5 md:px-10 lg:px-10 h-fit w-full text-white">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 pb-10 gap-5">
          <div className="">
            <h3 className="text-xl pb-5">ព័ត៌មានទំនាក់ទំនង</h3>
            <p><FontAwesomeIcon icon={faSchool} className="mr-2" />សាលាបឋមសិក្សាសម្រាប់កុមារី</p>
            <div className="ml-5 md:ml-7">
              <p><FontAwesomeIcon icon={faLocationDot} className="mr-2" /> អគារ330 ផ្លូវ 70Kz សង្កាត់គោគឃ្លាង ខណ្ឌសែនសុខ
                រាជធានីភ្នំពេញ</p>
              <p><FontAwesomeIcon icon={faPhoneVolume} className="mr-2" /> (+855) 92 554 711</p>
              <p><FontAwesomeIcon icon={faPhoneVolume} className="mr-2" /> (+855) 93 554 712</p>
              <p><FontAwesomeIcon icon={faTelegram} className="mr-2" /> @psgprimaryschool_admin | <Link to="https://t.me/psgprimaryschool_admin" target="blank" className="hover:underline hover:underline-offset-2 hover:text-blue-950">ចុចទីនេះ</Link></p>
              <p><FontAwesomeIcon icon={faFacebook} className="mr-2" /> @pleromamissionsincambodia | <Link to="https://www.facebook.com/pleromamissionsincambodia" target="blank" className="hover:underline hover:underline-offset-2 hover:text-blue-950">ចុចទីនេះ</Link></p>
            </div>
          </div>
          <div className="lg:pt-12">
            <p><FontAwesomeIcon icon={faSchool} className="mr-2" />វិទ្យាល័យបរិបូរសម្រាប់កុមារី</p>
            <div className="ml-5 md:ml-7">
              <p><FontAwesomeIcon icon={faLocationDot} className="mr-2" /> អគារ345 ផ្លូវ 105K11 ភូមិវិមានទ្រង់ សង្កាត់ក្រាំងធ្នង់
                ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ</p>
              <p><FontAwesomeIcon icon={faPhoneVolume} className="mr-2" /> (+855) 92 212 590</p>
              <p><FontAwesomeIcon icon={faPhoneVolume} className="mr-2" /> (+855) 96 615 0920</p>
              <p><FontAwesomeIcon icon={faTelegram} className="mr-2" /> @psgprimaryschool_admin | <Link to="https://t.me/psghighschool_admin" target="blank" className="hover:underline hover:underline-offset-2 hover:text-blue-950">ចុចទីនេះ</Link></p>
              <p><FontAwesomeIcon icon={faFacebook} className="mr-2" /> @pleromamissionsincambodia | <Link to="https://www.facebook.com/pleromamissionsincambodia" target="blank" className="hover:underline hover:underline-offset-2 hover:text-blue-950">ចុចទីនេះ</Link></p>
            </div>
          </div>
          <div className="border-t-1 pt-5 mt-10 lg:border-0 lg:p-0 lg:m-0">
            <h3 className="text-xl pb-5">របៀបចុះឈ្មោះ និងឯកសារភ្ជាប់</h3>
            <p className="mb-5">លោកអ្នកអាចមកទទួលពាក្យចុះឈ្មោះនៅទីតាំងសាលាបរិបូរសម្រាប់កុមារី តាមសាខានីមួយៗបាន។</p>
            <p><FontAwesomeIcon icon={faPenToSquare} /> ឯកសារភ្ជាប់មានដូចជា៖</p>
            <p className="indent-5 md:indent-7"><FontAwesomeIcon icon={faArrowRight} /> រូបថត 3*4=6សន្លឹក 4*6=6សន្លឹក</p>
            <p className="indent-5 md:indent-7"><FontAwesomeIcon icon={faArrowRight} /> សំបុត្រកំណើត (ថតចម្លង) ១ច្បាប់</p>
            <p className="mt-10 indent-5 md:indent-7"><FontAwesomeIcon icon={faPenNib} /> ចំពោះសិស្សដែលផ្ទេរការសិក្សា ចាប់ពីថ្នាក់ទី៧ ឡើងទៅត្រូវមានឯកសារភ្ជាប់បន្ថែមទៀតគឺ៖</p>
            <p className="indent-5 md:indent-7"><FontAwesomeIcon icon={faArrowRight} /> សៀវភៅសិក្ខាគារិក ១ច្បាប់</p>
            <p className="indent-5 md:indent-7"><FontAwesomeIcon icon={faArrowRight} /> សៀវភៅតាមដានការសិក្សាសិស្ស ១ច្បាប់</p>
            <p className="indent-5 md:indent-7"><FontAwesomeIcon icon={faArrowRight} /> លិខិតផ្ទេរការសិក្សា ១ច្បាប់ និងលិខិតបញ្ជាក់ការសិក្សា ១ច្បាប់</p>
          </div>
          <div className="col-span-1 lg:col-span-3 text-center lg:text-xl underline underline-offset-4">
            <p><FontAwesomeIcon icon={faClock} /> ម៉ោងធ្វើការ ចាប់ពី៨:០០ ដល់ម៉ៅង ៤:០០</p>

          </div>
        </div>
        <div className="w-full text-center border-t-1 pt-10 text-nowrap">
          <p>Copyright © 2015 - 2025 PMC All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default FooterPage;
