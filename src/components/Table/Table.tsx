import { List } from './TableStyles';

import { ClipboardText, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { ToDoList } from '../ToDoList/ToDoList';

export function Table() {
  const [listTask, setListtask] = useState([
    {
      id: 1,
      name: 'teste1',
      description: "Testando a lista de tarefas 1"
    },
    {
      id: 2,
      name: 'teste2',
      description: "Testando a lista de tarefas 2"
    },
    {
      id: 3,
      name: 'teste3',
      description: "Testando a lista de tarefas 3"
    },
    {
      id: 3,
      name: 'teste3',
      description: "Testando a lista de tarefas 3"
    }
  ])

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
      <div className='table-line' />
      <ToDoList ListTask={listTask} />
      {
        listTask.length === 0 ?
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