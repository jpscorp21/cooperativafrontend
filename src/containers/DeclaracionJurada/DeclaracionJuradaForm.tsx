
import { useState } from 'react'
import CustomTabs from '../../components/CustomTabs';
import TabPanel from '../../components/TabPanel';
import TituloContainer from '../../components/TituloContainer'
import useArrayMemo from '../../shared/hooks/useArrayMemo';

const DeclaracionJuradaForm = () => {

    const [value, setValue] = useState(0);

    const data = useArrayMemo([
        'Cuentas', 'Referencias comerciales', 'Garantia institucion', 'Vehiculo', 'Inmueble', 'Referencias personales'
    ])        

    return (
        <>
            <TituloContainer>Formulario Declaración Jurada</TituloContainer>
            <CustomTabs value={value} onChange={setValue} data={data}>


                {/* CUENTAS */}
                <TabPanel value={value} index={0}>
                    Cuentas
                </TabPanel>


                {/* REFERENCIAS COMERCIALES */}
                <TabPanel value={value} index={1}>
                    Referencias comerciales
                </TabPanel>


                {/* GARANTIA INSTITUCION */}
                <TabPanel value={value} index={2}>
                    Garantia Institucion
                </TabPanel>


                {/* VEHICULO */}
                <TabPanel value={value} index={3}>
                    Vehiculo
                </TabPanel>


                {/* INMUEBLE */}
                <TabPanel value={value} index={4}>
                    Inmueble
                </TabPanel>


                {/* REFERENCIAS PERSONALES */}
                <TabPanel value={value} index={5}>
                    Referencias personales
                </TabPanel>
            </CustomTabs>                      
        </>
    )
}

export default DeclaracionJuradaForm
