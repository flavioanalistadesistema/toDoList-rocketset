import { Trash } from "phosphor-react";
import { useCallback, useState } from "react";
import { ListBody } from "./ToDoListstyles";

interface ToDoListProps {
    ListTask: object[]
}

export function ToDoList(props: ToDoListProps) {

    const [checkedElements, setCheckedElements] = useState([])

    const onCheck = useCallback((event) => {
        const { name } = event.currentTarget // Vamos pegar aquele name exclusivo.

        setCheckedElements(prevValue => {
            console.log("prevValue", prevValue.includes(name));

          if(prevValue.includes(name)) {
            return prevValue.filter(item => {console.log('filter', item !== name)})
          }
          return [...prevValue, name]
        })
      }, [])
    return (
        <ListBody>
            {props.ListTask.map((item, index) => {
                return (
                    <div className='table-card' key={index}>
                        <div className='table-checkbox'>
                            <span className='checkmark' ></span>
                            <label>
                                <input
                                    type="checkbox"
                                    id={`card_checkbox-${index}`}
                                    name={item.name}
                                    value="checkbox"
                                    checked={checkedElements.includes(item.name)}
                                    onChange={onCheck}
                                />
                                <span className='checkmark'></span>
                            </label>
                            <p className={checkedElements.includes(item.name) ? 'check-box-description' : ''}>{item.description}</p>
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