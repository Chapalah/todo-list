export type ModalType = {
  isVisible: boolean;
  action: ModalActionType;
};

export type ModalActionType = 'create' | 'edit' | '';