import { useEffect } from "react"

const khmerNewYearImage = import.meta.glob('../../images/categary/photos_album/1 khmerNewYear/*.{jpg, JPG}', { eager: true })
const scienceImage = import.meta.glob('../../images/categary/photos_album/2 science/*.{jpg, JPG}', { eager: true })
const studentOuttingImage = import.meta.glob('../../images/categary/photos_album/3 student outting/*.{jpg, JPG}', { eager: true })
const extraFoodClassImage = import.meta.glob('../../images/categary/photos_album/4 Extra Class/Food/*.{jpg, JPG}', { eager: true })
const extraLbukatorClassImage = import.meta.glob('../../images/categary/photos_album/4 Extra Class/L\'bukator/*.{jpg, JPG}', { eager: true })
const extraRobamClassImage = import.meta.glob('../../images/categary/photos_album/4 Extra Class/Robam/*.{jpg, JPG}', { eager: true })
const chineseClassImage = import.meta.glob('../../images/categary/photos_album/5 Chines Class/*.{jpg, JPG}', { eager: true })
const mathClassImage = import.meta.glob('../../images/categary/photos_album/6 Math Class/*.{jpg, JPG}', { eager: true })
const closingDayImage = import.meta.glob('../../images/categary/photos_album/7 Closing Day/*.{jpg, JPG}', { eager: true })
const parentsDayImage = import.meta.glob('../../images/categary/photos_album/8 Parents Day/*.{jpg, JPG}', { eager: true })
const sportDayImage = import.meta.glob('../../images/categary/photos_album/9 Sport Day/*.{jpg, JPG}', { eager: true })
const studentcampImage = import.meta.glob('../../images/categary/photos_album/10 Student Camp/*.{jpg, JPG}', { eager: true })


const Photos = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
            <section className="p-10">
                <div className="relative block">
                    <h1 className="text-2xl lg:text-4xl text-center underline">កម្រងរូបភាព</h1>
                    <div className="p-10 pt-0">
                        {/* science */}
                        <div className="w-full py-10" id="scienceImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">ក្រុមពិសោធន៍</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(scienceImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        {/* chinse classs */}
                        <div className="w-full py-10" id="chineseClassImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">ថ្នាក់ភាសាចិន</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(chineseClassImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        {/* math classs */}
                        <div className="w-full py-10" id="mathClassImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">ថ្នាក់គណិតវិទ្យា</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(mathClassImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        {/* student outting */}
                        <div className="w-full py-10" id="studentOuttingImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">ដំណើរកម្សាន្តសិស្ស</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(studentOuttingImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        {/* Extra Class */}
                        <div className="w-full py-10" id="extraFoodClassImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">ថ្នាក់កម្សាន្ត - ម្ហូប</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(extraFoodClassImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        <div className="w-full py-10" id="extraLbukatorClassImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">ថ្នាក់កម្សាន្ត - ល្បុកកត្តោ</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(extraLbukatorClassImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        <div className="w-full py-10" id="extraRobamClassImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">ថ្នាក់កម្សាន្ត -  របាំ</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(extraRobamClassImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        {/* parents day */}
                        <div className="w-full py-10" id="parentsDayImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">ជំនួបអាណាព្យាបាល</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(parentsDayImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        {/* sport day */}
                        <div className="w-full py-10" id="sportDayImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">ប្រកួតកីឡា</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(sportDayImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        {/* khmer new year */}
                        <div className="w-full py-10" id="khmerNewYearImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">គ្រីស្មាគ</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(khmerNewYearImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        {/* student camp */}
                        <div className="w-full py-10" id="studentcampImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">បោះជំរុំសិស្ស</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(studentcampImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        {/* closing day */}
                        <div className="w-full py-10" id="closingDayImage">
                            <h3 className="mb-5 md:text-2xl text-center md:text-left">បិទវគ្គសាលា</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b-1 border-amber-600 pb-10">
                                {Object.entries(closingDayImage).map(([path, module]) => (
                                    <img key={path} src={module.default} alt={path.split('/').pop()} className="aspect-3/2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Photos