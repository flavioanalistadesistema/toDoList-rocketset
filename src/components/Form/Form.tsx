import styles from './Form.module.css'

import { PlusCircle } from 'phosphor-react'
import { Table } from '../Table/Table'

export function Form() {
    return (
        <div>
            <form className={styles.form}>
                <input
                    name='content'
                    placeholder="Adicione uma nova tarefa"
                />
                <footer>
                    <button type="submit">Criar 
                        <PlusCircle size={15} weight="bold"/>
                    </button>
                </footer>
            </form>
        </div>
    )
}