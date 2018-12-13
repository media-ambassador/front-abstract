export interface MaApiAnnouncementsItem {
    value?: string;
    lastmod_date?: string;
    url?: string;
}
export interface MaApiAnnouncementsResponseData<D extends MaApiAnnouncementsItem> {
    data: D[];
}
