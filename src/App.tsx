/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { AuthContext } from './components/Auth/AuthContext';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';
import { Error } from './components/error';
import { getTodos } from './api/todos';
import { User } from './types/User';

export const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user: User | null = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const newTodoField = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  const fetchTodos = async () => {
    if (user) {
      const todos: any = await getTodos(user.id);

      setData(todos);
    }
  };

  useEffect(() => {
    // focus the element with `ref={newTodoField}`
    if (newTodoField.current) {
      newTodoField.current.focus();
    }

    fetchTodos();
  }, []);

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <Header
          query={query}
          newTodoField={newTodoField}
          setData={setData}
          data={data}
          setQuery={setQuery}
          setError={setError}
          // createTodo={createTodo}
        />
        {data && (
          <Main
            data={data}
            setData={setData}
          />
        )}

        {data && (
          <Footer setData={setData} />
        )}

      </div>
      {error && (
        <Error error={error} />
      )}

    </div>
  );
};

// const BASE_URL = 'https://mate.academy/students-api/todos';
// const request = (url: any) => {
//   return fetch(`${BASE_URL}${url}`)
//     .then(response => {
//       return response.json();
//     })
//     .then(result => result);
// };

// const getTodos = () => request('/todos.json');

// getTodos()
// .then(todos => {
//   setDataUrl(todos);
// });
// .finally(() => {
//   setIsLoaded(false);
// });
// }, []);

// getTodos(user.Id)
//   .then(todos => {
//     setData(todos);
//   });
