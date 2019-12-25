import styled from "styled-components";

const StyledGrid = styled.div`
  ag-grid,
  ag-grid-angular,
  ag-grid-ng2,
  ag-grid-polymer,
  ag-grid-aurelia {
    display: block;
  }

  .ag-hidden {
    display: none !important;
  }

  .ag-invisible {
    visibility: hidden !important;
  }

  .ag-faded {
    opacity: 0.3;
  }

  .ag-width-half {
    display: inline-block;
    width: 50% !important;
  }

  .ag-unselectable {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
  }

  .ag-selectable {
    -webkit-user-select: text !important;
    -moz-user-select: text !important;
    -ms-user-select: text !important;
    user-select: text !important;
  }

  .ag-select-agg-func-popup {
    position: absolute;
  }

  .ag-input-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: normal;
    position: relative;
    overflow: hidden;
  }

  .ag-shake-left-to-right {
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: ag-shake-left-to-right;
    animation-name: ag-shake-left-to-right;
  }

  @-webkit-keyframes ag-shake-left-to-right {
    from {
      padding-left: 6px;
      padding-right: 2px;
    }
    to {
      padding-left: 2px;
      padding-right: 6px;
    }
  }

  @keyframes ag-shake-left-to-right {
    from {
      padding-left: 6px;
      padding-right: 2px;
    }
    to {
      padding-left: 2px;
      padding-right: 6px;
    }
  }

  .ag-root-wrapper {
    cursor: default;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
  }
  .ag-root-wrapper.ag-layout-normal {
    height: 100%;
  }
  .ag-root-wrapper .ag-watermark {
    position: absolute;
    bottom: 10px;
    right: 25px;
    opacity: 0.5;
    -webkit-transition: opacity 1s ease-out 3s;
    transition: opacity 1s ease-out 3s;
  }
  .ag-root-wrapper .ag-watermark:before {
    content: "";
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDk0cHgiIGhlaWdodD0iMjM5cHgiIHZpZXdCb3g9IjAgMCA0OTQgMjM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+TG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0wLjYxMjg0OTkzMSwxMDggTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgQzAuNjEyODQ5OTMxLDYyLjEwMDY1MzYgMy40NzE4MzM3OCw1Ny4xNDg3NDgzIDguMTEyODQ5OTMsNTQuNDY5MjU2NCBMOTguMzA2NDI1LDIuMzk1OTcxNTcgTDk4LjMwNjQyNSwyLjM5NTk3MTU3IEMxMDIuOTQ3NDQxLC0wLjI4MzUyMDM1OCAxMDguNjY1NDA5LC0wLjI4MzUyMDM1OCAxMTMuMzA2NDI1LDIuMzk1OTcxNTcgTDExMy4zMDY0MjUsMi4zOTU5NzE1NyBMMjAzLjUsNTQuNDY5MjU2NCBMMjAzLjUsNTQuNDY5MjU2NCBDMjA4LjE0MTAxNiw1Ny4xNDg3NDgzIDIxMSw2Mi4xMDA2NTM2IDIxMSw2Ny40NTk2Mzc0IEwyMTEsMTM4IEwxODEsMTM4IEwxODAuOTk3MDQxLDkzLjk5OTk5OTggTDE4MC45OTYwMzIsOTMuOTk5OTk5OSBDMTgwLjk5NTQ3NSw4NS43MTYxMjI2IDE3NC4yNzk5MDksNzkuMDAxMDA4NyAxNjUuOTk2MDMyLDc5LjAwMTAwODcgTDEyMiw3OC45OTk5OTk5IEMxMTMuNzE1NzI5LDc4Ljk5OTk5OTkgMTA3LDg1LjcxNTcyODYgMTA3LDkzLjk5OTk5OTkgTDEwNywxMzYuMDE1NjIzIEwxMDcsMTM2LjAxNTYyMyBDMTA3LDE0NC4yOTk4OTUgMTEzLjcxNTcyOSwxNTEuMDE1NjIzIDEyMiwxNTEuMDE1NjIzIEwxNjgsMTUxLjAxNTYyMyBMMTY4LDE2MyBDMTY4LDE2NC42NTY4NTQgMTY2LjY1Njg1NCwxNjYgMTY1LDE2NiBMMTIwLDE2NiBMMTIwLDE3OSBMMTY1Ljk5NjAzMiwxNzkgTDE2NS45OTYwMzIsMTc4Ljk5Nzg3NyBDMTc0LjI3OTQ3NCwxNzguOTk3ODc3IDE4MC45OTQ4NiwxNzIuMjgzNDQyIDE4MC45OTYwMzIsMTY0IEwxODEsMTUwLjk2MDU1NCBMMjExLDE1MC45NjA1NTQgTDIxMSwxNzEuNjA2MjA3IEwyMTEsMTcxLjYwNjIwNyBDMjExLDE3Ni45NjUxOTEgMjA4LjE0MTAxNiwxODEuOTE3MDk2IDIwMy41LDE4NC41OTY1ODggTDExMy4zMDY0MjUsMjM2LjY2OTg3MyBMMTEzLjMwNjQyNSwyMzYuNjY5ODczIEMxMDguNjY1NDA5LDIzOS4zNDkzNjUgMTAyLjk0NzQ0MSwyMzkuMzQ5MzY1IDk4LjMwNjQyNSwyMzYuNjY5ODczIEw4LjExMjg0OTkzLDE4NC41OTY1ODggTDguMTEyODQ5OTMsMTg0LjU5NjU4OCBDMy40NzE4MzM3OCwxODEuOTE3MDk2IDAuNjEyODQ5OTMxLDE3Ni45NjUxOTEgMC42MTI4NDk5MzEsMTcxLjYwNjIwNyBMMC42MTI4NDk5MzEsMTIxIEwyNywxMjEgTDI3LDEzNiBDMjcsMTQ0LjI4NDI3MSAzMy43MTU3Mjg3LDE1MSA0MiwxNTEgTDQyLDE1MSBMMTAwLDE1MSBMMTAwLDk0IEMxMDAsODUuNzE1NzI4OCA5My4yODQyNzEyLDc5IDg1LDc5IEwyNyw3OSBMMjcsOTIgTDg0LDkyIEM4NS42NTY4NTQyLDkyIDg3LDkzLjM0MzE0NTggODcsOTUgTDg3LDk1IEw4NywxMDggTDAuNjEyODQ5OTMxLDEwOCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxvZ28iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDc3LDU1IEw0OTQsNTUgTDQ5NCwxNTEgTDQzNSwxNTEgQzQyNi43MTU3MjksMTUxIDQyMCwxNDQuMjg0MjcxIDQyMCwxMzYgTDQyMCw5NiBDNDIwLDg3LjcxNTcyODggNDI2LjcxNTcyOSw4MSA0MzUsODEgTDQzNSw4MSBMNDc3LDgxIEw0NzcsNTUgWiBNNDQwLDk4IEM0MzguMzQzMTQ2LDk4IDQzNyw5OS4zNDMxNDU4IDQzNywxMDEgTDQzNywxMzEgQzQzNywxMzIuNjU2ODU0IDQzOC4zNDMxNDYsMTM0IDQ0MCwxMzQgTDQ3NywxMzQgTDQ3Nyw5OCBMNDQwLDk4IFoiIGlkPSJkIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTYuMDAwMDAwLCA1NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTYiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMCAyNiAxNyAyNiAxNyA5NiAwIDk2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC03IiBmaWxsPSIjRTExRjIyIiBwb2ludHM9IjAgMS4xMzY4NjgzOGUtMTMgMTcgMS4xMzY4NjgzOGUtMTMgMTcgMTcgMCAxNyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzEsMTUxIEwzNDgsMTUxIEwzNDgsMTAxIEwzNDgsMTAxIEMzNDgsOTkuMzQzMTQ1OCAzNDkuMzQzMTQ2LDk4IDM1MSw5OCBMMzg5LDk4IEwzODksODEgTDM0Niw4MSBMMzQ2LDgxIEMzMzcuNzE1NzI5LDgxIDMzMSw4Ny43MTU3Mjg4IDMzMSw5NiBMMzMxLDE1MSBaIiBpZD0iciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzI0LDg2IEwzMjQsNzYgTDMyNCw3NiBDMzI0LDY3LjcxNTcyODggMzE3LjI4NDI3MSw2MSAzMDksNjEgTDI0OSw2MSBMMjQ5LDYxIEMyNDAuNzE1NzI5LDYxIDIzNCw2Ny43MTU3Mjg4IDIzNCw3NiBMMjM0LDEzNiBMMjM0LDEzNiBDMjM0LDE0NC4yODQyNzEgMjQwLjcxNTcyOSwxNTEgMjQ5LDE1MSBMMzA5LDE1MSBMMzA5LDE1MSBDMzE3LjI4NDI3MSwxNTEgMzI0LDE0NC4yODQyNzEgMzI0LDEzNiBMMzI0LDEwMCBMMjg3LDEwMCBMMjg3LDExNyBMMzA3LDExNyBMMzA3LDEzMSBMMzA3LDEzMSBDMzA3LDEzMi42NTY4NTQgMzA1LjY1Njg1NCwxMzQgMzA0LDEzNCBMMjU0LDEzNCBMMjU0LDEzNCBDMjUyLjM0MzE0NiwxMzQgMjUxLDEzMi42NTY4NTQgMjUxLDEzMSBMMjUxLDgxIEwyNTEsODEgQzI1MSw3OS4zNDMxNDU4IDI1Mi4zNDMxNDYsNzggMjU0LDc4IEwzMDQsNzggTDMwNCw3OCBDMzA1LjY1Njg1NCw3OCAzMDcsNzkuMzQzMTQ1OCAzMDcsODEgTDMwNyw4NiBMMzI0LDg2IFoiIGlkPSJHIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJhZyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRTExRjIyIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJnIiBmaWxsPSIjRTExRjIyIiB4PSIxMjAiIHk9IjkyIiB3aWR0aD0iNDgiIGhlaWdodD0iNDYiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDAsMTIxIEw4NywxMjEgTDg3LDEzOCBMNDMsMTM4IEw0MywxMzggQzQxLjM0MzE0NTgsMTM4IDQwLDEzNi42NTY4NTQgNDAsMTM1IEw0MCwxMjEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRTExRjIyIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
    -webkit-filter: invert(50%);
    filter: invert(50%);
    background-repeat: no-repeat;
    background-size: 110px 60px;
    display: block;
    height: 60px;
    width: 110px;
  }
  .ag-root-wrapper .ag-watermark .ag-watermark-text {
    opacity: 0.5;
    font-weight: bold;
    font-family: Impact;
    font-size: 19px;
  }

  .ag-root-wrapper-body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .ag-root-wrapper-body.ag-layout-normal {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    height: 0;
    min-height: 0;
  }

  .ag-root {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .ag-root.ag-layout-normal,
  .ag-root.ag-layout-auto-height {
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 0;
  }
  .ag-root.ag-layout-normal {
    height: 100%;
  }

  /**
   ****************************
   * Viewports
   ****************************
  */
  .ag-header-viewport,
  .ag-floating-top-viewport,
  .ag-body-viewport,
  .ag-pinned-left-cols-viewport,
  .ag-center-cols-viewport,
  .ag-pinned-right-cols-viewport,
  .ag-floating-bottom-viewport,
  .ag-body-horizontal-scroll-viewport,
  .ag-virtual-list-viewport {
    position: relative;
    height: 100%;
    min-width: 0px;
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  @media print {
    .ag-layout-normal {
      display: none;
    }
    .ag-root-wrapper,
    .ag-root-wrapper-body,
    .ag-root,
    .ag-body-viewport,
    .ag-center-cols-container,
    .ag-center-cols-viewport,
    .ag-center-cols-clipper,
    .ag-body-horizontal-scroll-viewport,
    .ag-virtual-list-viewport {
      height: auto !important;
      overflow: visible !important;
      display: block !important;
    }
  }

  .ag-body-viewport {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .ag-body-viewport.ag-layout-normal {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .ag-body-viewport:not(.ag-layout-print).ag-force-vertical-scroll {
    overflow-y: scroll;
  }

  .ag-pinned-left-cols-viewport,
  .ag-pinned-right-cols-viewport {
    -webkit-box-flex: 1000;
    -ms-flex-positive: 1000;
    flex-grow: 1000;
  }

  .ag-center-cols-viewport {
    width: 100%;
    overflow-x: auto;
  }

  .ag-body-horizontal-scroll-viewport {
    overflow-x: scroll;
  }

  .ag-virtual-list-viewport {
    overflow: auto;
    width: 100%;
  }

  /**
   ****************************
   * Containers
   ****************************
  */
  .ag-header-container,
  .ag-floating-top-container,
  .ag-body-container,
  .ag-pinned-right-cols-container,
  .ag-center-cols-container,
  .ag-pinned-left-cols-container,
  .ag-floating-bottom-container,
  .ag-body-horizontal-scroll-container,
  .ag-full-width-container,
  .ag-floating-bottom-full-width-container,
  .ag-virtual-list-container {
    position: relative;
  }

  .ag-header-container,
  .ag-floating-top-container,
  .ag-floating-bottom-container {
    height: 100%;
    white-space: nowrap;
  }

  .ag-body-viewport .ag-center-cols-clipper {
    min-height: 100%;
  }

  .ag-body-viewport.ag-layout-auto-height .ag-center-cols-clipper,
  .ag-body-viewport.ag-layout-auto-height .ag-center-cols-container {
    min-height: 50px;
  }

  .ag-body-viewport .ag-center-cols-container {
    display: block;
  }

  .ag-body-viewport.ag-layout-print {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
  }
  .ag-body-viewport.ag-layout-print .ag-center-cols-clipper {
    min-width: 100%;
  }

  .ag-pinned-right-cols-container {
    display: block;
  }

  .ag-body-horizontal-scroll-container {
    height: 100%;
  }

  .ag-full-width-container,
  .ag-floating-top-full-width-container,
  .ag-floating-bottom-full-width-container {
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none;
  }

  .ag-full-width-container {
    width: 100%;
  }

  .ag-floating-bottom-full-width-container,
  .ag-floating-top-full-width-container {
    display: inline-block;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  .ag-virtual-list-container {
    overflow: hidden;
  }

  /**
   ****************************
   * Scrollers
   ****************************
  */
  .ag-center-cols-clipper {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .ag-body-horizontal-scroll {
    min-height: 0;
    min-width: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
  }

  .ag-layout-print .ag-body-horizontal-scroll {
    display: none;
  }

  .ag-horizontal-left-spacer,
  .ag-horizontal-right-spacer {
    height: 100%;
    min-width: 0;
    -webkit-box-flex: 1000;
    -ms-flex-positive: 1000;
    flex-grow: 1000;
    overflow-x: scroll;
  }
  .ag-horizontal-left-spacer.ag-scroller-corner,
  .ag-horizontal-right-spacer.ag-scroller-corner {
    overflow-x: hidden;
  }

  /**
   ****************************
   * Headers
   ****************************
  */
  .ag-header,
  .ag-pinned-left-header,
  .ag-pinned-right-header {
    display: inline-block;
    overflow: hidden;
  }
  .ag-header .ag-header-cell-sortable,
  .ag-pinned-left-header .ag-header-cell-sortable,
  .ag-pinned-right-header .ag-header-cell-sortable {
    cursor: pointer;
  }

  .ag-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    white-space: nowrap;
  }

  .ag-header-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .ag-pinned-left-header {
    height: 100%;
  }

  .ag-pinned-right-header {
    height: 100%;
  }

  .ag-header-row {
    position: absolute;
    overflow: hidden;
  }

  .ag-header-overlay {
    display: block;
    position: absolute;
  }

  .ag-header-cell {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    height: 100%;
    overflow: hidden;
  }

  .ag-header-group-cell-label,
  .ag-header-cell-label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: hidden;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-overflow: ellipsis;
    -ms-flex-item-align: stretch;
    align-self: stretch;
  }

  .ag-header-cell-label .ag-header-cell-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ag-numeric-header .ag-header-cell-label {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .ag-header-group-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ag-header-cell-resize {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 4px;
  }

  .ag-header-expand-icon {
    padding-left: 4px;
  }

  .ag-header-select-all {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  /**
   ****************************
   * Columns
   ****************************
  */
  .ag-column-moving .ag-cell {
    -webkit-transition: left 0.2s;
    transition: left 0.2s;
  }

  .ag-column-moving .ag-header-cell {
    -webkit-transition: left 0.2s;
    transition: left 0.2s;
  }

  .ag-column-moving .ag-header-group-cell {
    -webkit-transition: left 0.2s, width 0.2s;
    transition: left 0.2s, width 0.2s;
  }

  /**
   ****************************
   * Column Panel
   ****************************
  */
  .ag-column-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  .ag-column-select-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    -webkit-box-flex: 4;
    -ms-flex-positive: 4;
    flex-grow: 4;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
  }
  .ag-column-select-panel .ag-primary-cols-header-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
  }
  .ag-column-select-panel .ag-primary-cols-header-panel .ag-column-name-filter {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .ag-column-select-panel
    .ag-primary-cols-header-panel
    .ag-primary-cols-filter-wrapper {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .ag-column-select-panel
    .ag-primary-cols-header-panel
    .ag-primary-cols-filter-wrapper
    input {
    width: 100%;
  }
  .ag-column-select-panel .ag-primary-cols-list-panel {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: auto;
  }

  .ag-column-drop {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: auto;
    width: 100%;
  }
  .ag-column-drop .ag-column-drop-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-column-drop .ag-column-drop-list .ag-column-drop-cell {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-column-drop
    .ag-column-drop-list
    .ag-column-drop-cell
    .ag-column-drop-cell-text {
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ag-column-drop.ag-column-drop-vertical {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0px;
    flex: 1 1 0;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
  .ag-column-drop.ag-column-drop-vertical > div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-column-drop.ag-column-drop-vertical .ag-column-drop-list {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow-x: auto;
  }
  .ag-column-drop.ag-column-drop-vertical .ag-column-drop-empty-message {
    display: block;
  }

  .ag-column-drop.ag-column-drop-horizontal {
    white-space: nowrap;
    overflow: hidden;
  }

  .ag-filter-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .ag-filter-panel .ag-filter-toolpanel-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .ag-filter-panel .ag-filter-toolpanel-header div:not(.ag-input-wrapper) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-filter-panel .ag-group-item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  /**
   ****************************
   * Rows
   ****************************
  */
  .ag-row-animation .ag-row {
    -webkit-transition: top 0.4s, height 0.4s, background-color 0.1s,
      opacity 0.2s, -webkit-transform 0.4s;
    transition: top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s,
      -webkit-transform 0.4s;
    transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s,
      opacity 0.2s;
    transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s,
      opacity 0.2s, -webkit-transform 0.4s;
  }

  .ag-row-no-animation .ag-row {
    -webkit-transition: background-color 0.1s;
    transition: background-color 0.1s;
  }

  .ag-row {
    white-space: nowrap;
    width: 100%;
  }

  .ag-row-position-absolute {
    position: absolute;
  }

  .ag-row-position-relative {
    position: relative;
  }

  .ag-full-width-row {
    overflow: hidden;
    pointer-events: all;
  }

  .ag-row-inline-editing {
    z-index: 1;
  }

  .ag-row-dragging {
    z-index: 2;
  }

  .ag-stub-cell {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  /**
   ****************************
   * Cells
   ****************************
  */
  .ag-cell {
    display: inline-block;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ag-cell-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .ag-cell-wrapper.ag-row-group {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .ag-cell-wrapper .ag-cell-value,
  .ag-cell-wrapper .ag-group-value {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ag-full-width-row.ag-row-group .ag-cell-wrapper {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .ag-cell-with-height {
    height: 100%;
  }

  .ag-group-cell-entire-row {
    display: inline-block;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  .ag-footer-cell-entire-row {
    display: inline-block;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  .ag-cell-inline-editing {
    z-index: 1;
  }
  .ag-cell-inline-editing .ag-cell-edit-input,
  .ag-cell-inline-editing .ag-input-wrapper {
    height: 100%;
    width: 100%;
    line-height: normal;
  }

  /**
   ****************************
   * Filters
   ****************************
  */
  .ag-set-filter-item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-set-filter-item > div,
  .ag-set-filter-item > span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .ag-filter .ag-filter-checkbox {
    pointer-events: none;
  }

  .ag-filter .ag-filter-body-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .ag-filter .ag-filter-filter {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  /**
   ****************************
   * Floating Filter
   ****************************
  */
  .ag-floating-filter-full-body .ag-react-container,
  .ag-floating-filter-body .ag-react-container {
    height: 100%;
  }

  .ag-floating-filter-body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    height: 100%;
  }
  .ag-floating-filter-body input {
    margin: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    max-height: calc(100% - 1px);
  }

  .ag-floating-filter-full-body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .ag-floating-filter-full-body > div {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .ag-floating-filter-full-body input {
    margin: 0;
    width: 100%;
  }
  .ag-floating-filter-full-body input[type="range"] {
    height: 100%;
  }

  .ag-floating-filter {
    display: inline-block;
    position: absolute;
  }

  .ag-floating-filter-input {
    width: 100%;
  }

  .ag-floating-filter-input:-moz-read-only {
    background-color: #eee;
  }

  .ag-floating-filter-input:read-only {
    background-color: #eee;
  }

  .ag-floating-filter-menu {
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ag-floating-filter-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
  }

  /**
   ****************************
   * Drag & Drop
   ****************************
  */
  .ag-dnd-ghost {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #e5e5e5;
    border: 1px solid black;
    cursor: move;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    overflow: hidden;
    padding: 3px;
    position: absolute;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 10;
  }

  .ag-dnd-ghost-icon {
    padding: 2px;
  }

  /**
   ****************************
   * Overlay
   ****************************
  */
  .ag-overlay {
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .ag-overlay-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    pointer-events: none;
    width: 100%;
  }

  .ag-overlay-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 100%;
    height: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
  }
  .ag-overlay-wrapper.ag-overlay-loading-wrapper {
    pointer-events: all;
  }

  .ag-overlay-no-rows-wrapper.ag-layout-auto-height {
    padding-top: 30px;
  }

  /**
   ****************************
   * Popup
   ****************************
  */
  .ag-popup > div {
    z-index: 5;
  }

  .ag-popup-backdrop {
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .ag-popup-editor {
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 1;
  }

  /**
   ****************************
   * Virtual Lists
   ****************************
  */
  .ag-virtual-list-item {
    position: absolute;
    width: 100%;
  }
  .ag-virtual-list-item span:empty:not(.ag-icon) {
    border-left: 1px solid transparent;
  }

  /**
   ****************************
   * Floating Top and Bottom
   ****************************
  */
  .ag-floating-top {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .ag-pinned-left-floating-top {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0px;
    -webkit-box-flex: 1000;
    -ms-flex-positive: 1000;
    flex-grow: 1000;
  }

  .ag-pinned-right-floating-top {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0px;
    -webkit-box-flex: 1000;
    -ms-flex-positive: 1000;
    flex-grow: 1000;
  }

  .ag-floating-bottom {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .ag-pinned-left-floating-bottom {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0px;
    -webkit-box-flex: 1000;
    -ms-flex-positive: 1000;
    flex-grow: 1000;
  }

  .ag-pinned-right-floating-bottom {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0px;
    -webkit-box-flex: 1000;
    -ms-flex-positive: 1000;
    flex-grow: 1000;
  }

  /**
   ****************************
   * Dialog
   ****************************
  */
  .ag-dialog,
  .ag-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }
  .ag-dialog .ag-title-bar,
  .ag-panel .ag-title-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: default;
  }
  .ag-dialog .ag-title-bar .ag-title-bar-title,
  .ag-panel .ag-title-bar .ag-title-bar-title {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .ag-dialog .ag-title-bar .ag-title-bar-buttons,
  .ag-panel .ag-title-bar .ag-title-bar-buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .ag-dialog .ag-title-bar .ag-title-bar-buttons .ag-button,
  .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button {
    cursor: pointer;
  }
  .ag-dialog .ag-panel-content-wrapper,
  .ag-panel .ag-panel-content-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;
  }
  .ag-dialog .ag-panel-content-wrapper > div,
  .ag-panel .ag-panel-content-wrapper > div {
    width: 100%;
    height: 100%;
  }

  .ag-dialog {
    position: absolute;
  }
  .ag-dialog .ag-resizer {
    position: absolute;
    pointer-events: none;
    z-index: 1;
  }
  .ag-dialog .ag-resizer.ag-resizer-topLeft {
    top: 0;
    left: 0;
    height: 5px;
    width: 5px;
    cursor: nwse-resize;
  }
  .ag-dialog .ag-resizer.ag-resizer-top {
    top: 0;
    left: 5px;
    right: 5px;
    height: 5px;
    cursor: ns-resize;
  }
  .ag-dialog .ag-resizer.ag-resizer-topRight {
    top: 0;
    right: 0;
    height: 5px;
    width: 5px;
    cursor: nesw-resize;
  }
  .ag-dialog .ag-resizer.ag-resizer-right {
    top: 5px;
    right: 0;
    bottom: 5px;
    width: 5px;
    cursor: ew-resize;
  }
  .ag-dialog .ag-resizer.ag-resizer-bottomRight {
    bottom: 0;
    right: 0;
    height: 5px;
    width: 5px;
    cursor: nwse-resize;
  }
  .ag-dialog .ag-resizer.ag-resizer-bottom {
    bottom: 0;
    left: 5px;
    right: 5px;
    height: 5px;
    cursor: ns-resize;
  }
  .ag-dialog .ag-resizer.ag-resizer-bottomLeft {
    bottom: 0;
    left: 0;
    height: 5px;
    width: 5px;
    cursor: nesw-resize;
  }
  .ag-dialog .ag-resizer.ag-resizer-left {
    left: 0;
    top: 5px;
    bottom: 5px;
    width: 5px;
    cursor: ew-resize;
  }
  .ag-dialog .ag-message-box {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .ag-dialog .ag-message-box .ag-message-box-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-dialog .ag-message-box .ag-message-box-button-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  /**
   ****************************
   * Tooltip
   ****************************
  */
  .ag-tooltip {
    position: absolute;
    pointer-events: none;
    z-index: 99999;
  }

  .ag-chart-tooltip {
    display: table;
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
    z-index: 99999;
    font: 12px Verdana, sans-serif;
    color: black;
    background: #f4f4f4;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 1px rgba(3, 3, 3, 0.7),
      0.5vh 0.5vh 1vh rgba(3, 3, 3, 0.25);
    box-shadow: 0 0 1px rgba(3, 3, 3, 0.7), 0.5vh 0.5vh 1vh rgba(3, 3, 3, 0.25);
    opacity: 0;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    -webkit-transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition-property: opacity, -webkit-transform;
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-property: opacity, transform, -webkit-transform;
  }
  .ag-chart-tooltip.visible {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .ag-chart-tooltip .title {
    font-weight: bold;
    padding: 7px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: white;
    background-color: #888888;
  }
  .ag-chart-tooltip .content {
    padding: 7px;
    line-height: 1.7em;
  }

  /**
   ****************************
   * Animations
   ****************************
  */
  .ag-value-slide-out {
    margin-right: 5px;
    opacity: 1;
    -webkit-transition: opacity 3s, margin-right 3s;
    transition: opacity 3s, margin-right 3s;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
  }

  .ag-value-slide-out-end {
    margin-right: 10px;
    opacity: 0;
  }

  .ag-opacity-zero {
    opacity: 0 !important;
  }

  /**
   ****************************
   * Menu
   ****************************
  */
  .ag-menu {
    max-height: 100%;
    overflow-y: auto;
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ag-menu-column-select-wrapper {
    height: 265px;
    overflow: auto;
    width: 200px;
  }

  .ag-menu-list {
    display: table;
  }

  .ag-menu-option,
  .ag-menu-separator {
    display: table-row;
  }
  .ag-menu-option > span,
  .ag-menu-separator > span {
    display: table-cell;
    vertical-align: middle;
  }

  .ag-menu-option-text {
    white-space: nowrap;
  }

  .ag-menu-column-select-wrapper .ag-column-select-panel {
    height: 100%;
  }

  /**
   ****************************
   * Rich Select
   ****************************
  */
  .ag-rich-select {
    cursor: default;
    outline: none;
  }
  .ag-rich-select .ag-rich-select-value {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-rich-select .ag-rich-select-value > span {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .ag-rich-select .ag-rich-select-value > span.ag-icon {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
  }
  .ag-rich-select .ag-rich-select-list {
    position: relative;
  }
  .ag-rich-select .ag-rich-select-list .ag-virtual-list-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .ag-rich-select
    .ag-rich-select-list
    .ag-virtual-list-item
    .ag-rich-select-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    white-space: nowrap;
  }

  /**
   ****************************
   * Pagination
   ****************************
  */
  .ag-paging-panel {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .ag-paging-panel .ag-paging-row-summary-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .ag-paging-panel .ag-paging-row-summary-panel span {
    margin: 0 3px;
  }

  .ag-paging-page-summary-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-paging-page-summary-panel .ag-disabled {
    pointer-events: none;
  }
  .ag-paging-page-summary-panel .ag-paging-button {
    position: relative;
    overflow: hidden;
  }
  .ag-paging-page-summary-panel .ag-paging-button button {
    position: absolute;
  }

  /**
   ****************************
   * Tool Panel
   ****************************
  */
  .ag-tool-panel-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow-y: auto;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 200px;
  }

  .ag-column-tool-panel-column,
  .ag-column-tool-panel-column-group {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ag-column-tool-panel-column .ag-column-tool-panel-column,
  .ag-column-tool-panel-column .ag-column-tool-panel-column-group,
  .ag-column-tool-panel-column-group .ag-column-tool-panel-column,
  .ag-column-tool-panel-column-group .ag-column-tool-panel-column-group {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ag-column-select-checkbox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .ag-tool-panel-horizontal-resize {
    cursor: col-resize;
    height: 100%;
    position: absolute;
    top: 0;
    width: 5px;
    z-index: 1;
  }

  .ag-ltr .ag-side-bar-left .ag-tool-panel-horizontal-resize,
  .ag-rtl .ag-side-bar-right .ag-tool-panel-horizontal-resize {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
    right: 0;
  }

  .ag-ltr .ag-side-bar-right .ag-tool-panel-horizontal-resize,
  .ag-rtl .ag-side-bar-left .ag-tool-panel-horizontal-resize {
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
    left: 0;
  }

  .loading-filter {
    background-color: #e6e6e6;
    height: 100%;
    padding: 5px;
    position: absolute;
    top: 34px;
    width: 100%;
    z-index: 1;
  }

  .ag-details-row {
    height: 100%;
    width: 100%;
  }

  .ag-details-grid {
    height: 100%;
    width: 100%;
  }

  .ag-header-group-cell {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
  }

  .ag-cell-label-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
  }

  .ag-numeric-header .ag-cell-label-container {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  /**
   ****************************
   * Side Bar
   ****************************
  */
  .ag-side-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .ag-side-bar.ag-side-bar-left {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .ag-side-bar .ag-side-buttons div button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
  }
  .ag-side-bar .ag-side-buttons div button span:not(.ag-icon) {
    -webkit-writing-mode: tb;
    -ms-writing-mode: tb;
    writing-mode: tb;
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
  }
  .ag-side-bar .ag-side-buttons div button .ag-icon {
    display: inline;
  }
  .ag-side-bar .panel-container {
    width: 180px;
  }
  .ag-side-bar.full-width .panel-container {
    width: 200px;
  }

  .ag-rtl .ag-side-bar .ag-side-buttons button span:not(.ag-icon) {
    -webkit-writing-mode: tb-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
  }

  /**
   ****************************
   * Status Bar
   ****************************
  */
  .ag-status-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
  }
  .ag-status-bar .ag-status-panel {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
  }
  .ag-status-bar .ag-name-value {
    white-space: nowrap;
  }

  .ag-status-bar-left {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
  }

  .ag-status-bar-center {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
  }

  .ag-status-bar-right {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
  }

  /**
   ****************************
   * Widgets
   ****************************
  */
  .ag-group-component {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
  }
  .ag-group-component .ag-group-component-title-bar,
  .ag-group-component .ag-group-component-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-group-component .ag-group-component-toolbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-group-component .ag-group-component-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .ag-group-component .ag-group-component-container .ag-group-subgroup {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-item-align: stretch;
    align-self: stretch;
  }
  .ag-group-component .ag-column-group-icons > span {
    display: block;
  }
  .ag-group-component .ag-group-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-group-component.ag-alignment-stretch .ag-group-item {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
  .ag-group-component.ag-alignment-start .ag-group-item {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .ag-group-component.ag-alignment-end .ag-group-item {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .ag-group-component.ag-disabled .ag-group-component-container {
    pointer-events: none;
  }
  .ag-group-component.ag-collapsed .ag-group-component-toolbar,
  .ag-group-component.ag-collapsed .ag-group-component-container {
    display: none;
  }

  .ag-toggle-button .ag-input-wrapper .ag-icon {
    -webkit-transition: right 0.3s;
    transition: right 0.3s;
    position: absolute;
    top: -1px;
  }

  .ag-input-field {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-input-field input,
  .ag-input-field select,
  .ag-input-field textarea {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
  }

  .ag-range-field {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .ag-picker-field > .ag-wrapper,
  .ag-slider > .ag-wrapper,
  .ag-angle-select > .ag-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .ag-picker-field > .ag-wrapper > div,
  .ag-slider > .ag-wrapper > div,
  .ag-angle-select > .ag-wrapper > div {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  .ag-angle-select {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-angle-select .ag-angle-select-field .ag-parent-circle {
    display: block;
    position: relative;
  }
  .ag-angle-select .ag-angle-select-field .ag-child-circle {
    position: absolute;
  }

  .ag-picker-field {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ag-picker-field > .ag-wrapper > button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 0;
    padding: 0;
    margin: 0;
  }

  .ag-color-picker > .ag-wrapper {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    overflow: hidden;
  }

  .ag-color-picker button {
    cursor: pointer;
  }

  .ag-labeled.ag-label-align-right label {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }

  .ag-labeled.ag-label-align-right > div {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
  }

  .ag-labeled.ag-label-align-top {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .ag-labeled.ag-label-align-top > div {
    -ms-flex-item-align: stretch;
    align-self: stretch;
  }

  .ag-color-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
  }
  .ag-color-panel .ag-spectrum-color {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;
    cursor: default;
  }
  .ag-color-panel .ag-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .ag-color-panel .ag-spectrum-val {
    cursor: pointer;
  }
  .ag-color-panel .ag-spectrum-dragger {
    position: absolute;
    pointer-events: none;
    cursor: pointer;
  }
  .ag-color-panel .ag-spectrum-hue {
    cursor: default;
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      color-stop(3%, #ff0000),
      color-stop(17%, #ffff00),
      color-stop(33%, #00ff00),
      color-stop(50%, #00ffff),
      color-stop(67%, #0000ff),
      color-stop(83%, #ff00ff),
      to(#ff0000)
    );
    background: linear-gradient(
      to left,
      #ff0000 3%,
      #ffff00 17%,
      #00ff00 33%,
      #00ffff 50%,
      #0000ff 67%,
      #ff00ff 83%,
      #ff0000 100%
    );
  }
  .ag-color-panel .ag-spectrum-alpha {
    cursor: default;
  }
  .ag-color-panel .ag-spectrum-hue-background {
    width: 100%;
    height: 100%;
  }
  .ag-color-panel .ag-spectrum-alpha-background {
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(0, 0, 0, 0)),
      to(black)
    );
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), black);
    width: 100%;
    height: 100%;
  }
  .ag-color-panel .ag-hue-alpha {
    cursor: pointer;
  }
  .ag-color-panel .ag-spectrum-slider {
    position: absolute;
    pointer-events: none;
  }
  .ag-color-panel .ag-spectrum-text-value {
    display: inline-block;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
  }
  .ag-color-panel .ag-spectrum-text-value:focus {
    outline: none;
    outline-offset: 0;
  }
  .ag-color-panel .ag-recent-colors {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .ag-color-panel .ag-recent-colors > div {
    cursor: pointer;
  }

  .ag-ltr .ag-toolpanel-indent-1 {
    padding-left: 10px;
  }

  .ag-rtl .ag-toolpanel-indent-1 {
    padding-right: 10px;
  }

  .ag-ltr .ag-row-group-indent-1 {
    padding-left: 10px;
  }

  .ag-rtl .ag-row-group-indent-1 {
    padding-right: 10px;
  }

  .ag-ltr .ag-toolpanel-indent-2 {
    padding-left: 20px;
  }

  .ag-rtl .ag-toolpanel-indent-2 {
    padding-right: 20px;
  }

  .ag-ltr .ag-row-group-indent-2 {
    padding-left: 20px;
  }

  .ag-rtl .ag-row-group-indent-2 {
    padding-right: 20px;
  }

  .ag-ltr .ag-toolpanel-indent-3 {
    padding-left: 30px;
  }

  .ag-rtl .ag-toolpanel-indent-3 {
    padding-right: 30px;
  }

  .ag-ltr .ag-row-group-indent-3 {
    padding-left: 30px;
  }

  .ag-rtl .ag-row-group-indent-3 {
    padding-right: 30px;
  }

  .ag-ltr .ag-toolpanel-indent-4 {
    padding-left: 40px;
  }

  .ag-rtl .ag-toolpanel-indent-4 {
    padding-right: 40px;
  }

  .ag-ltr .ag-row-group-indent-4 {
    padding-left: 40px;
  }

  .ag-rtl .ag-row-group-indent-4 {
    padding-right: 40px;
  }

  .ag-ltr .ag-toolpanel-indent-5 {
    padding-left: 50px;
  }

  .ag-rtl .ag-toolpanel-indent-5 {
    padding-right: 50px;
  }

  .ag-ltr .ag-row-group-indent-5 {
    padding-left: 50px;
  }

  .ag-rtl .ag-row-group-indent-5 {
    padding-right: 50px;
  }

  .ag-ltr .ag-toolpanel-indent-6 {
    padding-left: 60px;
  }

  .ag-rtl .ag-toolpanel-indent-6 {
    padding-right: 60px;
  }

  .ag-ltr .ag-row-group-indent-6 {
    padding-left: 60px;
  }

  .ag-rtl .ag-row-group-indent-6 {
    padding-right: 60px;
  }

  .ag-ltr .ag-toolpanel-indent-7 {
    padding-left: 70px;
  }

  .ag-rtl .ag-toolpanel-indent-7 {
    padding-right: 70px;
  }

  .ag-ltr .ag-row-group-indent-7 {
    padding-left: 70px;
  }

  .ag-rtl .ag-row-group-indent-7 {
    padding-right: 70px;
  }

  .ag-ltr .ag-toolpanel-indent-8 {
    padding-left: 80px;
  }

  .ag-rtl .ag-toolpanel-indent-8 {
    padding-right: 80px;
  }

  .ag-ltr .ag-row-group-indent-8 {
    padding-left: 80px;
  }

  .ag-rtl .ag-row-group-indent-8 {
    padding-right: 80px;
  }

  .ag-ltr .ag-toolpanel-indent-9 {
    padding-left: 90px;
  }

  .ag-rtl .ag-toolpanel-indent-9 {
    padding-right: 90px;
  }

  .ag-ltr .ag-row-group-indent-9 {
    padding-left: 90px;
  }

  .ag-rtl .ag-row-group-indent-9 {
    padding-right: 90px;
  }

  .ag-ltr .ag-toolpanel-indent-10 {
    padding-left: 100px;
  }

  .ag-rtl .ag-toolpanel-indent-10 {
    padding-right: 100px;
  }

  .ag-ltr .ag-row-group-indent-10 {
    padding-left: 100px;
  }

  .ag-rtl .ag-row-group-indent-10 {
    padding-right: 100px;
  }

  .ag-ltr .ag-toolpanel-indent-11 {
    padding-left: 110px;
  }

  .ag-rtl .ag-toolpanel-indent-11 {
    padding-right: 110px;
  }

  .ag-ltr .ag-row-group-indent-11 {
    padding-left: 110px;
  }

  .ag-rtl .ag-row-group-indent-11 {
    padding-right: 110px;
  }

  .ag-ltr .ag-toolpanel-indent-12 {
    padding-left: 120px;
  }

  .ag-rtl .ag-toolpanel-indent-12 {
    padding-right: 120px;
  }

  .ag-ltr .ag-row-group-indent-12 {
    padding-left: 120px;
  }

  .ag-rtl .ag-row-group-indent-12 {
    padding-right: 120px;
  }

  .ag-ltr .ag-toolpanel-indent-13 {
    padding-left: 130px;
  }

  .ag-rtl .ag-toolpanel-indent-13 {
    padding-right: 130px;
  }

  .ag-ltr .ag-row-group-indent-13 {
    padding-left: 130px;
  }

  .ag-rtl .ag-row-group-indent-13 {
    padding-right: 130px;
  }

  .ag-ltr .ag-toolpanel-indent-14 {
    padding-left: 140px;
  }

  .ag-rtl .ag-toolpanel-indent-14 {
    padding-right: 140px;
  }

  .ag-ltr .ag-row-group-indent-14 {
    padding-left: 140px;
  }

  .ag-rtl .ag-row-group-indent-14 {
    padding-right: 140px;
  }

  .ag-ltr .ag-toolpanel-indent-15 {
    padding-left: 150px;
  }

  .ag-rtl .ag-toolpanel-indent-15 {
    padding-right: 150px;
  }

  .ag-ltr .ag-row-group-indent-15 {
    padding-left: 150px;
  }

  .ag-rtl .ag-row-group-indent-15 {
    padding-right: 150px;
  }

  .ag-ltr .ag-toolpanel-indent-16 {
    padding-left: 160px;
  }

  .ag-rtl .ag-toolpanel-indent-16 {
    padding-right: 160px;
  }

  .ag-ltr .ag-row-group-indent-16 {
    padding-left: 160px;
  }

  .ag-rtl .ag-row-group-indent-16 {
    padding-right: 160px;
  }

  .ag-ltr .ag-toolpanel-indent-17 {
    padding-left: 170px;
  }

  .ag-rtl .ag-toolpanel-indent-17 {
    padding-right: 170px;
  }

  .ag-ltr .ag-row-group-indent-17 {
    padding-left: 170px;
  }

  .ag-rtl .ag-row-group-indent-17 {
    padding-right: 170px;
  }

  .ag-ltr .ag-toolpanel-indent-18 {
    padding-left: 180px;
  }

  .ag-rtl .ag-toolpanel-indent-18 {
    padding-right: 180px;
  }

  .ag-ltr .ag-row-group-indent-18 {
    padding-left: 180px;
  }

  .ag-rtl .ag-row-group-indent-18 {
    padding-right: 180px;
  }

  .ag-ltr .ag-toolpanel-indent-19 {
    padding-left: 190px;
  }

  .ag-rtl .ag-toolpanel-indent-19 {
    padding-right: 190px;
  }

  .ag-ltr .ag-row-group-indent-19 {
    padding-left: 190px;
  }

  .ag-rtl .ag-row-group-indent-19 {
    padding-right: 190px;
  }

  .ag-ltr .ag-toolpanel-indent-20 {
    padding-left: 200px;
  }

  .ag-rtl .ag-toolpanel-indent-20 {
    padding-right: 200px;
  }

  .ag-ltr .ag-row-group-indent-20 {
    padding-left: 200px;
  }

  .ag-rtl .ag-row-group-indent-20 {
    padding-right: 200px;
  }

  .ag-ltr .ag-toolpanel-indent-21 {
    padding-left: 210px;
  }

  .ag-rtl .ag-toolpanel-indent-21 {
    padding-right: 210px;
  }

  .ag-ltr .ag-row-group-indent-21 {
    padding-left: 210px;
  }

  .ag-rtl .ag-row-group-indent-21 {
    padding-right: 210px;
  }

  .ag-ltr .ag-toolpanel-indent-22 {
    padding-left: 220px;
  }

  .ag-rtl .ag-toolpanel-indent-22 {
    padding-right: 220px;
  }

  .ag-ltr .ag-row-group-indent-22 {
    padding-left: 220px;
  }

  .ag-rtl .ag-row-group-indent-22 {
    padding-right: 220px;
  }

  .ag-ltr .ag-toolpanel-indent-23 {
    padding-left: 230px;
  }

  .ag-rtl .ag-toolpanel-indent-23 {
    padding-right: 230px;
  }

  .ag-ltr .ag-row-group-indent-23 {
    padding-left: 230px;
  }

  .ag-rtl .ag-row-group-indent-23 {
    padding-right: 230px;
  }

  .ag-ltr .ag-toolpanel-indent-24 {
    padding-left: 240px;
  }

  .ag-rtl .ag-toolpanel-indent-24 {
    padding-right: 240px;
  }

  .ag-ltr .ag-row-group-indent-24 {
    padding-left: 240px;
  }

  .ag-rtl .ag-row-group-indent-24 {
    padding-right: 240px;
  }

  .ag-ltr .ag-toolpanel-indent-25 {
    padding-left: 250px;
  }

  .ag-rtl .ag-toolpanel-indent-25 {
    padding-right: 250px;
  }

  .ag-ltr .ag-row-group-indent-25 {
    padding-left: 250px;
  }

  .ag-rtl .ag-row-group-indent-25 {
    padding-right: 250px;
  }

  .ag-ltr .ag-toolpanel-indent-26 {
    padding-left: 260px;
  }

  .ag-rtl .ag-toolpanel-indent-26 {
    padding-right: 260px;
  }

  .ag-ltr .ag-row-group-indent-26 {
    padding-left: 260px;
  }

  .ag-rtl .ag-row-group-indent-26 {
    padding-right: 260px;
  }

  .ag-ltr .ag-toolpanel-indent-27 {
    padding-left: 270px;
  }

  .ag-rtl .ag-toolpanel-indent-27 {
    padding-right: 270px;
  }

  .ag-ltr .ag-row-group-indent-27 {
    padding-left: 270px;
  }

  .ag-rtl .ag-row-group-indent-27 {
    padding-right: 270px;
  }

  .ag-ltr .ag-toolpanel-indent-28 {
    padding-left: 280px;
  }

  .ag-rtl .ag-toolpanel-indent-28 {
    padding-right: 280px;
  }

  .ag-ltr .ag-row-group-indent-28 {
    padding-left: 280px;
  }

  .ag-rtl .ag-row-group-indent-28 {
    padding-right: 280px;
  }

  .ag-ltr .ag-toolpanel-indent-29 {
    padding-left: 290px;
  }

  .ag-rtl .ag-toolpanel-indent-29 {
    padding-right: 290px;
  }

  .ag-ltr .ag-row-group-indent-29 {
    padding-left: 290px;
  }

  .ag-rtl .ag-row-group-indent-29 {
    padding-right: 290px;
  }

  .ag-ltr .ag-toolpanel-indent-30 {
    padding-left: 300px;
  }

  .ag-rtl .ag-toolpanel-indent-30 {
    padding-right: 300px;
  }

  .ag-ltr .ag-row-group-indent-30 {
    padding-left: 300px;
  }

  .ag-rtl .ag-row-group-indent-30 {
    padding-right: 300px;
  }

  .ag-ltr .ag-toolpanel-indent-31 {
    padding-left: 310px;
  }

  .ag-rtl .ag-toolpanel-indent-31 {
    padding-right: 310px;
  }

  .ag-ltr .ag-row-group-indent-31 {
    padding-left: 310px;
  }

  .ag-rtl .ag-row-group-indent-31 {
    padding-right: 310px;
  }

  .ag-ltr .ag-toolpanel-indent-32 {
    padding-left: 320px;
  }

  .ag-rtl .ag-toolpanel-indent-32 {
    padding-right: 320px;
  }

  .ag-ltr .ag-row-group-indent-32 {
    padding-left: 320px;
  }

  .ag-rtl .ag-row-group-indent-32 {
    padding-right: 320px;
  }

  .ag-ltr .ag-toolpanel-indent-33 {
    padding-left: 330px;
  }

  .ag-rtl .ag-toolpanel-indent-33 {
    padding-right: 330px;
  }

  .ag-ltr .ag-row-group-indent-33 {
    padding-left: 330px;
  }

  .ag-rtl .ag-row-group-indent-33 {
    padding-right: 330px;
  }

  .ag-ltr .ag-toolpanel-indent-34 {
    padding-left: 340px;
  }

  .ag-rtl .ag-toolpanel-indent-34 {
    padding-right: 340px;
  }

  .ag-ltr .ag-row-group-indent-34 {
    padding-left: 340px;
  }

  .ag-rtl .ag-row-group-indent-34 {
    padding-right: 340px;
  }

  .ag-ltr .ag-toolpanel-indent-35 {
    padding-left: 350px;
  }

  .ag-rtl .ag-toolpanel-indent-35 {
    padding-right: 350px;
  }

  .ag-ltr .ag-row-group-indent-35 {
    padding-left: 350px;
  }

  .ag-rtl .ag-row-group-indent-35 {
    padding-right: 350px;
  }

  .ag-ltr .ag-toolpanel-indent-36 {
    padding-left: 360px;
  }

  .ag-rtl .ag-toolpanel-indent-36 {
    padding-right: 360px;
  }

  .ag-ltr .ag-row-group-indent-36 {
    padding-left: 360px;
  }

  .ag-rtl .ag-row-group-indent-36 {
    padding-right: 360px;
  }

  .ag-ltr .ag-toolpanel-indent-37 {
    padding-left: 370px;
  }

  .ag-rtl .ag-toolpanel-indent-37 {
    padding-right: 370px;
  }

  .ag-ltr .ag-row-group-indent-37 {
    padding-left: 370px;
  }

  .ag-rtl .ag-row-group-indent-37 {
    padding-right: 370px;
  }

  .ag-ltr .ag-toolpanel-indent-38 {
    padding-left: 380px;
  }

  .ag-rtl .ag-toolpanel-indent-38 {
    padding-right: 380px;
  }

  .ag-ltr .ag-row-group-indent-38 {
    padding-left: 380px;
  }

  .ag-rtl .ag-row-group-indent-38 {
    padding-right: 380px;
  }

  .ag-ltr .ag-toolpanel-indent-39 {
    padding-left: 390px;
  }

  .ag-rtl .ag-toolpanel-indent-39 {
    padding-right: 390px;
  }

  .ag-ltr .ag-row-group-indent-39 {
    padding-left: 390px;
  }

  .ag-rtl .ag-row-group-indent-39 {
    padding-right: 390px;
  }

  .ag-ltr .ag-toolpanel-indent-40 {
    padding-left: 400px;
  }

  .ag-rtl .ag-toolpanel-indent-40 {
    padding-right: 400px;
  }

  .ag-ltr .ag-row-group-indent-40 {
    padding-left: 400px;
  }

  .ag-rtl .ag-row-group-indent-40 {
    padding-right: 400px;
  }

  .ag-ltr .ag-toolpanel-indent-41 {
    padding-left: 410px;
  }

  .ag-rtl .ag-toolpanel-indent-41 {
    padding-right: 410px;
  }

  .ag-ltr .ag-row-group-indent-41 {
    padding-left: 410px;
  }

  .ag-rtl .ag-row-group-indent-41 {
    padding-right: 410px;
  }

  .ag-ltr .ag-toolpanel-indent-42 {
    padding-left: 420px;
  }

  .ag-rtl .ag-toolpanel-indent-42 {
    padding-right: 420px;
  }

  .ag-ltr .ag-row-group-indent-42 {
    padding-left: 420px;
  }

  .ag-rtl .ag-row-group-indent-42 {
    padding-right: 420px;
  }

  .ag-ltr .ag-toolpanel-indent-43 {
    padding-left: 430px;
  }

  .ag-rtl .ag-toolpanel-indent-43 {
    padding-right: 430px;
  }

  .ag-ltr .ag-row-group-indent-43 {
    padding-left: 430px;
  }

  .ag-rtl .ag-row-group-indent-43 {
    padding-right: 430px;
  }

  .ag-ltr .ag-toolpanel-indent-44 {
    padding-left: 440px;
  }

  .ag-rtl .ag-toolpanel-indent-44 {
    padding-right: 440px;
  }

  .ag-ltr .ag-row-group-indent-44 {
    padding-left: 440px;
  }

  .ag-rtl .ag-row-group-indent-44 {
    padding-right: 440px;
  }

  .ag-ltr .ag-toolpanel-indent-45 {
    padding-left: 450px;
  }

  .ag-rtl .ag-toolpanel-indent-45 {
    padding-right: 450px;
  }

  .ag-ltr .ag-row-group-indent-45 {
    padding-left: 450px;
  }

  .ag-rtl .ag-row-group-indent-45 {
    padding-right: 450px;
  }

  .ag-ltr .ag-toolpanel-indent-46 {
    padding-left: 460px;
  }

  .ag-rtl .ag-toolpanel-indent-46 {
    padding-right: 460px;
  }

  .ag-ltr .ag-row-group-indent-46 {
    padding-left: 460px;
  }

  .ag-rtl .ag-row-group-indent-46 {
    padding-right: 460px;
  }

  .ag-ltr .ag-toolpanel-indent-47 {
    padding-left: 470px;
  }

  .ag-rtl .ag-toolpanel-indent-47 {
    padding-right: 470px;
  }

  .ag-ltr .ag-row-group-indent-47 {
    padding-left: 470px;
  }

  .ag-rtl .ag-row-group-indent-47 {
    padding-right: 470px;
  }

  .ag-ltr .ag-toolpanel-indent-48 {
    padding-left: 480px;
  }

  .ag-rtl .ag-toolpanel-indent-48 {
    padding-right: 480px;
  }

  .ag-ltr .ag-row-group-indent-48 {
    padding-left: 480px;
  }

  .ag-rtl .ag-row-group-indent-48 {
    padding-right: 480px;
  }

  .ag-ltr .ag-toolpanel-indent-49 {
    padding-left: 490px;
  }

  .ag-rtl .ag-toolpanel-indent-49 {
    padding-right: 490px;
  }

  .ag-ltr .ag-row-group-indent-49 {
    padding-left: 490px;
  }

  .ag-rtl .ag-row-group-indent-49 {
    padding-right: 490px;
  }

  .ag-ltr {
    direction: ltr;
  }
  .ag-ltr .ag-body,
  .ag-ltr .ag-floating-top,
  .ag-ltr .ag-floating-bottom,
  .ag-ltr .ag-header,
  .ag-ltr .ag-body-viewport,
  .ag-ltr .ag-body-horizontal-scroll {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .ag-ltr .ag-header-cell-resize {
    right: -4px;
  }
  .ag-ltr .ag-pinned-right-header .ag-header-cell-resize {
    left: -4px;
  }

  .ag-rtl {
    direction: rtl;
  }
  .ag-rtl .ag-body,
  .ag-rtl .ag-floating-top,
  .ag-rtl .ag-floating-bottom,
  .ag-rtl .ag-header,
  .ag-rtl .ag-body-viewport,
  .ag-rtl .ag-body-horizontal-scroll {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .ag-rtl .ag-header-cell-resize {
    left: -4px;
  }
  .ag-rtl .ag-pinned-left-header .ag-header-cell-resize {
    right: -4px;
  }
  .ag-rtl
    .ag-group-component
    .ag-column-group-icons
    .ag-column-group-closed-icon {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .ag-rtl
    .ag-filter-toolpanel-instance
    .ag-filter-toolpanel-header
    .ag-icon-tree-closed {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .ag-rtl .ag-primary-cols-header-panel .ag-icon-tree-closed,
  .ag-rtl .ag-filter-toolpanel-header.ag-filter-header .ag-icon-tree-closed {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .ag-rtl .ag-header-group-cell .ag-header-icon.ag-header-expand-icon-expanded,
  .ag-rtl .ag-header-group-cell .ag-header-icon.ag-header-expand-icon-collapsed,
  .ag-rtl .ag-cell-wrapper .ag-group-contracted {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  @media print {
    .ag-body-viewport {
      display: block;
    }
    .ag-row {
      page-break-inside: avoid;
    }
  }

  .ag-body .ag-pinned-left-cols-viewport,
  .ag-body .ag-body-viewport,
  .ag-body .ag-pinned-right-cols-viewport {
    -webkit-overflow-scrolling: touch;
  }

  .ag-chart {
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .ag-chart .ag-chart-components-wrapper {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
  }
  .ag-chart .ag-chart-components-wrapper .ag-chart-canvas-wrapper {
    position: relative;
    flex: 1 1 auto;
    overflow: hidden;
  }
  .ag-chart .ag-chart-components-wrapper .ag-chart-canvas-wrapper canvas {
    display: block;
  }
  .ag-chart .ag-chart-components-wrapper .ag-chart-menu {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 24px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .ag-chart:not(.ag-has-menu):hover .ag-chart-menu {
    opacity: 1;
    pointer-events: all;
  }
  .ag-chart .ag-chart-docked-container {
    position: relative;
    width: 0;
    min-width: 0;
    transition: min-width 0.4s;
  }
  .ag-chart .ag-chart-docked-container .ag-panel {
    border-width: 0 0 0 1px;
  }

  .ag-chart-tabbed-menu > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .ag-chart-tabbed-menu .ag-tab-header {
    flex: none;
    user-select: none;
    cursor: default;
  }

  .ag-chart-tabbed-menu .ag-tab-body {
    display: flex;
    flex: 1 1 auto;
    align-items: stretch;
    overflow: hidden;
  }
  .ag-chart-tabbed-menu .ag-tab-body > div {
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
  }

  .ag-chart-tabbed-menu .ag-chart-settings {
    overflow-x: hidden;
  }
  .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper {
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-nav-bar {
    width: 100%;
    display: flex;
    height: 30px;
    align-items: center;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-nav-bar
    .ag-nav-card-selector {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1 1 auto;
    height: 100%;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-nav-bar
    .ag-nav-card-selector
    .ag-nav-card-item {
    opacity: 0.2;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-nav-bar
    .ag-nav-card-selector
    .ag-nav-card-item.ag-selected {
    opacity: 1;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-nav-bar
    .ag-chart-settings-prev-btn,
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-nav-bar
    .ag-chart-settings-next-btn {
    position: relative;
    flex: none;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-nav-bar
    .ag-chart-settings-prev-btn
    button,
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-nav-bar
    .ag-chart-settings-next-btn
    button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-mini-charts-container {
    position: relative;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-mini-charts-container
    .ag-chart-settings-mini-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-mini-charts-container
    .ag-chart-settings-mini-wrapper
    .ag-group-component {
    flex: none;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-mini-charts-container
    .ag-chart-settings-mini-wrapper
    .ag-group-component-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-mini-charts-container
    .ag-chart-settings-mini-wrapper
    .ag-group-component-container
    .ag-chart-mini-thumbnail {
    flex: none;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-mini-charts-container
    .ag-chart-settings-mini-wrapper.ag-animating,
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-mini-charts-container
    .ag-chart-settings-mini-wrapper.ag-animating {
    transition: left 0.3s;
    transition-timing-function: ease-in-out;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-mini-charts-container
    .ag-chart-settings-mini-wrapper
    .ag-chart-mini-thumbnail {
    cursor: pointer;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-wrapper
    .ag-chart-settings-mini-charts-container
    .ag-chart-settings-mini-wrapper
    .ag-chart-mini-thumbnail
    canvas {
    display: block;
  }

  .ag-chart-tabbed-menu .ag-chart-data-wrapper,
  .ag-chart-tabbed-menu .ag-chart-format-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    user-select: none;
  }
  .ag-chart-tabbed-menu .ag-chart-data-wrapper > div,
  .ag-chart-tabbed-menu .ag-chart-format-wrapper > div {
    display: flex;
    margin: 0;
    padding-bottom: 2px;
  }
  .ag-chart-tabbed-menu .ag-chart-data-wrapper > div:not(:first-child),
  .ag-chart-tabbed-menu .ag-chart-format-wrapper > div:not(:first-child) {
    margin-top: 0;
  }

  .ag-chart-tabbed-menu .ag-chart-format-wrapper {
    overflow-x: hidden;
  }
  .ag-chart-tabbed-menu
    .ag-chart-format-wrapper
    .ag-group-component
    .ag-group-subgroup {
    justify-content: space-between;
  }

  .ag-chart .ag-chart-canvas-wrapper.ag-chart-empty > canvas {
    visibility: hidden;
  }

  .ag-chart .ag-chart-canvas-wrapper.ag-chart-empty .ag-chart-empty-text {
    display: flex;
  }

  .ag-chart .ag-chart-empty-text {
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .ag-chart .ag-chart-menu {
    opacity: 0;
    pointer-events: none;
  }
  .ag-chart .ag-chart-menu > span {
    opacity: 0.5;
    line-height: 24px;
    font-size: 24px;
    width: 24px;
    height: 24px;
    margin: 2px 0;
    cursor: pointer;
  }
  .ag-chart .ag-chart-menu > span:hover {
    border-radius: 5px;
  }

  .ag-chart .ag-chart-docked-container {
    min-width: 0;
    width: 0;
  }

  .ag-chart-tabbed-menu .ag-tab-body {
    padding: 0;
  }

  .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar {
    padding: 0 10px;
    user-select: none;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-nav-bar
    .ag-nav-card-selector {
    padding: 0 10px;
  }
  .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-nav-bar
    .ag-nav-card-selector
    .ag-nav-card-item {
    cursor: pointer;
  }

  @font-face {
    font-family: "agGridBalham";
    src: url("data:application/font-woff;charset=utf-8;base64,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")
        format("woff"),
      url("data:application/x-font-ttf;charset=utf-8;base64,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ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAALYWdncmVnYXRpb24GYXJyb3dzA2FzYwZjYW5jZWwFY2hhcnQQY2hlY2tib3gtY2hlY2tlZBZjaGVja2JveC1pbmRldGVybWluYXRlEmNoZWNrYm94LXVuY2hlY2tlZAxjb2xvci1waWNrZXIGY29sdW1uB2NvbHVtbnMKY29udHJhY3RlZARjb3B5BWNyb3NzA2N1dARkYXRhBGRlc2MIZXhwYW5kZWQJZXllLXNsYXNoA2V5ZQZmaWx0ZXIFZmlyc3QEZ3JpcAVncm91cA1pbmRldGVybWluYXRlBGxhc3QEbGVmdAZsaW5rZWQIbGlua2VkLTEHbG9hZGluZwhtYXhpbWl6ZQRtZW51CG1pbmltaXplBW1pbnVzBG5vbmULbm90LWFsbG93ZWQFcGFzdGUDcGluBXBpdm90BHBsdXMQcmFkaW8tYnV0dG9uLW9mZg9yYWRpby1idXR0b24tb24FcmlnaHQEc2F2ZQpzbWFsbC1kb3duCHNtYWxsLXVwBHRpY2sSdHJlZS1pbmRldGVybWluYXRlCHVubGlua2VkAWEBZwFyAWUBdAFpAW8BbgF3AXMBYwFsAWgBawFiAXgBLQFkAW0BdQFwAXkBZgF6AXYAAAA=")
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  .ag-theme-balham {
    -webkit-font-smoothing: antialiased;
    background-color: white;
    color: #000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: normal;
  }
  .ag-theme-balham .ag-menu,
  .ag-theme-balham .ag-theme-balham.ag-dnd-ghost,
  .ag-theme-balham .ag-cell.ag-cell-inline-editing,
  .ag-theme-balham .ag-popup-editor,
  .ag-theme-balham .ag-select-agg-func-popup,
  .ag-theme-balham .ag-overlay-loading-center {
    border: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-tab-header .ag-tab {
    border: 1px solid transparent;
    border-bottom-width: 0;
    margin: 4px;
    margin-bottom: 0;
    padding: 4px 8px;
  }
  .ag-theme-balham .ag-tab-header .ag-tab.ag-tab-selected {
    background-color: white;
    border-bottom: 2px solid #0091ea;
    border-bottom: 2px solid white;
    border-color: #bdc3c7;
  }
  .ag-theme-balham label {
    margin-bottom: 0;
  }
  .ag-theme-balham * {
    box-sizing: border-box;
  }
  .ag-theme-balham *:focus,
  .ag-theme-balham * *:before,
  .ag-theme-balham * *:after {
    outline: none;
    box-sizing: border-box;
  }
  .ag-theme-balham .ag-tab {
    box-sizing: content-box;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-1 {
    padding-left: 20px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-1 {
    padding-right: 20px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-1 {
    padding-left: 28px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-1 {
    padding-right: 28px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-2 {
    padding-left: 40px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-2 {
    padding-right: 40px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-2 {
    padding-left: 56px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-2 {
    padding-right: 56px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-3 {
    padding-left: 60px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-3 {
    padding-right: 60px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-3 {
    padding-left: 84px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-3 {
    padding-right: 84px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-4 {
    padding-left: 80px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-4 {
    padding-right: 80px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-4 {
    padding-left: 112px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-4 {
    padding-right: 112px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-5 {
    padding-left: 100px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-5 {
    padding-right: 100px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-5 {
    padding-left: 140px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-5 {
    padding-right: 140px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-6 {
    padding-left: 120px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-6 {
    padding-right: 120px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-6 {
    padding-left: 168px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-6 {
    padding-right: 168px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-7 {
    padding-left: 140px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-7 {
    padding-right: 140px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-7 {
    padding-left: 196px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-7 {
    padding-right: 196px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-8 {
    padding-left: 160px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-8 {
    padding-right: 160px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-8 {
    padding-left: 224px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-8 {
    padding-right: 224px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-9 {
    padding-left: 180px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-9 {
    padding-right: 180px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-9 {
    padding-left: 252px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-9 {
    padding-right: 252px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-10 {
    padding-left: 200px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-10 {
    padding-right: 200px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-10 {
    padding-left: 280px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-10 {
    padding-right: 280px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-11 {
    padding-left: 220px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-11 {
    padding-right: 220px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-11 {
    padding-left: 308px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-11 {
    padding-right: 308px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-12 {
    padding-left: 240px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-12 {
    padding-right: 240px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-12 {
    padding-left: 336px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-12 {
    padding-right: 336px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-13 {
    padding-left: 260px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-13 {
    padding-right: 260px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-13 {
    padding-left: 364px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-13 {
    padding-right: 364px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-14 {
    padding-left: 280px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-14 {
    padding-right: 280px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-14 {
    padding-left: 392px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-14 {
    padding-right: 392px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-15 {
    padding-left: 300px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-15 {
    padding-right: 300px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-15 {
    padding-left: 420px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-15 {
    padding-right: 420px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-16 {
    padding-left: 320px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-16 {
    padding-right: 320px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-16 {
    padding-left: 448px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-16 {
    padding-right: 448px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-17 {
    padding-left: 340px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-17 {
    padding-right: 340px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-17 {
    padding-left: 476px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-17 {
    padding-right: 476px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-18 {
    padding-left: 360px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-18 {
    padding-right: 360px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-18 {
    padding-left: 504px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-18 {
    padding-right: 504px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-19 {
    padding-left: 380px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-19 {
    padding-right: 380px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-19 {
    padding-left: 532px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-19 {
    padding-right: 532px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-20 {
    padding-left: 400px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-20 {
    padding-right: 400px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-20 {
    padding-left: 560px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-20 {
    padding-right: 560px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-21 {
    padding-left: 420px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-21 {
    padding-right: 420px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-21 {
    padding-left: 588px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-21 {
    padding-right: 588px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-22 {
    padding-left: 440px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-22 {
    padding-right: 440px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-22 {
    padding-left: 616px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-22 {
    padding-right: 616px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-23 {
    padding-left: 460px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-23 {
    padding-right: 460px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-23 {
    padding-left: 644px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-23 {
    padding-right: 644px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-24 {
    padding-left: 480px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-24 {
    padding-right: 480px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-24 {
    padding-left: 672px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-24 {
    padding-right: 672px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-25 {
    padding-left: 500px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-25 {
    padding-right: 500px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-25 {
    padding-left: 700px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-25 {
    padding-right: 700px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-26 {
    padding-left: 520px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-26 {
    padding-right: 520px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-26 {
    padding-left: 728px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-26 {
    padding-right: 728px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-27 {
    padding-left: 540px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-27 {
    padding-right: 540px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-27 {
    padding-left: 756px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-27 {
    padding-right: 756px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-28 {
    padding-left: 560px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-28 {
    padding-right: 560px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-28 {
    padding-left: 784px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-28 {
    padding-right: 784px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-29 {
    padding-left: 580px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-29 {
    padding-right: 580px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-29 {
    padding-left: 812px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-29 {
    padding-right: 812px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-30 {
    padding-left: 600px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-30 {
    padding-right: 600px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-30 {
    padding-left: 840px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-30 {
    padding-right: 840px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-31 {
    padding-left: 620px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-31 {
    padding-right: 620px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-31 {
    padding-left: 868px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-31 {
    padding-right: 868px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-32 {
    padding-left: 640px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-32 {
    padding-right: 640px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-32 {
    padding-left: 896px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-32 {
    padding-right: 896px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-33 {
    padding-left: 660px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-33 {
    padding-right: 660px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-33 {
    padding-left: 924px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-33 {
    padding-right: 924px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-34 {
    padding-left: 680px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-34 {
    padding-right: 680px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-34 {
    padding-left: 952px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-34 {
    padding-right: 952px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-35 {
    padding-left: 700px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-35 {
    padding-right: 700px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-35 {
    padding-left: 980px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-35 {
    padding-right: 980px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-36 {
    padding-left: 720px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-36 {
    padding-right: 720px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-36 {
    padding-left: 1008px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-36 {
    padding-right: 1008px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-37 {
    padding-left: 740px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-37 {
    padding-right: 740px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-37 {
    padding-left: 1036px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-37 {
    padding-right: 1036px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-38 {
    padding-left: 760px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-38 {
    padding-right: 760px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-38 {
    padding-left: 1064px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-38 {
    padding-right: 1064px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-39 {
    padding-left: 780px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-39 {
    padding-right: 780px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-39 {
    padding-left: 1092px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-39 {
    padding-right: 1092px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-40 {
    padding-left: 800px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-40 {
    padding-right: 800px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-40 {
    padding-left: 1120px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-40 {
    padding-right: 1120px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-41 {
    padding-left: 820px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-41 {
    padding-right: 820px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-41 {
    padding-left: 1148px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-41 {
    padding-right: 1148px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-42 {
    padding-left: 840px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-42 {
    padding-right: 840px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-42 {
    padding-left: 1176px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-42 {
    padding-right: 1176px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-43 {
    padding-left: 860px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-43 {
    padding-right: 860px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-43 {
    padding-left: 1204px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-43 {
    padding-right: 1204px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-44 {
    padding-left: 880px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-44 {
    padding-right: 880px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-44 {
    padding-left: 1232px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-44 {
    padding-right: 1232px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-45 {
    padding-left: 900px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-45 {
    padding-right: 900px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-45 {
    padding-left: 1260px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-45 {
    padding-right: 1260px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-46 {
    padding-left: 920px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-46 {
    padding-right: 920px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-46 {
    padding-left: 1288px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-46 {
    padding-right: 1288px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-47 {
    padding-left: 940px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-47 {
    padding-right: 940px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-47 {
    padding-left: 1316px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-47 {
    padding-right: 1316px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-48 {
    padding-left: 960px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-48 {
    padding-right: 960px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-48 {
    padding-left: 1344px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-48 {
    padding-right: 1344px;
  }
  .ag-theme-balham .ag-ltr .ag-toolpanel-indent-49 {
    padding-left: 980px;
  }
  .ag-theme-balham .ag-rtl .ag-toolpanel-indent-49 {
    padding-right: 980px;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-indent-49 {
    padding-left: 1372px;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-indent-49 {
    padding-right: 1372px;
  }
  .ag-theme-balham .ag-cell .ag-icon {
    display: inline-block;
    vertical-align: middle;
  }
  .ag-theme-balham .ag-checkbox,
  .ag-theme-balham .ag-radio-button,
  .ag-theme-balham .ag-toggle-button {
    display: flex;
    align-items: center;
    cursor: default;
  }
  .ag-theme-balham .ag-checkbox label,
  .ag-theme-balham .ag-radio-button label,
  .ag-theme-balham .ag-toggle-button label {
    cursor: default;
  }
  .ag-theme-balham .ag-checkbox label:empty,
  .ag-theme-balham .ag-radio-button label:empty,
  .ag-theme-balham .ag-toggle-button label:empty {
    margin: 0;
  }
  .ag-theme-balham .ag-checkbox:not(.ag-label-align-left) label,
  .ag-theme-balham .ag-radio-button:not(.ag-label-align-left) label,
  .ag-theme-balham .ag-toggle-button:not(.ag-label-align-left) label {
    margin-left: 4px;
  }
  .ag-theme-balham .ag-cell {
    -webkit-font-smoothing: subpixel-antialiased;
  }
  .ag-theme-balham .ag-ltr .ag-row-group-leaf-indent {
    margin-left: 28px;
  }
  .ag-theme-balham .ag-ltr .ag-cell {
    border-right: 1px solid transparent;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left),
  .ag-theme-balham
    .ag-ltr
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left),
  .ag-theme-balham
    .ag-ltr
    .ag-root:not(.ag-has-focus)
    .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {
    border-left: 1px solid #bdc3c7;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right),
  .ag-theme-balham
    .ag-ltr
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right),
  .ag-theme-balham
    .ag-ltr
    .ag-root:not(.ag-has-focus)
    .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {
    border-right: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-value-change-delta {
    padding-right: 2px;
  }
  .ag-theme-balham .ag-value-change-delta-up {
    color: #43a047;
  }
  .ag-theme-balham .ag-value-change-delta-down {
    color: #e53935;
  }
  .ag-theme-balham .ag-value-change-value {
    background-color: transparent;
    border-radius: 1px;
    padding-left: 1px;
    padding-right: 1px;
    transition: background-color 1s;
  }
  .ag-theme-balham .ag-value-change-value-highlight {
    background-color: rgba(22, 160, 133, 0.5);
    transition: background-color 0.1s;
  }
  .ag-theme-balham .ag-input-wrapper input:not([type]),
  .ag-theme-balham .ag-input-wrapper input[type="text"],
  .ag-theme-balham .ag-input-wrapper input[type="number"],
  .ag-theme-balham .ag-input-wrapper input[type="tel"],
  .ag-theme-balham .ag-input-wrapper input[type="date"],
  .ag-theme-balham .ag-input-wrapper input[type="datetime-local"] {
    border-width: 1px;
    border-style: solid;
    border-color: #95a5a6;
  }
  .ag-theme-balham .ag-input-wrapper input:not([type]):disabled,
  .ag-theme-balham .ag-input-wrapper input[type="text"]:disabled,
  .ag-theme-balham .ag-input-wrapper input[type="number"]:disabled,
  .ag-theme-balham .ag-input-wrapper input[type="tel"]:disabled,
  .ag-theme-balham .ag-input-wrapper input[type="date"]:disabled,
  .ag-theme-balham .ag-input-wrapper input[type="datetime-local"]:disabled {
    color: rgba(0, 0, 0, 0.38);
    background-color: #ebebeb;
    border-color: rgba(149, 165, 166, 0.3);
  }
  .ag-theme-balham .ag-input-wrapper input[type="date"] {
    flex: 1 1 auto;
  }
  .ag-theme-balham .ag-input-wrapper input[type="range"] {
    padding: 0;
  }
  .ag-theme-balham .ag-input-wrapper textarea {
    border-width: 1px;
    border-style: solid;
    border-color: #95a5a6;
  }
  .ag-theme-balham .ag-input-wrapper textarea:disabled {
    color: rgba(0, 0, 0, 0.38);
    background-color: #ebebeb;
    border-color: rgba(149, 165, 166, 0.3);
  }
  .ag-theme-balham .ag-header {
    background-color: #f5f7f7;
    color: rgba(0, 0, 0, 0.54);
    font-weight: 600;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    border-bottom: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-pinned-right-header {
    border-left: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-pinned-left-header {
    border-right: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-header-row {
    border: none;
    height: 32px;
  }
  .ag-theme-balham .ag-row {
    border-style: solid;
    border-color: #bdc3c7;
    height: 28px;
    border-width: 0;
  }
  .ag-theme-balham .ag-row:not(.ag-row-first) {
    border-width: 1px 0 0;
  }
  .ag-theme-balham .ag-row.ag-row-last {
    border-bottom-width: 1px;
  }
  .ag-theme-balham .ag-row-odd {
    background-color: #fcfdfe;
  }
  .ag-theme-balham .ag-row-even {
    background-color: white;
  }
  .ag-theme-balham .ag-horizontal-left-spacer {
    border-right: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-horizontal-left-spacer.ag-scroller-corner {
    border-right: none;
  }
  .ag-theme-balham .ag-horizontal-right-spacer {
    border-left: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-horizontal-right-spacer.ag-scroller-corner {
    border-left: none;
  }
  .ag-theme-balham .ag-row-hover {
    background-color: #ecf0f1;
  }
  .ag-theme-balham .ag-numeric-cell {
    text-align: right;
  }
  .ag-theme-balham .ag-header-cell-label .ag-header-icon {
    margin-left: 4px;
    opacity: 0.87;
  }
  .ag-theme-balham .ag-header-cell,
  .ag-theme-balham .ag-header-group-cell {
    border-style: solid;
    border-color: #bdc3c7;
    padding-left: 12px;
    padding-right: 12px;
    border-width: 0;
  }
  .ag-theme-balham .ag-header-cell.ag-header-cell-moving,
  .ag-theme-balham .ag-header-group-cell.ag-header-cell-moving {
    background-color: white;
  }
  .ag-theme-balham .ag-header-cell:not(.ag-header-group-cell-no-group),
  .ag-theme-balham .ag-header-group-cell:not(.ag-header-group-cell-no-group) {
    border-top-width: 1px;
  }
  .ag-theme-balham .ag-header-row:first-child .ag-header-cell,
  .ag-theme-balham .ag-header-row:first-child .ag-header-group-cell {
    border-top-width: 0;
  }
  .ag-theme-balham .ag-header-cell-resize {
    cursor: col-resize;
  }
  .ag-theme-balham .ag-header-select-all {
    margin-right: 12px;
  }
  .ag-theme-balham .ag-cell {
    line-height: 26px;
    padding-left: 12px;
    padding-right: 12px;
    border: 1px solid transparent;
    padding-left: 11px;
    padding-right: 11px;
  }
  .ag-theme-balham .ag-row-drag {
    cursor: move;
    cursor: grab;
    min-width: 28px;
  }
  .ag-theme-balham .ag-row-dragging,
  .ag-theme-balham .ag-row-dragging .ag-row-drag {
    cursor: move;
  }
  .ag-theme-balham .ag-column-drag {
    cursor: move;
    cursor: grab;
  }
  .ag-theme-balham .ag-row-dragging {
    opacity: 0.5;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-has-focus
    .ag-cell-focus:not(.ag-cell-range-selected),
  .ag-theme-balham
    .ag-ltr
    .ag-has-focus
    .ag-cell-focus.ag-cell-range-single-cell,
  .ag-theme-balham
    .ag-ltr
    .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle,
  .ag-theme-balham
    .ag-rtl
    .ag-has-focus
    .ag-cell-focus:not(.ag-cell-range-selected),
  .ag-theme-balham
    .ag-rtl
    .ag-has-focus
    .ag-cell-focus.ag-cell-range-single-cell,
  .ag-theme-balham
    .ag-rtl
    .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle {
    border: 1px solid #0091ea;
    outline: initial;
  }
  .ag-theme-balham .ag-header-cell-resize {
    width: 8px;
  }
  .ag-theme-balham .ag-menu {
    background: white;
    border-radius: 2px;
    box-shadow: none;
    padding: 4px;
    padding: 0;
  }
  .ag-theme-balham .ag-menu .ag-menu-list {
    cursor: default;
    margin-bottom: 4px;
    margin-top: 4px;
    width: 100%;
  }
  .ag-theme-balham .ag-menu .ag-menu-option-active {
    background-color: #ecf0f1;
  }
  .ag-theme-balham .ag-menu .ag-menu-option-disabled {
    opacity: 0.5;
  }
  .ag-theme-balham .ag-menu .ag-menu-option-text {
    margin-left: 4px;
  }
  .ag-theme-balham .ag-menu .ag-menu-option-icon {
    padding-left: 4px;
    padding-right: 4px;
    min-width: 24px;
  }
  .ag-theme-balham .ag-menu .ag-menu-option-shortcut {
    padding-left: 8px;
  }
  .ag-theme-balham .ag-menu .ag-menu-separator {
    height: 8px;
  }
  .ag-theme-balham .ag-menu .ag-menu-separator > span {
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D'1'%20height%3D'8px'%20viewBox%3D'0%200%201%208px'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cline%20x1%3D'0'%20y1%3D'4px'%20x2%3D'1'%20y2%3D'4px'%20stroke-width%3D'1'%20stroke%3D'%23BDC3C7'%2F%3E%3C%2Fsvg%3E");
  }
  .ag-theme-balham .ag-menu .ag-menu-option-popup-pointer {
    width: 24px;
    text-align: center;
  }
  .ag-theme-balham.ag-dnd-ghost {
    background: white;
    border-radius: 2px;
    box-shadow: none;
    padding: 4px;
    border: 1px solid #bdc3c7;
    color: rgba(0, 0, 0, 0.54);
    font-weight: 600;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    height: 32px !important;
    line-height: 32px;
    margin: 0;
    padding: 0 8px;
    transform: translateY(8px);
  }
  .ag-theme-balham.ag-dnd-ghost span,
  .ag-theme-balham.ag-dnd-ghost div {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .ag-theme-balham.ag-dnd-ghost .ag-dnd-ghost-icon {
    margin-right: 4px;
    opacity: 0.87;
  }
  .ag-theme-balham .ag-tab-header {
    background: #f5f7f7;
    min-width: 220px;
    width: 100%;
    display: flex;
  }
  .ag-theme-balham .ag-tab-header .ag-tab {
    display: flex;
    border-bottom: 2px solid transparent;
    height: 16px;
    flex: none;
    align-items: center;
    justify-content: center;
  }
  .ag-theme-balham .ag-tab-body {
    padding: 2px 0;
  }
  .ag-theme-balham .ag-tab-body .ag-menu-list {
    margin-bottom: 0;
    margin-top: 0;
  }
  .ag-theme-balham .ag-tab-body .ag-menu-list > div:first-child > span {
    padding-top: 0;
  }
  .ag-theme-balham .ag-tab-body .ag-menu-list > div:last-child > span {
    padding-bottom: 0;
  }
  .ag-theme-balham
    .ag-tab-body
    .ag-menu-list
    > div:last-child
    > .ag-menu-option-popup-pointer {
    background-position-y: 0;
  }
  .ag-theme-balham .ag-filter .ag-filter-select,
  .ag-theme-balham .ag-filter .ag-filter-body {
    margin-bottom: 4px;
  }
  .ag-theme-balham .ag-filter .ag-filter-body {
    margin-top: 0;
  }
  .ag-theme-balham .ag-filter .ag-filter-filter {
    margin-left: 4px;
    margin-right: 4px;
  }
  .ag-theme-balham .ag-filter .ag-filter-select {
    margin: 4px;
  }
  .ag-theme-balham .ag-filter input[type="radio"] {
    margin: 0 3px 0 6px;
    width: 12px;
    height: 17px;
    vertical-align: top;
  }
  .ag-theme-balham .ag-filter input[type="text"],
  .ag-theme-balham .ag-filter input[type="date"] {
    padding-left: 4px;
  }
  .ag-theme-balham .ag-filter .ag-set-filter-list {
    height: 168px;
  }
  .ag-theme-balham .ag-filter .ag-set-filter-item {
    height: 28px;
  }
  .ag-theme-balham .ag-filter .ag-set-filter-item > div,
  .ag-theme-balham .ag-filter .ag-set-filter-item > span {
    margin-left: 5px;
  }
  .ag-theme-balham .ag-filter .ag-filter-header-container {
    border-bottom: 1px solid #bdc3c7;
    padding-bottom: 2px;
  }
  .ag-theme-balham .ag-filter .ag-filter-apply-panel {
    display: flex;
    justify-content: flex-end;
    padding: 4px;
    padding-top: 8px;
  }
  .ag-theme-balham .ag-filter .ag-filter-apply-panel button {
    line-height: 1.5;
  }
  .ag-theme-balham .ag-filter .ag-filter-apply-panel button + button {
    margin-left: 8px;
  }
  .ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column-group,
  .ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column {
    height: 16px;
  }
  .ag-theme-balham
    .ag-column-select-panel
    .ag-column-tool-panel-column-group
    .ag-column-select-checkbox,
  .ag-theme-balham
    .ag-column-select-panel
    .ag-column-tool-panel-column-group
    .ag-column-tool-panel-column-label,
  .ag-theme-balham
    .ag-column-select-panel
    .ag-column-tool-panel-column-group
    .ag-column-group-icons,
  .ag-theme-balham
    .ag-column-select-panel
    .ag-column-tool-panel-column
    .ag-column-select-checkbox,
  .ag-theme-balham
    .ag-column-select-panel
    .ag-column-tool-panel-column
    .ag-column-tool-panel-column-label,
  .ag-theme-balham
    .ag-column-select-panel
    .ag-column-tool-panel-column
    .ag-column-group-icons {
    margin-left: 4px;
    margin-right: 4px;
  }
  .ag-theme-balham .ag-column-select-panel .ag-primary-cols-list-panel {
    border-top: 1px solid #bdc3c7;
    padding-top: 4px;
  }
  .ag-theme-balham .ag-column-select-panel .ag-primary-cols-list-panel > div {
    cursor: pointer;
  }
  .ag-theme-balham
    .ag-column-select-panel
    .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {
    margin-left: 24px;
  }
  .ag-theme-balham .ag-primary-cols-header-panel {
    border-top: 1px solid #bdc3c7;
    height: 32px;
    align-items: center;
  }
  .ag-theme-balham .ag-primary-cols-header-panel > div {
    cursor: pointer;
    margin: 0 4px;
  }
  .ag-theme-balham .ag-primary-cols-header-panel .ag-filter-body {
    margin-left: 4px;
    margin-right: 4px;
  }
  .ag-theme-balham .ag-tool-panel-wrapper {
    border-right: 0;
  }
  .ag-theme-balham .ag-tool-panel-wrapper .ag-filter-panel {
    color: rgba(0, 0, 0, 0.54);
    font-weight: 600;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-filter-toolpanel-header.ag-filter-header {
    min-height: 32px;
    height: 32px;
    border-bottom: 1px solid #bdc3c7;
    box-sizing: content-box;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-filter-toolpanel-header
    > div:not(.ag-input-wrapper) {
    margin: 0 2px;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-filter-toolpanel-header
    > div.ag-input-wrapper {
    padding-left: 4px;
    padding-right: 4px;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-filter-toolpanel-header
    > div.ag-input-wrapper
    input {
    width: 100%;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-filter-list-panel {
    flex: 1 1 auto;
    overflow: auto;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-filter-list-panel
    > div.ag-first-group-visible
    > .ag-group-component
    > .ag-group-component-title-bar {
    border-top: none;
    min-height: calc(32px - 1px);
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-filter-list-panel
    > div.ag-last-group-visible
    > .ag-group-component.ag-collapsed {
    border-bottom: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-tool-panel-wrapper .ag-filter-panel .ag-group-component {
    border: none;
    background-color: #f5f7f7;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component
    .ag-group-component-title-bar {
    min-height: 32px;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component
    .ag-group-component-title-bar
    .ag-group-component-title {
    white-space: nowrap;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component
    .ag-group-component-title-bar
    .ag-column-group-icons {
    margin: 0 4px;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component.ag-level-0
    > .ag-group-component-title-bar {
    border: 0 solid #bdc3c7;
    border-top-width: 1px;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component.ag-has-filter
    > .ag-group-component-title-bar
    .ag-group-component-title:after {
    content: "";
    font-family: "agGridBalham";
    font-size: 16px;
    margin-left: 4px;
    color: #7f8c8d;
    font-weight: normal;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container {
    margin-left: 0;
    padding: 0;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance) {
    margin-top: 0;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    .ag-group-component-title-bar {
    background-color: #f8f9fa;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    .ag-filter-toolpanel-header {
    padding: 2px 0;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    .ag-filter-toolpanel-body:not(:empty) {
    margin: 4px 0;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    .ag-filter-toolpanel-body
    .ag-filter-air {
    border: 1px solid #bdc3c7;
    padding-top: 4px;
    color: #000;
    font-weight: 400;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance),
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component {
    border-top: none;
    margin-bottom: 0;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance)
    .ag-group-component-title-bar,
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component
    .ag-group-component-title-bar {
    min-height: unset;
    height: unset;
    margin: 4px 0;
  }
  .ag-theme-balham .ag-tool-panel-wrapper .ag-pivot-mode-panel {
    height: 32px;
    display: flex;
    flex: none;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-pivot-mode-panel
    .ag-pivot-mode-select {
    display: flex;
    align-items: center;
    margin-left: 4px;
  }
  .ag-theme-balham .ag-tool-panel-wrapper .ag-column-select-panel {
    border-bottom: 1px solid #bdc3c7;
    padding-bottom: 3px;
    padding-top: 0;
  }
  .ag-theme-balham .ag-tool-panel-wrapper .ag-column-drop {
    border-bottom: 1px solid #bdc3c7;
    padding: 4px 0;
    padding-bottom: 8px;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-column-drop
    .ag-column-drop-empty-message {
    color: rgba(0, 0, 0, 0.38);
    font-weight: 600;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    padding-left: 24px;
    padding-right: 4px;
    margin-top: 4px;
  }
  .ag-theme-balham .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-list {
    cursor: default;
    margin-top: 4px;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-column-drop
    > div:first-child
    > span:first-child {
    margin-left: 4px;
    margin-right: 4px;
  }
  .ag-theme-balham .ag-tool-panel-wrapper .ag-column-drop.ag-last-column-drop {
    border-bottom-width: 0;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-filter-toolpanel-header
    > div:not(.ag-input-wrapper) {
    padding-left: 2px;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item {
    margin-top: 4px;
    margin-right: 2px;
    margin-bottom: 4px;
    margin-left: 0;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-1
    .ag-filter-toolpanel-header,
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-1
    .ag-filter-toolpanel-header {
    padding-left: 1rem;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-2
    .ag-group-component-title-bar,
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-2
    .ag-group-component-title-bar {
    padding-left: 1rem;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-2
    .ag-filter-toolpanel-header,
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-2
    .ag-filter-toolpanel-header {
    padding-left: 2rem;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-3
    .ag-group-component-title-bar,
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-3
    .ag-group-component-title-bar {
    padding-left: 2rem;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-3
    .ag-filter-toolpanel-header,
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-3
    .ag-filter-toolpanel-header {
    padding-left: 3rem;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-4
    .ag-group-component-title-bar,
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-4
    .ag-group-component-title-bar {
    padding-left: 3rem;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-4
    .ag-filter-toolpanel-header,
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-4
    .ag-filter-toolpanel-header {
    padding-left: 4rem;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-5
    .ag-group-component-title-bar,
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-5
    .ag-group-component-title-bar {
    padding-left: 4rem;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-5
    .ag-filter-toolpanel-header,
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-5
    .ag-filter-toolpanel-header {
    padding-left: 5rem;
  }
  .ag-theme-balham .ag-numeric-header .ag-header-cell-label .ag-header-icon {
    margin-left: 0;
    margin-right: 4px;
  }
  .ag-theme-balham .ag-paging-panel {
    border-top: 1px solid #bdc3c7;
    color: rgba(0, 0, 0, 0.54);
    height: 32px;
    padding: 0 12px;
  }
  .ag-theme-balham .ag-paging-panel > span {
    margin-left: 16px;
  }
  .ag-theme-balham .ag-paging-page-summary-panel .ag-icon {
    width: 16px;
    height: 16px;
  }
  .ag-theme-balham .ag-paging-page-summary-panel .ag-paging-button button {
    cursor: pointer;
    opacity: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
  }
  .ag-theme-balham
    .ag-paging-page-summary-panel
    .ag-paging-button.ag-disabled
    .ag-icon {
    color: rgba(0, 0, 0, 0.38);
    opacity: 0.38;
  }
  .ag-theme-balham
    .ag-paging-page-summary-panel
    .ag-paging-button.ag-disabled
    button {
    cursor: default;
  }
  .ag-theme-balham .ag-paging-page-summary-panel span {
    margin: 0 4px;
  }
  .ag-theme-balham .ag-row-selected {
    background-color: #b7e4ff;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell),
  .ag-theme-balham
    .ag-rtl
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell) {
    border: 1px solid transparent;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top,
  .ag-theme-balham
    .ag-rtl
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top {
    border-top-color: #0091ea;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right,
  .ag-theme-balham
    .ag-rtl
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {
    border-right-color: #0091ea;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom,
  .ag-theme-balham
    .ag-rtl
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom {
    border-bottom-color: #0091ea;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left,
  .ag-theme-balham
    .ag-rtl
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {
    border-left-color: #0091ea;
  }
  .ag-theme-balham .ag-cell-range-selected:not(.ag-cell-focus) {
    background-color: rgba(0, 145, 234, 0.2);
  }
  .ag-theme-balham
    .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart {
    background-color: rgba(0, 88, 255, 0.1);
  }
  .ag-theme-balham
    .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category {
    background-color: rgba(0, 255, 132, 0.1);
  }
  .ag-theme-balham .ag-cell-range-selected-1:not(.ag-cell-focus) {
    background-color: rgba(0, 145, 234, 0.3);
  }
  .ag-theme-balham .ag-cell-range-selected-2:not(.ag-cell-focus) {
    background-color: rgba(0, 145, 234, 0.4);
  }
  .ag-theme-balham .ag-cell-range-selected-3:not(.ag-cell-focus) {
    background-color: rgba(0, 145, 234, 0.5);
  }
  .ag-theme-balham .ag-cell-range-selected-4:not(.ag-cell-focus) {
    background-color: rgba(0, 145, 234, 0.6);
  }
  .ag-theme-balham .ag-ltr .ag-selection-fill-top,
  .ag-theme-balham .ag-rtl .ag-selection-fill-top {
    border-top: 1px dashed #0091ea;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-selection-fill-top.ag-cell.ag-cell-range-selected,
  .ag-theme-balham
    .ag-rtl
    .ag-selection-fill-top.ag-cell.ag-cell-range-selected {
    border-top: 1px dashed #869198;
  }
  .ag-theme-balham .ag-ltr .ag-selection-fill-right,
  .ag-theme-balham .ag-rtl .ag-selection-fill-right {
    border-right: 1px dashed #0091ea;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-selection-fill-right.ag-cell.ag-cell-range-selected,
  .ag-theme-balham
    .ag-rtl
    .ag-selection-fill-right.ag-cell.ag-cell-range-selected {
    border-right: 1px dashed #869198;
  }
  .ag-theme-balham .ag-ltr .ag-selection-fill-bottom,
  .ag-theme-balham .ag-rtl .ag-selection-fill-bottom {
    border-bottom: 1px dashed #0091ea;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected,
  .ag-theme-balham
    .ag-rtl
    .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected {
    border-bottom: 1px dashed #869198;
  }
  .ag-theme-balham .ag-ltr .ag-selection-fill-left,
  .ag-theme-balham .ag-rtl .ag-selection-fill-left {
    border-left: 1px dashed #0091ea;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-selection-fill-left.ag-cell.ag-cell-range-selected,
  .ag-theme-balham
    .ag-rtl
    .ag-selection-fill-left.ag-cell.ag-cell-range-selected {
    border-left: 1px dashed #869198;
  }
  .ag-theme-balham .ag-fill-handle,
  .ag-theme-balham .ag-range-handle {
    position: absolute;
    width: 6px;
    height: 6px;
    bottom: -1px;
    right: -1px;
    background-color: #0091ea;
  }
  .ag-theme-balham .ag-fill-handle {
    cursor: cell;
  }
  .ag-theme-balham .ag-range-handle {
    cursor: nwse-resize;
  }
  .ag-theme-balham .ag-cell.ag-cell-inline-editing {
    padding: 12px;
    height: 40px;
  }
  .ag-theme-balham .ag-cell.ag-cell-inline-editing {
    background: white;
    border-radius: 2px;
    box-shadow: none;
    padding: 4px;
    background-color: #f5f7f7;
  }
  .ag-theme-balham .ag-popup-editor {
    background: white;
    border-radius: 2px;
    box-shadow: none;
    padding: 4px;
    background-color: #f5f7f7;
    padding: 0;
  }
  .ag-theme-balham .ag-popup-editor .ag-large-textarea textarea {
    height: auto;
    padding: 12px;
  }
  .ag-theme-balham .ag-virtual-list-container .ag-virtual-list-item {
    height: 28px;
  }
  .ag-theme-balham .ag-rich-select {
    background-color: #f5f7f7;
  }
  .ag-theme-balham .ag-rich-select .ag-rich-select-list {
    width: 100%;
    min-width: 200px;
    height: 182px;
  }
  .ag-theme-balham .ag-rich-select .ag-rich-select-value {
    padding: 0 4px 0 12px;
    height: 28px;
  }
  .ag-theme-balham .ag-rich-select .ag-virtual-list-item {
    cursor: default;
    height: 28px;
  }
  .ag-theme-balham .ag-rich-select .ag-virtual-list-item:hover {
    background-color: #ecf0f1;
  }
  .ag-theme-balham .ag-rich-select .ag-rich-select-row {
    padding-left: 12px;
  }
  .ag-theme-balham .ag-rich-select .ag-rich-select-row-selected {
    background-color: #b7e4ff;
  }
  .ag-theme-balham .ag-ltr .ag-floating-filter-button {
    margin-left: 12px;
  }
  .ag-theme-balham .ag-floating-filter-button button {
    appearance: none;
    background: transparent;
    border: 0;
    height: 16px;
    padding: 0;
    width: 16px;
  }
  .ag-theme-balham
    .ag-selection-checkbox:not(.ag-hidden)
    ~ .ag-cell-value:not(:empty),
  .ag-theme-balham
    .ag-selection-checkbox:not(.ag-hidden)
    + .ag-group-value:not(:empty),
  .ag-theme-balham
    .ag-group-expanded:not(.ag-hidden)
    ~ .ag-cell-value:not(:empty),
  .ag-theme-balham
    .ag-group-expanded:not(.ag-hidden)
    + .ag-group-value:not(:empty),
  .ag-theme-balham
    .ag-group-contracted:not(.ag-hidden)
    ~ .ag-cell-value:not(:empty),
  .ag-theme-balham
    .ag-group-contracted:not(.ag-hidden)
    + .ag-group-value:not(:empty),
  .ag-theme-balham
    .ag-group-checkbox:not(.ag-invisible)
    ~ .ag-cell-value:not(:empty),
  .ag-theme-balham
    .ag-group-checkbox:not(.ag-invisible)
    + .ag-group-value:not(:empty) {
    margin-left: 12px;
  }
  .ag-theme-balham .ag-selection-checkbox:not(.ag-hidden) ~ .ag-group-checkbox,
  .ag-theme-balham .ag-group-expanded:not(.ag-hidden) ~ .ag-group-checkbox,
  .ag-theme-balham .ag-group-contracted:not(.ag-hidden) ~ .ag-group-checkbox,
  .ag-theme-balham .ag-group-checkbox:not(.ag-invisible) ~ .ag-group-checkbox {
    margin-left: 12px;
  }
  .ag-theme-balham .ag-group-child-count {
    margin-left: 2px;
  }
  .ag-theme-balham .ag-selection-checkbox span {
    position: relative;
  }
  .ag-theme-balham .ag-column-drop-horizontal {
    background-color: #f5f7f7;
    height: 28px;
    padding-left: 12px;
  }
  .ag-theme-balham .ag-column-drop-horizontal .ag-icon-group,
  .ag-theme-balham .ag-column-drop-horizontal .ag-icon-pivot {
    margin-right: 12px;
  }
  .ag-theme-balham .ag-column-drop-horizontal .ag-icon-small-left,
  .ag-theme-balham .ag-column-drop-horizontal .ag-icon-small-right {
    margin: 0 4px;
    opacity: 0.54;
  }
  .ag-theme-balham .ag-column-drop-horizontal .ag-column-drop-empty-message {
    opacity: 0.38;
  }
  .ag-theme-balham .ag-column-drop-cell {
    background: #dde4e6;
    border-radius: 16px;
    min-height: 16px;
    padding: 0 2px;
  }
  .ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-text {
    margin: 0 4px;
  }
  .ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-button {
    min-width: 16px;
    margin: 0 2px;
    opacity: 0.54;
  }
  .ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-button:hover {
    opacity: 0.87;
  }
  .ag-theme-balham .ag-column-drop-cell .ag-column-drag {
    margin-left: 8px;
  }
  .ag-theme-balham .ag-column-drop-vertical .ag-column-drop-cell {
    margin-top: 4px;
  }
  .ag-theme-balham .ag-select-agg-func-popup {
    background: white;
    border-radius: 2px;
    box-shadow: none;
    padding: 4px;
    background: white;
    height: 70px;
    padding: 0;
  }
  .ag-theme-balham .ag-select-agg-func-popup .ag-virtual-list-item {
    cursor: default;
    line-height: 20px;
    padding-left: 8px;
  }
  .ag-theme-balham .ag-set-filter-list,
  .ag-theme-balham .ag-menu-column-select-wrapper {
    width: auto;
  }
  .ag-theme-balham .ag-column-drop-vertical > .ag-column-drop-cell {
    margin-left: 4px;
    margin-top: 0;
  }
  .ag-theme-balham .ag-cell-data-changed {
    background-color: rgba(22, 160, 133, 0.5) !important;
  }
  .ag-theme-balham .ag-cell-data-changed-animation {
    background-color: transparent;
    transition: background-color 1s;
  }
  .ag-theme-balham .ag-row-stub {
    background-color: inherit;
  }
  .ag-theme-balham .ag-stub-cell {
    padding-left: 12px;
    padding-top: 4px;
  }
  .ag-theme-balham .ag-stub-cell .ag-loading-icon {
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .ag-theme-balham .ag-stub-cell .ag-loading-text {
    margin-left: 4px;
    margin-top: 4px;
  }
  .ag-theme-balham .ag-floating-top {
    border-bottom: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-floating-bottom {
    border-top: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-floating-top,
  .ag-theme-balham .ag-floating-bottom {
    background-color: inherit;
  }
  .ag-theme-balham .ag-floating-top .ag-row,
  .ag-theme-balham .ag-floating-bottom .ag-row {
    background-color: inherit;
  }
  .ag-theme-balham .ag-status-bar {
    background: white;
    border: 1px solid #bdc3c7;
    border-top-width: 0;
    color: rgba(0, 0, 0, 0.38);
    font-weight: 600;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    padding-right: 16px;
    padding-left: 16px;
    line-height: 1.5;
  }
  .ag-theme-balham .ag-name-value-value {
    color: #000;
  }
  .ag-theme-balham .ag-status-bar-center {
    text-align: center;
  }
  .ag-theme-balham .ag-name-value {
    margin-left: 4px;
    margin-right: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .ag-theme-balham .ag-details-row {
    padding: 20px;
  }
  .ag-theme-balham .ag-overlay-loading-wrapper {
    background-color: rgba(255, 255, 255, 0.5);
  }
  .ag-theme-balham .ag-overlay-loading-center {
    background: white;
    border-radius: 2px;
    box-shadow: none;
    padding: 4px;
  }
  .ag-theme-balham .ag-ltr .ag-side-bar.ag-side-bar-left,
  .ag-theme-balham .ag-rtl .ag-side-bar.ag-side-bar-right {
    border-left: 1px solid #bdc3c7;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-side-bar.ag-side-bar-left
    .ag-side-button.ag-selected
    button,
  .ag-theme-balham
    .ag-rtl
    .ag-side-bar.ag-side-bar-right
    .ag-side-button.ag-selected
    button {
    margin-right: -1px;
    padding-right: 1px;
  }
  .ag-theme-balham .ag-ltr .ag-side-bar.ag-side-bar-left .ag-tool-panel-wrapper,
  .ag-theme-balham
    .ag-rtl
    .ag-side-bar.ag-side-bar-right
    .ag-tool-panel-wrapper {
    border-left: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-ltr .ag-side-bar.ag-side-bar-right,
  .ag-theme-balham .ag-rtl .ag-side-bar.ag-side-bar-left {
    border-right: 1px solid #bdc3c7;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-side-bar.ag-side-bar-right
    .ag-side-button.ag-selected
    button,
  .ag-theme-balham
    .ag-rtl
    .ag-side-bar.ag-side-bar-left
    .ag-side-button.ag-selected
    button {
    margin-left: -1px;
    padding-left: 1px;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-side-bar.ag-side-bar-right
    .ag-tool-panel-wrapper,
  .ag-theme-balham
    .ag-rtl
    .ag-side-bar.ag-side-bar-left
    .ag-tool-panel-wrapper {
    border-right: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-side-bar {
    background-color: #f5f7f7;
    border: 1px solid #bdc3c7;
    border-left-width: 0;
    position: relative;
  }
  .ag-theme-balham .ag-side-bar .ag-side-buttons {
    padding-top: 16px;
    background: white;
    width: 20px;
    position: relative;
  }
  .ag-theme-balham .ag-side-bar .ag-side-buttons .ag-side-button button {
    background: transparent;
    border: 0;
    color: #000;
    padding: 8px 0 8px 0;
    width: calc(100% + 1px);
    margin: 0;
    min-height: 72px;
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: transparent;
    background-position-y: center;
    background-position-x: center;
    background-repeat: no-repeat;
  }
  .ag-theme-balham .ag-side-bar .ag-side-buttons .ag-selected button {
    background-color: #f5f7f7;
    border-color: #bdc3c7;
  }
  .ag-theme-balham .ag-side-bar .ag-panel-container {
    border-right: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-side-bar.full-width .ag-panel-container {
    border-right: 0;
  }
  .ag-theme-balham .ag-side-bar .ag-column-drop {
    min-height: 50px;
  }
  .ag-theme-balham .ag-primary-cols-filter-wrapper {
    margin-left: 4px;
    margin-right: 4px;
  }
  .ag-theme-balham .ag-group-component {
    background-color: #f8f9fa;
    padding: 0px;
    border: 0 solid #cbd0d3;
    border-top-width: 1px;
  }
  .ag-theme-balham
    .ag-group-component.ag-disabled
    > .ag-group-component-label
    .ag-group-component-title,
  .ag-theme-balham
    .ag-group-component.ag-disabled
    > .ag-group-component-container {
    opacity: 0.5;
  }
  .ag-theme-balham .ag-group-component .ag-group-component-title-bar {
    background-color: #e9eeef;
    height: 16px;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    height: 26px;
  }
  .ag-theme-balham .ag-group-component:not(.ag-collapsible) > div {
    margin-left: 0;
  }
  .ag-theme-balham
    .ag-group-component:not(.ag-collapsible)
    > .ag-group-component-title-bar {
    margin-left: 0;
    padding: 4px;
  }
  .ag-theme-balham
    .ag-group-component:not(.ag-collapsible)
    > .ag-group-component-title-bar
    .ag-column-group-icons {
    display: none;
  }
  .ag-theme-balham .ag-group-component .ag-group-component-toolbar {
    background-color: #f2f5f5;
    padding: 4px;
    border: 0 solid #bdc3c7;
  }
  .ag-theme-balham .ag-group-component > .ag-group-component-container {
    margin-left: 8px;
    padding: 4px;
  }
  .ag-theme-balham .ag-group-component .ag-group-item {
    margin: 2px 0;
  }
  .ag-theme-balham
    .ag-group-component
    .ag-group-item
    .ag-group-component-title-bar {
    height: 18px;
  }
  .ag-theme-balham .ag-labeled label {
    margin-right: 4px;
    white-space: nowrap;
  }
  .ag-theme-balham .ag-labeled.ag-label-align-top label {
    margin-bottom: 2px;
  }
  .ag-theme-balham .ag-slider > .ag-wrapper > div:not(:first-of-type),
  .ag-theme-balham .ag-angle-select > .ag-wrapper > div:not(:first-of-type) {
    margin-left: 8px;
  }
  .ag-theme-balham .ag-angle-select .ag-angle-select-field .ag-parent-circle {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
    background-color: #ffffff;
  }
  .ag-theme-balham .ag-angle-select .ag-angle-select-field .ag-child-circle {
    top: 4px;
    left: 12px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    margin-top: -4px;
    border-radius: 3px;
    background-color: #4c4c4c;
  }
  .ag-theme-balham .ag-toggle-button .ag-input-wrapper {
    height: 16px;
    width: 40px;
    background-color: white;
    border: 1px solid #7f8c8d;
    border-radius: 500rem;
  }
  .ag-theme-balham .ag-toggle-button .ag-input-wrapper .ag-icon {
    width: 16px;
    height: 16px;
    border: 1px solid #7f8c8d;
    border-radius: 500rem;
    right: calc(100% - 16px);
  }
  .ag-theme-balham .ag-toggle-button.ag-selected .ag-input-wrapper {
    background-color: #0091ea;
  }
  .ag-theme-balham .ag-toggle-button.ag-selected .ag-input-wrapper .ag-icon {
    background: white;
    right: -1px;
  }
  .ag-theme-balham .ag-color-picker > .ag-wrapper {
    border: 1px solid #bdc3c7;
    border-radius: 5px;
  }
  .ag-theme-balham .ag-color-picker > .ag-wrapper > div {
    width: 16px;
    height: 16px;
  }
  .ag-theme-balham .ag-color-picker > .ag-wrapper button {
    background-color: white;
  }
  .ag-theme-balham .ag-color-picker > .ag-wrapper button:hover {
    background-color: #ecf0f1;
  }
  .ag-theme-balham .ag-dialog.ag-color-dialog {
    border-radius: 5px;
  }
  .ag-theme-balham .ag-color-panel {
    padding: 4px;
  }
  .ag-theme-balham .ag-color-panel .ag-spectrum-color {
    background-color: red;
    border-radius: 2px;
  }
  .ag-theme-balham .ag-color-panel .ag-spectrum-tools {
    padding: 10px;
  }
  .ag-theme-balham .ag-color-panel .ag-spectrum-sat {
    background-image: linear-gradient(to right, white, rgba(204, 154, 129, 0));
  }
  .ag-theme-balham .ag-color-panel .ag-spectrum-val {
    background-image: linear-gradient(to top, black, rgba(204, 154, 129, 0));
  }
  .ag-theme-balham .ag-color-panel .ag-spectrum-dragger {
    border-radius: 12px;
    height: 12px;
    width: 12px;
    border: 1px solid white;
    background: black;
    box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.24);
  }
  .ag-theme-balham .ag-color-panel .ag-spectrum-hue-background {
    border-radius: 2px;
  }
  .ag-theme-balham .ag-color-panel .ag-spectrum-alpha-background {
    border-radius: 2px;
  }
  .ag-theme-balham .ag-color-panel .ag-hue-alpha {
    margin-bottom: 10px;
    height: 11px;
    border-radius: 2px;
  }
  .ag-theme-balham .ag-color-panel .ag-spectrum-slider {
    margin-top: -12px;
    width: 13px;
    height: 13px;
    border-radius: 13px;
    background-color: #f8f8f8;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  }
  .ag-theme-balham .ag-color-panel .ag-spectrum-text-value {
    font-weight: bold;
    line-height: 20px;
    color: #333;
  }
  .ag-theme-balham .ag-color-panel .ag-spectrum-text-value:focus {
    border: 1px solid #0d77e4;
    padding: 2px;
  }
  .ag-theme-balham .ag-color-panel .ag-recent-colors > div {
    margin: 0 3px;
  }
  .ag-theme-balham .ag-color-panel .ag-recent-colors > div:first-child {
    margin-left: 0;
  }
  .ag-theme-balham .ag-color-panel .ag-recent-colors > div:last-child {
    margin-right: 0;
  }
  .ag-theme-balham.ag-popup > div:not(.ag-tooltip-custom) {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  }
  .ag-theme-balham .ag-panel {
    background-color: white;
    border: 1px solid #bdc3c7;
  }
  .ag-dragging-range-handle .ag-theme-balham .ag-panel.ag-dialog,
  .ag-dragging-fill-handle .ag-theme-balham .ag-panel.ag-dialog {
    opacity: 0.7;
    pointer-events: none;
  }
  .ag-theme-balham .ag-panel .ag-title-bar {
    background-color: #f5f7f7;
    border-bottom: 1px solid #d9dcde;
    color: rgba(0, 0, 0, 0.54);
    height: 32px;
    font-size: 12px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    padding: 5px 10px;
    padding-left: 12px;
  }
  .ag-theme-balham .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button {
    height: 20px;
    width: 20px;
    border-radius: 5px;
  }
  .ag-theme-balham
    .ag-panel
    .ag-title-bar
    .ag-title-bar-buttons
    .ag-button
    .ag-icon {
    line-height: 20px;
    font-size: 20px;
  }
  .ag-theme-balham
    .ag-panel
    .ag-title-bar
    .ag-title-bar-buttons
    .ag-button:hover,
  .ag-theme-balham
    .ag-panel
    .ag-title-bar
    .ag-title-bar-buttons
    .ag-button.ag-has-popup {
    background-color: #d7e0e2;
  }
  .ag-theme-balham
    .ag-panel
    .ag-title-bar
    .ag-title-bar-buttons
    .ag-button:not(:last-child) {
    margin-right: 5px;
  }
  .ag-theme-balham .ag-panel .ag-message-box .ag-message-box-button-bar {
    height: 30px;
    background-color: #f5f7f7;
    padding: 2px;
  }
  .ag-theme-balham .ag-panel .ag-message-box .ag-message-box-button-bar button {
    border-radius: 2px;
  }
  .ag-theme-balham .ag-tooltip {
    background-color: #cbd0d3;
    color: #000;
    border-radius: 2px;
    padding: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: #cbd0d3;
    transition: opacity 1s;
  }
  .ag-theme-balham .ag-tooltip.ag-tooltip-hiding {
    opacity: 0;
  }
  .ag-theme-balham .ag-chart .ag-chart-menu {
    border-radius: 5px;
    background: white;
  }
  .ag-theme-balham .ag-chart .ag-chart-menu > span:hover {
    background-color: #e6e6e6;
  }
  .ag-theme-balham
    .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-mini-wrapper
    .ag-group-component-container {
    margin-left: 0;
  }
  .ag-theme-balham
    .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-mini-wrapper
    .ag-chart-mini-thumbnail {
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    margin: 5px;
  }
  .ag-theme-balham
    .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-mini-wrapper
    .ag-chart-mini-thumbnail:nth-child(2n + 2):not(:last-child) {
    margin-left: auto;
    margin-right: auto;
  }
  .ag-theme-balham
    .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-mini-wrapper
    .ag-chart-mini-thumbnail:nth-child(3n + 1) {
    margin-left: 2px;
  }
  .ag-theme-balham
    .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-mini-wrapper
    .ag-chart-mini-thumbnail:nth-child(3n) {
    margin-right: 2px;
  }
  .ag-theme-balham
    .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-mini-wrapper
    .ag-chart-mini-thumbnail.ag-selected {
    border-color: #0091ea;
  }
  .ag-theme-balham
    .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-nav-bar
    .ag-nav-card-selector
    .ag-nav-card-item {
    background: #000;
    width: 8px;
    height: 8px;
    border-radius: 4px;
  }
  .ag-theme-balham
    .ag-chart-tabbed-menu
    .ag-chart-settings
    .ag-chart-settings-nav-bar
    .ag-nav-card-selector
    .ag-nav-card-item.ag-selected {
    background: #0091ea;
  }
  .ag-theme-balham
    .ag-chart-tabbed-menu
    .ag-chart-data
    .ag-data-select-checkbox
    .ag-column-drag {
    margin-left: 4px;
  }
  .ag-theme-balham
    .ag-chart-tabbed-menu
    .ag-chart-data
    .ag-chart-data-wrapper
    .ag-toggle-button.ag-group-item {
    margin: 4.8px 0;
  }
  .ag-theme-balham
    .ag-chart-tabbed-menu
    .ag-chart-format
    .ag-chart-format-wrapper
    .ag-group-item {
    margin: 4.8px 0;
  }
  .ag-theme-balham .ag-icon {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: "agGridBalham";
    display: block;
    speak: none;
    font-size: 16px;
    color: #7f8c8d;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .ag-theme-balham .ag-icon-aggregation:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-arrows:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-asc:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-cancel:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-chart:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-checkbox-checked:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-checkbox-indeterminate:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-checkbox-unchecked:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-color-picker:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-column:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-columns:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-contracted:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-copy:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-cross:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-cut:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-data:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-desc:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-expanded:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-eye-slash:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-eye:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-filter:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-first:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-grip:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-group:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-indeterminate:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-last:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-left:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-linked:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-loading:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-maximize:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-menu:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-minimize:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-minus:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-next:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-none:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-not-allowed:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-paste:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-pin:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-pivot:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-plus:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-previous:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-radio-button-off:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-radio-button-on:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-right:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-save:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-small-down:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-small-left:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-small-right:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-small-up:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-tick:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-tree-closed:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-tree-indeterminate:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-tree-open:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-unlinked:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-checkbox-checked,
  .ag-theme-balham .ag-icon-checkbox-indeterminate,
  .ag-theme-balham .ag-icon-checkbox-unchecked {
    background-color: white;
    line-height: 16px;
    border-radius: 3px;
  }
  .ag-theme-balham .ag-icon-checkbox-checked-readonly,
  .ag-theme-balham .ag-icon-checkbox-indeterminate-readonly,
  .ag-theme-balham .ag-icon-checkbox-unchecked-readonly {
    cursor: default;
    opacity: 0.38;
  }
  .ag-theme-balham .ag-icon-checkbox-checked {
    color: #0091ea;
  }
  .ag-theme-balham .ag-icon-checkbox-checked-readonly:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-checkbox-indeterminate-readonly:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-checkbox-unchecked-readonly:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-row-drag:before {
    content: "";
  }
  .ag-theme-balham .ag-right-arrow:before {
    content: "";
  }
  .ag-theme-balham .ag-icon-radio-button-on {
    color: #0091ea;
  }
  .ag-theme-balham .ag-right-arrow:before {
    content: "";
  }
  .ag-theme-balham .ag-rtl {
    text-align: right;
  }
  .ag-theme-balham .ag-rtl .ag-numeric-cell {
    text-align: left;
  }
  .ag-theme-balham .ag-rtl .ag-checkbox:not(.ag-label-align-left) label,
  .ag-theme-balham .ag-rtl .ag-radio-button:not(.ag-label-align-left) label,
  .ag-theme-balham .ag-rtl .ag-toggle-button:not(.ag-label-align-left) label {
    margin-right: 4px;
    margin-left: 0;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-pivot-mode-panel
    .ag-pivot-mode-select {
    margin-right: 4px;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-column-drop
    .ag-column-drop-empty-message {
    padding-left: 4px;
    padding-right: 16px;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-column-select-panel
    .ag-column-tool-panel-column-group
    .ag-column-select-checkbox,
  .ag-theme-balham
    .ag-rtl
    .ag-column-select-panel
    .ag-column-tool-panel-column-group
    .ag-column-group-icons,
  .ag-theme-balham
    .ag-rtl
    .ag-column-select-panel
    .ag-column-tool-panel-column
    .ag-column-select-checkbox,
  .ag-theme-balham
    .ag-rtl
    .ag-column-select-panel
    .ag-column-tool-panel-column
    .ag-column-group-icons {
    margin-left: 4px;
    margin-right: 4px;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-column-select-panel
    .ag-column-group-closed-icon {
    display: block;
    transform: rotate(180deg);
  }
  .ag-theme-balham
    .ag-rtl
    .ag-column-select-panel
    .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {
    margin-left: 0;
    margin-right: 24px;
  }
  .ag-theme-balham .ag-rtl .ag-header-select-all {
    margin-left: 12px;
    margin-right: 0;
  }
  .ag-theme-balham .ag-rtl .ag-selection-checkbox + .ag-cell-value:not(:empty),
  .ag-theme-balham .ag-rtl .ag-selection-checkbox + .ag-group-value:not(:empty),
  .ag-theme-balham .ag-rtl .ag-group-checkbox + .ag-cell-value:not(:empty),
  .ag-theme-balham .ag-rtl .ag-group-checkbox + .ag-group-value:not(:empty),
  .ag-theme-balham .ag-rtl .ag-group-expanded + .ag-cell-value:not(:empty),
  .ag-theme-balham .ag-rtl .ag-group-expanded + .ag-group-value:not(:empty),
  .ag-theme-balham .ag-rtl .ag-group-contracted + .ag-cell-value:not(:empty),
  .ag-theme-balham .ag-rtl .ag-group-contracted + .ag-group-value:not(:empty) {
    margin-right: 12px;
    margin-left: initial;
  }
  .ag-theme-balham .ag-rtl .ag-selection-checkbox + .ag-group-checkbox,
  .ag-theme-balham .ag-rtl .ag-group-checkbox + .ag-group-checkbox,
  .ag-theme-balham .ag-rtl .ag-group-expanded + .ag-group-checkbox,
  .ag-theme-balham .ag-rtl .ag-group-contracted + .ag-group-checkbox {
    margin-right: 12px;
    margin-left: initial;
  }
  .ag-theme-balham .ag-rtl .ag-group-child-count {
    margin-left: unset;
    margin-right: 2px;
  }
  .ag-theme-balham .ag-rtl .ag-column-drop-horizontal {
    padding-right: 12px;
  }
  .ag-theme-balham .ag-rtl .ag-column-drop-horizontal .ag-icon-group,
  .ag-theme-balham .ag-rtl .ag-column-drop-horizontal .ag-icon-pivot {
    margin-left: 12px;
    margin-right: 0;
  }
  .ag-theme-balham .ag-rtl .ag-floating-filter-button {
    margin-right: 12px;
  }
  .ag-theme-balham .ag-rtl .ag-set-filter-item > div,
  .ag-theme-balham .ag-rtl .ag-set-filter-item > span {
    margin-left: 0;
    margin-right: 5px;
  }
  .ag-theme-balham .ag-rtl .ag-header .ag-header-cell-resize::after {
    border-left: 1px solid #bdc3c7;
    border-right: 0;
  }
  .ag-theme-balham .ag-rtl .ag-row-group-leaf-indent {
    margin-right: 28px;
  }
  .ag-theme-balham .ag-rtl .ag-cell {
    border-left: 1px solid transparent;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left),
  .ag-theme-balham
    .ag-rtl
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left),
  .ag-theme-balham
    .ag-rtl
    .ag-root:not(.ag-has-focus)
    .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {
    border-left: 1px solid #bdc3c7;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right),
  .ag-theme-balham
    .ag-rtl
    .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right),
  .ag-theme-balham
    .ag-rtl
    .ag-root:not(.ag-has-focus)
    .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {
    border-right: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-rtl .ag-side-bar {
    border-right-width: 0;
  }
  .ag-theme-balham .ag-rtl .ag-side-bar .ag-panel-container {
    border-left: 1px solid #bdc3c7;
    border-right: 0;
  }
  .ag-theme-balham .ag-rtl .ag-side-bar.full-width .ag-panel-container {
    border-left: 0;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-filter-toolpanel-header
    > div:not(.ag-input-wrapper) {
    padding-right: 2px;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item {
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 0;
    margin-left: 2px;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-1
    .ag-filter-toolpanel-header,
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-1
    .ag-filter-toolpanel-header {
    padding-right: 1rem;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-2
    .ag-group-component-title-bar,
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-2
    .ag-group-component-title-bar {
    padding-right: 1rem;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-2
    .ag-filter-toolpanel-header,
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-2
    .ag-filter-toolpanel-header {
    padding-right: 2rem;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-3
    .ag-group-component-title-bar,
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-3
    .ag-group-component-title-bar {
    padding-right: 2rem;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-3
    .ag-filter-toolpanel-header,
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-3
    .ag-filter-toolpanel-header {
    padding-right: 3rem;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-4
    .ag-group-component-title-bar,
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-4
    .ag-group-component-title-bar {
    padding-right: 3rem;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-4
    .ag-filter-toolpanel-header,
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-4
    .ag-filter-toolpanel-header {
    padding-right: 4rem;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-5
    .ag-group-component-title-bar,
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-5
    .ag-group-component-title-bar {
    padding-right: 4rem;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item:not(.ag-filter-toolpanel-instance).ag-level-5
    .ag-filter-toolpanel-header,
  .ag-theme-balham
    .ag-rtl
    .ag-tool-panel-wrapper
    .ag-filter-panel
    .ag-group-component-container
    .ag-group-item
    > .ag-group-component.ag-level-5
    .ag-filter-toolpanel-header {
    padding-right: 5rem;
  }
  .ag-theme-balham .sass-variables::after {
    content: '{ "autoSizePadding": "12px", "headerHeight": "32px", "groupPaddingSize": "28px", "footerPaddingAddition": "16px", "virtualItemHeight": "28px", "aggFuncPopupHeight": "98px", "checkboxIndentWidth": "20px", "leafNodePadding": "12px", "rowHeight": "28px", "gridSize": "4px", "iconSize": "16px" }';
    display: none;
  }
  .ag-theme-balham .ag-cell-highlight {
    background-color: #0091ea !important;
  }
  .ag-theme-balham .ag-header-cell-resize::after {
    height: 80%;
    margin-top: 8px;
  }
  .ag-theme-balham .ag-header-cell::after,
  .ag-theme-balham .ag-header-group-cell::after {
    border-right: 1px solid rgba(189, 195, 199, 0.5);
    content: " ";
    height: 16px;
    margin-top: 8px;
    position: absolute;
    text-indent: -2000px;
    top: 0;
  }
  .ag-theme-balham .ag-ltr .ag-header-cell::after,
  .ag-theme-balham .ag-ltr .ag-header-group-cell::after {
    right: 0;
  }
  .ag-theme-balham .ag-rtl .ag-header-cell::after,
  .ag-theme-balham .ag-rtl .ag-header-group-cell::after {
    left: 0;
  }
  .ag-theme-balham .ag-column-drop-horizontal.ag-column-drop {
    border: 1px solid #bdc3c7;
    border-bottom: 0;
  }
  .ag-theme-balham
    .ag-ltr
    .ag-column-drop-horizontal.ag-column-drop.ag-width-half:first-child {
    border-right: 0;
  }
  .ag-theme-balham
    .ag-rtl
    .ag-column-drop-horizontal.ag-column-drop.ag-width-half:first-child {
    border-left: 0;
  }
  .ag-theme-balham .ag-row {
    border-color: #d9dcde;
  }
  .ag-theme-balham .ag-row-selected {
    border-color: #b7e4ff;
  }
  .ag-theme-balham .ag-column-drop-cell {
    min-height: 24px;
  }
  .ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-button {
    margin-bottom: 2px;
    margin-top: 2px;
  }
  .ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-button:hover {
    opacity: 1;
  }
  .ag-theme-balham .ag-column-drop-vertical .ag-column-drop-cell {
    margin-left: 8px;
    margin-right: 8px;
  }
  .ag-theme-balham
    .ag-column-drop-vertical
    .ag-column-drop-cell
    .ag-column-drop-cell-text {
    margin-left: 8px;
  }
  .ag-theme-balham .ag-column-drop-horizontal {
    background-color: #f5f7f7;
    height: 32px;
  }
  .ag-theme-balham .ag-column-drop-horizontal .ag-column-drop-cell-text {
    margin-left: 8px;
  }
  .ag-theme-balham .ag-root {
    border: 1px solid #bdc3c7;
  }
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-column-select-panel
    .ag-column-tool-panel-column-group,
  .ag-theme-balham
    .ag-tool-panel-wrapper
    .ag-column-select-panel
    .ag-column-tool-panel-column {
    min-height: 20px;
  }
  .ag-theme-balham .ag-tool-panel-wrapper .ag-column-drop {
    padding-bottom: 8px;
    padding-top: 8px;
  }
  .ag-theme-balham .ag-menu-option {
    height: 28px;
  }
  .ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column-group,
  .ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column {
    height: 20px;
  }
  .ag-theme-balham .ag-tab-header {
    border-bottom: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-tab-header .ag-tab {
    margin-bottom: -2px;
  }
  .ag-theme-balham .ag-tab-header .ag-tab.ag-tab-selected {
    background-color: white;
    border-bottom-color: transparent;
  }
  .ag-theme-balham .ag-tab-body,
  .ag-theme-balham .ag-popup-editor,
  .ag-theme-balham .ag-menu {
    background-color: white;
    color: #000;
  }
  .ag-theme-balham .ag-cell.ag-cell-inline-editing {
    height: 28px;
    padding: 0;
  }
  .ag-theme-balham .ag-details-row {
    background-color: white;
  }
  .ag-theme-balham .ag-overlay-loading-wrapper {
    background-color: rgba(255, 255, 255, 0.5);
  }
  .ag-theme-balham .ag-overlay-loading-center {
    background-color: white;
    border: 1px solid #bdc3c7;
    color: #000;
    padding: 16px;
  }
  .ag-theme-balham .ag-cell-range-selected-1:not(.ag-cell-focus) {
    background-color: rgba(0, 145, 234, 0.3);
  }
  .ag-theme-balham .ag-cell-range-selected-2:not(.ag-cell-focus) {
    background-color: rgba(0, 145, 234, 0.4);
  }
  .ag-theme-balham .ag-cell-range-selected-3:not(.ag-cell-focus) {
    background-color: rgba(0, 145, 234, 0.5);
  }
  .ag-theme-balham .ag-cell-range-selected-4:not(.ag-cell-focus) {
    background-color: rgba(0, 145, 234, 0.6);
  }
  .ag-theme-balham .ag-rich-select-value {
    border-bottom: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-filter-apply-panel {
    border-top: 1px solid #bdc3c7;
  }
  .ag-theme-balham .ag-group-expanded .ag-icon-expanded:empty:before {
    content: "";
  }
  .ag-theme-balham .ag-filter-toolpanel-body {
    background-color: white;
  }
`;

export default StyledGrid;
