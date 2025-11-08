import { Link } from "react-router-dom";
import { useState } from "react";

// Count component (local to HomePage)
function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

const HomePage = () => {
  // Local Welcome component
  function Welcome({ name }) {
    return <h1>Welcome, {name}!</h1>;
  }

  return (
    <div className="min-h-screen bg-blue-100">
      <nav className="flex justify-between items-center bg-pink-200 p-4 text-red">
        <div className="flex items-center">
          <img
            src="kllogo.png"
            alt="kllogo"
            className="w-20 mr-3"
          />
          <h1 className="text-2xl font-bold">Product Management System</h1>
        </div>
        <div className="flex gap-4">
          <Link to="/signin" className="hover:underline">
            SignIn
          </Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/aboutus">AboutUs</Link>
        </div>
      </nav>

      <div className="p-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
          dignissimos fuga facere repellendus minus nesciunt magnam debitis
          incidunt consectetur et? Consectetur quis ad quae, et quisquam aut
          earum labore enim!
        </p>

        {/* Welcome and Count components */}
        <div className="mt-4">
          <Welcome name="Aditya" />
          <Welcome name="Bob" />
          <Welcome name="Alice" />
          <Count />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
