export interface ApiResponse {
  id?: number;
  pr_link?: string;
  contents?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export interface RequestProps {
  endpoint: string;
  method: string;
  data?: string;
}
