class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length < 2) return false;

        let openingBrackets = ['(', '[', '{'];

        if (openingBrackets.includes(s[s.length - 1])) return false;

        let stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            if (openingBrackets.includes(s[i])) {
                stack.push(s[i]);
                continue;
            }

            const topChar = stack[stack.length - 1];
            if (s[i] === ')'&& topChar === '(' || s[i] === ']'&& topChar === '[' || s[i] === '}'&& topChar === '{') {
                stack.pop();
            } else {
                return false;
            }
        }

        return !stack.length;
    }
}
