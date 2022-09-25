import { MouseEventHandler } from "react"

interface CondensedButtonProps{
    onClickCallback: MouseEventHandler
    label?: string
}


export const CondensedButton = ({label = 'Calculate', onClickCallback}:CondensedButtonProps) => {
    return <button onClick={onClickCallback}>{label}</button>
}