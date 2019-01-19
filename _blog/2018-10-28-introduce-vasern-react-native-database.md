---
layout: post
title: "Introduce Vasern - a React Native database"
categories: jekyll update
published: true
author: "hieunc"
published_at: "2018-12-29T09:00:31.361Z"
photo: "https://cdn-images-1.medium.com/max/2000/1*opEm8xOVsI7Wb_2F6ricmQ.png"
---

Vasern's goal to be a fast data storage for React Native, be able to sync to remote servers and available for everyone.

I created Vasern for the following reasons:

- To provide simple APIs, allow to focus more on building the application instead of worrying about setup and optimize the database
- Be a fast, lightweight and open source data storage for React Native
- Everyone can install, run and sync data to their Vasern servers with minimal effort (under development)

**Today, I am very excited to announce Vasern beta release.**

<!--more-->

## Beta Release and Features
Vasern shows an impressive performance (will be mention in a future post). Now available for React Native on iOS and Android, which:

- Support [languages use UTF-8 encoding](https://superuser.com/questions/946612/what-languages-does-the-character-encoding-utf-8-support).
- Support basic datatypes (string, int, double, datetime, and reference)
- Write schemas. Create, Update, Query and Delete records.
- Installation and more details are available on [Vasern Documentation](//vasern.com/docs/getting-started/install-vasern.html)

## When will Vasern be available for production?
The beta version is being heavily tested to ensure its functionality, data quality and consistency. __Please [create an issue on Github](https://github.com/vasern/vasern/issues) if you found a bug.__


## What is next?
Vasern is set out not only for local data storage but also be able to store data on the cloud and sync across app clients. I have already started working on the cloud integration called Vasern Server, and created [vasern-server](https://github.com/vasern/vasern-server) — a reserve Github repository.

At this stage, I can only reveal that it was built using Golang, a powerful server side language created by folks who work at Google. More updates about Vasern Server will be in the future posts.

## Towards the future of Vasern
As JavaScript is available for both web and mobile application. Vasern will leverage this advantage, help you write once, use everywhere. Imagine you only need to write schemas, extra functionality for your React Native app. Then reuse it across your web apps. That’s the goal.

I would also really like to look for the opportunity to integrate Vasern with other platform (Ionic framework, and Cordova for example). And push it as far as it can go.

_Note: this post was originally [published on Medium](https://medium.com/vasern/vasern-a-fast-lightweight-and-open-source-data-storage-for-react-native-7fccff7506a1)_

---

To keep updated with Vasern and Vasern Server, or have a feature request, you can subscribe at [https://form.jotform.co/82917565387876](https://form.jotform.co/82917565387876)

Find us online at: [Vasern Website](//vasern.com), [Slack Channel](https://join.slack.com/t/vasern/shared_invite/enQtNDU4NTk2MDI5OTcyLTRiYzRjZDI5YTAyMjlhYzg1YTdhNjFjZGNkODI1OTQwYzExZjA3NWRkYTY1MGE2ZjU0YzU3NzE2NzUwZmEwMjM), and [Twitter](https://twitter.com/vaserndb).