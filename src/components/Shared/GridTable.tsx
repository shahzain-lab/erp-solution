import React, { useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

const GridTable = () => {
  const averageSalary = useMemo(
    () => data.reduce((acc, curr) => acc + curr.salary, 0) / data.length,
    [],
  );

  const maxAge = useMemo(
    () => data.reduce((acc, curr) => Math.max(acc, curr.age), 0),
    [],
  );

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        header: 'First Name',
        accessorKey: 'firstName',
        enableGrouping: false, //do not let this column be grouped
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
      },
      {
        header: 'Age',
        accessorKey: 'age',
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
        header: 'Gender',
        accessorKey: 'gender',
        //optionally, customize the cell render when this column is grouped. Make the text blue and pluralize the word
        GroupedCell: ({ cell, row }) => (
          <Box sx={{ color: 'primary.main' }}>
            <strong>{cell.getValue<string>()}s </strong> ({row.subRows?.length})
          </Box>
        ),
      },
      {
        header: 'State',
        accessorKey: 'state',
      },
      {
        header: 'Salary',
        accessorKey: 'salary',
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
      initialState={{
        density: 'compact',
        expanded: true, //expand all groups by default
        grouping: ['state'], //an array of columns to group by by default (can be multiple)
        pagination: { pageIndex: 0, pageSize: 20 },
        sorting: [{ id: 'state', desc: false }], //sort by state by default
      }}
      muiToolbarAlertBannerChipProps={{ color: 'primary' }}
      muiTableContainerProps={{ sx: { maxHeight: 700 } }}
    />
  );
};

export default GridTable;

export type Person = {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    state: string;
    salary: number;
  };
  
  export const data: Person[] = [
    {
      firstName: 'Danika',
      lastName: 'Rodriguez',
      age: 57,
      gender: 'Male',
      state: 'Utah',
      salary: 31404,
    },
    {
      firstName: 'Eloisa',
      lastName: 'Kohler',
      age: 31,
      gender: 'Male',
      state: 'Alaska',
      salary: 45801,
    },
    {
      firstName: 'Gunner',
      lastName: 'Rolfson',
      age: 22,
      gender: 'Male',
      state: 'Arizona',
      salary: 54027,
    },
    {
      firstName: 'Andreanne',
      lastName: 'Hamill',
      age: 65,
      gender: 'Female',
      state: 'Hawaii',
      salary: 60975,
    },
    {
      firstName: 'Kali',
      lastName: 'Jones',
      age: 56,
      gender: 'Female',
      state: 'Kentucky',
      salary: 27067,
    },
    {
      firstName: 'Felicia',
      lastName: 'Mitchell',
      age: 34,
      gender: 'Male',
      state: 'South Carolina',
      salary: 48423,
    },
    {
      firstName: 'Philip',
      lastName: 'Koepp',
      age: 32,
      gender: 'Male',
      state: 'Louisiana',
      salary: 36713,
    },
    {
      firstName: 'Aniya',
      lastName: 'Mante',
      age: 41,
      gender: 'Female',
      state: 'Minnesota',
      salary: 77658,
    },
    {
      firstName: 'Nelda',
      lastName: 'Gottlieb',
      age: 41,
      gender: 'Female',
      state: 'Delaware',
      salary: 57634,
    },
    {
      firstName: 'Marty',
      lastName: 'Kihn',
      age: 19,
      gender: 'Male',
      state: 'Delaware',
      salary: 95427,
    },
    {
      firstName: 'Alvis',
      lastName: 'Turcotte',
      age: 53,
      gender: 'Female',
      state: 'Wyoming',
      salary: 14272,
    },
    {
      firstName: 'Kavon',
      lastName: 'Spencer',
      age: 37,
      gender: 'Female',
      state: 'Missouri',
      salary: 79499,
    },
    {
      firstName: 'Winifred',
      lastName: 'Wilderman',
      age: 56,
      gender: 'Female',
      state: 'Iowa',
      salary: 96293,
    },
    {
      firstName: 'Brooklyn',
      lastName: 'Monahan',
      age: 35,
      gender: 'Female',
      state: 'Nevada',
      salary: 13219,
    },
    {
      firstName: 'Santino',
      lastName: 'Brown',
      age: 33,
      gender: 'Male',
      state: 'Mississippi',
      salary: 36361,
    },
    {
      firstName: 'Bianka',
      lastName: 'Yost',
      age: 28,
      gender: 'Female',
      state: 'Wisconsin',
      salary: 89057,
    },
    {
      firstName: 'Herman',
      lastName: 'Herzog',
      age: 63,
      gender: 'Female',
      state: 'South Carolina',
      salary: 28110,
    },
    {
      firstName: 'Earl',
      lastName: 'Gottlieb',
      age: 65,
      gender: 'Female',
      state: 'Florida',
      salary: 31400,
    },
    {
      firstName: 'Valentine',
      lastName: 'Bauch',
      age: 61,
      gender: 'Female',
      state: 'North Carolina',
      salary: 35130,
    },
    {
      firstName: 'Joanny',
      lastName: 'Koss',
      age: 23,
      gender: 'Male',
      state: 'Colorado',
      salary: 90422,
    },
    {
      firstName: 'Aliza',
      lastName: 'Wilkinson',
      age: 25,
      gender: 'Female',
      state: 'Virginia',
      salary: 98417,
    },
    {
      firstName: 'Eldred',
      lastName: 'Collier',
      age: 37,
      gender: 'Male',
      state: 'Mississippi',
      salary: 43741,
    },
    {
      firstName: 'Dorris',
      lastName: 'Koch',
      age: 37,
      gender: 'Male',
      state: 'Delaware',
      salary: 40979,
    },
    {
      firstName: 'Felix',
      lastName: 'Zieme',
      age: 51,
      gender: 'Male',
      state: 'Ohio',
      salary: 55319,
    },
    {
      firstName: 'Salma',
      lastName: 'Treutel',
      age: 32,
      gender: 'Female',
      state: 'Pennsylvania',
      salary: 31722,
    },
    {
      firstName: 'Durward',
      lastName: 'Kris',
      age: 36,
      gender: 'Male',
      state: 'Iowa',
      salary: 28486,
    },
    {
      firstName: 'Osborne',
      lastName: 'Barrows',
      age: 28,
      gender: 'Male',
      state: 'West Virginia',
      salary: 43996,
    },
    {
      firstName: 'Adelia',
      lastName: 'Abbott',
      age: 38,
      gender: 'Male',
      state: 'Oregon',
      salary: 34720,
    },
    {
      firstName: 'Thad',
      lastName: 'Wiegand',
      age: 64,
      gender: 'Female',
      state: 'Alabama',
      salary: 56146,
    },
    {
      firstName: 'Tiana',
      lastName: 'Tromp',
      age: 51,
      gender: 'Male',
      state: 'Arkansas',
      salary: 45636,
    },
    {
      firstName: 'Gwen',
      lastName: 'Bergstrom',
      age: 36,
      gender: 'Female',
      state: 'Wyoming',
      salary: 95145,
    },
    {
      firstName: 'Evalyn',
      lastName: 'Mitchell',
      age: 53,
      gender: 'Female',
      state: 'Illinois',
      salary: 86990,
    },
    {
      firstName: 'Edyth',
      lastName: 'Macejkovic',
      age: 55,
      gender: 'Female',
      state: 'Kentucky',
      salary: 65344,
    },
    {
      firstName: 'Lamar',
      lastName: 'Bechtelar',
      age: 58,
      gender: 'Female',
      state: 'Rhode Island',
      salary: 93753,
    },
    {
      firstName: 'Tillman',
      lastName: 'Jacobs',
      age: 36,
      gender: 'Female',
      state: 'New Mexico',
      salary: 13393,
    },
    {
      firstName: 'Turner',
      lastName: 'Haley',
      age: 56,
      gender: 'Female',
      state: 'Nebraska',
      salary: 93733,
    },
    {
      firstName: 'Omer',
      lastName: 'Funk',
      age: 28,
      gender: 'Female',
      state: 'Iowa',
      salary: 77913,
    },
    {
      firstName: 'Alivia',
      lastName: 'Ledner',
      age: 56,
      gender: 'Male',
      state: 'Alabama',
      salary: 12591,
    },
    {
      firstName: 'Dortha',
      lastName: 'Schmitt',
      age: 43,
      gender: 'Male',
      state: 'Mississippi',
      salary: 80347,
    },
    {
      firstName: 'Ellie',
      lastName: 'Schinner',
      age: 41,
      gender: 'Female',
      state: 'Rhode Island',
      salary: 42232,
    },
    {
      firstName: 'Pansy',
      lastName: 'Reilly',
      age: 55,
      gender: 'Male',
      state: 'Louisiana',
      salary: 87255,
    },
    {
      firstName: 'Alfonzo',
      lastName: 'Abernathy',
      age: 40,
      gender: 'Male',
      state: 'Utah',
      salary: 53374,
    },
    {
      firstName: 'Carmine',
      lastName: 'Orn',
      age: 24,
      gender: 'Female',
      state: 'Georgia',
      salary: 89363,
    },
    {
      firstName: 'Taylor',
      lastName: 'Herzog',
      age: 63,
      gender: 'Male',
      state: 'Florida',
      salary: 81429,
    },
  ]