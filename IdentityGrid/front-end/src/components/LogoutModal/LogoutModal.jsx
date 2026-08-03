import "./LogoutModal.css";

function LogoutModal({ show, onCancel, onConfirm }) {

  if (!show) return null;

  return (

    <div className="logout-overlay">

      <div className="logout-modal">

        <h3>
          Logout Confirmation
        </h3>


        <p>
          Are you sure you want to logout?
        </p>


        <div className="logout-actions">


          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>



          <button
            className="confirm-logout"
            onClick={onConfirm}
          >
            Logout
          </button>


        </div>


      </div>

    </div>

  );
}

export default LogoutModal;