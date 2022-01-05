interface AccountMeta {
  [key: string]: any
}

export interface Account {
  id: string,
  name: string,
  roleType: RoleType,
  password: string
}

export enum RoleType {
	ROLE_USER = "ROLE_USER",
	ROLE_ADMIN = "ROLE_ADMIN",
	ROLE_FRIDAY = 'ROLE_FRIDAY',
}

const accountMeta:  AccountMeta = {
  ROLE_TYPE: {
    user: RoleType.ROLE_USER,
    admin: RoleType.ROLE_ADMIN,
    friday: RoleType.ROLE_FRIDAY
  }
}

export default accountMeta