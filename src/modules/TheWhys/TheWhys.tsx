import Card from "@components/common/Card";

const TheWhys = () => {
  return (
    <section>
      <h1 className="text-center my-5 text-[15px] tablet:text-[25px]">
        Lorem Ipsum
      </h1>
      <div className="tablet:(flex flex-wrap) justify-evenly ml-2">
        {[...Array(3)].map((_, index) => (
          <Card
            key={`card-why-section-${index}`}
            title={`Card ${index + 1}`}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur."
          />
        ))}
      </div>
    </section>
  );
};

export default TheWhys;
