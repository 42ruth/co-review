import React from 'react';

const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: API POST request
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: PR link input here */}
      {/* TODO: content textarea here */}
      {/* TODO: submit button here */}
    </form>
  );
};

export default Form;
