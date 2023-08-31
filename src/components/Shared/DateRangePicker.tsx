import React from 'react'
import { DateRangePicker } from 'react-date-range';

interface Props {
    state: any;
    setState: any
}

const DatePicker = ({state, setState}: Props) => {
  return (
    <DateRangePicker
        onChange={(item: any) => setState([item.selection])}
        // showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={1}
        ranges={state}
        direction="horizontal"
        />
  )
}

export default DatePicker