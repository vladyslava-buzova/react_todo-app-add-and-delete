import React from 'react';
import { Todo } from '../types/Todo';
// import { post } from '../api/post';
import { createTodos } from '../api/post';

interface Props {
  query: string;
  newTodoField: any;
  setData:any;
  data: Todo[];
  setQuery: any;
  setError: any;
}

export const Header: React.FC<Props>
= ({
  query, newTodoField, setData, data, setQuery, setError,
}) => {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query) {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        title: query,
      };

      const updatedTodo = [...data, newTodo];

      setData(updatedTodo);
    }

    createTodos(query);

    setQuery('');
    setError(false);

    if (!query) {
      setError(true);
    }
  };

  return (
    <header className="todoapp__header">
      <button
        data-cy="ToggleAllButton"
        type="button"
        className="todoapp__toggle-all active"
        aria-label="ToggleAllButton"
      />

      <form onSubmit={handleSubmit}>
        <input
          data-cy="NewTodoField"
          type="text"
          ref={newTodoField}
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};
