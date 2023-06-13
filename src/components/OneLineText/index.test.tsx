import { render, screen } from '@testing-library/react';
import { OneLineText } from '.';

const getOneLineTextInContainer = (text: string, tailLength: number, containerWidth: string) => {
    return (
        <div style={{width: containerWidth}}>
            <OneLineText tailLength={tailLength}>{text}</OneLineText>
        </div>
    )
}

const TAIL_TEST_ID = "one-line-component-tail"
const TRUNCATED_TEST_ID = "one-line-component-truncated"

describe('One line text component', () => {
    it('can render component', () => {
        const tailText = '18.02';
        const children = `feature/create-new-text-ellipsis-component-TC20`;

        render(getOneLineTextInContainer(`${children}${tailText}`, tailText.length, '100px'));

        const renderedChildren = screen.getByText(children);
        const renderedTail = screen.getByTestId(TAIL_TEST_ID);
        const renderedTruncated = screen.getByTestId(TRUNCATED_TEST_ID)

        expect(renderedChildren).toBeInTheDocument();
        expect(renderedTail).toBeInTheDocument();
        expect(renderedTruncated).toBeInTheDocument();
        expect(renderedTail.innerHTML).toBe(tailText)
    });

    it('renders the tail value if string is ellipsed', async () => {
        const children = 'Hello, World! Hello, World! Hello, World! Hello, World!';
        const tailLength = 5;

        render(getOneLineTextInContainer(children, tailLength, '100px'))

        const tailElement = screen.getByTestId(TAIL_TEST_ID);

        expect(tailElement).toHaveTextContent('orld!');
    });

    it('cannot render the tail value if string is not ellipsed', async () => {
        const text = 'Hello, World!';
        const tailLength = 5;

        render(getOneLineTextInContainer(text, tailLength, '100px'));

        const tail = screen?.queryByTestId(TAIL_TEST_ID);
        expect(tail).toBeInTheDocument()
    });
});