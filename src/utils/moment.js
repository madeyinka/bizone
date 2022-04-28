import moment from 'moment'

export const formatter = (dateTime) => {
    return moment(dateTime).format("MMM Do YYYY")
}