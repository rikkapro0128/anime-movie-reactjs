import styles from './styles.module.scss';
import logo from '../../../assets/images/logo.png';

function MainHeader() {
  return (
    <div className={`${styles.mainHeader}`}>
      <div className={`${styles.wrap} container`}>
        <div className={styles.wrapLeft}>
          <div className={styles.headerLogo}>
            <img src={logo} alt="logo live demo" />
          </div>
          <div className={styles.headerMenu}>
            <div className={styles.headerMenuItem}>xem ngẫu nhiên</div>
            <div className={styles.headerMenuItem}>mới cập nhật</div>
            <div className={styles.headerMenuItem}>thể loại</div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.searchBox}>
            <button className="btn btn--primary">bộ lọc</button>
            <input placeholder="Tìm anime..." type="text" name="searchManga" />
            {/* icon look is here */}
          </div>
          <div className={styles.member}>
            {/* icon express is member is here */}
            thành viên
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
