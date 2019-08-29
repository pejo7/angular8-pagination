import { OnInit, EventEmitter } from '@angular/core';
import { NgPaginationService } from './ng-pagination.service';
export declare class NgPaginationComponent implements OnInit {
    private pagination;
    allItems: any[];
    pageSize: number;
    maxPages: number;
    showTotal: boolean;
    pagedItems: EventEmitter<any[]>;
    pager: any;
    constructor(pagination: NgPaginationService);
    ngOnInit(): void;
    setPage(page: number): void;
}
