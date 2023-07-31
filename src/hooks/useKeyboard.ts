import { useState, useEffect } from 'react'

const DEFAULT_INPUT_TYPES = ['input', 'select', 'button', 'textarea', 'div']
export const userIsWithinInput = (inputs: String[] = DEFAULT_INPUT_TYPES) => {
    var activeElement = document.activeElement
    if (!activeElement) {
        return false
    }
    return inputs.indexOf(activeElement.tagName.toLowerCase()) > -1
}

const useKeyboard = (targetKey: string[]): string | undefined => {
    const [keyPressed, setKeyPressed] = useState<string | undefined>('')

    const downHandler = ({ key }: KeyboardEvent): void => {
        if (userIsWithinInput()) {
            return
        }
        if (targetKey.includes(key)) {
            setKeyPressed(key)
        }
    }

    const upHandler = ({ key }: KeyboardEvent): void => {
        if (userIsWithinInput()) {
            return
        }
        if (targetKey.includes(key)) {
            setKeyPressed(undefined)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler)
        window.addEventListener('keyup', upHandler)
        return () => {
            window.removeEventListener('keydown', downHandler)
            window.removeEventListener('keyup', upHandler)
        }
    }, [])

    return keyPressed
}

export default useKeyboard
