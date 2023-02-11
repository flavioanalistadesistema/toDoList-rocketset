import { List } from './TableStyles';

import { ClipboardText } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { ToDoList } from '../ToDoList/ToDoList';

export function Table({ listContent, onDeleteContentForm, updateState }) {
  const [contentChecked, setContentChecked] = useState<number>(0)
  const [deleteContent, setDeleteContent] = useState<boolean>()
  const [countChecked, setCountChecked] = useState<number>(0)

  function deleteContentTable(content) {
    setDeleteContent(content.checked)
    deleteContent ? setContentChecked(contentChecked - 1) : ''
    onDeleteContentForm(content.name)
  }

  useEffect(() => {
    var counter = 0;
    for (const obj of listContent) {
      if (obj.checked) counter++;
    }
    setCountChecked(counter)
  }, [listContent])

  return (
    <List>
      <div className="title">
        <span className='title-left'>
          Tarefas Criadas
          <div className='title-cicle'>
            <span>{listContent.length}</span>
          </div>
        </span>
        <span className='title-right'>
          Concluidas
          <div className='title-cicle'>
            <span>{`${countChecked}/${listContent.length}`}</span>
          </div>
        </span>
      </div>
      {listContent.length === 0 ? <div className='table-line' /> : ''}

      {listContent.map(item => {
        return <ToDoList key={item.name} updateState={updateState} ListTask={item} onDeleteContentTable={deleteContentTable} />
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