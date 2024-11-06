export type Role = 'admin' | 'teacher' | 'student' | 'parent';

export interface User {
  id: string;
  email: string;
  role: Role;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType;
  children?: NavigationItem[];
} 