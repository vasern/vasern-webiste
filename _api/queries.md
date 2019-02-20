---
order: 3
---

## Query Records

### get

Retrieve a record from a collection using primary key

```js
Collection.get(id)
```

#### Arguments

- **_id\<string\>_**: an existing record's primary key

#### Example

```js
VasernDB.collect("People").get(`auto_generated_id_1`)
.asPromise()
.then(rs => {
    let item = rs.first(); // item found
})
.catch(err => {
    // Handle error
})
```

---

### filter

Filter records from a collection that match with query

```js
Collection.filter(query)
=> QueryBuilder
```

#### Arguments

- **_query\<Object\>_**: query filter

#### Example

```js
VasernDB.collect("People").filter({ firstName: "Peter", yearOfBirth: 1987 })
.asPromise()
.then(rs => {
    let items = rs.items; // matched records
})
.catch(err => {
    // Handle error
})
```
---

### paging

<p class="block__msg warning">
    Note: not work with `limit`
</p>

Record filter pagination, return records within a given size and page

```js
QueryBuilder.paging(max, page)
=> QueryBuilder
```

#### Arguments

- **_max\<number\>_**: maxinum number of returned records
- **_max\<page\>_**: current page, start with 0

#### Example

```js
VasernDB.collect("People").filter({ firstName: "Peter", yearOfBirth: 1987 })
.paging(10, 2) // return maxinum 10 records, skip the first 20 records
.asPromise()
.then(rs => {
    let items = rs.items; // matched records
})
.catch(err => {
    // Handle error
})
```

---

### limit

<p class="block__msg warning">
Note: not work with `paging`
</p>

Filter records with limit number of returned records

```js
QueryBuilder.limit(max)
=> QueryBuilder
```

#### Arguments

- **_max\<number\>_**: maxinum number of returned records

#### Example

```js
VasernDB.collect("People").filter({ firstName: "Peter", yearOfBirth: 1987 })
.limit(14) // return maxinum 14 records
.asPromise()
.then(rs => {
    let items = rs.items; // matched records
})
.catch(err => {
    // Handle error
})
```

---
<!-- 
### include


```js

```

#### Arguments



#### Example

```js

```

--- -->

### sort

Sort result of a record filter

```js
QueryBuilder.sort(propertyName1, propertyName2, ... )
```

#### Arguments

- **_propertyName\<string\>_** name of the property will be used for sorting

#### Example

```js
VasernDB.collect("People").filter({ firstName: "Peter", yearOfBirth: 1987 })
.sort('yearOfBirth') // return maxinum 14 records
.asPromise()
.then(rs => {
    let items = rs.items; // matched records
})
.catch(err => {
    // Handle error
})
```
