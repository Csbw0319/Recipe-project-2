import Popular from "../components/Popular";
import Vegetarian from "../components/Vegetarian";
import Mediterranean from "../components/Mediterranean";

function Home() {
  return (
    <div>
    <h4>Need Inspiration? Look below!</h4>
    <Popular />
    <Vegetarian />
    <Mediterranean />
    </div>
  )
}

export default Home