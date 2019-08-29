/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgPaginationService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgPaginationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgPaginationService_Factory() { return new NgPaginationService(); }, token: NgPaginationService, providedIn: "root" });
    return NgPaginationService;
}());
export { NgPaginationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGFnaW5hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGFnaW5hdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZy1wYWdpbmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBS0U7SUFBZ0IsQ0FBQzs7Ozs7Ozs7SUFDakIsc0NBQVE7Ozs7Ozs7SUFBUixVQUFTLFVBQWtCLEVBQUUsV0FBdUIsRUFBRSxRQUFxQixFQUFFLFFBQW9CO1FBQXBFLDRCQUFBLEVBQUEsZUFBdUI7UUFBRSx5QkFBQSxFQUFBLGFBQXFCO1FBQUUseUJBQUEsRUFBQSxZQUFvQjs7O1lBRTNGLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFFakQseUNBQXlDO1FBQ3pDLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRTtZQUNqQixXQUFXLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO2FBQU0sSUFBSSxXQUFXLEdBQUcsVUFBVSxFQUFFO1lBQ2pDLFdBQVcsR0FBRyxVQUFVLENBQUM7U0FDNUI7O1lBRUcsU0FBaUI7O1lBQUUsT0FBZTtRQUN0QyxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO2dCQUNqQixzQ0FBc0M7Z0JBQ3RDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxHQUFHLFVBQVUsQ0FBQzthQUN4QjtpQkFBTTtnQkFDSCwyREFBMkQ7Z0JBQzNELElBQUksV0FBVyxJQUFJLENBQUMsRUFBRTtvQkFDbEIsU0FBUyxHQUFHLENBQUMsQ0FBQztvQkFDZCxPQUFPLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO3FCQUFNLElBQUksV0FBVyxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUU7b0JBQ3RDLFNBQVMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixPQUFPLEdBQUcsVUFBVSxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDSCxTQUFTLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDNUIsT0FBTyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7U0FFSjtRQUFDLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtZQUNuQixJQUFJLFVBQVUsSUFBSSxFQUFFLEVBQUU7Z0JBQ2xCLHVDQUF1QztnQkFDdkMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDZCxPQUFPLEdBQUcsVUFBVSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILDREQUE0RDtnQkFDNUQsSUFBSSxXQUFXLElBQUksQ0FBQyxFQUFFO29CQUNsQixTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUNkLE9BQU8sR0FBRyxFQUFFLENBQUM7aUJBQ2hCO3FCQUFNLElBQUksV0FBVyxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUU7b0JBQ3RDLFNBQVMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixPQUFPLEdBQUcsVUFBVSxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDSCxTQUFTLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDNUIsT0FBTyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7U0FDSjs7O1lBR0csVUFBVSxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVE7O1lBQ3pDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUM7OztZQUc5RCxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxTQUFTLEdBQUcsQ0FBQyxFQUFiLENBQWEsRUFBQztRQUV2RiwrREFBK0Q7UUFDL0QsT0FBTztZQUNILFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNOLENBQUM7O2dCQTVFQSxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs4QkFKRDtDQStFQyxBQTdFRCxJQTZFQztTQTFFWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nUGFnaW5hdGlvblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIGdldFBhZ2VyKHRvdGFsSXRlbXM6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlciA9IDEsIHBhZ2VTaXplOiBudW1iZXIgPSAxMCwgbWF4UGFnZXM6IG51bWJlciA9IDUpIHtcbiAgICAvLyBjYWxjdWxhdGUgdG90YWwgcGFnZXNcbiAgICBsZXQgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gcGFnZVNpemUpO1xuXG4gICAgLy8gZW5zdXJlIGN1cnJlbnQgcGFnZSBpc24ndCBvdXQgb2YgcmFuZ2VcbiAgICBpZiAoY3VycmVudFBhZ2UgPCAxKSB7XG4gICAgICAgIGN1cnJlbnRQYWdlID0gMTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlID4gdG90YWxQYWdlcykge1xuICAgICAgICBjdXJyZW50UGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgfVxuXG4gICAgbGV0IHN0YXJ0UGFnZTogbnVtYmVyLCBlbmRQYWdlOiBudW1iZXI7XG4gICAgaWYgKG1heFBhZ2VzID09PSA1KSB7XG4gICAgICAgIGlmICh0b3RhbFBhZ2VzIDw9IDUpIHtcbiAgICAgICAgICAgIC8vIGxlc3MgdGhhbiA1IHRvdGFsIHBhZ2VzIHNvIHNob3cgYWxsXG4gICAgICAgICAgICBzdGFydFBhZ2UgPSAxO1xuICAgICAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBtb3JlIHRoYW4gNSB0b3RhbCBwYWdlcyBzbyBjYWxjdWxhdGUgc3RhcnQgYW5kIGVuZCBwYWdlc1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICBzdGFydFBhZ2UgPSAxO1xuICAgICAgICAgICAgICAgIGVuZFBhZ2UgPSA1O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSArIDEgPj0gdG90YWxQYWdlcykge1xuICAgICAgICAgICAgICAgIHN0YXJ0UGFnZSA9IHRvdGFsUGFnZXMgLSAzO1xuICAgICAgICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydFBhZ2UgPSBjdXJyZW50UGFnZSAtIDI7XG4gICAgICAgICAgICAgICAgZW5kUGFnZSA9IGN1cnJlbnRQYWdlICsgMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSBpZiAobWF4UGFnZXMgPT09IDEwKSB7XG4gICAgICAgIGlmICh0b3RhbFBhZ2VzIDw9IDEwKSB7XG4gICAgICAgICAgICAvLyBsZXNzIHRoYW4gMTAgdG90YWwgcGFnZXMgc28gc2hvdyBhbGxcbiAgICAgICAgICAgIHN0YXJ0UGFnZSA9IDE7XG4gICAgICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG1vcmUgdGhhbiAxMCB0b3RhbCBwYWdlcyBzbyBjYWxjdWxhdGUgc3RhcnQgYW5kIGVuZCBwYWdlc1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDYpIHtcbiAgICAgICAgICAgICAgICBzdGFydFBhZ2UgPSAxO1xuICAgICAgICAgICAgICAgIGVuZFBhZ2UgPSAxMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgKyA0ID49IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgICAgICAgICBzdGFydFBhZ2UgPSB0b3RhbFBhZ2VzIC0gOTtcbiAgICAgICAgICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnRQYWdlID0gY3VycmVudFBhZ2UgLSA1O1xuICAgICAgICAgICAgICAgIGVuZFBhZ2UgPSBjdXJyZW50UGFnZSArIDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYWxjdWxhdGUgc3RhcnQgYW5kIGVuZCBpdGVtIGluZGV4ZXNcbiAgICBsZXQgc3RhcnRJbmRleCA9IChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemU7XG4gICAgbGV0IGVuZEluZGV4ID0gTWF0aC5taW4oc3RhcnRJbmRleCArIHBhZ2VTaXplIC0gMSwgdG90YWxJdGVtcyAtIDEpO1xuXG4gICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIHBhZ2VzIHRvIG5nLXJlcGVhdCBpbiB0aGUgcGFnZXIgY29udHJvbFxuICAgIGxldCBwYWdlcyA9IEFycmF5LmZyb20oQXJyYXkoKGVuZFBhZ2UgKyAxKSAtIHN0YXJ0UGFnZSkua2V5cygpKS5tYXAoaSA9PiBzdGFydFBhZ2UgKyBpKTtcblxuICAgIC8vIHJldHVybiBvYmplY3Qgd2l0aCBhbGwgcGFnZXIgcHJvcGVydGllcyByZXF1aXJlZCBieSB0aGUgdmlld1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvdGFsSXRlbXM6IHRvdGFsSXRlbXMsXG4gICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgICB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzLFxuICAgICAgICBzdGFydFBhZ2U6IHN0YXJ0UGFnZSxcbiAgICAgICAgZW5kUGFnZTogZW5kUGFnZSxcbiAgICAgICAgc3RhcnRJbmRleDogc3RhcnRJbmRleCxcbiAgICAgICAgZW5kSW5kZXg6IGVuZEluZGV4LFxuICAgICAgICBwYWdlczogcGFnZXNcbiAgICB9O1xufVxufVxuIl19