// eslint-disable-next-line react/prop-types
export const DeleteModal = ({ modalTitle, children }) => {
  return (
    <div className="modal fade" id="deleteModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {modalTitle}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
