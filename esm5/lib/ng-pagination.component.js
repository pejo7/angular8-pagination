/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgPaginationService } from './ng-pagination.service';
var NgPaginationComponent = /** @class */ (function () {
    function NgPaginationComponent(pagination) {
        this.pagination = pagination;
        this.pagedItems = new EventEmitter();
        this.pager = {};
        this.showTotal = false;
    }
    /**
     * @return {?}
     */
    NgPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setPage(1);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NgPaginationComponent.prototype.setPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        // get pager object from service
        this.pager = this.pagination.getPager(this.allItems.length, page, this.pageSize, this.maxPages);
        // get current page of items
        this.pagedItems.emit(this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1));
    };
    NgPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngPagination',
                    template: "\n  <div class=\"container\">\n    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n            <a (click)=\"setPage(1)\">First</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n            <a (click)=\"setPage(pager.currentPage - 1)\">&laquo;</a>\n        </li>\n        <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n            <a (click)=\"setPage(page)\">{{page}}</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n            <a (click)=\"setPage(pager.currentPage + 1)\">&raquo;</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n            <a (click)=\"setPage(pager.totalPages)\">Last</a>\n        </li>\n    </ul>\n    <span *ngIf='showTotal'>{{pager.startIndex +1}} - {{pager.endIndex +1}} out of {{allItems.length}}</span>\n</div>\n",
                    styles: ["\n  .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nul {\n    padding-inline-start: 0;\n}\n\n.pagination li {\n    cursor: pointer;\n    user-select: none;\n    display: inline-block;\n    border-radius: 2px;\n    text-align: center;\n    vertical-align: top;\n    height: 30px;\n}\n\n.pagination li a {\n    color: #444;\n    display: inline-block;\n    font-size: 1.2rem;\n    padding: 0 10px;\n    line-height: 30px;\n}\n\n.pagination li.active a {\n    color: #fff;\n}\n\n.pagination li.active {\n    background-color: #ee6e73;\n}\n\n.pagination li.disabled a {\n    cursor: default;\n    color: #999;\n}\n\n.pagination li i {\n    font-size: 2rem;\n}\n\n.pagination li.pages ul li {\n    display: inline-block;\n    float: none;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    NgPaginationComponent.ctorParameters = function () { return [
        { type: NgPaginationService }
    ]; };
    NgPaginationComponent.propDecorators = {
        allItems: [{ type: Input }],
        pageSize: [{ type: Input }],
        maxPages: [{ type: Input }],
        showTotal: [{ type: Input }],
        pagedItems: [{ type: Output }]
    };
    return NgPaginationComponent;
}());
export { NgPaginationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsibGliL25nLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlEO0lBcUZFLCtCQUFvQixVQUErQjtRQUEvQixlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUh6QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN0RCxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBR2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVGLHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDakIsQ0FBQzs7Ozs7SUFFRCx1Q0FBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNsQixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEcsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDM0YsQ0FBQzs7Z0JBbkdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDIrQkFxQlg7NkJBRUcsa3hCQWtESDtpQkFDQTs7OztnQkE5RVEsbUJBQW1COzs7MkJBZ0Z6QixLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLE1BQU07O0lBbUJULDRCQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0F4QlkscUJBQXFCOzs7SUFDaEMseUNBQXlCOztJQUN6Qix5Q0FBMEI7O0lBQzFCLHlDQUEwQjs7SUFDMUIsMENBQTRCOztJQUM1QiwyQ0FBc0Q7O0lBQ3RELHNDQUFnQjs7Ozs7SUFFSiwyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ1BhZ2luYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uZy1wYWdpbmF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ1BhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPHVsICpuZ0lmPVwicGFnZXIucGFnZXMgJiYgcGFnZXIucGFnZXMubGVuZ3RoXCIgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgIDxsaSBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IDF9XCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwic2V0UGFnZSgxKVwiPkZpcnN0PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgW25nQ2xhc3NdPVwie2Rpc2FibGVkOnBhZ2VyLmN1cnJlbnRQYWdlID09PSAxfVwiPlxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNldFBhZ2UocGFnZXIuY3VycmVudFBhZ2UgLSAxKVwiPiZsYXF1bzs8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlci5wYWdlc1wiIFtuZ0NsYXNzXT1cInthY3RpdmU6cGFnZXIuY3VycmVudFBhZ2UgPT09IHBhZ2V9XCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwic2V0UGFnZShwYWdlKVwiPnt7cGFnZX19PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgW25nQ2xhc3NdPVwie2Rpc2FibGVkOnBhZ2VyLmN1cnJlbnRQYWdlID09PSBwYWdlci50b3RhbFBhZ2VzfVwiPlxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNldFBhZ2UocGFnZXIuY3VycmVudFBhZ2UgKyAxKVwiPiZyYXF1bzs8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IHBhZ2VyLnRvdGFsUGFnZXN9XCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwic2V0UGFnZShwYWdlci50b3RhbFBhZ2VzKVwiPkxhc3Q8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8c3BhbiAqbmdJZj0nc2hvd1RvdGFsJz57e3BhZ2VyLnN0YXJ0SW5kZXggKzF9fSAtIHt7cGFnZXIuZW5kSW5kZXggKzF9fSBvdXQgb2Yge3thbGxJdGVtcy5sZW5ndGh9fTwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudWwge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xufVxuXG4ucGFnaW5hdGlvbiBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ucGFnaW5hdGlvbiBsaSBhIHtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4ucGFnaW5hdGlvbiBsaS5hY3RpdmUgYSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5wYWdpbmF0aW9uIGxpLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlNmU3Mztcbn1cblxuLnBhZ2luYXRpb24gbGkuZGlzYWJsZWQgYSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGNvbG9yOiAjOTk5O1xufVxuXG4ucGFnaW5hdGlvbiBsaSBpIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5wYWdpbmF0aW9uIGxpLnBhZ2VzIHVsIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1BhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhbGxJdGVtczogYW55W107XG4gIEBJbnB1dCgpIHBhZ2VTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heFBhZ2VzOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNob3dUb3RhbDogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHBhZ2VkSXRlbXMgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+KCk7XG4gIHBhZ2VyOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luYXRpb246IE5nUGFnaW5hdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLnNob3dUb3RhbCA9IGZhbHNlO1xuICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0UGFnZSgxKVxuICB9XG5cbiAgc2V0UGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICAvLyBnZXQgcGFnZXIgb2JqZWN0IGZyb20gc2VydmljZVxuICAgIHRoaXMucGFnZXIgPSB0aGlzLnBhZ2luYXRpb24uZ2V0UGFnZXIodGhpcy5hbGxJdGVtcy5sZW5ndGgsIHBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubWF4UGFnZXMpO1xuXG4gICAgLy8gZ2V0IGN1cnJlbnQgcGFnZSBvZiBpdGVtc1xuICAgIHRoaXMucGFnZWRJdGVtcy5lbWl0KHRoaXMuYWxsSXRlbXMuc2xpY2UodGhpcy5wYWdlci5zdGFydEluZGV4LCB0aGlzLnBhZ2VyLmVuZEluZGV4ICsgMSkpIFxuICB9XG5cbn1cbiJdfQ==