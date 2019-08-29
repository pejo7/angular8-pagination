import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgPaginationService {
    constructor() { }
    /**
     * @param {?} totalItems
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} maxPages
     * @return {?}
     */
    getPager(totalItems, currentPage = 1, pageSize = 10, maxPages = 5) {
        // calculate total pages
        /** @type {?} */
        let totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        /** @type {?} */
        let startPage;
        /** @type {?} */
        let endPage;
        if (maxPages === 5) {
            if (totalPages <= 5) {
                // less than 5 total pages so show all
                startPage = 1;
                endPage = totalPages;
            }
            else {
                // more than 5 total pages so calculate start and end pages
                if (currentPage <= 3) {
                    startPage = 1;
                    endPage = 5;
                }
                else if (currentPage + 1 >= totalPages) {
                    startPage = totalPages - 3;
                    endPage = totalPages;
                }
                else {
                    startPage = currentPage - 2;
                    endPage = currentPage + 2;
                }
            }
        }
        if (maxPages === 10) {
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            }
            else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                }
                else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                }
                else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }
        }
        // calculate start and end item indexes
        /** @type {?} */
        let startIndex = (currentPage - 1) * pageSize;
        /** @type {?} */
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        /** @type {?} */
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map((/**
         * @param {?} i
         * @return {?}
         */
        i => startPage + i));
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
NgPaginationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgPaginationService.ctorParameters = () => [];
/** @nocollapse */ NgPaginationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgPaginationService_Factory() { return new NgPaginationService(); }, token: NgPaginationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgPaginationComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgPaginationModule {
}
NgPaginationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgPaginationComponent],
                imports: [
                    CommonModule,
                ],
                exports: [NgPaginationComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgPaginationComponent, NgPaginationModule, NgPaginationService };
//# sourceMappingURL=ng-pagination.js.map
