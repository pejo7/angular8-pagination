# angular8-pagination

A small pagination component for Angular 8+

## Getting Started

```
npm i angular8-pagination
```
Import the module
```
import { NgPaginationModule } from 'agnular8-pagination';
```
```
imports: [
    BrowserModule,
    NgPaginationModule
  ]
```
HTML:
```
<ngPagination
[allItems]='arrayToSplit'
[pageSize]='10'
[showTotal]='true'
[maxPages]='5'
(pagedItems)='getSplitArray($event)'>
</ngPagination>
```

TS:
```
getSplitArray(event) {
    this.arrayToShow = []
    this.arrayToShow = event
  }
```
Main uses explanation:
```
allItems: The array you want to paginate. (Required)
pageSize: How many items to show per page
showTotal: Show the amount of items displayed. (default false)
maxPage: Amount of links to paginate. (5/10) (default 5)
pageItems: Output the paginated array to show.
```

## Authors

* **Idan Peled**


