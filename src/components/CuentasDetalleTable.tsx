import React, { useMemo } from 'react'
import { coma, date } from '../utils/utils'
import CustomTable from './CustomTable'

type CuentasDetalleTableProps = {
    detalles: any[]
}

const CuentasDetalleTable = ({detalles}: CuentasDetalleTableProps) => {

    const columns = useMemo(() => [
        {
          key: 'codigo',
          label: 'N°'
        },
        {
          key: 'fechaOperacion',
          label: 'Fecha',
          format: (value: any) => date(new Date(value.fechaOperacion))              
        },
        {
          key: 'importe',
          label: 'Importe',
          align: 'right',
          format: (value: any) => coma(value.importe)              
        },
        {
          key: 'saldoAnterior',
          label: 'Saldo Anterior',
          align: 'right',
          format: (value: any) => coma(value.saldoAnterior)              
        },
        {
          key: 'saldoActual',
          label: 'Saldo Actual',
          align: 'right',
          format: (value: any) => coma(value.saldoActual)              
        },                   
    ], [])

    return (
        <CustomTable                 
              columns={columns} 
              data={detalles || []}    
              count={1}  
              hover          
              paginate={false}
        />  
    )
}

export default CuentasDetalleTable
