/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgPaginationService } from './ng-pagination.service';
export class NgPaginationComponent {
    /**
     * @param {?} pagination
     */
    constructor(pagination) {
        this.pagination = pagination;
        this.pagedItems = new EventEmitter();
        this.pager = {};
        this.showTotal = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setPage(1);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    setPage(page) {
        // get pager object from service
        this.pager = this.pagination.getPager(this.allItems.length, page, this.pageSize, this.maxPages);
        // get current page of items
        this.pagedItems.emit(this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1));
    }
}
NgPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngPagination',
                template: `
  <div class="container">
    <ul *ngIf="pager.pages && pager.pages.length" class="pagination">
        <li [ngClass]="{disabled:pager.currentPage === 1}">
            <a (click)="setPage(1)">First</a>
        </li>
        <li [ngClass]="{disabled:pager.currentPage === 1}">
            <a (click)="setPage(pager.currentPage - 1)">&laquo;</a>
        </li>
        <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}">
            <a (click)="setPage(page)">{{page}}</a>
        </li>
        <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">
            <a (click)="setPage(pager.currentPage + 1)">&raquo;</a>
        </li>
        <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">
            <a (click)="setPage(pager.totalPages)">Last</a>
        </li>
    </ul>
    <span *ngIf='showTotal'>{{pager.startIndex +1}} - {{pager.endIndex +1}} out of {{allItems.length}}</span>
</div>
`,
                styles: [`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

ul {
    padding-inline-start: 0;
}

.pagination li {
    cursor: pointer;
    user-select: none;
    display: inline-block;
    border-radius: 2px;
    text-align: center;
    vertical-align: top;
    height: 30px;
}

.pagination li a {
    color: #444;
    display: inline-block;
    font-size: 1.2rem;
    padding: 0 10px;
    line-height: 30px;
}

.pagination li.active a {
    color: #fff;
}

.pagination li.active {
    background-color: #ee6e73;
}

.pagination li.disabled a {
    cursor: default;
    color: #999;
}

.pagination li i {
    font-size: 2rem;
}

.pagination li.pages ul li {
    display: inline-block;
    float: none;
}
`]
            }] }
];
/** @nocollapse */
NgPaginationComponent.ctorParameters = () => [
    { type: NgPaginationService }
];
NgPaginationComponent.propDecorators = {
    allItems: [{ type: Input }],
    pageSize: [{ type: Input }],
    maxPages: [{ type: Input }],
    showTotal: [{ type: Input }],
    pagedItems: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgPaginationComponent.prototype.allItems;
    /** @type {?} */
    NgPaginationComponent.prototype.pageSize;
    /** @type {?} */
    NgPaginationComponent.prototype.maxPages;
    /** @type {?} */
    NgPaginationComponent.prototype.showTotal;
    /** @type {?} */
    NgPaginationComponent.prototype.pagedItems;
    /** @type {?} */
    NgPaginationComponent.prototype.pager;
    /**
     * @type {?}
     * @private
     */
    NgPaginationComponent.prototype.pagination;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsibGliL25nLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBK0U5RCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBUWhDLFlBQW9CLFVBQStCO1FBQS9CLGVBQVUsR0FBVixVQUFVLENBQXFCO1FBSHpDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3RELFVBQUssR0FBUSxFQUFFLENBQUM7UUFHZCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUYsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDakIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEcsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDM0YsQ0FBQzs7O1lBbkdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxQlg7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0RIO2FBQ0E7Ozs7WUE5RVEsbUJBQW1COzs7dUJBZ0Z6QixLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLE1BQU07Ozs7SUFKUCx5Q0FBeUI7O0lBQ3pCLHlDQUEwQjs7SUFDMUIseUNBQTBCOztJQUMxQiwwQ0FBNEI7O0lBQzVCLDJDQUFzRDs7SUFDdEQsc0NBQWdCOzs7OztJQUVKLDJDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUGFnaW5hdGlvblNlcnZpY2UgfSBmcm9tICcuL25nLXBhZ2luYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nUGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8dWwgKm5nSWY9XCJwYWdlci5wYWdlcyAmJiBwYWdlci5wYWdlcy5sZW5ndGhcIiBjbGFzcz1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgPGxpIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDpwYWdlci5jdXJyZW50UGFnZSA9PT0gMX1cIj5cbiAgICAgICAgICAgIDxhIChjbGljayk9XCJzZXRQYWdlKDEpXCI+Rmlyc3Q8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IDF9XCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwic2V0UGFnZShwYWdlci5jdXJyZW50UGFnZSAtIDEpXCI+JmxhcXVvOzwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBwYWdlIG9mIHBhZ2VyLnBhZ2VzXCIgW25nQ2xhc3NdPVwie2FjdGl2ZTpwYWdlci5jdXJyZW50UGFnZSA9PT0gcGFnZX1cIj5cbiAgICAgICAgICAgIDxhIChjbGljayk9XCJzZXRQYWdlKHBhZ2UpXCI+e3twYWdlfX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IHBhZ2VyLnRvdGFsUGFnZXN9XCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwic2V0UGFnZShwYWdlci5jdXJyZW50UGFnZSArIDEpXCI+JnJhcXVvOzwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDpwYWdlci5jdXJyZW50UGFnZSA9PT0gcGFnZXIudG90YWxQYWdlc31cIj5cbiAgICAgICAgICAgIDxhIChjbGljayk9XCJzZXRQYWdlKHBhZ2VyLnRvdGFsUGFnZXMpXCI+TGFzdDwvYT5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxzcGFuICpuZ0lmPSdzaG93VG90YWwnPnt7cGFnZXIuc3RhcnRJbmRleCArMX19IC0ge3twYWdlci5lbmRJbmRleCArMX19IG91dCBvZiB7e2FsbEl0ZW1zLmxlbmd0aH19PC9zcGFuPlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG51bCB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG59XG5cbi5wYWdpbmF0aW9uIGxpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5wYWdpbmF0aW9uIGxpIGEge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5wYWdpbmF0aW9uIGxpLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnBhZ2luYXRpb24gbGkuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU2ZTczO1xufVxuXG4ucGFnaW5hdGlvbiBsaS5kaXNhYmxlZCBhIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgY29sb3I6ICM5OTk7XG59XG5cbi5wYWdpbmF0aW9uIGxpIGkge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnBhZ2luYXRpb24gbGkucGFnZXMgdWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbm9uZTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIE5nUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFsbEl0ZW1zOiBhbnlbXTtcbiAgQElucHV0KCkgcGFnZVNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgbWF4UGFnZXM6IG51bWJlcjtcbiAgQElucHV0KCkgc2hvd1RvdGFsOiBib29sZWFuO1xuICBAT3V0cHV0KCkgcGFnZWRJdGVtcyA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj4oKTtcbiAgcGFnZXI6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5hdGlvbjogTmdQYWdpbmF0aW9uU2VydmljZSkge1xuICAgIHRoaXMuc2hvd1RvdGFsID0gZmFsc2U7XG4gICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRQYWdlKDEpXG4gIH1cblxuICBzZXRQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIC8vIGdldCBwYWdlciBvYmplY3QgZnJvbSBzZXJ2aWNlXG4gICAgdGhpcy5wYWdlciA9IHRoaXMucGFnaW5hdGlvbi5nZXRQYWdlcih0aGlzLmFsbEl0ZW1zLmxlbmd0aCwgcGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5tYXhQYWdlcyk7XG5cbiAgICAvLyBnZXQgY3VycmVudCBwYWdlIG9mIGl0ZW1zXG4gICAgdGhpcy5wYWdlZEl0ZW1zLmVtaXQodGhpcy5hbGxJdGVtcy5zbGljZSh0aGlzLnBhZ2VyLnN0YXJ0SW5kZXgsIHRoaXMucGFnZXIuZW5kSW5kZXggKyAxKSkgXG4gIH1cblxufVxuIl19