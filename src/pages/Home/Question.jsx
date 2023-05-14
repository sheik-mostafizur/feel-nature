const Question = () => {
  return (
    <section className="min-h-[500px] bg-[linear-gradient(to_bottom,rgba(0,52,15,0.8),rgba(1,167,43,0.1)),url('https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80')] relative bg-cover bg-center flex items-center justify-center">
      <div className="text-center text-white space-y-6">
        <h2 className="text-3xl md:text-7xl">Question</h2>
        <p className="text-xl">
          Whether you’re curious about features, a free trial, or even press,{" "}
          <br />
          we’re here to answer any questions.
        </p>
        <button
          type="button"
          className="px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Let’s Talk Now
        </button>
      </div>
    </section>
  );
};

export default Question;
