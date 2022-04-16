# useTimeout

useTime takes 2 arguments, the first is the function you would like to run after the the delay, the second is the delay in milliseconds. It returns a object with clear, and rest functions to clear, or reset the timeout.

### **To install the hook...**

```bash
npm i @sjblurton/use-timeout

yarn add @sjblurton/use-timeout
```

### **To call the hook...**

```bash
const { clear, reset } = useTimeout(callback, 1000)
```

### **To clear timeout...**

```bash
clear()
```

### **To reset timeout...**

```bash
reset()
```

### **links**

GitHub Repo:
https://github.com/sjblurton/use-timeout
<br/>
NPM:
https://www.npmjs.com/package/@sjblurton/use-timeout
