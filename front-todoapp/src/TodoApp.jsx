import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './auth/context/AuthContext';
import { LoginPage } from './auth/pages/LoginPage';
import { ItemRoutes } from './routes/ItemRoutes';

export const TodoApp = () => {

    const { login } = useContext(AuthContext);
    return (
        <Routes>
            {
                login.isAuth
                    ? (
                        <Route path='/*' element={<ItemRoutes />} />
                    )
                    : <>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/*' element={<Navigate to="/login" /> } />
                    </>
                    
            }
        </Routes>
    );
}