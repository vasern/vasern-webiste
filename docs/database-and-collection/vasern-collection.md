---
layout: default
id: collection
parent: Database and Collection
nav_order: 0
title: Collection
---

![](../../assets/docs/collection.png)

This page will explain Vasern, Document to give you a brief understanding.

## Database

`Vasern` data storage itself is a linked `Document`s. Vasern object manages `Document`s, ensure their states and consistency. Currently, `Vasern` provides methods that help to get data across `Document`s.

## Collection

Underneath, each `Document` is a list of sequential key-value storage engine. It operates separately and links with other `Document`s by a reference id (like the foreign key).

## Records

```json
{  
    "Users": [{
        "id": 2,
        "firstName": "Bryan",
        "lastName": "Griffin",
        "jobTitle": ["Writer","Composer"]
    }]
}
```

# Relationship

Collection relationships are defined at application level, through database schema.
Which means the database and collection don't know when a record contains
a reference to other record.

<p class="block__msg warning" markdown="1">
A drawback of collection relationship in Vasern is when deleting a record,
if its reference exsited in some other records, the database will not automatically remove
the reference `id`
</p>

To define a relationship in collection, use `types.ref( refCollectionName )`. For example:

```js
import { types } from 'vasern';

var TodoSchema = {
    name: "TodoItems"
    keys: {
        ...,
        assignTo: types.ref("People")
    }
}
```

You can either use the reference object or its id as value of the reference field. For example:

```js
VasernDB.collect("Users")
    .get({ name: "Peter Griffin" })
    .asPromise().then(result => {
        let peter = result.first();
        VasernDB.collect("TodoItems").insert({ ..., assignTo: peter }).run();
    })
```

<p class="block__msg info" markdown="1">

**What's next?** Learn about [Vasern installation](install-vasern.md)
</p>