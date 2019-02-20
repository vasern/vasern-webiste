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

#### Arguments

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
---

### collect

Select a collection in order to perform retrieval or modify records

```js
Vasern.collect( collectionName: string )
=> Collection
```

#### Arguments

- **_collectionName(string)_**: name of collection to be selected.

#### Example

```js
var peopleCollection = VasernDB.collect('People')
```

---

### removeAllCollections

Remove all records in all collections

```js
VasernDB.removeAllCollection()
=> void
```

#### Argument

_N/A_

#### Example

```js
VasernDB.removeAllCollection()
```