import { List } from './TableStyles';

import { ClipboardText } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { ToDoList } from '../ToDoList/ToDoList';

export function Table({ listContent, onDeleteContentForm }) {

  function deleteContentTable(e) {
    onDeleteContentForm(e)
  }

  return (
    <List>
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
      {listContent.length === 0 ? <div className='table-line' /> : ''}

      {listContent.map(item => {
        return <ToDoList ListTask={item} onDeleteContentTable={deleteContentTable} />
      })}
      {
        listContent.length === 0 ?
          <div className='table-text'>
            <div className='table-icon'>
              <ClipboardText size={56} weight="thin" />
            </div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> :
          ''
      }

    </List>
  )
}