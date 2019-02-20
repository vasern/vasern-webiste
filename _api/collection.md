---
order: 2
---

## Collection

### insert

Insert a new record into selected collection

```js
Collection.insert( record )
=> ResultObject
```

#### Argument

- **_record(Object \| Array\<Object\>)_**: A record or a list of record to be inserted

#### Example

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

Modify an existing record from a collection

```js
Collection.update(id, changes)
=> ResultObject
```

#### Argument

- **_id_**: existing record primary key
- **_changes(Object)_**: an object contains property and value changes

#### Example

```js
VasernDB.collect("people").update(recordID, {
    firstName: "Lisa"
}).asPromise()
.then(rs => {
    // Insert completed
})
.catch(err => {
    // Handle error
})
```

---

### remove

Remove an existing record from a selected collection

```js
Collection.remove(id)
=> ResultObject
```

#### Argument

- **_id\<string\>_**: primary key of existing record to be remove

#### Example

```js
VasernDB.collect("people").remove(`auto_generated_id_1`)
.asPromise()
.then(rs => {
    // Insert completed
})
.catch(err => {
    // Handle error
})
```

---

### removeAllRecords 

<p class="block__msg warning">
    Use with caution! 
</p> 


Remove all records from a seleted collection.

```js
Collection.removeAllRecords()
=> ResultObject
```

#### Arguments

_N/A_

#### Example

```js
VasernDB.collect("people").removeAllRecords()
.asPromise()
.then(rs => {
    // Insert completed
})
.catch(err => {
    // Handle error
})
```