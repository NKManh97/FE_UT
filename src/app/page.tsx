import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href={"/facebook"}>
            <span>Facebook</span>
          </Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href={"/youtube"}> Youtube </Link>
        </li>
      </ul>
    </main>
  );
}
