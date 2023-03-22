export type Modal = {
  isVisible: boolean;
  action: ModalActionType;
  targetTodoTitle?: string;
  targetTodoId?: number | null;
};

export type ModalActionType = "create" | "edit" | "delete" | "";