Suman Ghosh
2:34 PM
https://leetcode.com/discuss/study-guide/4336794/Decoding-Essential-DSA-Patterns/
Suman Ghosh
2:37 PM
advanced React by Nadia Makarevish

/\*\*

function stringify(data) {
if(data === undefined || data === null || data !== data || data === Infinity)
return null;
if(typeof data === 'string')
return `"${data}"`;
if(typeof data === 'function')
return undefined;
if(data instanceof Date)
return `"${data.toISOString()}"`;
if(typeof data === 'symbol')
return undefined;
if(typeof data === "bigint")
throw new Error();
if(typeof data !== 'object')
return data.toString();

let res = Array.isArray(data) ? "[" : "{";
const keys = [...Object.keys(data)];
for(let key of keys)
{

    if(Array.isArray(data))
    {
      if(isNaN(key))
        continue;
      if(typeof data[key] === 'symbol')
      {
        res += `null`;
        continue;
      }

      if(res.length > 1)
        res += ',';
      res += stringify(data[key]);
    }
    else {
      if(data[key] === undefined)
        continue;
      if(res.length > 1)
      res += ',';
      res += `"` + key + `":` + stringify(data[key]);
    }

}

res += Array.isArray(data) ? "]" : "}";
return res;
}

#include <iostream>
#include <bits/stdc++.h>

using namespace std;
// int lcs(vector<vector<int>>& dp, string& s1, string& s2, int ind1, int ind2)
// {
// if(ind1 == s1.size() || ind2 == s2.size())
// return 0;
// if(dp[ind1][ind2] != -1)
// return dp[ind1][ind2];
// if(s1[ind1] == s2[ind2])
// return dp[ind1][ind2] = 1 + lcs(dp, s1, s2, ind1 + 1, ind2 + 1);
// return dp[ind1][ind2] = max(lcs(dp, s1, s2, ind1 + 1, ind2),
// lcs(dp, s1, s2, ind1, ind2 + 1));
// }

int main() {
string s1 = "", s2 = "";
cin >> s1;
cin >> s2;
vector<vector<int>> dp(s1.size() + 1, vector<int>(s2.size() + 1, 0));

for(int i = s1.size(); i >= 0; i--)
{
for(int j = s2.size(); j >= 0; j--)
{
if(i == s1.size() || j == s2.size())
{
dp[i][j] = 0;
}
if(s1[i] == s2[j])
dp[i][j] = 1 + dp[i + 1][j + 1];
else dp[i][j] = max(dp[i + 1][j], dp[i][j + 1]);
}
}
int res = dp[0][0];
cout << res << endl;
}
