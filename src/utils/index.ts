export function handleClassTime(time: string) {
    const [splitDate, splitTime] = time.split(' ')
    const preDate = splitDate.split('年')[1]
    const date = preDate[0] === '0' ? preDate.slice(1) : preDate
    const [preHour, afterHour] = splitTime.split('-')
    const startHour = preHour[0] === '0' ? preHour.slice(1) : preHour
    const endHour = afterHour[0] === '0' ? afterHour.slice(1) : afterHour
    return date + ' ' + startHour + '-' + endHour
}

export function getDates() {
    const newDate = new Date()
    const timesStamp = newDate.getTime()
    const currenDay = newDate.getDay()
    const dates = []
    for (let i = 0; i < 7; i++) {
        dates.push(
            new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7)))
                .toLocaleDateString()
                .replace(/[年月]/g, '-')
                .replace(/[日上下午]/g, '')
        )
    }
    return {
        one: dates[0],
        five: dates[4]
    }
}

export function timestampToTime(timestamp) {
    const date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    const Y = date.getFullYear() + '-'
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    const D = date.getDate() + ' '
    // const h = date.getHours() + ':'
    // const m = date.getMinutes() + ':'
    // const s = date.getSeconds()
    return Y + M + D
}
