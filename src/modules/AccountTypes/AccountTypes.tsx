import Card from "@components/common/Card";

const AccountTypes = () => {
  return (
    <section className="mb-8">
      <h1 className="text-center my-5 text-[15px] tablet:text-[25px]">
       Account We Offer
      </h1>
      <div className="tablet:(flex flex-wrap) justify-evenly ml-2">
        {[...Array(6)].map((_, index) => (
          <Card
            key={`account-type-section-${index}`}
            title={`Account Type ${index + 1}`}
            content="Account Lorem ipsum dolor sit amet. 
            Then this account bla bla...
            "
          />
        ))}
      </div>
    </section>
  );
};

export default AccountTypes;
