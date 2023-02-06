import styles from './Form.module.css'

import { PlusCircle } from 'phosphor-react'
import { Table } from '../Table/Table'
import { useState } from 'react'

interface listContentProps {
    name: string
    description: string
}

export function Form() {
    const [listContent, setListContent] = useState<listContentProps[]>([])

    const [newContent, setNewContent] = useState('')

    const handleNewContentchange = (e: any) => {
        const newContet = e.target.value
        setNewContent(newContet)
    }

    function handleCreateNewContent(e: any) {
        e.preventDefault()
        const newContentList = {
            name: `content${listContent.length + 1}`,
            description: newContent
        }
        console.log("newContentList", newContentList)
        setListContent([
            ...listContent,
            newContentList
        ])
        setNewContent('')
    }

    function deleteContentForm (contents) {
        setListContent(listContent.filter((content) => content.name !== contents))
    }

    return (
        <div>
            <form onSubmit={handleCreateNewContent} className={styles.form}>
                <input
                    name='content'
                    placeholder="Adicione uma nova tarefa"
                    value={newContent}
                    onChange={handleNewContentchange}
                />
                <footer>
                    <button type="submit">Criar
                        <PlusCircle size={15} weight="bold" />
                    </button>
                </footer>
            </form>
            <Table listContent={listContent} onDeleteContentForm={deleteContentForm}/>
        </div>
    )
}