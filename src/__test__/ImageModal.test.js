import React from "react";
import  ReactDOM  from "react-dom";
import '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import renderer, { act } from "react-test-renderer";
import ImageModal from "../components/ImageModal";

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImageModal/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

// it('renders when modal is True', () => {
//     const { queryByTestId } = render(<ImageModal modal={true} />);
//     const imageModal = screen.queryByTestId('imageModal');

//     act( async () => {
//         expect( imageModal ).toBeTruthy();
//         await fireEvent.change(imageModal, { target: {value: ''}})
//     })
// })