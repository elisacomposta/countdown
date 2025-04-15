export interface Event {
    id: string,
    title: string,
    color: string,
    endDate: Date,
    creationDate: Date,
    lastModifiedDate: Date,
    isArchived: boolean,
};

export enum SortType {
    end_date = 'end_date',
    creation_date = 'creation_date',
    last_edit_date = 'last_edit_date',
}
export enum ActionType {
    create = "create",
    sort = "sort",
    back = "back",
    save = "save",
    other = "other",
}