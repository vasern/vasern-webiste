---
layout: default
id: data-types
title: Data Types
nav_order: 2
parent: Database and Collection
---

There are basic data types used to define record values and Vasern's defined data types.

## Basic data types

- `boolean` is either `true` or `false`

- `number` is any negative, positive, decimal numbers: 100, -9, 3.14 (similar to JavaScript `number`).
`Infinity` and `NaN` are not supported.

- `string` is any valid string, UTF8 supported languages: `hello world`, `xin chào`

- `object` is standard key-value pairs. Object values can contains any basic data types

```json
{ 
    name: "Bryan Griffin",
    friends: ["Stewie", "Peter"], 
    address: { unit: 2, city: "Rhode Island" }
}
```

- `list` is like an array, contains a list of mixed type values.

```json
[
    "Megatron Griffin",
    { name: "Stewie", relate: "Younger brother" },
    false,
    [1, 4, 5]
]
```

**When writing schema**, a `ref` data type is provided, which is an id of a reference
record from the same or difference collection.

Learn about [data types in API References](http://localhost:4000/api.html#data-types)

# Vasern's defined types

Besides basic data types, you will also see other data types which can be a class 
or an extended object, used when dealing with query, or return a result.

## ResultInterface

ResultInterface is a data type returned after a query, or any of the CRUD operations.
Its structure contains the following properties:

- **status** indicate the result of the execution. It can be either `ok`, `warning`, `error`. For proxy, value can also be `inserting`, `deleting`, `updating`.
- **statusMessage** is the message that describe the issue when **status** is either `warning` or `error`
- **items** is a list of records, returned after using `filter`, or `get` method
- **changes** indicate what changes have been made after the query execution, which includes
`deleted` records, `updated` records, new records `inserted`. When an error or conflic occurs cause
termination, a number of `unchange` records will also be displayed.
- **total** is a number returned after using `count` method

An example of a `ResultInterface` structure:

```json
{
    status: "ok",
    items: [{ ... }, { ... }],
    changes: {
        inserted: number,
        deleted: number,
        updated: number,
        unchange: number
    }
}
```

<p class="block__msg info" markdown="1">

**What next?** Learn how to [write schema and create Vasern instance](write-schema.md)
</p>