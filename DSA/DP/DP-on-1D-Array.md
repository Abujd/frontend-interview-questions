# DP ON 1D ARRAY — INTERVIEW REVISION

## 🧠 Master Pattern

Usually:

```text
dp[i] = answer up to index i
```

Ask:

> What choices can I make at index `i`?

Most common:

```text
TAKE / NOT TAKE
```

or

```text
previous states
```

---

## 1. Climbing Stairs

Ways to reach step `n`.

```text
dp[i] = dp[i-1] + dp[i-2]
```

Because:

```text
1 step
2 steps
```

### Memory

```text
Climbing stairs → Fibonacci
```

---

## 2. Frog Jump

Can jump:

```text
1 or 2 steps
```

Cost:

```text
dp[i] = minimum energy to reach i
```

Recurrence:

```text
oneStep = dp[i-1] + abs(h[i]-h[i-1])

twoStep = dp[i-2] + abs(h[i]-h[i-2])

dp[i] = min(oneStep, twoStep)
```

### Memory

```text
Frog → previous 1 or 2
→ take minimum
```

---

## 3. Frog Jump K Distance

Can jump:

```text
1 ... K
```

Recurrence:

```text
dp[i] = min(
    dp[i-j] + abs(h[i]-h[i-j])
)
```

for:

```text
j = 1 → K
```

### Memory

```text
K jump → loop previous K positions
```

---

## 4. House Robber

Cannot rob adjacent houses.

At every house:

```text
NOT TAKE → dp[i-1]

TAKE → nums[i] + dp[i-2]
```

```text
dp[i] = max(
    dp[i-1],
    nums[i] + dp[i-2]
)
```

### Memory

```text
Rob → TAKE i → skip i-1 → i-2
```

---

## 5. House Robber II

Houses are circular.

Therefore split into:

```text
Case 1 → exclude first
Case 2 → exclude last
```

Then use House Robber I.

```text
answer = max(
    rob(0, n-2),
    rob(1, n-1)
)
```

### Memory

```text
Circular → two linear cases
```

---

# 🔥 MASTER TABLE

| Problem         | Main Pattern        |
| --------------- | ------------------- |
| Climbing Stairs | `dp[i-1] + dp[i-2]` |
| Frog Jump       | Previous 1/2 + min  |
| Frog Jump K     | Previous K + min    |
| House Robber    | Take / Not Take     |
| House Robber II | Circular → 2 cases  |

---

# 🧠 30-SECOND REVISION

```text
1D DP
→ dp[i] = answer up to i

CLIMBING STAIRS
→ dp[i] = dp[i-1] + dp[i-2]

FROG JUMP
→ previous 1/2
→ energy + min

K FROG JUMP
→ loop previous K
→ energy + min

HOUSE ROBBER
→ NOT TAKE = dp[i-1]
→ TAKE = nums[i] + dp[i-2]
→ max

HOUSE ROBBER II
→ circular
→ exclude first OR exclude last
→ House Robber I
```

# 🎯 Interview Triggers

```text
"Number of ways to reach..." → Climbing Stairs

"Minimum energy/cost to reach..." → Frog Jump

"Can jump up to K..." → K Frog Jump

"Cannot take adjacent..." → House Robber

"Cannot take first and last together..." → House Robber II

"1D + previous states" → dp[i]
```
