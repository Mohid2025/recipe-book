import React from "react";
import aboutus2 from "../assets/aboutus2.png";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-purple-700 pt-6 min-h-screen">

      {/* Hero */}
      <div className="pb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mt-20">
          <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
            A place for recipes,
          </span>
          <br />
          <span className="text-gray-900">
            stories, and inspiration.
          </span>
        </h1>
      </div>

      {/* Main About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              About This Recipe Book
            </h2>

            <p className="text-gray-800 leading-relaxed mb-4">
              This recipe book is a growing collection of dishes inspired by
              everyday cooking, shared meals, and the simple joy of making
              something from scratch. It is meant to feel personal rather than
              polished — a place where tried-and-tested recipes live alongside
              new ideas.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Instead of focusing on complex techniques or professional plating,
              the emphasis is on comfort, clarity, and flavor. These are recipes
              you can return to, adapt, and make your own over time.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src={aboutus2}
              alt="Recipe inspiration"
              className="rounded-xl shadow-xl"
            />
          </div>

        </div>
      </section>

       <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="rounded-xl p-8 shadow-lg bg-gradient-to-r from-gray-700 to-gray-900">
          <h3 className="text-3xl font-bold text-white mb-4 text-center">
            Our Philosophy
          </h3>
          <p className="text-gray-200 text-center leading-relaxed">
            Cooking should feel relaxed, creative, and rewarding. This recipe
            book exists to encourage exploration in the kitchen, whether you are
            cooking for yourself or sharing a meal with others.
          </p>
        </div>
      </div>

      {/* Who It's For */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto rounded-xl p-8 shadow-lg bg-gradient-to-r from-gray-700 to-gray-900">
          <h3 className="text-3xl font-bold text-white mb-4 text-center">
            Who This Is For
          </h3>

          <p className="text-gray-200 leading-relaxed text-center mb-4">
            This recipe book is for anyone who enjoys cooking at their own pace —
            beginners looking for guidance, home cooks seeking inspiration, or
            anyone who simply wants reliable recipes that work.
          </p>

          <p className="text-gray-200 leading-relaxed text-center">
            You do not need advanced equipment or professional experience. If
            you enjoy experimenting, learning, or just preparing a good meal,
            you will feel at home here.
          </p>
        </div>
      </section>

      {/* How to Use */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto rounded-xl p-8 shadow-lg bg-gradient-to-r from-gray-800 to-gray-900">
          <h3 className="text-3xl font-bold text-white mb-4 text-center">
            How to Use This Book
          </h3>

          <p className="text-gray-200 leading-relaxed text-center mb-4">
            Browse freely, pick a recipe that catches your attention, and adjust
            it to your taste. The ingredients and steps are intentionally kept
            flexible so you can substitute, experiment, and learn along the way.
          </p>

          <p className="text-gray-200 leading-relaxed text-center">
            Over time, this book becomes more than a list of instructions — it
            becomes a record of what you enjoy cooking and sharing.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
