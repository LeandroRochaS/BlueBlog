export type UserProfileType = {
  id: number;
  user: string;
  name: string;
  surname: string;
  token: string;
  description: string;
  ImageProfile: string;
};

export type PostType = {
  id: number;
  id_user: number;
  date: string;
  imageUrl: string;
  category: string;
  title: string;
  resume: string;
  content: string;
  duration: string;
  star: string;
  views: string;
  status: boolean;
};