import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import PhoneList from "../components/phoneList";
import { Provider, useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  render,
} from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks'
import * as rtl from '@testing-library/react'



const fakePhones = [
  {
    title: "some phone",
    imageURL: "//media2.giphy.com/media/sad.gif"
  },
  {
    title: "some other phone",
    imageURL: "//media2.giphy.com/media/funny.gif "
  },
  {
    title: "another phone",
    imageURL: "//media2.giphy.com/media/animated.gif"
  }
];
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it("displays Loading if Phones are not fetched", () => {
  const { container } = render(
    <Provider store={store}>
      <PhoneList />
    </Provider>
  );

  container.querySelector(".loading");
});


it('selects the state on initial render', () => {
  let renderItems 
  const Comp =  () => {
    const phones = useSelector(state => state)
    renderItems = (phones.loaded)
    return <div/>
  }
  rtl.render(
    <Provider store={store}>
      <Comp />
    </Provider>
  )

  expect(renderItems).toEqual(false)

})

it('loads store after action dispacthed', () => {
  let renderItems 
  const Comp =  () => {
    const phones = useSelector(state => state)
    renderItems = (phones.loaded)
    return <div/>
  }
  rtl.render(
    <Provider store={store}>
      <Comp />
    </Provider>
  )

  store.dispatch({ type: 'FIND_ALL' })

  expect(renderItems).toEqual(true)

})

it('loads phones array', () => {
  let renderItems 
  const Comp =  () => {
    const phones = useSelector(state => state)
    renderItems = (phones.phones)
    return <div/>
  }
  rtl.render(
    <Provider store={store}>
      <Comp />
    </Provider>
  )

  store.dispatch({ type: 'FIND_ALL', payload:fakePhones })


  expect(renderItems).toEqual(fakePhones)

})
