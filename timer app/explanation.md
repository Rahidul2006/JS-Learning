# 🔢 JavaScript Countdown Timer Concepts

## 🔢 `parseInt()`
**Purpose:** Converts a string (like `"10"`) into an integer (`10`).

**Example:**
```js
let str = "15";
let num = parseInt(str); // num becomes 15
```

**Why you need it:**  
When you get a value from an `<input>`, it's a string. You need `parseInt()` to turn it into a number so you can do math with it.

---

## ❓ `isNaN()`
**Purpose:** Checks if a value is **Not a Number**.

**Example:**
```js
let value = "abc";
console.log(isNaN(value)); // true, because "abc" is not a number
```

**Why you need it:**  
To make sure the user entered a valid number before starting the countdown.

---

## ⏱️ `setInterval()`
**Purpose:** Runs a function repeatedly at a set time interval (in milliseconds).

**Example:**
```js
let count = 5;
let timer = setInterval(() => {
  console.log(count);
  count--;
}, 1000); // runs every 1000ms (1 second)
```

**Why you need it:**  
To update the countdown every second.

---

## 🛑 `clearInterval()`
**Purpose:** Stops a timer that was started with `setInterval()`.

**Example:**
```js
clearInterval(timer); // stops the countdown
```

**Why you need it:**  
To stop the countdown when time reaches zero or when the user clicks "Stop".

---

## 🧭 Countdown Timer Logic Flow (HH:MM:SS Support)

### 🟢 Start Button Clicked
- ✅ Prompt user for hours, minutes, and seconds
- ✅ Convert each input to a number using `parseInt()`
- ✅ Calculate total time in seconds:
  ```js
  totalSeconds = hrs * 3600 + mins * 60 + secs;
  ```
- ✅ Check if totalSeconds is valid:
  ```js
  isNaN(totalSeconds) || totalSeconds <= 0
  ```

---

### ⏱️ Start Countdown
- ✅ Use `setInterval()` to run a function every second:
```js
countdown = setInterval(() => {
  totalSeconds--;
  input.value = formatTime(totalSeconds);
}, 1000);
```

---

### 🔁 Each Second
- ✅ Subtract 1 from `totalSeconds`
- ✅ Update the input field to show formatted time
- ✅ Check if `totalSeconds <= 0`:
  - If yes → `clearInterval(countdown)`
  - Show alert: `"Time's up!"`

---

### 🛑 Stop Button Clicked
- ✅ Immediately stop the countdown:
```js
clearInterval(countdown);
alert("Timer stopped.");
```

---

## 🧠 Key Concepts Recap

| Concept         | Description                          | Example                     |
|-----------------|--------------------------------------|-----------------------------|
| `parseInt()`     | Convert string to number             | `parseInt("10") → 10`       |
| `isNaN()`        | Check if value is not a number       | `isNaN("abc") → true`       |
| `setInterval()`  | Run code repeatedly every X ms       | `setInterval(fn, 1000)`     |
| `clearInterval()`| Stop the repeating code              | `clearInterval(timer)`      |
```
