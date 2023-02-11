import styles from './Form.module.css'

import { PlusCircle } from 'phosphor-react'
import { Table } from '../Table/Table'
import { useState, useCallback, useEffect } from 'react'

interface listContentProps {
    name: string
    description: string
}

interface ContentProps {
    name: string
    description: string
    checked?: boolean
}

export function Form() {
    const [listContent, setListContent] = useState<listContentProps[]>([])
    const [newContent, setNewContent] = useState('')
    const [updatedContent, setUpdatedContent] = useState<ContentProps>()

    useEffect(() => {
        if (updatedContent !== undefined) {
            const newContent = listContent.map((item) => {
                if (item.name.includes(updatedContent.name)) {
                    return {
                        ...item,
                        checked: !updatedContent.checked
                    }
                }
                return item
            })
            setListContent(newContent)
        }
    }, [updatedContent])

    const handleNewContentchange = (e: any) => {
        const newContet = e.target.value
        setNewContent(newContet)
    }
    function handleCreateNewContent(e: any) {
        e.preventDefault()
        if (newContent.length > 0) {
            const newContentList = {
                name: `content${listContent.length + 1}`,
                description: newContent,
                checked: false
            }
            setListContent([
                ...listContent,
                newContentList
            ])
        }
        setNewContent('')
    }

    function deleteContentForm(contents) {
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
            <Table listContent={listContent} updateState={setUpdatedContent} onDeleteContentForm={deleteContentForm} />
        </div>
    )
}