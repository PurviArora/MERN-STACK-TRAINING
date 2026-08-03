import "./DeleteModal.css";

function DeleteModal({
  show,
  onCancel,
  onConfirm,
}) {

  if (!show) return null;

  return (
    <div className="modal-overlay">

      <div className="delete-modal">

        <div className="delete-icon">
          🗑️
        </div>

        <h2>Delete User?</h2>

        <p>
          Are you sure you want to delete this user?
          <br />
          This action cannot be undone.
        </p>

        <div className="delete-buttons">

          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;