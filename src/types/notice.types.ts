export type NoticeType =
  | 'general'
  | 'holiday & event'
  | 'hr & policy update'
  | 'finance & payroll'
  | 'it & system maintenance'
  | 'warning & discipline'
  | 'emargency & urgent';

export type Department =
  | 'all department'
  | 'sales team'
  | 'finance'
  | 'web team'
  | 'database team'
  | 'admin'
  | 'individual';

export type NoticeStatus =
  | 'published'
  | 'unpublished'
  | 'draft';

export interface INotice {
  _id: string;
  title: string;
  description: string;
  noticeType: NoticeType;
  department: Department;
  status: NoticeStatus;
  createdAt: string;
  updatedAt: string;
}
