import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';


// Set up testing environment to run like a browser in the command line

// 'window' becomes --> 'global'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given react class

function renderComponent(ComponentClass) {
	const componentInstance = TestUtils.renderIntoDocument(
		<Provider store={createStore(reducers)}>
			<ComponentClass />
		</Provider>
	);
	// it holds the reference to rendered version of our component

	// ReactDOM.findDOMNode(componentInstance)  // this produces HTML
	return $(ReactDOM.findDOMNode(componentInstance));


}

// Build helper for simulating events

// Set up chai-jquery
export { renderComponent, expect };
