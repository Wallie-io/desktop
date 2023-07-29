import { TimeAgo } from '@components/TimeAgo'
import { useEffect, useReducer, useState } from 'react'

type SearchState = {
    ticks: number
    lastUpdated: Date
    firstFetched: Date
}
export enum SearchActions {
    INCREMENT_TICKS = 'INCREMENT_TICKS',
}
type Action = { type: SearchActions; payload?: any | SearchState['ticks'] }

/**
 * Our reducer for the search state. It will tell us the last time a search was performed,
 * when the first search was performed (this value will not change), and how many times a
 * search result was updated via the DHT service.
 * @param state
 * @param action
 * @returns newState
 */
export function searchStateReducer(
    state: SearchState,
    { type, payload }: Action
) {
    switch (type) {
        case SearchActions.INCREMENT_TICKS:
            return { ...state, ticks: state.ticks + 1, lastUpdated: new Date() }
        default:
            return state
    }
}

/**
 * Helper hook that lets us call the reducer state from the parent component
 * @returns searchState, dispatch
 */
export function useSearchReducer() {
    return useReducer(searchStateReducer, {
        ticks: 0,
        lastUpdated: new Date(),
        firstFetched: new Date(),
    })
}

/**
 * Renders the current state of the search parameters.
 * @param searchState
 * @returns
 */
export const SearchHighlights = ({
    numNodes,
    ticks,
    lastUpdated,
    firstFetched,
}: { numNodes: number } & SearchState) => {
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowMore(false)
        }, 9 * 1000)

        return () => clearInterval(intervalId)
    }, [])

    const showMoreClicked = (event: React.MouseEvent) => {
        event.preventDefault()
        setShowMore(true)
        setTimeout(() => {
            setShowMore(false)
        }, 9 * 1000)
    }

    return (
        <div className="SearchHighlights">
            {numNodes && <>found {numNodes}</>}
            {showMore && (
                <>
                    {' '}
                    in {ticks} ticks :: updated{' '}
                    <TimeAgo date={lastUpdated.getTime()} />
                    {lastUpdated.getTime() - firstFetched.getTime() >
                        60 * 1000 && (
                        <span>
                            :: first fetch:{' '}
                            <TimeAgo date={firstFetched.getTime()} />
                        </span>
                    )}
                </>
            )}
            {!showMore && (
                <>
                    {' '}
                    <a className="showMore" onClick={showMoreClicked}>
                        -{'>'}
                    </a>
                </>
            )}
        </div>
    )
}
