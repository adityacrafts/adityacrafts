import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // `isOpen` must be a boolean and is required
  onClose: PropTypes.func.isRequired, // `onClose` must be a function and is required
  title: PropTypes.string, // `title` must be a string
  children: PropTypes.node, // `children` can be any renderable content
};

Modal.defaultProps = {
  title: "Modal Title", // Default title if none is provided
  children: null, // Default children if none are provided
};

export default Modal;
