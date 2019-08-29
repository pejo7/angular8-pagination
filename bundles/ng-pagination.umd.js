(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-pagination', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-pagination'] = {}, global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgPaginationService = /** @class */ (function () {
        function NgPaginationService() {
        }
        /**
         * @param {?} totalItems
         * @param {?=} currentPage
         * @param {?=} pageSize
         * @param {?=} maxPages
         * @return {?}
         */
        NgPaginationService.prototype.getPager = /**
         * @param {?} totalItems
         * @param {?=} currentPage
         * @param {?=} pageSize
         * @param {?=} maxPages
         * @return {?}
         */
        function (totalItems, currentPage, pageSize, maxPages) {
            if (currentPage === void 0) { currentPage = 1; }
            if (pageSize === void 0) { pageSize = 10; }
            if (maxPages === void 0) { maxPages = 5; }
            // calculate total pages
            /** @type {?} */
            var totalPages = Math.ceil(totalItems / pageSize);
            // ensure current page isn't out of range
            if (currentPage < 1) {
                currentPage = 1;
            }
            else if (currentPage > totalPages) {
                currentPage = totalPages;
            }
            /** @type {?} */
            var startPage;
            /** @type {?} */
            var endPage;
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
            var startIndex = (currentPage - 1) * pageSize;
            /** @type {?} */
            var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
            // create an array of pages to ng-repeat in the pager control
            /** @type {?} */
            var pages = Array.from(Array((endPage + 1) - startPage).keys()).map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return startPage + i; }));
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
        };
        NgPaginationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgPaginationService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgPaginationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgPaginationService_Factory() { return new NgPaginationService(); }, token: NgPaginationService, providedIn: "root" });
        return NgPaginationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgPaginationComponent = /** @class */ (function () {
        function NgPaginationComponent(pagination) {
            this.pagination = pagination;
            this.pagedItems = new core.EventEmitter();
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
            { type: core.Component, args: [{
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
            allItems: [{ type: core.Input }],
            pageSize: [{ type: core.Input }],
            maxPages: [{ type: core.Input }],
            showTotal: [{ type: core.Input }],
            pagedItems: [{ type: core.Output }]
        };
        return NgPaginationComponent;
    }());
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
    var NgPaginationModule = /** @class */ (function () {
        function NgPaginationModule() {
        }
        NgPaginationModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgPaginationComponent],
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [NgPaginationComponent]
                    },] }
        ];
        return NgPaginationModule;
    }());

    exports.NgPaginationComponent = NgPaginationComponent;
    exports.NgPaginationModule = NgPaginationModule;
    exports.NgPaginationService = NgPaginationService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-pagination.umd.js.map
