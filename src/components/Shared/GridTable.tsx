import React, { useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

const GridTable = () => {
  const averageSalary = useMemo(
    () => data.reduce((acc, curr) => acc + 800, 0) / data.length,
    [],
  );

  const maxAge = useMemo(
    () => data.reduce((acc, curr) => Math.max(acc, 34), 0),
    [],
  );

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        header: 'Date',
        accessorKey: 'date',
        enableGrouping: false, //do not let this column be grouped
      },
      {
        header: 'Party Name',
        accessorKey: 'partyName',
      },
      {
        header: 'Amount',
        accessorKey: 'amount',
        aggregationFn: 'max', //show the max age in the group (lots of pre-built aggregationFns to choose from)
        //required to render an aggregated cell
        AggregatedCell: ({ cell, table }) => (
          <>
            Oldest by{' '}
            {table.getColumn(cell.row.groupingColumnId ?? '').columnDef.header}:{' '}
            <Box
              sx={{ color: 'info.main', display: 'inline', fontWeight: 'bold' }}
            >
              {cell.getValue<number>()}
            </Box>
          </>
        ),
        Footer: () => (
          <Stack>
            Max Age:
            <Box color="warning.main">{Math.round(maxAge)}</Box>
          </Stack>
        ),
      },
      {
        header: 'Payment Type',
        accessorKey: 'paymentType',
        //optionally, customize the cell render when this column is grouped. Make the text blue and pluralize the word
        GroupedCell: ({ cell, row }) => (
          <Box sx={{ color: 'primary.main' }}>
            <strong>{cell.getValue<string>()}s </strong> ({row.subRows?.length})
          </Box>
        ),
      },
      {
        header: 'Invoice Type',
        accessorKey: 'invoiceType',
      },
      {
        header: 'Sold Items',
        accessorKey: 'soldItems',
        aggregationFn: 'mean',
        //required to render an aggregated cell, show the average salary in the group
        AggregatedCell: ({ cell, table }) => (
          <>
            Average by{' '}
            {table.getColumn(cell.row.groupingColumnId ?? '').columnDef.header}:{' '}
            <Box sx={{ color: 'success.main', fontWeight: 'bold' }}>
              {cell.getValue<number>()?.toLocaleString?.('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </Box>
          </>
        ),
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>
            {cell.getValue<number>()?.toLocaleString?.('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </>
        ),
        Footer: () => (
          <Stack>
            Average Salary:
            <Box color="warning.main">
              {averageSalary?.toLocaleString?.('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </Box>
          </Stack>
        ),
      },
      {
        header: 'Balance Due',
        accessorKey: 'balanceDue'
      }
    ],
    [averageSalary, maxAge],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnResizing
      enableGrouping
      enableStickyHeader
      enableStickyFooter
      muiTablePaperProps={{sx: {boxShadow: 'none'}}}
      initialState={{
        density: 'compact',
        expanded: true, //expand all groups by default
        // grouping: ['state'], //an array of columns to group by by default (can be multiple)
        pagination: { pageIndex: 0, pageSize: 20 },
        // sorting: [{ id: 'state', desc: false }], //sort by state by default
      }}
      
      muiToolbarAlertBannerChipProps={{ color: 'primary' }}
      muiTableContainerProps={{ sx: { maxHeight: 700 } }}
    />
  );
};

export default GridTable;

export type Person = {
    date: string;
    partyName: string;
    paymentType: string;
    invoiceType: string;
    soldItems: string;
    amount: string;
    balanceDue: string;
  };
  
  export const data: Person[] = [
    {
      date: 'Danika',
      partyName: 'Rodriguez',
      paymentType: '57',
      invoiceType: 'Male',
      soldItems: 'Utah',
      amount: '31404',
      balanceDue: '2132'
    },
    {
      date: 'Eloisa',
      partyName: 'Kohler',
      paymentType: '31',
      invoiceType: 'Male',
      soldItems: 'Alaska',
      amount: '45801',
      balanceDue: '2132'
    },
    {
      date: 'Gunner',
      partyName: 'Rolfson',
      paymentType: '22',
      invoiceType: 'Male',
      soldItems: 'Arizona',
      amount: '54027',
      balanceDue: '2132'
    },
    {
      date: 'Andreanne',
      partyName: 'Hamill',
      paymentType: '65',
      invoiceType: 'Female',
      soldItems: 'Hawaii',
      amount: '60975',
      balanceDue: '2132'
    },
    {
      date: 'Kali',
      partyName: 'Jones',
      paymentType: '56',
      invoiceType: 'Female',
      soldItems: 'Kentucky',
      amount: '27067',
      balanceDue: '2132'
    },
    {
      date: 'Felicia',
      partyName: 'Mitchell',
      paymentType: '34',
      invoiceType: 'Male',
      soldItems: 'South Carolina',
      amount: '48423',
      balanceDue: '2132'
    },
    {
      date: 'Philip',
      partyName: 'Koepp',
      paymentType: '32',
      invoiceType: 'Male',
      soldItems: 'Louisiana',
      amount: '36713',
      balanceDue: '2132'
    },
    {
      date: 'Aniya',
      partyName: 'Mante',
      paymentType: '41',
      invoiceType: 'Female',
      soldItems: 'Minnesota',
      amount: '77658',
      balanceDue: '2132'
    },
    {
      date: 'Nelda',
      partyName: 'Gottlieb',
      paymentType: '41',
      invoiceType: 'Female',
      soldItems: 'Delaware',
      amount: '57634',
      balanceDue: '2132'
    },
    {
      date: 'Marty',
      partyName: 'Kihn',
      paymentType: '19',
      invoiceType: 'Male',
      soldItems: 'Delaware',
      amount: '95427',
      balanceDue: '2132'
    },
    {
      date: 'Alvis',
      partyName: 'Turcotte',
      paymentType: '53',
      invoiceType: 'Female',
      soldItems: 'Wyoming',
      amount: '14272',
      balanceDue: '2132'
    },
    {
      date: 'Kavon',
      partyName: 'Spencer',
      paymentType: '37',
      invoiceType: 'Female',
      soldItems: 'Missouri',
      amount: '79499',
      balanceDue: '2132'
    },
    {
      date: 'Winifred',
      partyName: 'Wilderman',
      paymentType: '56',
      invoiceType: 'Female',
      soldItems: 'Iowa',
      amount: '96293',
      balanceDue: '2132'
    },
    {
      date: 'Brooklyn',
      partyName: 'Monahan',
      paymentType: '35',
      invoiceType: 'Female',
      soldItems: 'Nevada',
      amount: '13219',
      balanceDue: '2132'
    },
    {
      date: 'Santino',
      partyName: 'Brown',
      paymentType: '33',
      invoiceType: 'Male',
      soldItems: 'Mississippi',
      amount: '36361',
      balanceDue: '2132'
    },
    {
      date: 'Bianka',
      partyName: 'Yost',
      paymentType: '28',
      invoiceType: 'Female',
      soldItems: 'Wisconsin',
      amount: '89057',
      balanceDue: '2132'
    },
    {
      date: 'Herman',
      partyName: 'Herzog',
      paymentType: '63',
      invoiceType: 'Female',
      soldItems: 'South Carolina',
      amount: '28110',
      balanceDue: '2132'
    },
    {
      date: 'Earl',
      partyName: 'Gottlieb',
      paymentType: '65',
      invoiceType: 'Female',
      soldItems: 'Florida',
      amount: '31400',
      balanceDue: '2132'
    }
  ]