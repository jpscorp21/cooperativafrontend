import { Route, Switch } from 'react-router-dom';
import AcercaDe from '../containers/AcercaDe/AcercaDe';
import Aportes from '../containers/Aportes/Aportes';
import AportesLista from '../containers/Aportes/AportesLista';
import Barrios from '../containers/Barrios/Barrios';
import CajaAhorroVista from '../containers/CajaAhorro/CajaAhorroVista';
import CajaAhorroVistaLista from '../containers/CajaAhorro/CajaAhorroVistaLista';
import Ciudades from '../containers/Ciudades/Ciudades';
import Cobranzas from '../containers/Cobranzas/Cobranzas';
import CobranzasForm from '../containers/Cobranzas/CobranzasForm';
import Conceptos from '../containers/Conceptos/Conceptos';
import Cuentas from '../containers/Cuentas/Cuentas';
import DeclaracionJurada from '../containers/DeclaracionJurada/DeclaracionJurada';
import DeclaracionJuradaForm from '../containers/DeclaracionJurada/DeclaracionJuradaForm';
import DesembolsoCredito from '../containers/DesembolsoCredito/DesembolsoCredito';
import EstadoCivil from '../containers/EstadoCivil/EstadoCivil';
import Facturas from '../containers/Facturas/Facturas';
import Funcionarios from '../containers/Funcionarios/Funcionarios';
import Inicio from '../containers/Inicio/Inicio';
import ModalidadPago from '../containers/ModalidadPago/ModalidadPago';
import Nacionalidades from '../containers/Nacionalidades/Nacionalidades';
import Profesiones from '../containers/Profesiones/Profesiones';
import PuestoLaboral from '../containers/PuestoLaboral/PuestoLaboral';
import Socios from '../containers/Socios/Socios';
import SociosForm from '../containers/Socios/SociosForm';
import SolicitudCredito from '../containers/SolicitudCredito/SolicitudCredito';
import SolicitudCreditoForm from '../containers/SolicitudCredito/SolicitudCreditoForm';
import Solidaridad from '../containers/Solidaridad/Solidaridad';
import SolidaridadLista from '../containers/Solidaridad/SolidaridadLista';
import Timbrados from '../containers/Timbrados/Timbrados';
import TipoCredito from '../containers/TipoCredito/TipoCredito';
import TipoCuenta from '../containers/TipoCuenta/TipoCuenta';
import TipoGarantia from '../containers/TipoGarantia/TipoGarantia';
import TipoSolicitud from '../containers/TipoSolicitud/TipoSolicitud';
import Usuarios from '../containers/Usuarios/Usuarios';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Inicio />
      </Route>
      <Route path="/acerca-de">
        <AcercaDe />        
      </Route>
      <Route exact path="/aportes">        
        <Aportes />
      </Route>
      <Route path="/aportes/lista">        
        <AportesLista />
      </Route>
      <Route path="/barrios">        
        <Barrios />
      </Route>
      <Route exact path="/cajaahorrovista">        
        <CajaAhorroVista />
      </Route>
      <Route exact path="/cajaahorrovista/lista">        
        <CajaAhorroVistaLista />
      </Route>
      <Route path="/ciudades">        
        <Ciudades />
      </Route>
      <Route exact path="/cobranzas">        
        <Cobranzas />
      </Route>
      <Route path="/cobranzas/form">        
        <CobranzasForm />
      </Route>
      <Route path="/conceptos">        
        <Conceptos />
      </Route>
      <Route path="/cuentas">        
        <Cuentas />
      </Route>
      <Route exact path="/declaracionjurada">        
        <DeclaracionJurada />
      </Route>
      <Route path="/declaracionjurada">        
        <DeclaracionJuradaForm />
      </Route>
      <Route path="/desembolsocredito">        
        <DesembolsoCredito />
      </Route>
      <Route path="/estadocivil">        
        <EstadoCivil />
      </Route>
      <Route path="/facturas">        
        <Facturas />
      </Route>
      <Route path="/funcionarios">        
        <Funcionarios />
      </Route>
      <Route path="/modalidadpago">        
        <ModalidadPago />
      </Route>
      <Route path="/nacionalidades">        
        <Nacionalidades />
      </Route>
      <Route path="/profesiones">        
        <Profesiones />
      </Route>
      <Route path="/puestolaboral">        
        <PuestoLaboral />
      </Route>
      <Route exact path="/socios">        
        <Socios />
      </Route>
      <Route exact path="/socios/form">        
        <SociosForm />
      </Route>
      <Route path="/socios/form/:id">        
        <SociosForm />
      </Route>
      <Route exact path="/solicitudcredito">        
        <SolicitudCredito />
      </Route>
      <Route exact path="/solicitudcredito/form">         
        <SolicitudCreditoForm />
      </Route>
      <Route path="/solicitudcredito/form/:id">         
        <SolicitudCreditoForm />
      </Route>
      <Route exact path="/solidaridad">        
        <Solidaridad />
      </Route>
      <Route path="/solidaridad/lista">        
        <SolidaridadLista />
      </Route>
      <Route path="/timbrados">        
        <Timbrados />
      </Route>
      <Route path="/tipocredito">         
        <TipoCredito />
      </Route>
      <Route path="/tipocuenta">        
        <TipoCuenta />
      </Route>
      <Route path="/tipogarantia">        
        <TipoGarantia />
      </Route>
      <Route path="/tiposolicitud">        
        <TipoSolicitud />
      </Route>
      <Route path="/usuarios">        
        <Usuarios />
      </Route>
    </Switch>
  )
}