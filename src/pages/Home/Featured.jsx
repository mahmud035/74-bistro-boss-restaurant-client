import SectionTitle from '../../shared/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg';
import '../../styles/custom-style.css';

const Featured = () => {
  return (
    <section className="featured-item mt-20 py-20 text-white">
      <SectionTitle heading="Check it out" subHeading="Featured Item" />

      <div className="flex flex-col items-center justify-center gap-12 px-20 md:flex-row">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <p>Aug 20, 2023</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            quaerat quidem maiores voluptas unde vitae, neque temporibus
            blanditiis aperiam voluptatibus qui culpa minus odit voluptates
            quasi ad?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus, distinctio.
          </p>
          <button className="btn-outline btn mt-6 w-[160px] text-white">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
