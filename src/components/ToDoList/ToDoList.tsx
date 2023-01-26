import { Trash } from "phosphor-react";
import { useState } from "react";
import { ListBody } from "./ToDoListstyles";

interface ToDoListProps {
    ListTask: object[]
}

export function ToDoList(props: ToDoListProps) {

    const [isChecked, setIsChecked] = useState(false)

    const hasChecked = () => {
        setIsChecked(!isChecked)
        console.log('checkbox', props.ListTask);
    }

    return (
        <ListBody checkbox={isChecked}>            
            {props.ListTask.map((item, index) => {
                return (
                    <div className='table-card' key={index}>
                        <div className='table-checkbox'>
                            <label>
                                <input
                                    type="checkbox"
                                    id={`card_checkbox-${index}`}
                                    name="checkbox"
                                    value="checkbox"
                                    checked={isChecked}
                                    onChange={hasChecked}
                                />
                                <span className='checkmark'></span>
                            </label>
                            <p>{item.description}</p>
                        </div>
                        <div className='table-button-delete'>
                            <Trash weight="bold" />
                        </div>
                    </div>
                )
            })}
        </ListBody>
    )
}