import moment from 'moment'

export const dateFormatHandler = (dateSTR: Date) => {
    const parsedDate = moment(dateSTR, "MMMM DD, YYYY");
    const formattedDate = parsedDate.format("DD MMMM, YYYY");
    return formattedDate
}