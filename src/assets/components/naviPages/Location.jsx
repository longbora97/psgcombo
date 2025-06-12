
import primarySchoolImg from "../../images/primarySchool.jpg";
import highSchoolImg from "../../images/highSchool.jpg";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <>
      <section className="h-fit p-10 lg:p-20">
        <div className="h-full ">
          <h3 className="text-center mb-10 lg:mb-0 text-4xl underline">
            ទីតាំង
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 scale-100 lg:scale-90">
            <div className="bg-[#ffeaff] p-5 lg:p-10">
              <img src={primarySchoolImg} alt="" className="mx-auto" />
              <h3 className="text-center text-xl lg:text-2xl underline my-10">
                សាលាបឋមសិក្សាបរិបូសម្រាប់កុមារី
              </h3>
              <table className="table-fixed ">
                <tbody className="tableLocation text-left align-top lg:text-xl">
                  <tr>
                    <td>អាស័យដ្ឋាន</td>
                    <td>
                      អគារ330 ផ្លូវ 70Kz សង្កាត់គោគឃ្លាង ខណ្ឌសែនសុខ
                      រាជធានីភ្នំពេញ
                    </td>
                  </tr>
                  <tr>
                    <td>លេខទូរស័ព្ទ</td>
                    <td>092 554 711 / 093 554 712</td>
                  </tr>
                  <tr>
                    <td>តេឡេក្រាម Channel</td>
                    <td>@psgprimaryschool</td>
                  </tr>
                  <tr>
                    <td>តេឡេក្រាម Admin</td>
                    <td>@psgprimaryschool_admin</td>
                  </tr>
                  <tr>
                    <td>Google Maps</td>
                    <td>
                      <Link
                        to="https://maps.app.goo.gl/RBtAwAkbVhTQCdzs5"
                        target="_blank"
                        className="text-red-400 underline"
                      >
                        ចុចទីនេះ
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[#ffeaff] p-5 lg:p-10">
              <img src={highSchoolImg} alt="" className="mx-auto" />
              <h3 className="text-center text-xl lg:text-2xl underline my-10">
                វិទ្យាល័យបរិបូរសម្រាប់កុមារី
              </h3>
              <table className="table-fixed ">
                <tbody className="tableLocation text-left align-top lg:text-xl">
                  <tr>
                    <td>អាស័យដ្ឋាន</td>
                    <td>
                      អគារ345 ផ្លូវ 105K11 ភូមិវិមានទ្រង់ សង្កាត់ក្រាំងធ្នង់
                      ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ
                    </td>
                  </tr>
                  <tr>
                    <td>លេខទូរស័ព្ទ</td>
                    <td>092 212 590/096 615 0920</td>
                  </tr>
                  <tr>
                    <td>តេឡេក្រាម Channel</td>
                    <td>@psghighschool</td>
                  </tr>
                  <tr>
                    <td>តេឡេក្រាម Admin</td>
                    <td>@psghighschool_admin</td>
                  </tr>
                  <tr>
                    <td>Google Maps</td>
                    <td>
                      <Link
                        to="https://maps.app.goo.gl/2kQe7KjRUFtrmTts9"
                        target="_blank"
                        className="text-red-400 underline"
                      >
                        ចុចទីនេះ
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
