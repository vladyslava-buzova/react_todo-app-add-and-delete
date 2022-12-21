import React from 'react';

type Props = {
  error: any;
};

export const Error: React.FC<Props> = () => {
  return (
    <div
      data-cy="ErrorNotification"
      className="notification is-danger is-light has-text-weight-normal"
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        aria-label="UnableToAddTodo"
      />
      <span>Title can&apos;t be empty</span>

      {/*
            <br />
            Unable to delete a todo
            <br />
            Unable to update a todo */}
    </div>
  );
};
