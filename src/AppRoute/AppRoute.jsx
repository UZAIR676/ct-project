import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from '../Componenets/HomePage';
import { useEffect } from 'react';
import AvisoLegal from '../pages/Aviso-legal';

import ContactPage from '../pages/Contact';
import Viajie from '../pages2/viaje/viajie.jsx';
import Vida from '../pages2/vida/vida.jsx';
import Salud from '../pages2/salud/salud.jsx';
 import Dec from '../pages2/decesos/decesos.jsx';
import Vida1 from '../page3/vida1/vida1.jsx';
import Decose1 from '../page3/decesos/decesos1.jsx';
import Viaje1 from '../page3/viaje1/viaje1.jsx';
import Salud1 from '../page3/salud1/salud1.jsx';
import Sss from '../page3/insrance/InsuranceCalculator.jsx'
const RedirectToHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return null;
};

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/legal" element={<AvisoLegal/>}/>
            <Route path="/contacto" element={<ContactPage/>}/>
            <Route path="/viajie" element={<Viajie/>}/>
            <Route path="/vida" element={<Vida/>}/>
            <Route path="/salud" element={<Salud/>}/>
            <Route path="/decesos" element={<Dec/>}/> 
            <Route path='/vida1' element={< Vida1/>}/>
            <Route path='/decserach' element={<Decose1/>}/>
            <Route path='/viaje1' element={<Viaje1/>}/>
            <Route path='/salud1' element={<Salud1/>}/>
            <Route path='/sss' element={<Sss/>}/>
        </Routes>
    )
}

export default AppRoute;