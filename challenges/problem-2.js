export const countHour = (year, holidays) => {
    const date = new Date(year, 0, 1)
    const days = []
    while (date.getFullYear() === year) {
        if (date.getDay() !== 0 && date.getDay() !== 6) days.push(new Date(date))
        date.setDate(date.getDate() + 1)
    }
    const holidaysDate = holidays.map(holiday => {
        const [month, day] = holiday.split('/')
        return new Date(year, Number(month) - 1, Number(day))
    })
    const holidaysOnWorkingDate = days.filter(day => {
        const isHoliday = holidaysDate.some(holiday => holiday.getTime() === day.getTime())
        return isHoliday
    })

    return holidaysOnWorkingDate.length * 2
}
