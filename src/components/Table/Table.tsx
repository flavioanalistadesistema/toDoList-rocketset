import styles from './Table.module.css'
import { ClipboardText, Trash  } from 'phosphor-react';

export function Table() {
  return (
    <div className={styles.table}>
      <div className={styles.title}>
        <span className={styles['title-left']}>
          Tarefas Criadas
          <div className={styles['title-cicle']}>
            <span>0</span>
          </div>
        </span>
        <span className={styles['title-right']}>
          Concluidas
          <div className={styles['title-cicle']}>
            <span>0</span>
          </div>
        </span>
      </div>
      
      <div className={styles['table-line']} />
      
      <div className={styles['table-body']}>
        <div className={styles['table-card']}>
          <div className={styles['table-checkbox']}>
            <label>
              <input type="checkbox" id="cardcheckbox"/>
                <span className={styles.checkmark}></span>
            </label>
              <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          </div>  
          <div className={styles['table-button-delete']}> 
            <Trash weight="bold"/>        
          </div>
        </div>
      </div>
      
      <div className={styles['table-text']}>
        <div className={styles['table-icon']}>
          <ClipboardText size={56} weight="thin" />
        </div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}