import { accept } from '../src/index';

describe('accept', () => {
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
