import { render, screen } from '@testing-library/react';
import App from './App';
import { TableComponent } from './components/TableComponent';

describe('App render', () => {
    test('can render app', () => {
        render(<App />);
        const app = screen.getByTestId("app");
        expect(app).toBeInTheDocument();
    });

    test('can rerender TableComponent for less than 500ms', () => {
        const ROWS_AMOUNT = 2000
        const COLUMNS_AMOUNT = 2
        const TAIL_LENGTH = 4
        const STR_LENGTH = 52

        const { rerender } = render(
            <TableComponent
                rowsAmount={ROWS_AMOUNT}
                columnsAmount={COLUMNS_AMOUNT}
                tailLength={TAIL_LENGTH}
                strLength={STR_LENGTH}
                cellWidth={250}
            />
        );

        const start = performance.now()

        rerender(<TableComponent
            rowsAmount={ROWS_AMOUNT}
            columnsAmount={COLUMNS_AMOUNT}
            tailLength={TAIL_LENGTH}
            strLength={STR_LENGTH}
            cellWidth={550}
        />)

        const end = performance.now()

        expect(end - start).toBeLessThanOrEqual(500)
    });
})
