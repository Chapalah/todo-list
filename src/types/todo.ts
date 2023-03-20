export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  date: string;
}

export type TodosState = {
  list: Todo[];
}