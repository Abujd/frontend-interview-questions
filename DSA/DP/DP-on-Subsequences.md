# DP ON SUBSEQUENCES — INTERVIEW REVISION

## 🧠 Master Pattern

Most problems use:

```text
dp[ind][target]
```

Meaning:

> Using elements from `0...ind`, can we / how many ways can we / what is the best result to make `target`?

### Two choices

```text
TAKE
NOT TAKE
```

### Memory

```text
Can I make target?      → Boolean
How many ways?          → Count
Minimum coins?          → Min
Maximum value?          → Max
```

---

## 1. Subset Sum Equal to Target

**Question:** Can we make `target`?

```text
NOT TAKE → dp[ind-1][target]

TAKE → dp[ind-1][target-num]
```

```text
dp[ind][target] =
    notTake || take
```

### Memory

**Subset Sum = TAKE OR NOT TAKE**

---

## 2. Partition Equal Subset Sum

**Question:** Can array be divided into 2 equal-sum subsets?

```text
totalSum % 2 !== 0 → false

target = totalSum / 2
```

Then simply:

```text
Subset Sum(target)
```

### Memory

**Partition Equal → total/2 + subset sum**

---

## 3. Partition with Minimum Absolute Sum Difference

Total:

```text
totalSum
```

Find subset sum `s1` close to:

```text
totalSum / 2
```

Then:

```text
s2 = totalSum - s1

difference = Math.abs(s1 - s2)
           = Math.abs(totalSum - 2*s1)
```

### Memory

```text
Subset Sum DP
→ find all possible sums
→ choose closest to total/2
```

---

## 4. Count Subsets with Sum K

**Question:** How many subsets make `K`?

```text
NOT TAKE → dp[ind-1][target]

TAKE → dp[ind-1][target-num]
```

```text
dp[ind][target] =
    notTake + take
```

### Memory

Subset Sum was:

```text
OR
```

Count Subsets is:

```text
+
```

---

## 5. Count Partitions with Given Difference

Given:

```text
S1 - S2 = D
S1 + S2 = totalSum
```

Therefore:

```text
S1 = (totalSum + D) / 2
```

Now:

```text
Count subsets with sum S1
```

### Important

If:

```text
(totalSum + D) % 2 !== 0
```

or

```text
totalSum < D
```

→ answer `0`.

### Memory

```text
Partition Difference
→ convert to subset-sum count
→ target = (total + difference) / 2
```

---

## 6. Assign Cookies

This is **NOT classic subset-sum DP**.

Greedy problem.

Sort:

```text
children greed factors
cookies sizes
```

Give the **smallest cookie that can satisfy the current smallest child**.

### Memory

```text
Sort both
→ two pointers
→ satisfy smallest child first
```

---

# COIN / UNBOUNDED SUBSEQUENCE DP

## 7. Minimum Coins

**Question:** Minimum number of coins to make amount?

Choice:

```text
NOT TAKE
TAKE
```

But coins are **unlimited**.

Therefore when taking:

```text
dp[ind][target - coin]
```

NOT:

```text
dp[ind-1]
```

### Memory

```text
0/1 → TAKE → ind-1
Unlimited → TAKE → same ind
```

---

## 8. Target Sum

Put:

```text
+ / -
```

before every number.

Convert to partition:

```text
S1 - S2 = target
S1 + S2 = total
```

Therefore:

```text
S1 = (total + target) / 2
```

Then:

```text
Count Subsets(S1)
```

### Important

Return `0` if:

```text
Math.abs(target) > total
```

or:

```text
(total + target) % 2 !== 0
```

### Memory

```text
Target Sum
→ Partition
→ Count Subsets
```

---

## 9. Coin Change 2

**Question:** Number of combinations to make amount.

Coins are unlimited.

```text
NOT TAKE → dp[ind-1][target]

TAKE → dp[ind][target-coin]
```

Notice:

```text
TAKE → same ind
```

because we can reuse the coin.

### Memory

```text
Coin Change 2
→ COUNT combinations
→ unlimited
→ TAKE stays at ind
```

---

## 10. Unbounded Knapsack

Each item can be used **unlimited times**.

```text
NOT TAKE
→ dp[ind-1][capacity]

TAKE
→ value[ind] + dp[ind][capacity-weight[ind]]
```

Notice:

```text
TAKE → same ind
```

### Memory

```text
0/1 Knapsack:
TAKE → ind-1

Unbounded:
TAKE → ind
```

---

## 11. Rod Cutting

Rod length = capacity.

Each piece length can be used **unlimited times**.

Same as **Unbounded Knapsack**.

```text
weight = piece length
value  = price
capacity = rod length
```

### Recurrence

```text
NOT TAKE
→ dp[ind-1][length]

TAKE
→ price[ind] + dp[ind][length-pieceLength]
```

### Memory

```text
Rod Cutting = Unbounded Knapsack
```

---

# 🔥 MASTER TABLE

| Problem                    | Pattern       | TAKE               |
| -------------------------- | ------------- | ------------------ |
| Subset Sum                 | Boolean       | `OR`               |
| Partition Equal            | Subset Sum    | target = total/2   |
| Min Difference             | Subset Sum    | closest to total/2 |
| Count Subsets              | Count         | `+`                |
| Count Partition Difference | Count Subsets | `(total+D)/2`      |
| Assign Cookies             | Greedy        | Two pointers       |
| Minimum Coins              | Min           | same `ind`         |
| Target Sum                 | Count Subsets | `(total+target)/2` |
| Coin Change 2              | Count         | same `ind`         |
| Unbounded Knapsack         | Max           | same `ind`         |
| Rod Cutting                | Unbounded     | same `ind`         |

---

# 🧠 30-SECOND REVISION

```text
SUBSET SUM
→ Can I make target?
→ TAKE / NOT TAKE
→ OR

COUNT SUBSETS
→ How many ways?
→ TAKE / NOT TAKE
→ +

PARTITION EQUAL
→ total / 2
→ Subset Sum

MIN DIFFERENCE
→ find achievable sum closest to total/2

PARTITION DIFFERENCE
→ target = (total + D) / 2
→ Count Subsets

TARGET SUM
→ target = (total + target) / 2
→ Count Subsets

0/1 KNAPSACK
→ TAKE → ind-1

UNBOUNDED
→ TAKE → same ind

MIN COINS
→ unlimited
→ TAKE → same ind

COIN CHANGE 2
→ count combinations
→ same ind

ROD CUTTING
→ Unbounded Knapsack
```

# 🎯 Interview Triggers

```text
"Can I form..."          → Subset Sum

"Divide into equal..."   → Total / 2

"Minimum difference..."  → Closest to Total / 2

"Count subsets..."       → Count DP

"Given difference..."    → (Total + D) / 2

"+ or - signs"           → Target Sum

"Unlimited coins"        → Unbounded

"Minimum coins"          → Min + Unbounded

"Number of combinations" → Coin Change 2

"Unlimited items"        → Unbounded Knapsack

"Cut rod into pieces"    → Unbounded Knapsack
```
