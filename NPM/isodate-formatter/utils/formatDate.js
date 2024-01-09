import djs from 'dayjs';
const testISODate = "2023-01-01T12:34:56Z"
const utcTimeDateFormat = "MMMM D, YYYY, HH:mm:ss, A UTC";
const dayMonthDateYearFormat = "dddd, MMMM DD, YYYY"
const simpleDateFormat = "MM/DD/YY";



const convertToWrittenDate = (isoDate) => {
    return djs(isoDate).format(dayMonthDateYearFormat);
}

const convertToSimpleDateFormat = (isoDate) => {
    return djs(isoDate).format(simpleDateFormat);
} 

const getRelativeDate = (isoDate) => {

    const currentDate = new Date();
    const formattedISODate = new Date(isoDate);

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const isoMonth = formattedISODate.getMonth();
    const isoYear = formattedISODate.getFullYear();

    if (currentYear > isoYear) {
        return `${currentYear - isoYear} year(s) ago`;
    } else {
        return `${currentMonth - isoMonth} months ago`;
    }



}

export {convertToSimpleDateFormat, convertToWrittenDate, getRelativeDate }
// convertISODate(testISODate);