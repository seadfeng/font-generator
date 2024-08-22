export type ResponseInfo = {
  url: string;
  host: string,
  status: number;
  statusText: string;
  duration: string;
  location: string | null;
  metaRefresh: boolean;
}

export type SelectOptionType = {
  label: string;
  value: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}
export type Faq = {
  question: string;
  answer: string;
}
