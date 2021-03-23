import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from '../Display';
import userEvent from '@testing-library/user-event';

const testShow = {
	//add in approprate test data structure here.
	name: '',
	summary: '',
	seasons: [
		{
			id: '1',
			name: 'Season 1',
			episodes: [],
		},
		{
			id: '2',
			name: 'Season 2',
			episodes: [],
		},
		{
			id: '3',
			name: 'Season 3',
			episodes: [],
		},
		{
			id: '4',
			name: 'Season 4',
			episodes: [],
		},
	],
};

test('renders without error', () => {
	render(<Display displayFun={null} />);
});

test('show component renders when fetch button is pressed', async () => {
	render(<Display displayFun={null} />);

	const button = screen.getByRole('button');
	userEvent.click(button);

	const showContainer = await screen.findByTestId('show-container');
	expect(showContainer).toBeInTheDocument();
});

test('select options length matches testShow.seasons.length', async () => {
	render(<Display displayFun={null} />);

	const button = screen.getByRole('button');
	userEvent.click(button);

	const options = await screen.findAllByTestId('season-option');
	expect(options).toHaveLength(4);
});

test('function called when button pressed', () => {
	const mockDisplayFunction = jest.fn();

	render(<Display displayFunc={mockDisplayFunction} />);

	const button = screen.getByRole('button');
	userEvent.click(button);

	expect(mockDisplayFunction).toHaveBeenCalled();
});

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
