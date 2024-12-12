export type EditHistory = {
  changeDescription: string | null;
  createdAt: Date;
  editTimestamp: Date | null;
  id: string;
  relatedProject: string | null;
  updatedAt: Date;
};
