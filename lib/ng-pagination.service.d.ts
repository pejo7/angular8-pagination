export declare class NgPaginationService {
    constructor();
    getPager(totalItems: number, currentPage?: number, pageSize?: number, maxPages?: number): {
        totalItems: number;
        currentPage: number;
        pageSize: number;
        totalPages: number;
        startPage: number;
        endPage: number;
        startIndex: number;
        endIndex: number;
        pages: number[];
    };
}
