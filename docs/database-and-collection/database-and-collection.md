---
layout: default
id: database-and-collection
title: Database and Collection
nav_order: 2
has_children: true
---

This page will explain Vasern, Document to give you a brief understanding.

## Vasern

`Vasern` data storage itself is a linked `Document`s. Vasern object manages `Document`s, ensure their states and consistency. Currently, `Vasern` provides methods that help to get data across `Document`s.

## Document

Underneath, each `Document` is a list of sequential key-value storage engine. It operates separately and links with other `Document`s by a reference id (like the foreign key).

# What's next?

Learn about [Vasern installation](install-vasern.md)