import React from "react";

const App = () => {
  return (
    <div>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
    </div>
  );
};

export default App;
