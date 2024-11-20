// Given a DOM tree and a target element, please return the next right sibling.

// Like above, the next right sibling of <button/> is the blue <a/>. Notice that they don't necessarily have the same parent element.

// If no right sibling, then return null.

// What is time & space cost of your solution ?

// SOLUTION
/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
  const queue = [];
  queue.push(root);
  while (queue.length) {
    let len = queue.length;
    let isTargetFound = false;

    while (len--) {
      const ele = queue.shift();
      if (isTargetFound) return ele;
      if (ele === target) {
        isTargetFound = true;
      }
      for (let child of ele.children) {
        queue.push(child);
      }
    }
  }

  return null;
}

//   USING DOM APIs
/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
// recursion solution
function nextRightSibling(root, target) {
  // your code here

  if (target === null) return null;
  if (target.nextElementSibling) return target.nextElementSibling;

  let parent = target.parentElement;
  if (parent === root) return null;

  do {
    parent = nextRightSibling(root, parent);
    if (parent && parent.firstElementChild) {
      return parent.firstElementChild;
    }
  } while (parent);

  return null;
}
