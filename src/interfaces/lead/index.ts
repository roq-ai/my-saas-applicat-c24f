import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface LeadInterface {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  status: string;
  sales_representative_id?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface LeadGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  status?: string;
  sales_representative_id?: string;
  company_id?: string;
}
