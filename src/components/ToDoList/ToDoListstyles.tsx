import styled from 'styled-components';

interface ToDoListProps {
    checkbox: boolean;
}

export const ListBody = styled.div<ToDoListProps>`
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    
    & p {
        padding-left: 10px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: .875rem;
        line-height: 140%;
        color: #F2F2F2;
    }

.table-card {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    border: .0625rem solid #333333;
    background: #262626;
    box-shadow: 0rem .125000rem .5rem rgba(0, 0, 0, 0.06);
    border-radius: .5rem;
    width: -webkit-fill-available;
    margin: .25rem 0;
}

.table-checkbox {
    display: block;
    position: relative;
    padding-left: 2.1875rem;
    cursor: pointer;
    font-size: 1.375rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
}

.table-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: -6px;
    left: 0;
    height: 1.5625rem;
    width: 1.5625rem;
    background-color: #333333;
    border: #2196F3 .125rem solid;

    border-radius: .9375rem;
}

.table-checkbox:hover input~.checkmark {
    background-color: #ccc;
}

.table-checkbox input:checked~.checkmark{
    border: solid 10px #000;
}

.table-checkbox input:checked~.checkmark{
    border: none;
    background-color: #5E60CE;
}

.table-checkbox p {
    text-decoration: ${props => props.checkbox ? "line-through" : ""};
    color: ${props => props.checkbox ? "#808080" : ""};
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.table-checkbox input:checked~.checkmark:after {
    display: block;
}

.table-checkbox .checkmark:after {
    left: .5625rem;
    top: .3125rem;
    width: .3125rem;
    height: .625rem;
    border: solid white;
    border-width: 0 .1875rem .1875rem 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.table-button-delete {
    position: absolute;
    left: 50rem;
}
`