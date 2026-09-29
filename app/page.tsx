import Header from "./components/Header";
import { poppins, satoshi } from "./layout";

export default function Hero() {
  return (
    <section className="min-h-175 blue-grid text-center text-white">
      <Header />

      <div className="mt-8">
        <h1 className={`${poppins.className} text-5xl my-4`}>
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="my-8 font-normal">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>
    </section>
  );
}
