import styled from "styled-components";

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

.table-icon {
    padding-bottom: .625rem;
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
`