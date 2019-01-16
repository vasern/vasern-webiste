---
layout: default
id: install-vasern
title: Installation
parent: Getting Started
nav_order: 3
---

<div class="block__msg info" markdown="1">
<b>Platforms supported:</b> React Native for Android and iOS (exclude expo projects)
</div>

The following steps will help you install Vasern into your 
React Native project.
## Install Vasern


Make sure you have [created React Native app](https://facebook.github.io/react-native/docs/getting-started.html). Navigate to React Native directory, and be ready to run commands on Terminal (MacOS) or Command Promp (Window).

### 1. Install using NPM:

```sh    
$ npm install --save vasern
```

### 2. Link Vasern library to your project:

**Automatic linking - for iOS and Android**

```sh
$ react-native link vasern
```

**Manual linking - for iOS**

- From your React Native directory, browse to `node_modules/vasern/ios`, then drag `Vasern.xcodeproj` to `Libraries` directory on your project in XCode.

- In the XCode project, navigate to `Build Phase` > `Link Binary with Libraries`, click on `+` icon, find and add `libVasern.a`.

**Manual linking - for Android**

1. Open file ``android/app/build.gradle`` from your android main app directory, add ``vasern`` dependency:

```diff
dependencies {
+   compile project(':vasern')

    implementation fileTree(dir: "libs", include: ["*.jar"])
    implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
    implementation "com.facebook.react:react-native:+"  // From node_modules
}
```
2. Open file ``android/setting.gradle``

```diff
include ':app'

+ include ':vasern'
+ project(':vasern').projectDir = new File(rootProject.projectDir, '../node_modules/vasern/android')
```

3. Open `android/app/src/main/java/{ bundle id }/MainApplication.java`, add `VasernManager` package.

```diff
// Add this line after "import android.app.Application;"
+ import com.vasern.VasernManager;

// Add "new VasernManager()" in "getPackages()" method
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
+       new VasernManager()
    );
}
```

### 3. Close Metro Bundle, rebuild and restart project.

<p class="block__msg info" markdown="1">

**What's next?** 

You have now installed Vasern into your React Native project. Learn more about [data modeling](database-and-collection/database-model.md) or start [Writing Schema](write-schema.md).

</p>