import { Role } from 'src/enum/role.ts';

export default interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}
