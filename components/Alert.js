const Alert = ({type, messages}) => {
  return (
    <div className={`alert alert-${type}`}>
     <i className='fas fa-info-circle'></i> {messages}
    </div>
  );
};

export default Alert;