import { Trash } from "phosphor-react";
import { ListBodyStyle } from "./ToDoListstyles";

interface ToDoListProps {
    ListTask: ListContentProps,
    onDeleteContentTable: (object) => void
    updateState: (checkContent) => void
}
interface ListContentProps {
    name: string
    description: string
    checked: boolean
}

export function ToDoList(props: ToDoListProps) {

    const onCheck = () => {
        if (props.ListTask !== undefined) {
            const checkContent = {
                checked: props.ListTask.checked,
                description: props.ListTask.description,
                name: props.ListTask.name
            }
            props.updateState(checkContent)
        }
    }

    const handleDeleteContent = () => {
        props.onDeleteContentTable(props.ListTask)
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
                            checked={props.ListTask.checked}
                            onChange={onCheck}
                        />
                        <span className='checkmark'></span>
                    </label>
                    <p className={props.ListTask.checked ? 'check-box-description' : ''}>{props.ListTask.description}</p>
                </div>
                <div className='table-button-delete' onClick={handleDeleteContent}>
                    <Trash weight="bold" />
                </div>
            </div>
        </ListBodyStyle>
    )
}