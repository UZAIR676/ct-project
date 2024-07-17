import Slide from '../pages/Slide';
import Comparador from '../pages/Comparador';
import Tipos from '../pages/Tipos';
import Calcula from '../pages/Calcula';
import Ahorra from '../pages/Ahorra';
import Formas from '../pages/Formas';
import Coberturas from '../pages/Coberturas';
import Como from '../pages/Como';
import Preguntas from '../pages/Preguntas';
import Desde from '../pages/Desde';

const HomePage = () => {
    return (
        <>
            <Slide />
            <Desde />
            <Comparador />
            <Tipos />
            <Calcula />
            <Ahorra />
            <Formas />
            {/* <Coberturas /> */}
            <Como />
            <Preguntas />
        </>
    )
}

export default HomePage