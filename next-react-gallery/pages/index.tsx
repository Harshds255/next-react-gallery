import localFont from "next/font/local";
import Link from "next/link";
import {images} from "./data/images";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function Home() {
  return (
    <div className="main">
      <div className="card-swiper">
        <div className="card-groups">
          <div className="card-group">
            {images.map((item, key) => {
              return (
                <Link
                  key={key}
                  className="big-card card"
                  href="./gallery"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></Link>
              );
            })}
            {/* <Link
              className="big-card card"
              href="./gallery"
              style={{ backgroundImage: `url('/assets/img/1.jpg')` }}
            ></Link>
            <Link
              className="big-card card"
              href="./gallery"
              style={{ backgroundImage: `url('/assets/img/2.jpg')` }}
            ></Link>
            <Link
              className="big-card card"
              href="./gallery"
              style={{ backgroundImage: `url('/assets/img/3.jpg')` }}
            ></Link>
            <Link
              className="big-card card"
              href="./gallery"
              style={{ backgroundImage: `url('/assets/img/4.jpg')` }}
            ></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
