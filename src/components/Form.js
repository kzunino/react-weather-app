import React from 'react';

export default (props) => {
  const {
    submit,
    elements,
    errors,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {elements()}
        {errors.length ? 
        <ErrorsDisplay errors={errors} /> 
        :
        <p className="text-secondary text-center zip-directions">Please Enter a Zip</p>
        }
          <button className="button" type="submit"></button>
      </form>
    </div>
  );
}


//if there are errors the errors will be rendered.
function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <p className="text-danger text-center zip-directions">Please Enter a Valid Zip</p>
    );
  }

  return errorsDisplay;
}
