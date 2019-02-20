---
order: 4
---

## Result Object

### asProxy

<p class="block__msg warning">
    Only available in JavaScript enviroment that support proxy (i.e not available on React Native for Android)
</p>

Return result with a [proxy object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). Once the request is completed,
the proxy result will also be updated

---

### asPromise

Return result with promise object

---

### subscribe

Subscribe a callback handler for any changes

```js
ResultObject.subscribe(callback)
```

#### Argument

- **_callback\<Function\>_** callback handler whenever ResultObject receive a change event