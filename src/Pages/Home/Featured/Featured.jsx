import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        className="bg-black bg-opacity-50"
        heading="Featured Items"
        subHeading="Check It Out"
      ></SectionTitle>
      <div className="md:flex bg-black bg-opacity-50 justify-center items-center py-20 px-36">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-14">
          <p>Nov 16, 2023</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            rerum nisi perspiciatis, enim atque, dolorum velit dignissimos
            mollitia incidunt, at rem iusto qui quisquam. Doloribus iusto
            laboriosam omnis sapiente accusantium accusamus sit officia
            distinctio vitae molestias aperiam ab, a tempore magni in. Quidem
            distinctio ut quisquam ex iure maxime accusantium.
          </p>
          <button className="btn border-0 border-b-4 text-white border-white mt-2 btn-outline">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
