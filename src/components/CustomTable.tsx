import { Box, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";

export interface ColumnCustomTable {
    key: string;
    label: string;
    align?: any;
    minWidth?: string;
    format?: (item: any) => any;
    render?: (item: any) => React.ReactElement;
}

interface CustomTableProps { 
    columns: ColumnCustomTable[];
    data: any;
    onPageChange?: (page: number) => void;
    count?: number;
    page?: number;
    hover?: boolean;
    onClickRow?(item: any): void;
    paginate?: boolean;
    totalCount?: number;
}

const CustomTable = ({columns, data, onPageChange, count = 100, page = 1, hover = false, onClickRow, paginate = true, totalCount = 0}: CustomTableProps) => {    

    return (
    <>
      <Paper sx={{width: '100% ', overflow: 'hidden'}} elevation={0}>
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
                            <TableRow 
                                hover={hover} 
                                key={index}
                                onClick={() => {
                                    if (onClickRow) {
                                        onClickRow(item);
                                    }
                                }} 
                                sx={{cursor: hover ? 'pointer' : 'default'}}
                            >
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
        {
            paginate
            ? (
                <Stack spacing={1} alignItems="center" justifyContent="space-between" direction={{xs: 'column', sm: 'row' }} px={2} pt={2}>
                    <Box sx={{display: {sm: 'block', xs: 'none'}}}></Box>            
                    <Pagination
                        page={page} 
                        count={count} 
                        color="primary" 
                        onChange={(e, page) => onPageChange && onPageChange(page)} 
                    />
                    <Typography component="h6" variant="h6" color={grey[700]} fontWeight="bold" fontSize={14} >Total: {totalCount}</Typography>
                </Stack>
            ) : null
        }                    
      </>
    )
}



export default CustomTable;
