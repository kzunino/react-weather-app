import React from 'react';

export default (props) => {
  const {
    submit,
    elements,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* elements are generated from function in <Form /> component
            because each form has different input fields */}
        {elements()}
          <button className="button" type="submit"></button>
      </form>
    </div>
  );
}
