export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  date: string;
};

export type TodoFilter = {
  searchValue: string;
  searchOption: string;
};

export type TodosState = {
  list: Todo[];
  filteredList: Todo[];
  filter: TodoFilter;
};
