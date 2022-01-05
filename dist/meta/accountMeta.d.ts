interface AccountMeta {
    [key: string]: any;
}
export interface Account {
    id: string;
    name: string;
    roleType: RoleType;
    password: string;
}
export declare enum RoleType {
    ROLE_USER = "ROLE_USER",
    ROLE_ADMIN = "ROLE_ADMIN",
    ROLE_FRIDAY = "ROLE_FRIDAY"
}
declare const accountMeta: AccountMeta;
export default accountMeta;
