import { Header } from "../components/header";
import { Profile } from "../components/Profile";
import { Top } from "../components/Top";
import { Works } from "../components/works";

export default function Home() {
  return (
    <div>
      <Header />
      <Top />
      <Profile />
      <Works />
    </div>
  );
}
