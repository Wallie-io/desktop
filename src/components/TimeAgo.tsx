import { FC, useMemo } from 'react'
import { DateTime } from 'luxon'

type TimeAgoProps = {
    date: number
}

export const TimeAgo: FC<TimeAgoProps> = ({ date }) => {
    const formattedDate = useMemo(() => {
        return DateTime.fromMillis(date).toRelative()
    }, [date])

    if (!formattedDate) return null
    return <div className="timeAgo"> {formattedDate}</div>
}
