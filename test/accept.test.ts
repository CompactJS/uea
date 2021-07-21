import { accept, selectOne } from '../src/index';

describe('accepts multiple', () => {
  it('returns a HTMLElement list for strings', () => {
    document.body.innerHTML = `
				<h1></h1>
				<div class="a-class"></div>
				<span id="empty">empty</span>
			`;
    const elements: HTMLElement[] = accept('h1, .a-class, #empty');
    expect(elements).toHaveLength(3);
    expect(elements[0]).toBeInstanceOf(HTMLHeadingElement);
    expect(elements[1]).toBeInstanceOf(HTMLDivElement);
    expect(elements[2]).toBeInstanceOf(HTMLSpanElement);
  });
  it('returns an HTMLElement array with HTMLElement as input', () => {
    const element = document.createElement('div');
    const acceptedElements = accept(element);
    expect(acceptedElements).toHaveLength(1);
    expect(acceptedElements[0]).toBeInstanceOf(HTMLDivElement);
  });
  it('returns HTMLElement list as is', () => {
    document.body.innerHTML = `
				<div id="a"></div>
				<div id="b"></div>
				<div id="c"></div>
			`;
    const elements: HTMLElement[] = [
      document.getElementById('a'),
      document.getElementById('b'),
      document.getElementById('c'),
    ];
    expect(accept(elements)).toBe(elements);
  });
  it('returns a HTMLElement list when provided with a HTMLCollection', () => {
    document.body.innerHTML = '<form></form>';
    const collection = document.forms;
    const acceptedElements = accept(collection);
    expect(acceptedElements).toHaveLength(1);
    expect(acceptedElements[0]).toBeInstanceOf(HTMLFormElement);
  });
});

describe('accepts single', () => {
  it('returns a HTMLElement for a string input', () => {
    document.body.innerHTML = `
				<h1></h1>
				<div class="a-class"></div>
				<span id="empty">empty</span>
			`;
    const element: HTMLElement = selectOne('h1');
    expect(element).toBeInstanceOf(HTMLHeadingElement);

    const element2: HTMLElement = selectOne('.a-class');
    expect(element2).toBeInstanceOf(HTMLDivElement);
  });
  it('returns an HTMLElement with a HTMLElement as input', () => {
    const element = document.createElement('div');
    const acceptedElement = selectOne(element);
    expect(acceptedElement).toBeInstanceOf(HTMLDivElement);
  });
});
