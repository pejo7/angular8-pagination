/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgPaginationService {
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
/** @nocollapse */ NgPaginationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgPaginationService_Factory() { return new NgPaginationService(); }, token: NgPaginationService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGFnaW5hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGFnaW5hdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZy1wYWdpbmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsZ0JBQWdCLENBQUM7Ozs7Ozs7O0lBQ2pCLFFBQVEsQ0FBQyxVQUFrQixFQUFFLGNBQXNCLENBQUMsRUFBRSxXQUFtQixFQUFFLEVBQUUsV0FBbUIsQ0FBQzs7O1lBRTNGLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFFakQseUNBQXlDO1FBQ3pDLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRTtZQUNqQixXQUFXLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO2FBQU0sSUFBSSxXQUFXLEdBQUcsVUFBVSxFQUFFO1lBQ2pDLFdBQVcsR0FBRyxVQUFVLENBQUM7U0FDNUI7O1lBRUcsU0FBaUI7O1lBQUUsT0FBZTtRQUN0QyxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO2dCQUNqQixzQ0FBc0M7Z0JBQ3RDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxHQUFHLFVBQVUsQ0FBQzthQUN4QjtpQkFBTTtnQkFDSCwyREFBMkQ7Z0JBQzNELElBQUksV0FBVyxJQUFJLENBQUMsRUFBRTtvQkFDbEIsU0FBUyxHQUFHLENBQUMsQ0FBQztvQkFDZCxPQUFPLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO3FCQUFNLElBQUksV0FBVyxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUU7b0JBQ3RDLFNBQVMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixPQUFPLEdBQUcsVUFBVSxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDSCxTQUFTLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDNUIsT0FBTyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7U0FFSjtRQUFDLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtZQUNuQixJQUFJLFVBQVUsSUFBSSxFQUFFLEVBQUU7Z0JBQ2xCLHVDQUF1QztnQkFDdkMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDZCxPQUFPLEdBQUcsVUFBVSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILDREQUE0RDtnQkFDNUQsSUFBSSxXQUFXLElBQUksQ0FBQyxFQUFFO29CQUNsQixTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUNkLE9BQU8sR0FBRyxFQUFFLENBQUM7aUJBQ2hCO3FCQUFNLElBQUksV0FBVyxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUU7b0JBQ3RDLFNBQVMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixPQUFPLEdBQUcsVUFBVSxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDSCxTQUFTLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDNUIsT0FBTyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7U0FDSjs7O1lBR0csVUFBVSxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVE7O1lBQ3pDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUM7OztZQUc5RCxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDO1FBRXZGLCtEQUErRDtRQUMvRCxPQUFPO1lBQ0gsVUFBVSxFQUFFLFVBQVU7WUFDdEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO0lBQ04sQ0FBQzs7O1lBNUVBLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdQYWdpbmF0aW9uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgZ2V0UGFnZXIodG90YWxJdGVtczogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyID0gMSwgcGFnZVNpemU6IG51bWJlciA9IDEwLCBtYXhQYWdlczogbnVtYmVyID0gNSkge1xuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBwYWdlc1xuICAgIGxldCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBwYWdlU2l6ZSk7XG5cbiAgICAvLyBlbnN1cmUgY3VycmVudCBwYWdlIGlzbid0IG91dCBvZiByYW5nZVxuICAgIGlmIChjdXJyZW50UGFnZSA8IDEpIHtcbiAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIGN1cnJlbnRQYWdlID0gdG90YWxQYWdlcztcbiAgICB9XG5cbiAgICBsZXQgc3RhcnRQYWdlOiBudW1iZXIsIGVuZFBhZ2U6IG51bWJlcjtcbiAgICBpZiAobWF4UGFnZXMgPT09IDUpIHtcbiAgICAgICAgaWYgKHRvdGFsUGFnZXMgPD0gNSkge1xuICAgICAgICAgICAgLy8gbGVzcyB0aGFuIDUgdG90YWwgcGFnZXMgc28gc2hvdyBhbGxcbiAgICAgICAgICAgIHN0YXJ0UGFnZSA9IDE7XG4gICAgICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG1vcmUgdGhhbiA1IHRvdGFsIHBhZ2VzIHNvIGNhbGN1bGF0ZSBzdGFydCBhbmQgZW5kIHBhZ2VzXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHN0YXJ0UGFnZSA9IDE7XG4gICAgICAgICAgICAgICAgZW5kUGFnZSA9IDU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlICsgMSA+PSB0b3RhbFBhZ2VzKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRQYWdlID0gdG90YWxQYWdlcyAtIDM7XG4gICAgICAgICAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0UGFnZSA9IGN1cnJlbnRQYWdlIC0gMjtcbiAgICAgICAgICAgICAgICBlbmRQYWdlID0gY3VycmVudFBhZ2UgKyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9IGlmIChtYXhQYWdlcyA9PT0gMTApIHtcbiAgICAgICAgaWYgKHRvdGFsUGFnZXMgPD0gMTApIHtcbiAgICAgICAgICAgIC8vIGxlc3MgdGhhbiAxMCB0b3RhbCBwYWdlcyBzbyBzaG93IGFsbFxuICAgICAgICAgICAgc3RhcnRQYWdlID0gMTtcbiAgICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbW9yZSB0aGFuIDEwIHRvdGFsIHBhZ2VzIHNvIGNhbGN1bGF0ZSBzdGFydCBhbmQgZW5kIHBhZ2VzXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gNikge1xuICAgICAgICAgICAgICAgIHN0YXJ0UGFnZSA9IDE7XG4gICAgICAgICAgICAgICAgZW5kUGFnZSA9IDEwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSArIDQgPj0gdG90YWxQYWdlcykge1xuICAgICAgICAgICAgICAgIHN0YXJ0UGFnZSA9IHRvdGFsUGFnZXMgLSA5O1xuICAgICAgICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydFBhZ2UgPSBjdXJyZW50UGFnZSAtIDU7XG4gICAgICAgICAgICAgICAgZW5kUGFnZSA9IGN1cnJlbnRQYWdlICsgNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNhbGN1bGF0ZSBzdGFydCBhbmQgZW5kIGl0ZW0gaW5kZXhlc1xuICAgIGxldCBzdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBwYWdlU2l6ZTtcbiAgICBsZXQgZW5kSW5kZXggPSBNYXRoLm1pbihzdGFydEluZGV4ICsgcGFnZVNpemUgLSAxLCB0b3RhbEl0ZW1zIC0gMSk7XG5cbiAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgcGFnZXMgdG8gbmctcmVwZWF0IGluIHRoZSBwYWdlciBjb250cm9sXG4gICAgbGV0IHBhZ2VzID0gQXJyYXkuZnJvbShBcnJheSgoZW5kUGFnZSArIDEpIC0gc3RhcnRQYWdlKS5rZXlzKCkpLm1hcChpID0+IHN0YXJ0UGFnZSArIGkpO1xuXG4gICAgLy8gcmV0dXJuIG9iamVjdCB3aXRoIGFsbCBwYWdlciBwcm9wZXJ0aWVzIHJlcXVpcmVkIGJ5IHRoZSB2aWV3XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG90YWxJdGVtczogdG90YWxJdGVtcyxcbiAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgIHRvdGFsUGFnZXM6IHRvdGFsUGFnZXMsXG4gICAgICAgIHN0YXJ0UGFnZTogc3RhcnRQYWdlLFxuICAgICAgICBlbmRQYWdlOiBlbmRQYWdlLFxuICAgICAgICBzdGFydEluZGV4OiBzdGFydEluZGV4LFxuICAgICAgICBlbmRJbmRleDogZW5kSW5kZXgsXG4gICAgICAgIHBhZ2VzOiBwYWdlc1xuICAgIH07XG59XG59XG4iXX0=