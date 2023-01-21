import styled from "styled-components";

interface ListProsp {
    checkbox: boolean;
}

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0rem;
    gap: 24px;

    position: absolute;
    width: 836px;
    height: 287px;
    left: calc(50% - 800px/2);
    top: 18.1875rem;

.table-line {
    padding: 20px 24px;
    border-top: .0625rem solid #333333;
    border-radius: .5rem;
    align-self: stretch;
}

.table-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.table-body {
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
}

.table-card {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    border: .0625rem solid #333333;
    background: #262626;
    box-shadow: 0rem .125000rem .5rem rgba(0, 0, 0, 0.06);
    border-radius: .5rem;
    width: -webkit-fill-available;
}

.table-body p {
    padding-left: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: .875rem;
    line-height: 140%;
    /* or 1.25rem */


    /* Gray 100 */

    color: #F2F2F2;
}

.table-icon {
    padding-bottom: .625rem;
}

}

.table-button-delete {
    margin-left: 4.375rem;
}

.title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0rem;
    gap: 530px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.title-right {
    display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: .875rem;
    line-height: 1.0625rem;
    color: #8284FA;
}

.title-left {
    display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: .875rem;
    line-height: 1.0625rem;

    color: #4EA8DE;
}

.title-cicle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    margin-left: 10px;
    gap: 10px;
    color: #D9D9D9;

    width: 25px;
    height: 19px;
    background: #333333;
    border-radius: 999px;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.title-cicle span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #D9D9D9;

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
`