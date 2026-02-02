// if (true) {
//         console.log("this is true value");
// }
// else {
//         console.log("this is false value");
// } 
function countArrangement(n) {
        let count = 0;
        let used = Array(n+1).fill(false);

        function backtrack(pos) {
                if (pos > n) {
                        count++;
                        return;
                }
                for (let i = 1 ; i<=n ; i++) {
                        if (!used[i] && (i % pos === 0 || pos % i===0
                        )) {
                                used[i] = true;
                                backtrack(pos + 1);
                                used[i] = false;

                        }
                }

        }
        backtrack(1);
        return count;
}
console.log(countArrangement(6));