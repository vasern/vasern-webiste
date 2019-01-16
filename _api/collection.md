---
order: 2
---

## Collection

### insert

```js
Collection.insert( record: Object )
=> ResultObject
```

```js
VasernDB.collect("people").insert({
    firstName: "John",
    lastName: "Citizen"
}).asPromise()
.then(rs => {
    console.log(rs);
})
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