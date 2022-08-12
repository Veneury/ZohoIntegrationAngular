export interface Owner {
  name: string;
  id: string;
  email: string;
}

export interface Approval {
  delegate: boolean;
  approve: boolean;
  reject: boolean;
  resubmit: boolean;
}

export interface CreatedBy {
  name: string;
  id: string;
  email: string;
}

export interface ReviewProcess {
  approve: boolean;
  reject: boolean;
  resubmit: boolean;
}

export interface ModifiedBy {
  name: string;
  id: string;
  email: string;
}

export interface ConvertedDetail {
}

export interface ZohoRest {
  Owner: Owner;
  Company: string;
  Email: string;
  $currency_symbol: string;
  $field_states?: any;
  Last_Activity_Time?: Date;
  Industry: string;
  $state: string;
  Unsubscribed_Mode?: any;
  $converted: boolean;
  $process_flow: boolean;
  Street: string;
  Zip_Code: string;
  id: string;
  $approved: boolean;
  $approval: Approval;
  Enrich_Status__s?: any;
  Created_Time: Date;
  $editable: boolean;
  City: string;
  No_of_Employees?: any;
  State: string;
  Country: string;
  Created_By: CreatedBy;
  Annual_Revenue?: number;
  Secondary_Email?: any;
  Description?: any;
  Rating?: any;
  $review_process: ReviewProcess;
  Website: string;
  Twitter: string;
  Salutation: string;
  First_Name: string;
  Full_Name: string;
  Lead_Status: string;
  Record_Image: string;
  Modified_By: ModifiedBy;
  $review?: any;
  Skype_ID: string;
  Phone: string;
  Email_Opt_Out: boolean;
  Designation: string;
  Modified_Time: Date;
  $converted_detail: ConvertedDetail;
  Unsubscribed_Time?: any;
  Mobile: string;
  $orchestration: boolean;
  s?: any;
  Last_Name: string;
  $in_merge: boolean;
  Lead_Source: string;
  Tag: any[];
  Fax?: any;
  $approval_state: string;
  $pathfinder?: any;
  Last_Enriched_Time__s?: any;
}

export interface Info {
  per_page: number;
  count: number;
  page: number;
  more_records: boolean;
}

export interface RootObject {
  data: ZohoRest[];
  info: Info;
}
