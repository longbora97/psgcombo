import { Outlet } from "react-router-dom"
import HeaderPage from "./HeaderPage"
import FooterPage from "./FooterPage"

const LayoutBase = () => {
    return (
        <>
            <h1 className="" id="PageTitle"></h1>
            <HeaderPage />
            <Outlet />
            <FooterPage />
            <div className="fixed bottom-5 right-5 bg-[#FF79CB] text-white py-3 px-5 rounded-4xl">
                <a href="#PageTitle">ទៅលើ</a>
            </div>
        </>
    )
}

export default LayoutBase