import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map(({ id, value, title }) => (
      <div key={id} className="flex-1 flex justify-start items-center m-3">
        <h4 className="font-poppins font-semibold text-white xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px]">
          {value}
        </h4>
        <p className="font-poppins font-normal text-gradient uppercase ml-3 xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px]">
          {title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
