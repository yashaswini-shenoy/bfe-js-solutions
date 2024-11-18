// Suppose you are implementing an auto-complete in search input.

// When keywords are typed, you need to highlight the keywords, how would you do that?

// To simplify things, you need to create a function highlightKeywords(html:string, keywords: string[]), which wraps the keywords in html string, with <em> tag.

// Here is an example.

// highlightKeywords(
//   'Hello FrontEnd Lovers',
//   ['Hello', 'Front', 'JavaScript']
// )
// // '<em>Hello</em> <em>Front</em>End Lovers'
// Pay attention to the overlapping and adjacent case. You should use the least tags as possible.

// highlightKeywords(
//   'Hello FrontEnd Lovers',
//   ['Front', 'End', 'JavaScript']
// )
// // 'Hello <em>FrontEnd</em> Lovers'
// highlightKeywords(
//   'Hello FrontEnd Lovers',
//   ['Front', 'FrontEnd', 'JavaScript']
// )
// // 'Hello <em>FrontEnd</em> Lovers'
// note that space should not be included.

// SOLUTION
/**
 * @param { string } html
 * @param { string[] } keywords
 */
function highlightKeywords(html, keywords) {
  let result = "";

  const keywordSet = new Set(keywords);

  // return -1 if non-existing
  const getEndForEm = (start) => {
    let isEmFound = false;
    let end = start;
    while (start <= end) {
      for (let word of keywordSet) {
        const length = word.length;
        if (html.slice(start, start + length) === word) {
          isEmFound = true;
          end = Math.max(end, start + length - 1);
        }
      }

      start += 1;
    }

    return isEmFound ? end : -1;
  };

  for (let i = 0; i < html.length; ) {
    let endForEm = getEndForEm(i);

    // check if there is adjacent keyword
    while (endForEm > -1) {
      const nextEndForEm = getEndForEm(endForEm + 1);
      if (nextEndForEm === -1) {
        break;
      }
      endForEm = nextEndForEm;
    }

    if (endForEm > -1) {
      result += "<em>" + html.slice(i, endForEm + 1) + "</em>";
      i = endForEm + 1;
    } else {
      result += html[i];
      i += 1;
    }
  }

  return result;
}
