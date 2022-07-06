export interface PostType {
  id?: number;
  pr_link?: string;
  contents?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export interface PostItemType extends PostType {
  id: number;
  pr_link: string;
  contents: string;
  created_at: string;
}

export interface PostRequestType extends PostType {
  pr_link: string;
  contents: string;
}
