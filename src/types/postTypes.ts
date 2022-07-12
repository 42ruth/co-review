export interface PostType {
  id?: number;
  prLink?: string;
  contents?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface PostItemType extends PostType {
  id: number;
  prLink: string;
  contents: string;
  createdAt: string;
}

export interface PostRequestType extends PostType {
  prLink: string;
  contents: string;
}
