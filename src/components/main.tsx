import React from 'react';
import { Todo } from '../types/Todo';

interface Props {
  data: Todo[];
  setData: any;
}

export const Main: React.FC<Props> = ({ data, setData }) => {
  const todoDeleteButton = (todoId: number) => {
    const deleteItem = data.filter((item => item.id !== todoId));

    setData([...deleteItem]);
  };

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {data.map(todo => (
        <div data-cy="Todo" className="todo completed" key={todo.id}>
          <label className="todo__status-label">
            <input
              data-cy="TodoStatus"
              type="checkbox"
              className="todo__status"
              defaultChecked
            />
          </label>

          <span data-cy="TodoTitle" className="todo__title">{todo.title}</span>
          <button
            type="button"
            className="todo__remove"
            data-cy="TodoDeleteButton"
            onClick={() => todoDeleteButton(todo.id)}
          >
            ×
          </button>

          <div data-cy="TodoLoader" className="modal overlay">
            <div className="modal-background has-background-white-ter" />
            <div className="loader" />
          </div>
        </div>
      ))}
    </section>
  );
};
