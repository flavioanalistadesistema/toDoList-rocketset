import { List } from './TableStyles';

import { ClipboardText, Trash  } from 'phosphor-react';
import { useEffect, useState } from 'react';

export function Table() {
  const [checkbox, setCheckebox] = useState(false)

  const hasChecked = (e) => {
    const result = e === false ? true : false
    setCheckebox(result);
  }

  return (
    <List checkbox={checkbox}>
      <div className="title">
        <span className='title-left'>
          Tarefas Criadas
          <div className='title-cicle'>
            <span>0</span>
          </div>
        </span>
        <span className='title-right'>
          Concluidas
          <div className='title-cicle'>
            <span>0</span>
          </div>
        </span>
      </div>
      <div className='table-line' />
      <div className='table-body'>
        <div className='table-card'>
          <div className='table-checkbox'>
            <label>
              <input
                type="checkbox"
                id="card_checkbox"
                defaultChecked={checkbox}
                onChange={() => hasChecked(checkbox)}
              />
                <span className='checkmark'></span>
            </label>
              <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          </div>
          <div className='table-button-delete'>
            <Trash weight="bold"/>        
          </div>
        </div>
      </div>
      
      <div className='table-text'>
        <div className='table-icon'>
          <ClipboardText size={56} weight="thin" />
        </div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </List>
  )
}