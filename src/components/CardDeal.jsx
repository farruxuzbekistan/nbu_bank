import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    {/* Info Section */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Дебетовые <br className="sm:block hidden" /> карты от НБУ
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Покупайте товары и оплачивайте услуги в торговых точках по всему миру.
        Снимайте наличные средства в банкоматах и кассах филиалов банка.
      </p>
      <Button styles="mt-10" />
    </div>

    {/* Image Section */}
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
