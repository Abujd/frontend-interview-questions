# DP ON STRINGS — INTERVIEW REVISION

## 🔥 MASTER PATTERN

Most problems use:

```text
dp[i][j]

i → first string
j → second string
```

Ask:

```text
MATCH?
→ diagonal

NOT MATCH?
→ problem-specific choice
```

---

## 1. LCS — Longest Common Subsequence

### State

```text
dp[i][j] = LCS of s1[0..i-1], s2[0..j-1]
```

### Recurrence

```text
MATCH
→ 1 + dp[i-1][j-1]

NOT MATCH
→ max(
     dp[i-1][j],
     dp[i][j-1]
   )
```

### Remember

```text
MATCH     → diagonal + 1
NOT MATCH → max(top, left)
```

---

## 2. PRINT LCS

First build LCS table.

Then backtrack from:

```text
i = n
j = m
```

```text
MATCH
→ take character
→ i--, j--

NOT MATCH
→ go toward larger value
```

### Remember

```text
LCS DP
+
BACKTRACK
```

---

## 3. LONGEST COMMON SUBSTRING

### Difference

```text
SUBSEQUENCE → gaps allowed
SUBSTRING   → continuous
```

### Recurrence

```text
MATCH
→ 1 + dp[i-1][j-1]

NOT MATCH
→ 0
```

Keep:

```text
max = maximum value in entire DP table
```

### 🔥 Remember

```text
LCS:
mismatch → max(top,left)

SUBSTRING:
mismatch → 0
```

---

## 4. LONGEST PALINDROMIC SUBSEQUENCE

Convert to LCS:

```text
LPS(s)

=

LCS(
    s,
    reverse(s)
)
```

### Remember

```text
PALINDROME
→ reverse + LCS
```

---

## 5. MINIMUM INSERTIONS → PALINDROME

First find LPS.

```text
answer = n - LPS
```

or:

```text
answer = n - LCS(s, reverse(s))
```

### Remember

```text
Keep LPS
Insert the rest
```

---

## 6. MIN INSERTIONS / DELETIONS → CONVERT A → B

Find:

```text
LCS(A, B)
```

Then:

```text
DELETE = n - LCS
INSERT = m - LCS
```

### Remember

```text
LCS = characters we KEEP

A - LCS → DELETE
B - LCS → INSERT
```

---

## 7. SHORTEST COMMON SUPERSEQUENCE

### Length

```text
SCS = n + m - LCS
```

Why?

```text
Take both strings
but don't count LCS twice
```

### To construct

```text
MATCH
→ take once
→ diagonal

NOT MATCH
→ take character from side
  having larger LCS value
```

### Remember

```text
SCS
=
A + B - LCS
```

---

## 8. DISTINCT SUBSEQUENCES

Question:

```text
How many ways can source form target?
```

### MATCH

Two choices:

```text
TAKE
+
NOT TAKE
```

```text
dp[i][j]

=

dp[i-1][j-1]
+
dp[i-1][j]
```

### NOT MATCH

```text
dp[i][j] = dp[i-1][j]
```

### Base

```text
target empty → 1
```

### 🔥 Remember

```text
COUNTING
→ TAKE + NOT TAKE
```

---

## 9. EDIT DISTANCE

Operations:

```text
INSERT
DELETE
REPLACE
```

### MATCH

```text
dp[i][j] = dp[i-1][j-1]
```

### NOT MATCH

```text
1 + min(
    INSERT,
    DELETE,
    REPLACE
)
```

Specifically:

```text
INSERT  → dp[i][j-1]
DELETE  → dp[i-1][j]
REPLACE → dp[i-1][j-1]
```

### Base

```text
i = 0 → j
j = 0 → i
```

### 🔥 Remember

```text
MATCH
→ diagonal

MISMATCH
→ 1 + min(3 operations)
```

---

## 10. WILDCARD MATCHING

```text
? → exactly ONE character

* → ZERO or MORE characters
```

### Normal character / `?`

```text
→ diagonal
```

### `*`

Two choices:

```text
ZERO characters
→ dp[i][j-1]

ONE/MORE characters
→ dp[i-1][j]
```

### 🔥 Remember

```text
?
→ move both

*
→ move pattern
OR
→ move string
```

---

# 🧠 ONE-PAGE MEMORY TABLE

| Problem                   | Main Idea                 |
| ------------------------- | ------------------------- |
| LCS                       | Match → diagonal + 1      |
| Print LCS                 | LCS + backtrack           |
| Common Substring          | Mismatch → `0`            |
| Palindromic Subsequence   | `LCS(s, reverse(s))`      |
| Min Insertions Palindrome | `n - LPS`                 |
| Convert A → B             | Delete + Insert using LCS |
| SCS                       | `n + m - LCS`             |
| Distinct Subsequences     | Take + Not Take           |
| Edit Distance             | Insert/Delete/Replace     |
| Wildcard                  | `?` one, `*` zero/more    |

---

# 🚨 INTERVIEW TRIGGERS

```text
"common subsequence"
        ↓
       LCS


"continuous"
        ↓
     Substring


"palindrome"
        ↓
  reverse + LCS


"convert string"
        ↓
       LCS


"shortest string containing both"
        ↓
       SCS


"number of ways"
        ↓
   Take / Not Take


"minimum operations"
        ↓
   Try operations


"*, ?"
        ↓
Wildcard DP
```

# ⚡ 30-SECOND REVISION

```text
LCS
→ match = diagonal + 1
→ mismatch = max(top,left)

SUBSTRING
→ mismatch = 0

LPS
→ LCS(s, reverse)

PALINDROME INSERTIONS
→ n - LPS

CONVERT
→ delete n-LCS
→ insert m-LCS

SCS
→ n+m-LCS

DISTINCT
→ take + not take

EDIT DISTANCE
→ insert/delete/replace

WILDCARD
→ ? = one
→ * = zero OR many
```
