import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/layout/Navbar"
import { ItemProvider } from "../context/ItemProvider"
import { RegisterPage } from "../pages/RegisterPage"
import { ItemsPage } from "../pages/ItemsPage"

export const ItemRoutes = () => {
    return (
        <>
            <ItemProvider>
                <Navbar />
                <Routes>
                    <Route path="items" element={<ItemsPage />} />
                    <Route path="items/register" element={<RegisterPage />} />
                    <Route path="items/edit/:id" element={<RegisterPage />} />
                    <Route path="/" element={<Navigate to="/items" />} />
                </Routes>
            </ItemProvider>
        </>
    )
}