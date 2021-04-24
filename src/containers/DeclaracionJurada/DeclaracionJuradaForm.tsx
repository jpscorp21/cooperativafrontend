
import { Button } from '@material-ui/core';
import { useState } from 'react'
import CustomTabs from '../../components/CustomTabs';
import TabPanel from '../../components/TabPanel';
import TituloContainer from '../../components/TituloContainer'
import useArrayMemo from '../../shared/hooks/useArrayMemo';
import GarantiaInstitucionFormModal from './GarantiaInstitucionFormModal';
import InmuebleFormModal from './InmuebleFormModal';
import ReferenciasFormModal from './ReferenciasFormModal';
import VehiculoFormModal from './VehiculoFormModal';

const DeclaracionJuradaForm = () => {

    const [value, setValue] = useState(0);

    const [vehiculoOpenModal, setVehiculoOpenModal] = useState(false);
    const [garantiaInstitucionOpenModal, setGarantiaInstitucionOpenModal] = useState(false);
    const [inmuebleOpenModal, setInmuebleOpenModal] = useState(false);
    const [referenciaOpenModal, setReferenciaOpenModal] = useState(false);

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
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => setReferenciaOpenModal(true)}
                    >
                        Nueva referencia comercial
                    </Button>
                </TabPanel>


                {/* GARANTIA INSTITUCION */}
                <TabPanel value={value} index={2}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => setGarantiaInstitucionOpenModal(true)}
                    >
                        Nueva garantia institución
                    </Button>
                </TabPanel>


                {/* VEHICULO */}
                <TabPanel value={value} index={3}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => setVehiculoOpenModal(true)}
                    >
                        Nuevo vehiculo
                    </Button>
                </TabPanel>


                {/* INMUEBLE */}
                <TabPanel value={value} index={4}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => setInmuebleOpenModal(true)}
                    >
                        Nuevo inmueble
                    </Button>
                </TabPanel>


                {/* REFERENCIAS PERSONALES */}
                <TabPanel value={value} index={5}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => setReferenciaOpenModal(true)}
                    >
                        Nueva referencia personal
                    </Button>
                </TabPanel>
            </CustomTabs>    


            <VehiculoFormModal openModal={vehiculoOpenModal} handleCloseModal={() => setVehiculoOpenModal(false)} />                  
            <GarantiaInstitucionFormModal openModal={garantiaInstitucionOpenModal} handleCloseModal={() => setGarantiaInstitucionOpenModal(false)} />                  
            <InmuebleFormModal openModal={inmuebleOpenModal} handleCloseModal={() => setInmuebleOpenModal(false)} />                  
            <ReferenciasFormModal openModal={referenciaOpenModal} handleCloseModal={() => setReferenciaOpenModal(false)} />                  

        </>
    )
}

export default DeclaracionJuradaForm
