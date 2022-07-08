export const convertDate = (date: Date) => {
    return date.toISOString().split('T')[0]
}