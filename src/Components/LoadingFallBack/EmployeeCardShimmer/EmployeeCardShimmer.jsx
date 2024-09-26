import Styles from './EmployeeCardShimmer.module.css';

function EmployeeCardShimmer() {
  return (
    <div className={Styles.shimmer_container}>
      <div className={Styles.shimmer_image}></div>
      <div className={Styles.shimmer_text}></div>
      <div className={Styles.shimmer_button}></div>
    </div>
  );
}

export default EmployeeCardShimmer;
