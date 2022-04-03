import React from "react";
import  ReactDOM  from "react-dom";
import '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import { render, cleanup, fireEvent, screen, act } from "@testing-library/react";
import renderer from "react-test-renderer";
import SearchForm from "../components/SearchForm";

afterEach(cleanup);

// it('Renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<SearchForm/>, div);
//     ReactDOM.unmountComponentAtNode(div);
// })

// describe('Search Form', () => {
//     it('renders by testId', () => {
//         const { getByTestId } = render(<SearchForm />);
//         const searchForm = screen.getByTestId('searchForm');
//         expect(searchForm).toBeTruthy();
//     })

    // it('setSearchQuery is set to input value', async () => {
    //     const { queryByTestId } = render(<SearchForm />);
    //     const searchForm = screen.queryByTestId('searchForm');
    //     const searchInput = screen.getByTestId('searchInput');
    //     const inputWord = 'test';
    //     await act( async () => {
    //         await fireEvent.change(searchInput, { target: {value: inputWord}})
    //         expect( searchInput.innerText ).toBe(inputWord);
    //     })
    // })



    // it('handleSearch to be called onSubmit', ({ handleSarch }) => {
    //     const { getByTestId } = render(<SearchForm handleSarch={handleSarch} />);
    //     const searchForm = screen.getByTestId('searchForm');
    //     expect(handleSarch).toBeTruthy();
    // })

    // it('does NOT call setSearchQuery when text input does not change', ({ setSearchQuery }) => {
    //     const { getByTestId } = render(<SearchForm setSearchQuery={setSearchQuery} />);
    //     const searchForm = screen.getByTestId('searchForm');
    // })
// })