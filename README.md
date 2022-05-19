# Getting Started

This is react typescript infinite scroll example using [react-virtualized](https://github.com/bvaughn/react-virtualized).

# Installation

## Prerequites

- [NodeJS](https://nodejs.org/en/download/)
- [Mongodb](https://www.mongodb.com/try/download/community)

```
npm install
```

Execute command under each folder.

- infinite-scroll
- fake-api

## Errors

dependencies errors

```
npm install react-virtualized --legacy-peer-deps
```

typescript errors

> 1.  go to **_ProjectRoot/node_modules/@types/react-virtualized_**
>
> 2.  find and delete **node_modules** folder
>
> 3.  run `npm install`

# Run

Before starting react project, go to **_fake-api/src/index.ts_**

```typescript
/**
 * @description populate db with N number of entries
 */
populateDatabase(500);
```

comment this line out after initial execution and re-start the server.

**_fake-api/src/api/posts/index.ts_**

```typescript
/**
 * @description response delay
 */
await sleep(1750);
```

slow down response on server-side. (can be done via browser)

## fake-api

`npm start` : starts api server on port 5611.

## infinite-scroll

`npm start` : starts dev server on port 3000 and api requests will be redirected to fake-api server. (see **_infinite-scroll/package.json_**)

# features

- list windowing
- full page infinite loading
- scroll to top on navigation
- scroll to top on active link click (prevents refreshing)
- auto width/height
- scroll restoration on feed page
- sticky/fixed header
- responsive/resize

# things to consider

- invalidate data to refetch on focus
