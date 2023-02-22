export interface ApiResponse<T = unknown> {
    data: T;
    meta: ApiResponseMeta;
}

interface ApiResponseMeta {
    total_pages: number;
    current_page: number;
    next_page: number;
    per_page: number;
    total_count: number;
}