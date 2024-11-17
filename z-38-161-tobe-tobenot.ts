// Here are some simple Jest test code.

// expect(3).toBe(3) // ✅
// expect(4).toBe(3) // ❌
// We can reverse it with not.

// expect(3).not.toBe(3) // ❌
// expect(4).not.toBe(3) // ✅
// Please implement myExpect() to support toBe() and also not.

interface Matcher {
  toBe(data: any): void;
}

// SOLUTION
// expect(3).not().toBe(3)
// use a flag to hold the mode of the matcher
// in each assertion we check the mode
function myExpect(input: any): Matcher & { not: Matcher } {
  let isReversed = false;
  return {
    toBe(data: any) {
      const isIdentical = Object.is(data, input);
      if ((!isReversed && !isIdentical) || (isReversed && isIdentical)) {
        throw new Error("not match");
      }
    },
    get not() {
      isReversed = !isReversed;
      return this;
    },
  };
}
