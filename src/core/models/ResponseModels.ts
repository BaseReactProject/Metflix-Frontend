
export interface GetListResponseModel{
    index:number;
    size:number;
    count:number;
    pages:number;
    hasPrevious:boolean;
    hasNext:boolean;
}
export  interface GetListModel<SingleResponseModel>{ responseModel:GetListResponseModel;items:SingleResponseModel[]}

export  interface SingleResponseModel{}
export  interface CreatedResponseModel{}
export  interface CreateRequestModel{}
export  interface UpdateRequestModel{id:any}
export  interface UpdatedResponseModel{}