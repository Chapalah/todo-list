export type ITodo = {
  id: number;
  title: string;
  completed: boolean;
  date: string;
}

export type TodosState = {
  list: ITodo[];
}