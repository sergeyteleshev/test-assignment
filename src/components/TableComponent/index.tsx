import { useMemo } from "react";
import { getRandomStringsData } from "../../helpers/textHelpers";
import { OneLineText } from "../OneLineText";
import styles from './style.module.css'

type TProps = {
    rowsAmount: number
    columnsAmount: number
    tailLength: number
    strLength: number
    cellWidth?: number
}

const getOneLineElements = (n: number, m: number, tailLength: number, randomStings: Map<string, string>) => {
    const elements = new Map()
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const randomString = randomStings.get(`${i}-${j}`) ?? ''
            elements.set(
                `${i}-${j}`, 
                <OneLineText children={randomString} tailLength={tailLength} title={randomString}/>
            )
        }
    }

    return elements
}

const getTableCells = (rowsAmount: number, columnsAmount: number, cellWidth: number, oneLineElements: ReturnType<typeof getOneLineElements>) => {
    const table: JSX.Element[] = [];

    for (let i = 0; i < rowsAmount; i++) {
        const row: JSX.Element[] = [];

        for (let j = 0; j < columnsAmount; j++) {
            row.push(
                <td width={cellWidth} key={`${i}-${j}-cell`} className={styles.td}>
                    {oneLineElements.get(`${i}-${j}`)}
                </td>
            );
        }

        table.push(<tr key={`${i}-row`} className={styles.tr}>{row}</tr>);
    }

    return table;
}

const TableComponent = ({rowsAmount, columnsAmount, tailLength, strLength, cellWidth = 50}: TProps) => { 
    const data = useMemo(
        () => getRandomStringsData(rowsAmount, columnsAmount, strLength)
        ,[rowsAmount, columnsAmount, strLength]
    )
    const oneLineElements = useMemo(
        () => getOneLineElements(rowsAmount, columnsAmount, tailLength, data)
        ,[columnsAmount, rowsAmount, data, tailLength]
    )
    
    return <table className={styles.table}>
        <tbody>
            {getTableCells(rowsAmount, columnsAmount, cellWidth, oneLineElements)}
        </tbody>
    </table>
}

export {TableComponent};