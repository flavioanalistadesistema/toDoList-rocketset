import { Trash } from "phosphor-react";
import { useCallback, useState } from "react";
import { ListBodyStyle } from "./ToDoListstyles";

interface ToDoListProps {
    ListTask: object[],
    onDeleteContentTable: (object) => void
}

export function ToDoList(props: ToDoListProps) {

    const [checkedElements, setCheckedElements] = useState([])

    const onCheck = useCallback((event) => {
        const { name } = event.currentTarget // Vamos pegar aquele name exclusivo.

        setCheckedElements(prevValue => {
            if (prevValue.includes(name)) {
                return prevValue.filter(item => {
                    if (item !== name) {
                        return [...prevValue, name]
                    }
                })
            }
            return [...prevValue, name]
        })
    }, [])

    const handleDeleteContent = () => {
        props.onDeleteContentTable(props.ListTask.name)
    }

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
                            checked={checkedElements.includes(props.ListTask.name)}
                            onChange={onCheck}
                        />
                        <span className='checkmark'></span>
                    </label>
                    <p className={checkedElements.includes(props.ListTask.name) ? 'check-box-description' : ''}>{props.ListTask.description}</p>
                </div>
                <div className='table-button-delete' onClick={handleDeleteContent}>
                    <Trash weight="bold" />
                </div>
            </div>
        </ListBodyStyle>
    )
}