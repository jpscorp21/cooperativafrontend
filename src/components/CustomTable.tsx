import { Box, Checkbox, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useState } from "react";

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
    onCheckboxRow?(item: any): void;
    paginate?: boolean;
    totalCount?: number;    
    footer?: React.ReactNode;
}

const CustomTable = ({columns, data, onPageChange, count = 100, page = 1, hover = false, onClickRow, paginate = true, totalCount = 0, onCheckboxRow, footer}: CustomTableProps) => {    

    const [checkboxItemsSelected, setCheckboxItemsSelected] = useState<any>({});

    const handleCheckbox = (item: any, index: number) => {

        if (!onCheckboxRow) {
            return;
        }

        const items = {...checkboxItemsSelected};

        if (items[index]) {
            delete items[index]
            setCheckboxItemsSelected(items);
            onCheckboxRow(Object.values(items));
            return;
        }

        const newItems =  {
            ...items,
            [index]: {...item}
        };

        setCheckboxItemsSelected(newItems)

        onCheckboxRow(Object.values(newItems));
    }

    return (
    <>
      <Paper sx={{width: '100% ', overflow: 'hidden'}} elevation={0}>
        <TableContainer>
            <Table >
                <TableHead>
                    <TableRow>
                        {onCheckboxRow ? (<TableCell></TableCell>) : null}
                    
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

                        const isCheckboxSelected = !!checkboxItemsSelected[index];

                        return (
                            <TableRow 
                                role="checkbox"
                                hover={hover} 
                                key={index}
                                onClick={() => {
                                    if (onClickRow) {
                                        onClickRow(item);
                                    }
                                }} 
                                sx={{cursor: hover ? 'pointer' : 'default'}}
                            >
                                {
                                    onCheckboxRow ? (
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isCheckboxSelected}
                                                onClick={() => handleCheckbox(item, index)}                                        
                                            />
                                        </TableCell>
                                    ) : null
                                }
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
                {
                    footer ? (
                        <TableFooter>
                            {footer}                            
                        </TableFooter>
                    ) : null
                }
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
