export interface IUser {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  account_status: string;
  is_account_verified: boolean;
  location_limit: string;
  employee_limit: string;
  customer_stripe_id: string;
  document_layout_style: string;
  is_first_time_login: boolean;
  is_account_enterprise: boolean;
  is_seen_latest_whatsnew: boolean;
}
