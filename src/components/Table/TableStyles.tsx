import styled from "styled-components";

export const Liststyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 52.25rem;
    height: 17.9375rem;
    left: calc(50% - 50rem/2);
    top: 291px;

.table-line {
    border-top: 1px solid #333333;
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
    font-size: 1rem;
    line-height: 1.5rem;
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
    gap: 33.125rem;
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
    padding: .125rem .5rem;
    margin-left: .625rem;
    gap: .625rem;
    color: #D9D9D9;

    width: 1.5625rem;
    height: 1.1875rem;
    background: #333333;
    border-radius: 62.4375rem;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.title-cicle span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: .75rem;
    line-height: .9375rem;
    color: #D9D9D9;

}
`