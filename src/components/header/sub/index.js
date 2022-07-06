import styles from './styles.module.scss';

function SubHeader() {
  return (
    <div className={`${styles.subHeader}`}>
      <div className={`${styles.wrap} container`}>
        <div className={styles.followUs}>
          Theo dõi bọn mình trên:
          <div className={`${styles.facebook} ${styles.social}`}>
            <span className="title">facebook</span>
          </div>
          <div className={`${styles.telegram} ${styles.social}`}>
            <span className="title">telegram</span>
          </div>
          <div className={`${styles.discord} ${styles.social}`}>
            <span className="title">discord</span>
          </div>
        </div>
        <div className={styles.controlTheme}>
          <span className="title">light mode</span>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
