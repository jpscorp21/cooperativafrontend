import { Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";

export interface ColumnCustomTable {
    key: string;
    label: string;
    align?: 'left' | 'right';
    minWidth?: string;
    format?: (item: any) => React.ReactElement;
    render?: (item: any) => React.ReactElement;
}

interface CustomTableProps { 
    columns: ColumnCustomTable[];
    data: any[];
    onPageChange?: (page: number) => void;
}

const CustomTable = ({columns, data, onPageChange}: CustomTableProps) => {    

    return (
    <>
      <Paper sx={{width: '100% ', overflow: 'hidden'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell 
                            align={column.align || 'left'}
                            sx={{minWidth: column.minWidth}}
                            key={column.key} 
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && Array.isArray(data) && data.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                {columns.map((column, columnIndex) => {

                                    let cell = <TableCell align={column.align || 'left'}>
                                                {
                                                    column.format ? column.format(item) :
                                                    item[column.key]
                                                }
                                                </TableCell>

                                    if (column.render) {
                                        cell = column.render(item);
                                    }
                                    
                                    return (
                                        <React.Fragment key={columnIndex}>
                                            {cell}
                                        </React.Fragment>
                                    )                                    
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
      </Paper>
        <Stack alignItems="center" pt={2} >
            <Pagination count={10} color="primary" onChange={(e, page) => onPageChange && onPageChange(page)} />
        </Stack>
      </>
    )
}



export default CustomTable;
