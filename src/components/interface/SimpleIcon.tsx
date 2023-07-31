import { useState } from 'react'
import styled from 'styled-components'
import { Styles } from './'

export type SimpleIconProps = {
    content: string
    hoverContent: string
    activityStyle: Styles
    className: string
    showBorder?: boolean
    // onClick: () => void
    onClick: (event: any) => void
}

export const stylesColors = {
    [Styles.default]: 'inherit',
    [Styles.warning]: 'red',
    [Styles.info]: 'yellow',
    [Styles.positive]: 'green',
}

const ITEM_BORDER = 'dashed #666600 thin'

const getColorFromStyle = (
    activityStyle: Styles = Styles.default,
    hovered: Boolean
) => {
    if (!hovered) {
        return stylesColors[Styles.default]
    }
    return stylesColors[activityStyle]
}

const StyledSimpleIcon = styled.div<{
    $activityStyle: Styles
    $isHovered: boolean
    $showBorder?: boolean
}>`
    display: flex;
    cursor: pointer;
    color: ${({ $activityStyle, $isHovered }) =>
        getColorFromStyle($activityStyle, $isHovered)};
    border: ${({ $showBorder }) => ($showBorder ? ITEM_BORDER : '')};
    padding: 0rem 0rem 0rem 0rem;
    user-select: none;
    width: 3rem;
    align-items: center;
`

export const SimpleIcon = ({
    content,
    hoverContent,
    activityStyle,
    ...props
}: SimpleIconProps) => {
    const [hovered, setHovered] = useState(false)

    const entered = () => {
        setHovered(true)
    }
    const left = () => {
        setHovered(false)
    }

    return (
        <StyledSimpleIcon
            onMouseEnter={entered}
            onMouseLeave={left}
            $isHovered={hovered}
            $activityStyle={activityStyle}
            {...props}
        >
            <div>{hovered && hoverContent}</div>
            <div>{!hovered && content}</div>
        </StyledSimpleIcon>
    )
}
