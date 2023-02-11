import { Trash } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { ListBodyStyle } from "./ToDoListstyles";

interface ToDoListProps {
    ListTask: ListContentProps[],
    onDeleteContentTable: (object) => void
    updateState: () => void
}
interface ListContentProps {
    name: string
    description: string
    checked: boolean
}

export function ToDoList(props: ToDoListProps) {

    // const [checkedElements, setCheckedElements] = useState('')
    // const [countChecked, setCountChecked] = useState<boolean>()

    const onCheck = useCallback((event) => {
        const { name } = event.currentTarget // Vamos pegar aquele name exclusivo.
        props.updateState(props.ListTask)

        // setCheckedElements(prevValue => {
        //     if (prevValue.includes(name)) {
        //         return prevValue.filter(item => {
        //             if (item !== name) {
        //                 return [...prevValue, name]
        //             }
        //         })
        //     }
        //     return [...prevValue, name]
        // })
    }, [])

    const handleDeleteContent = () => {
        props.onDeleteContentTable(props.ListTask)
    }

    // useEffect(() => {
    //     setCountChecked(checkedElements.includes(props.ListTask.name))
    //     props.isChecked(countChecked)
    // }, [checkedElements])

    return (
        <ListBodyStyle>
            <div className='table-card' key={props.ListTask.name}>
                <div className='table-checkbox'>
                    <span className='checkmark' ></span>
                    <label>
                        <input
                            type="checkbox"
                            id={`card_checkbox-${props.ListTask.name}`}
                            name={props.ListTask.name}
                            value="checkbox"
                            checked={props.ListTask.checked}
                            onClick={onCheck}
                        />
                        <span className='checkmark'></span>
                    </label>
                    <p className={ props.ListTask.checked ? 'check-box-description' : ''}>{props.ListTask.description}</p>
                </div>
                <div className='table-button-delete' onClick={handleDeleteContent}>
                    <Trash weight="bold" />
                </div>
            </div>
        </ListBodyStyle>
    )
}