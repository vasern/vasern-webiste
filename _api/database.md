---
order: 1
---

## Database

### createCollection

Create a new collection

```js
var peopleCollection = VasernDB.createCollection({
    name: "People",
    keys: {
        firstname: types.string(55),
        lastName: types.string(55)
    }
})
```

**Arguments**: abc

**Return**: Collection

---

### collect

```js
var peopleCollection = VasernDB.collect('People')
```

---

### removeAllCollections

```js
VasernDB.removeAllCollection()
```