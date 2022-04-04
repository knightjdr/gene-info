# Extension

Running a development version of the extension requires an API endpoint and the web-ext tool for launching a dev version of the extension.

## Prerequisites

* Node.js
* [web-ext command line tool](https://github.com/mozilla/web-ext)

### Install dependencies

```
(cd extension && npm install)
```

```
npm install -g web-ext
```

### .env files

An `.env.development` file is required in development and `.env.production` file is required in production. They must be located in the `extension` folder and specify the API endpoint to connect to.

```
API: http://localhost:8001
```

## Development

A development version of the extension can be launched that will automatically refresh when files are changed.

1. Start the API (see docs `2-api.md` for local API instructions).
```
npm run dev-api
```

2. Start Webpack in watch mode. In can be started for either Chrome or Firefox, depending on the browser used for development.
```
npm run dev-ext:chrome
```

3. Launch dev version of the extension.
```
npm run start:chrome
```

## Deployment

### Test version

There is a test version of the extension available for Chrome that is deployed to a small group of testers (~20).

1. Build test version of the extension.
```
git checkout dev
npm run prod-ext:test
```

2. Zip test folder
```
cd extension && zip -r chrome-test.zip chrome-test
```

The zip can now be uploaded to the Chrome store.

### Production versions

Versions will be built for Chrome, Firefox, Edge and Safari if built on OSX. All zips will be located in `extension/`.

```
npm run build
```

The production versions can be tested locally prior to uploading by loading an unpacked extension in the browser of choice. Folders with the unpacked files are found in `extension/<browser>`.

#### Safari

The build for Safari requires some manual steps in xcode.

1. Open project in Xcode. Application folder to load is `extension/safari-xcode/gix`.

2. Archive extension in Xcode from Product > Archive.

3. On the archive window, select "Validate". Use automatic signing of certificates and enter password when prompted to access certificate in keychain.

4. On the archive window, select "Distribute". Relevant information is in the previous step.

5. Go to https://appstoreconnect.apple.com to submit update.

##### Test in Safari

After step 1 in the previous section, and before step 2, following these steps to test a local version of the extension:

1. Make sure that gix macOS app is selected in the Scheme menu next to the Run and Stop buttons in Xcode’s main toolbar. Click the Run button to build the app.

2. Open Safari and choose Safari > Preferences.

3. Select the Advanced tab, then select the “Show Develop menu in menu bar” checkbox.

4. From the Safari menu choose Develop > Allow Unsigned Extensions. The Allow Unsigned Extensions setting is reset when a user quits Safari; you must set it again the next time Safari is launched.

5. Go to Preferences and select the Extensions tab. Find the extension in the list on the left, and enable it by selecting the checkbox.

6. Close the Preferences window and test the extension.
