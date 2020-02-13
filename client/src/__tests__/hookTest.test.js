import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../store'
import PhoneList from '../components/phoneList'
import {Provider} from 'react-redux'
import { render, fireEvent, getByTestId} from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("PhoneList starts with no text", () => {
  const { container } = render(<Provider store={store}><PhoneList /></Provider>);
  const phoneList = container.querySelector('.phone-selector-wrapper');
  expect(phoneList.textContent).toBe("");
});

