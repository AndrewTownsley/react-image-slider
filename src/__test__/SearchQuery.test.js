import React from "react";
import  ReactDOM  from "react-dom";
import '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import { render, cleanup } from "@testing-library/react";
// import renderer from "react-test-renderer";
import SearchForm from "../components/SearchForm";

// afterEach(cleanup);

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm/>, div);
    ReactDOM.unmountComponentAtNode(div);
})