/**
 * Now that we are updating
 * we need all the fields
 */
export interface PutUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  permissionFlags: string;
}
