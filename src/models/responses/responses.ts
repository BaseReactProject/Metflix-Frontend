export interface GetListImageListItemDto {
    id: number;
    imageUrl: string;
}
export interface GetListProfileListItemDto {
    id: number;
    name: string;
    imageId: number;
    image: GetListImageListItemDto | null;
}
export interface GetListAccountProfileListItemDto {
    id: number;
    accountId: number;
    profileId: number;
    profile: GetListProfileListItemDto | null;
}
export interface GetListAccountListItemDto {
    id: number;
    fakeId: string;
    userId: number;
    accountProfiles: GetListAccountProfileListItemDto[] | null;
}
