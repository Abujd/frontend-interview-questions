# 📈 STOCK BUY & SELL — QUICK INTERVIEW REVISION

## 🔥 MASTER IDEA

```text
Stock I
→ Only 1 transaction

Stock II
→ Unlimited transactions

Stock III
→ At most 2 transactions

Cooldown
→ After SELL, skip 1 day

Fee
→ Pay fee when SELLING
```

---

# 1️⃣ STOCK I — ONE TRANSACTION

## 🧠 Pattern

```text
BUY LOW → SELL HIGH
```

## Algorithm

```text
minPrice = minimum price seen so far

profit = currentPrice - minPrice

maxProfit = maximum profit seen so far
```

## Code Logic

```js
minPrice = Math.min(minPrice, prices[i]);

maxProfit = Math.max(
    maxProfit,
    prices[i] - minPrice
);
```

## Remember

```text
ONE TRANSACTION
=
MIN PRICE + MAX PROFIT
```

⏱ `O(n)`
📦 `O(1)`

---

# 2️⃣ STOCK II — UNLIMITED TRANSACTIONS

## 🧠 DP State

```text
(ind, buy)

ind → current day

buy = 1 → CAN BUY
buy = 0 → HAVE STOCK → CAN SELL
```

## CAN BUY

```text
SKIP
OR
BUY
```

```js
max(
    dp[ind + 1][1],
    -prices[ind] + dp[ind + 1][0]
)
```

## CAN SELL

```text
SKIP
OR
SELL
```

```js
max(
    dp[ind + 1][0],
    prices[ind] + dp[ind + 1][1]
)
```

## Remember 🔥

```text
BUY  → minus price

SELL → plus price
```

```text
STOCK II
=
BASE STOCK DP PATTERN
```

⏱ `O(n)`
📦 `O(n)`

---

# 3️⃣ STOCK III — AT MOST 2 TRANSACTIONS

## 🧠 State

```text
(ind, buy, cap)

cap = transactions remaining
```

Start:

```text
dp[0][1][2]
```

## BUY

```text
CAP DOES NOT CHANGE
```

```js
max(
    dp[ind + 1][1][cap],
    -prices[ind] + dp[ind + 1][0][cap]
)
```

## SELL

```text
CAP DECREASES
```

```js
max(
    dp[ind + 1][0][cap],
    prices[ind] + dp[ind + 1][1][cap - 1]
)
```

## 🔥 Remember

```text
BUY  → cap same

SELL → cap - 1
```

```text
Stock II
+
cap
```

---

# 4️⃣ STOCK WITH COOLDOWN

## Rule

```text
SELL TODAY

❌ Cannot buy tomorrow

✅ Can buy day after tomorrow
```

## BUY

Same as Stock II:

```js
max(
    dp[ind + 1][1],
    -prices[ind] + dp[ind + 1][0]
)
```

## SELL

```js
max(
    dp[ind + 1][0],
    prices[ind] + dp[ind + 2][1]
)
```

## 🔥 ONLY DIFFERENCE

```text
NORMAL SELL:

ind + 1


COOLDOWN SELL:

ind + 2
```

## Remember

```text
SELL → SKIP NEXT DAY
→ ind + 2
```

---

# 5️⃣ STOCK WITH TRANSACTION FEE

## Rule

```text
Every completed transaction has a fee
```

## BUY

Same as Stock II:

```js
-prices[ind]
```

## SELL

```js
prices[ind] - fee
```

## Recurrence

```js
max(
    dp[ind + 1][0],
    prices[ind] - fee + dp[ind + 1][1]
)
```

## 🔥 ONLY DIFFERENCE

```text
NORMAL SELL:

+ prices[ind]


FEE:

+ prices[ind] - fee
```

---

# 🚀 THE MOST IMPORTANT INTERVIEW TABLE

| Problem   | State / Change    | Memory               |
| --------- | ----------------- | -------------------- |
| Stock I   | `minPrice`        | Buy low, sell high   |
| Stock II  | `(ind, buy)`      | Base DP              |
| Stock III | `(ind, buy, cap)` | Sell → `cap - 1`     |
| Cooldown  | `(ind, buy)`      | Sell → `ind + 2`     |
| Fee       | `(ind, buy)`      | Sell → `price - fee` |

---

# 🧠 30-SECOND MEMORY MAP

```text
                 STOCK PROBLEMS
                       │
          ┌────────────┼────────────┐
          │            │            │
       STOCK I      STOCK II      STOCK III
          │            │            │
      minPrice      ind,buy     ind,buy,cap
                       │
          ┌────────────┴────────────┐
          │                         │
      COOLDOWN                      FEE
          │                         │
    SELL → ind+2             SELL → price-fee
```

---

# 🔥 GOLDEN RULES

```text
CAN BUY?

→ SKIP or BUY

BUY:

-prices[ind]


CAN SELL?

→ SKIP or SELL

SELL:

+prices[ind]
```

Then modify:

```text
TRANSACTION LIMIT?
→ Add cap

COOLDOWN?
→ Sell → ind + 2

FEE?
→ Sell → price - fee
```

---

# ⚡ FINAL 10-SECOND REVISION

```text
STOCK I
→ min price

STOCK II
→ ind + buy

STOCK III
→ add cap

COOLDOWN
→ sell + ind + 2

FEE
→ sell - fee
```
