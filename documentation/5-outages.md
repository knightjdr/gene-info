# Outages

Planned or unplanned outages at our cloud provider can be indicated to users using a second package hosted on Github. This package will have a JSON file indicating upcoming outages that the extension will check. If there is an outage, the extension will display a notification in the popup.

## Prerequisites

* Node.js
* Typescript

## Installation

```
git clone https://github.com/knightjdr/gix-outages
cd gix-outages
npm install
```

## Add an outage

1. Open the `index.ts` file and add the start and end dates, and the outage reason.

2. Compile the code
```
npm run compile
```

3. Run the code
```
node index.js
```

4. Push the code to Github
