import { useState } from "react";

const Home = () => {
  const [blogs, setBlog] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 2 },
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  return (
    <div className="home">
      <div></div>
    </div>
  );
};

export default Home;
