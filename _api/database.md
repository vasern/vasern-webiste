---
order: 1
---

## Database

<!-- ### createCollection

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

--- -->

### constructor


```javascript
new Vasern(props)
```

#### Props (Object) include

- **_props.schemas (Array\<Object>)_**: a list of `Document` schema in any order.
- **_props.version (int)_**: version of `Document`, `1` by default.

#### Example

We already created `TodoSchema` and `UserModel` above. Let's create a `Vasern` instance

```javascript
import Vasern from 'vasern';

const VasernDB = new Vasern({
    schemas: [UserModel, TodoSchema],
    version: 1
})
```

### collect

```js
Vasern.collect( collectionName: string )
=> Collection
```

Get a collection

```js
var peopleCollection = VasernDB.collect('People')
```

---

### removeAllCollections

```js
VasernDB.removeAllCollection()
=> void
```

Remove all records in all collections