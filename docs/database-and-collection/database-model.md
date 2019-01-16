---
layout: default
id: database-model
title: Data Model
nav_order: 1
parent: Database and Collection
---

Schemas are required to help `Document`s define its properties data type and validate records.
The following information will help you to start writing schema for `Document`s,
and create `Vasern` instance.

## Writing schema

There are a **short version** and a **detailed version** of writing a database schema.
Use the **detailed version** when you need to add custom methods into your collection.

Let first see examples of schema in short version and detailed version. Then get
more in-depth information about the schema.

#### Short version

```js
import { types } from 'vasern';

var UserSchema = {
    name: "Todos",
    validation: "strict",
    keys: {
        firstName: types.string(55),
        lastName: types.string(55),
    }
};
```

#### Detailed version

```js
import { types } from 'vasern';

class UserModel {
    name = "Users"
    keys = {
        firstName: types.string(55),
        lastName: types.string(55),
    }
    
    // Return all users with lastName = 'Griffin'
    getAllGriffin() : Promise {
        return this.filter({ lastName: "Griffin" }).asPromise()
    }
}
```

## Schema explain

Each schema will have:

- `name` is the collection name
- `keys` describes collection keys (as property name and type)
- `validation` is how records will be validated (`none` | `easy` | `strict`). 
By default, it is set to `none`.

**Schema keys**

Describe how keys (or indexes) properties. These keys will be loaded and save a copy
into memory for fast query.

**Schema validation**

When inserting data into collection, Vasern can help you validate properties
by setting `validation` with one of the following options: 

- `none` will not validate data, used by default.
- `easy` will validate provided keys and its types
- `strict` will throw error if property which was not mention in schema is provided


## Initiate a database instance

To initiate a Vasern database instance, pass a list of schema into `Vasern` constructor.

```js
const VasernDB = new Vasern({ schema: [UserModel] })
```

You can now using `VasernDB` to work with collection and data.

<p class="block__msg info" markdown="1">

**What's next?** 
Learn about [basic CRUD operations](basic-crud-operations.md) or [see examples](todo-example.md)
</p>