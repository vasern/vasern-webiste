---
layout: default
id: quickstart
title: Quickstart
parent: Getting Started
nav_order: 2
---

<div class="block__msg info" markdown="1">
<b>Before you start:</b> make sure you have [installed Vasern](install-vasern.md)
</div>

## Setting up database

To work with data, you need to setup a Vasern database instance. A database instance describes
the shape of collections, their keys and validation mode. 
[Read more about database model](../database-and-collection/database-model.html)

```js
import Vasern, { types } from 'vasern';
const VasernDB = new Vasern({
    schemas: [{
        name: "Users",
        keys: {
            firstName: types.string(55),
            lastName: types.string(55)
        },
        validation: 'strict'
    }, {
        name: "TodoItems",
        keys: {
            name: types.string(55),
            status: types.enum('STATUS', 'completed', 'not_completed'),
            asignedTo: types.ref("Users")
        }
    }]
});
```

## Insert data

Data can be inserted to collection as `object`, or `Array` of `object`.
The example below show how to insert data into `Users` collection.

<p class="block__msg info" markdown="1">
<b>Note:</b> method [.asProxy()](../../api/#asproxy) will immediately return record with `{ status: "inserting" }`.
</p>


```js
var peter = VasernDB.collect("Users").insert({
        firstName: "Peter",
        lastName: "Griffin"
    }).asProxy().first();
```

When inserting data with reference field (like `assignedTo` in this example),
the value can be either the reference object or its `id`;

```js
var peterTasks = VasernDB.collect("TodoItems")
    .insert([
        { name: 'Go shopping', status: 'not_completed', assignedTo: peter },
        { name: 'Drink at the Clam', status: 'not_completed', assignedTo: peter }
    ]).run();
```

## Query data

The following query example will return all `TodoItems` records that has `assignedTo` equal `Peter`.
(Reference fields will automatically be fetched and compare using its `id`)

```js
VasernDB.collect("TodoItems")
    .filter({ 
        assignedTo: { firstName: 'Peter' },
        status: 'completed'
    })
    .asPromise()
    .then(result => console.log("Items", result.items) })
```

Or using `count` to get number of records that match with query filter

```js
VasernDB.collect("TodoItems")
    .count({ status: 'completed' })
    .then(result => console.log("Total items", result.total));
```


<p class="block__msg info" markdown="1">

**What's next?** Congrats, you've learned the basics of using Vasern. If not already, 
[install Vasern](install-vasern.md) into your existing React Native project.
Or learn more about [data types supported](../database-and-collection/supported-data-types.html) in Vasern.
</p>