import scienceimg1 from "../../../images/categary/photos_album/2 science/Science (1).jpg";
import chineseimg1 from "../../../images/categary/photos_album/5 Chines Class/img (1).jpg";
import mathimg1 from "../../../images/categary/photos_album/6 Math Class/img (3).jpg";
import { Link } from "react-router-dom";

const HomePagePhotos = () => {
  return (
    <>
      <section className="h-fit p-10 lg:p-20">
        <h3 className="text-center mb-10 text-4xl underline">សកម្មភាពផ្សេងៗ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-5 relative">
        <div
            to="/photos/#scienceImage"
            className="scale-100 hover:scale-105 transition-all ease-in-out"
          >
            <div className="relative shadow-md p-5 bg-linear-[180deg,#ff7993_5%,#d766db_90%]">
              <img src={scienceimg1} alt="" className="w-full h-auto" />
              <div className="text-center mt-5">
                <h4 className="text-xl xl:text-2xl underline text-white">
                  សកម្មភាពពិសោធន៍
                </h4>
                <p className="xl:text-xl/8 text-justify text-white py-5">
                  សកម្មភាពថ្នាក់វិទ្យាសាស្រ្ត ពិសោធន៍រកអត្តសញ្ញាណអង់ស៊ីមកាតាឡាស
                  និងអង់ស៊ីមអាមីឡាស
                </p>
              </div>
            </div>
          </div>
          
          <Link
            to="/photos/#chineseClassImage"
            className="scale-100 hover:scale-105 transition-all ease-in-out"
          >
            <div className="relative shadow-md p-5 bg-linear-[180deg,#ff7993_5%,#d766db_90%]">
              <img src={chineseimg1} alt="" className="w-full h-auto" />
              <div className="text-center mt-5">
                <h4 className="text-xl xl:text-2xl underline text-white">
                  ថ្នាក់ភាសាចិន
                </h4>
                <p className="xl:text-xl/8 text-justify text-white py-5">
                  បង្រៀនដោយលោកគ្រូដែលមានជំនាញ និងបទពិសោធន៍ជាច្រើនឆ្នាំ
                </p>
              </div>
            </div>
          </Link>
          
          <Link
            to="/photos/"
            className="scale-100 hover:scale-105 transition-all ease-in-out"
          >
            <div className="relative shadow-md p-5 bg-linear-[180deg,#ff7993_5%,#d766db_90%]">
              <img src={mathimg1} alt="" className="w-full h-auto" />
              <div className="text-center mt-5">
                <h4 className="text-xl xl:text-2xl underline text-white">
                  ថ្នាក់គណិតវិទ្យា
                </h4>
                <p className="xl:text-xl/8 text-justify text-white py-5">
                  បង្រៀនដោយលោកគ្រូដែលមានជំនាញ និងបទពិសោធន៍ជាច្រើនឆ្នាំ
                </p>
              </div>
            </div>
          </Link>
          
          
          
        </div>
        <Link
          to="/photos"
          className="underline text-xl text-right block py-10 text-blue-600"
        >
          មើលទាំងអស់
        </Link>
      </section>
    </>
  );
};

export default HomePagePhotos;
