import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('add todo',() => {
    render(<App/>);

    const desc = screen.getByPlaceholderText('Description');
    fireEvent.change(desc, { target: { value: 'Go to coffee' } });
    const date = screen.getByPlaceholderText('Date');
    fireEvent.change(date, { target: { value: '29.12.2023' } });
    const status = screen.getByPlaceholderText('Status');
    fireEvent.change(status, { target: { value: 'Open' } });
    const button = screen.getByText('Add');
    fireEvent.click(button);

    const table = screen.getByRole('table');
    expect(table).toHaveTextContent('Go to coffee');
})

test('clear functionality', () => {
    // Add a todo item
    const { getByPlaceholderText, getByText, queryByText } = render(<App />);
    const descriptionInput = getByPlaceholderText('Description');
    const dateInput = getByPlaceholderText('Date');
    const statusInput = getByPlaceholderText('Status');
    const addButton = getByText('Add');
    fireEvent.change(descriptionInput, { target: { value: 'Test todo' } });
    fireEvent.change(dateInput, { target: { value: '2023-03-15' } });
    fireEvent.change(statusInput, { target: { value: 'Pending' } });
    fireEvent.click(addButton);

    // Click the Clear button
    const clearButton = getByText('Clear');
    fireEvent.click(clearButton);

    // Check that the table is empty
    expect(queryByText('Test todo')).toBeNull();
});