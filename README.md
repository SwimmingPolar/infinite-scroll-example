# Getting Started

<a href="https://sp-infinite-scroll-frontend.herokuapp.com/" target="_blank">DEMO</a> (It will take few seconds to start the server)

This is react typescript infinite scroll example using [react-virtualized](https://github.com/bvaughn/react-virtualized).
I don't recommend using it though.

https://github.com/bvaughn/react-virtualized/issues/1655#issuecomment-1051401739

# - Installation

## Prerequites

- [NodeJS](https://nodejs.org/en/download/)
- [Mongodb](https://www.mongodb.com/try/download/community)

```
npm install
```

Execute command under each folder.

- infinite-scroll
- fake-api

# - Run

Go to **_fake-api/src/index.ts_**

```typescript
/**
 * @description populate db with N number of entries
 */
populateDatabase(500);
```

- comment this line out after initial execution and re-start the server.

**_fake-api/src/api/posts/index.ts_**

```typescript
/**
 * @description response delay
 */
await sleep(1750);
```

- slow down response on server-side. (can be done via browser)

---

Because some files are referred as absolute path, you need to open each project as root folder.

## fake-api

`npm start` : starts api server on port 5611.

## infinite-scroll

`npm start` : starts dev server on port 3000 and api requests will be redirected to fake-api server. (see **_infinite-scroll/package.json_**)

# - features

- list windowing
- full page infinite loading
- scroll to top on navigation
- scroll to top on active link click (prevents refreshing and can be addressed)
- auto width/height
- scroll restoration on feed page
- sticky/fixed header
- responsive/resize

# - things to consider

- invalidate data to refetch on focus
