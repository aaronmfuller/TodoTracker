const TODO_ITEMS = [
  { task: "do dishes", date: new Date(2020, 7, 14), id: 1 },
  { task: "fold laundry", date: new Date(2020, 4, 14), id: 2 },
  { task: "do homework", date: new Date(2020, 6, 14), id: 3 },
  { task: "kiss wife", date: new Date(2020, 2, 12), id: 4 },
  { task: "DONT do homework", date: new Date(2020, 9, 19), id: 5 },
];

export function getTodoItems() {
  return TODO_ITEMS;
}

export function deleteTodo(id) {
  let todoInDb = TODO_ITEMS.find((t) => t.id === id);
  TODO_ITEMS.splice(TODO_ITEMS.indexOf(todoInDb), 1);
  return todoInDb;
}
