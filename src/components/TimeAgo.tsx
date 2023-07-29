import { FC, useMemo } from 'react'
import { DateTime } from 'luxon'

type TimeAgoProps = {
    date: Date | string | number
}

export const TimeAgo: FC<TimeAgoProps> = ({ date }) => {
    const formattedDate = useMemo(() => {
        return DateTime.fromJSDate(new Date(date)).toRelative()
    }, [date])

    if (!formattedDate) return null
    return <div className="timeAgo"> {formattedDate}</div>
}
