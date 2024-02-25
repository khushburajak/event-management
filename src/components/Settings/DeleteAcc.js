import React from "react";

function DeleteAcc() {
  return (
    <>
      <div className="alert alert-warning" role="alert">
        Do you Really want to delete your account?

        <button type="button" className="btn btn-danger m-2">
          Delete
        </button>
      </div>

    </>
  );
}

export default DeleteAcc;
