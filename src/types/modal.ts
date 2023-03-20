export type Modal = {
  isVisible: boolean;
  action: ModalActionType;
  editTodoTitle?: string;
  editTodoId?: number | null;
};

export type ModalActionType = 'create' | 'edit' | '';