export interface ApiListResponse<T = unknown> {
    data: T;
    meta: ApiListResponseMeta;
}

interface ApiListResponseMeta {
    total_pages: number;
    current_page: number;
    next_page: number;
    per_page: number;
    total_count: number;
}