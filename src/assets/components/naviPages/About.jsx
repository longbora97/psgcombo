import { faBilibili } from "@fortawesome/free-brands-svg-icons"
import { faBraille, faDotCircle, faMound, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const About = () => {
    return (
        <>
            <section className="p-10 lg:p-20">
                <div className="relative block">
                    <h1 className="text-2xl lg:text-4xl text-center underline">អំពីសាលាយើង</h1>
                    <div className="p-5 lg:p-20">
                        <h3 className="text-xl lg:text-2xl"><FontAwesomeIcon icon={faPeopleGroup} /> បេសកកម្ម</h3>
                        <p className="ml-10 text-base/8 lg:text-xl/8"><FontAwesomeIcon icon={faDotCircle} /> ផ្ដល់ឱកាសអប់រំដល់កុមារីមកពីគ្រួសារក្រីក្រ ដើម្បីលើកម្ពស់កម្រិតអក្ខរភាព និងការអប់រំចំណេះដឹងទូទៅ ដែលអាចនាំឱ្យគេ អាចបន្តការសិក្សាអប់រំកម្រិតបន្តបន្ទាប់ ដើម្បីប្រសិទ្ធភាពជីវិតរស់នៅដែលត្រូវការ ការរៀនសូត្រគ្មានថ្ងៃបញ្ចប់។</p>
                        <p className="ml-10 text-base/8 lg:text-xl/8"><FontAwesomeIcon icon={faDotCircle} /> ផ្តល់នូវការអប់រំដែលប្រកបដោយគុណភាព គ្រប់ជ្រុងជ្រោយដល់កុមារី ដើម្បីអភិវឌ្ឍសីលធម៌ ភាពវៃឆ្លាត កាយសម្បទារ ការប្រាស្រ័យទាក់ទងក្នុងសង្គមរស់នៅ តម្លៃសោភ័ណ និងសេចក្តីជំនឿ ដើម្បីឱ្យគេអាចរកឃើញនូវទេពកោសល្យរបស់ពួកគេ ហើយអភិវឌ្ឍវាឱ្យចម្រើនលូតលាស់ឡើង ដើម្បីឱ្យជីវិតរស់នៅរបស់ពួកគេបានពេញបរិបូរដោយកិត្តិគុណ និងសេចក្តីពិតត្រង់។</p>
                        <p className="ml-10 text-base/8 lg:text-xl/8"><FontAwesomeIcon icon={faDotCircle} /> អភិវឌ្ឍការយកចិត្តទុកដាក់ ការគោរព ការពេញចិត្ត ភាពយុត្តិធម៌ត្រឹមត្រូវ ក្នុងបរិយាកាសសិក្សាដែលស្មើភាពគ្នា ជាសាលាដែលកុមារីទាំងឡាយអាចទទួលបានបទពិសោធន៍សិក្សារៀនសូត្រដោយភាពរីករាយទាំងជាក្រុម ក៏ដូចជាលក្ខណៈជាបុគ្គល។</p>
                        <p className="ml-10 text-base/8 lg:text-xl/8"><FontAwesomeIcon icon={faDotCircle} /> អភិវឌ្ឍការយកចិត្តទុកដាក់ ការគោរពគ្នា និងការចេះសហការគ្នា ក្នុងសហគមន៍ជាមួយគ្នានឹងអាណាព្យាបាល ហើយនិងអ្នកជិតខាងដទៃទៀត នោះពួកគេនឹងស្គាល់ដំណឹងល្អ ក៏ដូចជាចក្ខុវិស័យ នៃបេសកកម្មបរិបូរនៅកម្ពុជា (ប.ប.ក)។ </p>
                    </div>
                    <div className="p-5 lg:p-20">
                        <h3 className="text-xl lg:text-2xl"><FontAwesomeIcon icon={faBraille} /> ទស្សនៈវិស័យ</h3>
                        <p className="ml-10 text-base/8 lg:text-xl/8">យើងចង់លើកស្ទួយកុមារីទាំងឡាយ ឱ្យបានរីកចម្រើនឡើងទាំងខាងចំណេះដឹង និងទាំងខាងប្រាជ្ញាស្មារតី ដើម្បីឱ្យពួកគេអាចក្លាយទៅជាបណ្ដាញនៃសេចក្ដីសុខចម្រើនដល់ក្រុមគ្រួសារ និងសង្គមជាតិ។</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About