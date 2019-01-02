---
order: 2
---

## Collection

### insert

```js
VasernDB.collect("people").insert({
    firstName: "John",
    lastName: "Citizen"
}) => ResultObject
```

---

### update

```js
VasernDB.collect("people").update(recordID, {
    firstName: "Lisa"
}) => ResultObject
```

---

### remove

```js
VasernDB.collect("people").remove(recordID) => ResultObject
```

---

### removeAllRecords

```js
VasernDB.collect("people").removeAllRecords() => ResultObject
```