import React, {memo, PropsWithChildren, useCallback} from 'react'
import {Link, useWindowSize} from '..'

import {default as clsx} from 'clsx'

import type {BaseProps} from '../component-helpers'
import {buildComponentData, buildPaginationModel} from './model'

/**
 * Design tokens
 */
import '@primer/brand-primitives/lib/design-tokens/css/tokens/functional/components/pagination/colors-with-modes.css'

/** * Main Stylesheet (as a CSS Module) */
import styles from './Pagination.module.css'

export type PaginationProps = {
  /* The total number of pages */
  pageCount: number
  /* The current page number */
  currentPage: number
  /* Callback function for when the page changes */
  onPageChange?: (e: React.MouseEvent, n: number) => void
  /* Function to build the href for each page */
  hrefBuilder?: (n: number) => string
  /* Function to forward custom attributes for each pagination item */
  pageAttributesBuilder?: (n: number) => {[attributeName: string]: string}
  /* Defines how many pages are to to be displayed on the left and right of the component */
  marginPageCount?: number
  /* Whether to show the page numbers */
  showPages?: boolean
  /* The number of pages to show on each side of the current page */
  surroundingPageCount?: number
  'data-testid'?: string
} & PropsWithChildren<BaseProps<HTMLElement>> &
  React.HTMLAttributes<HTMLElement>

/**
 * Use Pagination to display a sequence of links that allow navigation to discrete, related pages.
 * @see https://primer.style/brand/components/Pagination
 */
export const Pagination = memo(
  ({
    id,
    children,
    className,
    pageCount,
    currentPage,
    onPageChange,
    hrefBuilder = defaultHrefBuilder,
    pageAttributesBuilder,
    marginPageCount = 1,
    showPages = true,
    surroundingPageCount = 2,
    'aria-label': ariaLabel,
    'data-testid': testId,
    ...rest
  }: PaginationProps) => {
    // On mobile, limit the number of visible numbers
    const {width} = useWindowSize()
    if (width && width < 768) {
      marginPageCount = 1
      surroundingPageCount = 0
    }

    const navRef = React.useRef<HTMLElement>(null)
    const pageElements = usePaginationPages({
      pageCount,
      currentPage,
      onPageChange,
      hrefBuilder,
      pageAttributesBuilder,
      marginPageCount,
      showPages,
      surroundingPageCount,
    })

    return (
      <nav
        ref={navRef}
        id={id}
        className={clsx(styles.Pagination, showPages && styles['Pagination__showPages'], className)}
        data-testid={testId}
        aria-label={ariaLabel || 'Pagination'}
        {...rest}
      >
        <div className={clsx(styles.Pagination__inner)}>{pageElements}</div>
      </nav>
    )
  },
)

type UsePaginationPagesParameters = {
  pageCount: number
  currentPage: number
  onPageChange?: (e: React.MouseEvent, n: number) => void
  hrefBuilder: (n: number) => string
  pageAttributesBuilder?: (n: number) => {[key: string]: string}
  marginPageCount: number
  showPages: boolean
  surroundingPageCount: number
}

export function usePaginationPages({
  pageCount,
  currentPage,
  onPageChange,
  hrefBuilder,
  pageAttributesBuilder,
  marginPageCount,
  showPages,
  surroundingPageCount,
}: UsePaginationPagesParameters) {
  const pageChange = useCallback(
    (n: number) => (e: React.MouseEvent) => {
      if (onPageChange) {
        onPageChange(e, n)
      }
    },
    [onPageChange],
  )

  const model = React.useMemo(() => {
    return buildPaginationModel(pageCount, currentPage, showPages, marginPageCount, surroundingPageCount)
  }, [pageCount, currentPage, showPages, marginPageCount, surroundingPageCount])

  const children = React.useMemo(() => {
    return model.map(page => {
      const {props, key, content} = buildComponentData(page, hrefBuilder, pageChange(page.num))

      const customAttributes = pageAttributesBuilder ? pageAttributesBuilder(page.num) : {}

      if (props.rel === 'next' || props.rel === 'prev') {
        return (
          <Link
            key={key}
            arrowDirection={props.rel === 'prev' ? 'start' : 'end'}
            size="medium"
            className={clsx(styles.Pagination__item)}
            {...props}
            {...customAttributes}
          >
            {content}
          </Link>
        )
      }

      if (!showPages) {
        return
      }

      return (
        <Link
          key={key}
          size="medium"
          arrowDirection="none"
          className={styles.Pagination__item}
          role="button"
          tabIndex={0}
          {...props}
          {...customAttributes}
        >
          {content}
        </Link>
      )
    })
  }, [model, hrefBuilder, pageChange, pageAttributesBuilder, showPages])

  return children
}

function defaultHrefBuilder(pageNum: number) {
  return `#${pageNum}`
}
