// I believe you've used jQuery before, we often chain the jQuery methods together to accomplish our goals.

// For example, below chained call turns button into a black button with white text.

// $('#button')
//   .css('color', '#fff')
//   .css('backgroundColor', '#000')
//   .css('fontWeight', 'bold')
// The chaining makes the code simple to read, could you create a simple wrapper $ to make above code work as expected?

// The wrapper only needs to have css(propertyName: string, value: any)

// SOLUTION
/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function (property, value) {
      el.style[property] = value;
      return this;
    },
  };
}

// EVEN BETTER
/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return new Wrapper(el);
}
class Wrapper {
  constructor(el) {
    this.el = el;
  }

  css(propertyName, value) {
    this.el.style[propertyName] = value;
    return this;
  }
}
