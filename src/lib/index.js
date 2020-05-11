import React from "react";

function MicroFrontEndTwo() {
  const [canShow, setCanShow] = React.useState(false);
  return (
    <div>
      This is micro frontend two
      <button type="button" onClick={() => setCanShow(!canShow)}>
        show me more
      </button>
      {canShow && "Hey This is working"}
    </div>
  );
}

export default MicroFrontEndTwo;
