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

export interface NoticeFormData {
  title: string;
  description: string;
  noticeType: NoticeTypeEnum;
  department: DepartmentEnum;
  attachments?: Array<{
    filename: string;
    originalName: string;
    size: number;
    mimetype: string;
    path: string;
  }>;
  employeeId?: string;
  employeeName?: string;
  position?: string;
  status: 'published' | 'unpublished' | 'draft';
}

export type NoticeTypeEnum =
  | 'Warning Desiplaine'
  | 'Appreciation & Recognition'
  | 'Attendance Leave Issue'
  | 'Pay Roll Compensation'
  | 'Contract Role Update'
  | 'Advisory Personal Reminder';

export type DepartmentEnum =
  | 'individual'
  | 'all'
  | 'finance'
  | 'hr'
  | 'sales'
  | 'web'
  | 'database'
  | 'admin';