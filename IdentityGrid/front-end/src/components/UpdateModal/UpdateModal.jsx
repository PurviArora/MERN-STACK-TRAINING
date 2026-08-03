import "./UpdateModal.css";
import { FaCheckCircle } from "react-icons/fa";

function UpdateModal({ show, onClose }) {

  if (!show) return null;

  return (
    <div className="update-overlay">

      <div className="update-modal">

        <FaCheckCircle className="success-icon"/>

        <h2>
          Updated Successfully!
        </h2>

        <p>
          User information has been updated successfully.
        </p>

        <button onClick={onClose}>
          OK
        </button>

      </div>

    </div>
  );
}

export default UpdateModal;