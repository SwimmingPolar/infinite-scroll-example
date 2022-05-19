import { useCallback, useMemo, useState } from 'react'

import {
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader,
  List,
  ListRowRenderer,
  WindowScroller
} from 'react-virtualized'
import 'react-virtualized/styles.css'
import styled from 'styled-components'

import ListItem from './ListItem'
import { Error, Loader } from 'components'
import AutoWidth from './AutoWidth'
import { RestoreScroll } from 'components/ScrollRestoration'

import useGetPosts from '../hooks/useGetPosts'

const InfiniteListBox = styled.div`
  min-width: 375px;
  max-width: 490px;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 716px) {
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`

const cache = new CellMeasurerCache({
  defaultWidth: 450,
  defaultHeight: 540,
  fixedWidth: true
})

const InfiniteList = () => {
  const [list, setList] = useState<List>()

  const { isLoading, isError, posts, hasNext, onLoadMore } = useGetPosts()

  // InfiniteLoader config
  const rowCount = useMemo(
    () => (hasNext ? Infinity : posts.length),
    [hasNext, posts]
  )
  const isRowLoaded = useCallback(
    ({ index }: { index: number }) => !!posts[index],
    [posts]
  )
  const registerRefs = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (registerChild: any) => (ref: any) => {
      setList(ref)
      registerChild(ref)
    },
    []
  )

  // handle resize
  const onResize = useCallback(() => {
    if (list === undefined) return

    cache.clearAll()
    list.recomputeRowHeights()
  }, [list])

  // List config
  const rowRenderer: ListRowRenderer = useCallback(
    ({ key, index, parent, style }) => (
      <CellMeasurer
        key={key}
        rowIndex={index}
        parent={parent}
        cache={cache}
        columnIndex={0}
      >
        {({ measure }) => (
          <ListItem post={posts[index]} measure={measure} style={style} />
        )}
      </CellMeasurer>
    ),
    [posts]
  )

  return (
    <InfiniteListBox>
      <AutoWidth>
        {({ width }) => (
          <WindowScroller onResize={onResize} scrollingResetTimeInterval={0}>
            {({ height, onChildScroll, scrollTop, isScrolling }) => (
              <RestoreScroll scrollTop={scrollTop}>
                {({ scrollTop }) => (
                  <InfiniteLoader
                    isRowLoaded={isRowLoaded}
                    loadMoreRows={onLoadMore}
                    minimumBatchSize={30}
                    rowCount={rowCount}
                  >
                    {({ onRowsRendered, registerChild }) => (
                      <List
                        autoHeight
                        width={width}
                        height={height}
                        scrollTop={scrollTop}
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        onRowsRendered={onRowsRendered}
                        ref={registerRefs(registerChild)}
                        rowCount={posts.length}
                        rowHeight={cache.rowHeight}
                        deferredMeasurementCache={cache}
                        rowRenderer={rowRenderer}
                      />
                    )}
                  </InfiniteLoader>
                )}
              </RestoreScroll>
            )}
          </WindowScroller>
        )}
      </AutoWidth>
      {hasNext && isLoading && !isError && <Loader />}
      {!isLoading && isError && <Error />}
    </InfiniteListBox>
  )
}

export default InfiniteList
