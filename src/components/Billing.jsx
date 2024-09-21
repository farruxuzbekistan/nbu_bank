import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* Image Section */}
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* Gradient Layers */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    {/* Info Section */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Телеграм-канал
        <br className="sm:block hidden" /> с актуальной информацией
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Будьте в курсе последних новостей о деятельности банка. Подписывайтесь
        на обновления, чтобы не пропустить важные новости, акции и предложения.
        Мы регулярно информируем клиентов о новых услугах и изменениях в работе
        банка.
      </p>

      {/* App Store Buttons */}
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
