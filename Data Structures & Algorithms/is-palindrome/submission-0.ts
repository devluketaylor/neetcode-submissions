class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        if (s.length === 0 || s.length === 1) return true;
        let cleanedS = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

        let l = 0;
        let r = cleanedS.length - 1;

        while (l <= r) {
            if (cleanedS[l] !== cleanedS[r]) return false;
            l++
            r--
        }

        return true;
    }
}
