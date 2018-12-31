---
layout: post
title: "The pros and cons of different data formats: key-values vs tuples"
categories: jekyll update
published: true
author: "hieunc"
published_at: "2018-12-29T09:00:31.361Z"
photo: "https://cdn-images-1.medium.com/max/1600/1*1LI9TzwDU1l6IyJFBRcULw.jpeg"
description: "How data is formatted under the hood"
---

Working on Vasern (a client database for React Native) has given me an opportunity to try and test different data formats which include key-value, column-oriented, document, and tuples. Each format was designed to suit different scenarios.

The criteria of these tests focus on performance, the ability to lookup values, and space efficiency. Besides, it is not required to have on-disk sorted keys and indices. They will be loaded into memory for fast lookup.

In this post, I will recap the pros and cons of the two common formats: key-values and tuples format. Also, I’ll introduce tagged key-values, an extension of key-values with index lookup, which benefits from the tuples format.

<!--more-->

## Key-Value Storage

![](https://cdn-images-1.medium.com/max/2000/1*TAEpQseQnq_d3bb6FQjBaQ@2x.png)
*A collection of the key-value store*{: .image-caption }

Key-values store a collection of key-and-value pairs, where sometimes the value represents more than one value, separated by delimiters (i.e. a comma). Those pairs are organized into blocks with fixed-length (for fast traverse between records).

![](https://cdn-images-1.medium.com/max/1600/1*Pz8Go3rs_NOO95mXUQlbdA@2x.png)
*Example of single-block key-value store layout (“\0” represents null/empty value)*{: .image-caption }

__Advantages of the key-value store:__

- Simple data format makes write and read operations fast
- Value can be anything, including JSON, flexible schemas

__Disadvantages:__

- Optimized only for data with single key and value. A parser is required to store multiple values.
- Not optimized for lookup. Lookup requires scanning the whole collection or creating separate index values

## Tuples Data Store (RDBMS)
The tuples data format has existed for many decades. It is used in relational databases such as MySQL, Postgres, etc.

![](https://cdn-images-1.medium.com/max/1600/1*HZ0S94moHXVZOGZlfyYgNg@2x.png)
*An example of the tuples data format in Relational Database*{: .image-caption }

Unlike the key-values format, it relies on the predefined schema to organize records into rows, and its values in fixed-length columns. Each value only/usually represents a single piece of information.

__Advantages of tuples data store:__

- Structured data format helps traverse through values of records quickly
- Optimized for lookup (common use of SQL for querying records)

__Disadvantages:__

- Constrained by schema structure
- Change of schema usually requires rewriting the whole database

## Tagged Key-Value Store

![](https://cdn-images-1.medium.com/max/1600/1*-jCIp9Bi57aQD1uwRfDiLQ@2x.png)
*Uhmm, TKVF (tagged-key-value format)*{: .image-caption }

Tagged Key-Value is an extended version of Key-Value storage — it has more than one key for a single value. In other words, it has a key, indexes (or tags) and a body value for each record. Where:

- Key and Indexes will be loaded into memory on startup
- Body value can be anything from a plain string, BSON/JSON, or comma-separated value.

__Advantages of Tagged Key-Value store:__

- Semi-structured, which helps traverse through records and indexes fast
- Optimized for lookup (through keys and indexes)
- A record body can be anything, ideal for flexible schemas
- Space efficiency (key, indices are organized in tight columns)

__Disadvantages:__

- Change of schema that includes indices might need data migration

![](https://cdn-images-1.medium.com/max/1600/1*MHFaMmQtQLQ_LikCYkj8lQ@2x.png)
*A format example of the tagged-key-value*{: .image-caption }

### Vasern with Tagged Key-Value Store

Vasern is a client database for React Native. The latest version was released under beta for testing and was using key-value storage.

In the upcoming 0.3.0-RC version, Vasern is switching to a tagged key-value store layout. Focus is on its powerful lookup feature and space efficiency.

Below is a demo query. It’s beautiful, isn’t it?

![](https://cdn-images-1.medium.com/max/1600/1*3XwsvhlRZp0astMlJ68OAw@2x.png)
*A demo of Vasern query*{: .image-caption }

## Conclusion

There are many databases with different data formats to choose for an application. Two common formats are:

- Key-Value pairs — fast read and write but not optimized for lookup. It’s often used as simple data storage, NoSQL.
- Tuples — support multi typed-values, indexes, optimized for lookup, but a lack of schema flexibility. Commonly used for Relational Databases.

By combining the strengths mentioned above, the Tagged-Key-Values format is flexible with data schema, and is able to look up records through keys and indices. This is often better suited for a client’s database.