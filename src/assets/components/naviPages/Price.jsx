import { faCheckCircle, faHome, faSchool, faTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Price = () => {

    // Semester Monthly Counter
    const [semesterOneMonthly, setsemesterOneMonthly] = useState(6)
    const [semesterTwoMonthly, setsemesterTwoMonthly] = useState(5)

    // price each class
    const [pricegrade12, setPricegrade12] = useState(90)
    const [pricegrade34, setPricegrade34] = useState(100)
    const [pricegrade56, setPricegrade56] = useState(110)
    const [pricegrade78, setPricegrade78] = useState(110)
    const [pricegrade910, setPricegrade910] = useState(130)
    const [pricegrade1112, setPricegrade1112] = useState(140)

    // discount percentage
    const [discountPrice, setDiscountPrice] = useState(50)



    return (
        <>
            <section className="p-5 md:p-10 xl:p-20">
                <div className="relative block">
                    <h1 className="text-2xl lg:text-4xl text-center underline mb-10 xl:mb-0">តារាងតម្លៃសិក្សា</h1>
                    <div className="p-0 xl:p-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="">
                            <h3 className="mb-5 lg:text-2xl"><FontAwesomeIcon icon={faSchool} /> សាលាបឋមសិក្សា</h3>
                            <table className="table-fixed w-full price_table text-center text-nowrap">
                                <thead>
                                    <tr>
                                        <th>តម្លៃក្នុង១ខែ</th>
                                        <th>តម្លៃពេញ</th>
                                        <th>បញ្ចុះ៥០%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ថ្នាក់ទី១ - ២</td>
                                        <td>${pricegrade12}</td>
                                        <td>${pricegrade12 * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៣ - ៤</td>
                                        <td>${pricegrade34}</td>
                                        <td>${pricegrade34 * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៥ - ៦</td>
                                        <td>${pricegrade56}</td>
                                        <td>${pricegrade56 * 50 / 100}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>តម្លៃក្នុងឆមាសទី១</th>
                                        <th>តម្លៃពេញ</th>
                                        <th>បញ្ចុះ៥០%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ថ្នាក់ទី១ - ២</td>
                                        <td>${pricegrade12 * semesterOneMonthly}</td>
                                        <td>${pricegrade12 * semesterOneMonthly * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៣ - ៤</td>
                                        <td>${pricegrade34 * semesterOneMonthly}</td>
                                        <td>${pricegrade34 * semesterOneMonthly * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៥ - ៦</td>
                                        <td>${pricegrade56 * semesterOneMonthly}</td>
                                        <td>${pricegrade56 * semesterOneMonthly * 50 / 100}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>តម្លៃក្នុងឆមាសទី២</th>
                                        <th>តម្លៃពេញ</th>
                                        <th>បញ្ចុះ៥០%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ថ្នាក់ទី១ - ២</td>
                                        <td>${pricegrade12 * semesterTwoMonthly}</td>
                                        <td>${pricegrade12 * semesterTwoMonthly * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៣ - ៤</td>
                                        <td>${pricegrade34 * semesterTwoMonthly}</td>
                                        <td>${pricegrade34 * semesterTwoMonthly * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៥ - ៦</td>
                                        <td>${pricegrade56 * semesterTwoMonthly}</td>
                                        <td>${pricegrade56 * semesterTwoMonthly * 50 / 100}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>តម្លៃក្នុង១ឆ្នាំ</th>
                                        <th>តម្លៃពេញ</th>
                                        <th>បញ្ចុះ៥០%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ថ្នាក់ទី១ - ២</td>
                                        <td>${pricegrade12 * (semesterOneMonthly + semesterTwoMonthly)}</td>
                                        <td>${pricegrade12 * (semesterOneMonthly + semesterTwoMonthly) * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៣ - ៤</td>
                                        <td>${pricegrade34 * (semesterOneMonthly + semesterTwoMonthly)}</td>
                                        <td>${pricegrade34 * (semesterOneMonthly + semesterTwoMonthly) * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៥ - ៦</td>
                                        <td>${pricegrade56 * (semesterOneMonthly + semesterTwoMonthly)}</td>
                                        <td>${pricegrade56 * (semesterOneMonthly + semesterTwoMonthly) * 50 / 100}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="">
                            <h3 className="mb-5 lg:text-2xl"><FontAwesomeIcon icon={faSchool} /> វិទ្យាល័យ</h3>
                            <table className="table-fixed w-full price_table text-center text-nowrap">
                                <thead>
                                    <tr>
                                        <th>តម្លៃក្នុង១ខែ</th>
                                        <th>តម្លៃពេញ</th>
                                        <th>បញ្ចុះ៥០%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ថ្នាក់ទី៧ - ៨</td>
                                        <td>${pricegrade78}</td>
                                        <td>${pricegrade78 * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៩ - ១០</td>
                                        <td>${pricegrade910}</td>
                                        <td>${pricegrade910 * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី១១ - ១២</td>
                                        <td>${pricegrade1112}</td>
                                        <td>${pricegrade1112 * 50 / 100}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>តម្លៃក្នុងឆមាសទី១</th>
                                        <th>តម្លៃពេញ</th>
                                        <th>បញ្ចុះ៥០%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ថ្នាក់ទី៧ - ៨</td>
                                        <td>${pricegrade78 * semesterOneMonthly}</td>
                                        <td>${pricegrade78 * semesterOneMonthly * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៩ - ១០</td>
                                        <td>${pricegrade910 * semesterOneMonthly}</td>
                                        <td>${pricegrade910 * semesterOneMonthly * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី១១ - ១២</td>
                                        <td>${pricegrade1112 * semesterOneMonthly}</td>
                                        <td>${pricegrade1112 * semesterOneMonthly * 50 / 100}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>តម្លៃក្នុងឆមាសទី២</th>
                                        <th>តម្លៃពេញ</th>
                                        <th>បញ្ចុះ៥០%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ថ្នាក់ទី៧ - ៨</td>
                                        <td>${pricegrade78 * semesterTwoMonthly}</td>
                                        <td>${pricegrade78 * semesterTwoMonthly * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៩ - ១០</td>
                                        <td>${pricegrade910 * semesterTwoMonthly}</td>
                                        <td>${pricegrade910 * semesterTwoMonthly * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី១១ - ១២</td>
                                        <td>${pricegrade1112 * semesterTwoMonthly}</td>
                                        <td>${pricegrade1112 * semesterTwoMonthly * 50 / 100}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>តម្លៃក្នុង១ឆ្នាំ</th>
                                        <th>តម្លៃពេញ</th>
                                        <th>បញ្ចុះ៥០%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ថ្នាក់ទី៧ - ៨</td>
                                        <td>${pricegrade78 * (semesterOneMonthly + semesterTwoMonthly)}</td>
                                        <td>${pricegrade78 * (semesterOneMonthly + semesterTwoMonthly) * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី៩ - ១០</td>
                                        <td>${pricegrade910 * (semesterOneMonthly + semesterTwoMonthly)}</td>
                                        <td>${pricegrade910 * (semesterOneMonthly + semesterTwoMonthly) * 50 / 100}</td>
                                    </tr>
                                    <tr>
                                        <td>ថ្នាក់ទី១១ - ១២</td>
                                        <td>${pricegrade1112 * (semesterOneMonthly + semesterTwoMonthly)}</td>
                                        <td>${pricegrade1112 * (semesterOneMonthly + semesterTwoMonthly) * 50 / 100}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-span-1 lg:col-span-2 mt-10 lg:text-xl/8">
                            <h3 className="mb-5 lg:text-2xl"><FontAwesomeIcon icon={faTag} /> តម្លៃសម្ភារៈសិក្សា និងសេវាផ្សេងៗ</h3>
                            <p className="ml-5 lg:ml-10"><FontAwesomeIcon icon={faCheckCircle} /> សេវារដ្ឋបាល ១ឆ្នាំ ៨២០០០៛ ( 20$ )</p>
                            <p className="ml-5 lg:ml-10"><FontAwesomeIcon icon={faCheckCircle} /> ឯកសណ្ឋានកីឡា១ឈុត តម្លៃ ២០៥០០៛ ( 5$ )</p>
                            <p className="ml-5 lg:ml-10"><FontAwesomeIcon icon={faCheckCircle} /> ឡូហ្គោសាលា Logo ១តម្លៃ ៣០០០៛ ( 0.73$ )</p>
                            <p className="ml-5 lg:ml-10"><FontAwesomeIcon icon={faCheckCircle} /> សៀវភៅពុម្ពថ្នាក់ទី៧ ១ឈុត តម្លៃ ៨៣៦០០៛ (20.38$)</p>
                            <p className="ml-5 lg:ml-10"><FontAwesomeIcon icon={faCheckCircle} /> សៀវភៅពុម្ពថ្នាក់ទី៨ ១ឈុត តម្លៃ ៨៦២០០៛ (21$)</p>
                            <p className="ml-5 lg:ml-10"><FontAwesomeIcon icon={faCheckCircle} /> សៀវភៅពុម្ពថ្នាក់ទី៩ ១ឈុត តម្លៃ ៨៦២០០៛ (21$)</p>
                            <p className="ml-5 lg:ml-10"><FontAwesomeIcon icon={faCheckCircle} /> សៀវភៅពុម្ពថ្នាក់ទី១០ ១ឈុត តម្លៃ ១១៣០០០៛ (27.55$)</p>
                            <p className="ml-5 lg:ml-10"><FontAwesomeIcon icon={faCheckCircle} /> សៀវភៅពុម្ពថ្នាក់ទី១១ ១ឈុត តម្លៃ ១៤៥៦០០៛ (35.5$)</p>
                            <p className="ml-5 lg:ml-10"><FontAwesomeIcon icon={faCheckCircle} /> សៀវភៅពុម្ពថ្នាក់ទី១២ ១ឈុត តម្លៃ ១៤៦៤០០៛ (35.7$)</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Price