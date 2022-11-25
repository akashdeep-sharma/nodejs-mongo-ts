/**
 * for creating a user we require id, email and password with firstname last name and pe
 * permissions on level as optional
 */
export interface CreateUserDto {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  permissionFlags?: number;
}
