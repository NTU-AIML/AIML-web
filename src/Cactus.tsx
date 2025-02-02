import { Link } from "react-router-dom";
// import { useState } from "react";

import Bar from "./Bar";
// import Card from "./Card"
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "./components/ui/card";

import { Button } from "./components/ui/button";

// type FAQCardProps = {
//     children?: any,
//     question: string,
// }

// function FAQCard({children, question} : FAQCardProps){
//     const [visible, setVisible] = useState(false);
//     return <Card style={{margin:"10px", backgroundColor:"white"}} onClick={()=>{setVisible(!visible)}}>
//         <p style={{padding:"10px", fontWeight:"bold", fontSize:"1.2em"}}>
//             {question}
//         </p>
//         { !visible ? <></> :
//             <p style={{padding:"10px", fontSize:"1.2em"}}>
//                 {children}
//             </p>
//         }
//     </Card>
// }

function Cactus() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        margin: "0px",
      }}
    >
      <h1
        style={{
          width: "100%",
          margin: "0px",
          padding: "20px",
          fontSize: "3em",
          fontWeight: "bolder",
          textAlign: "center",
          backgroundColor: "rgba(255,255,255,1)",
          background: `url(${process.env.PUBLIC_URL}/background.jpg)`,
        }}
      >
        CACTUS
      </h1>

      <Bar
        backgroundColor="rgb(217, 217, 217)"
        imgPath="/cactus.jpg"
        swapPos={true}
        height="auto"
      >
        <h1
          style={{
            textAlign: "center",
            wordBreak: "break-word",
            fontWeight: "bold",
            fontSize: "2em",
          }}
        >
          What is CACTUS?
        </h1>
        <p style={{ fontSize: "1.4em", textAlign: "center", padding: "15px" }}>
          <b>CCDS AI Competition Team for Undergraduate Student</b> (CACTUS) is
          a program designed to help students succeed in AI competitions.
        </p>
        <p style={{ fontSize: "1.4em", textAlign: "center", padding: "15px" }}>
          We provide everything you need: expert guidance, training, and
          computing resources. Whether you're driven to excel in AI or eager to
          take your skills to the next level, CACTUS is your pathway to success.
        </p>
      </Bar>

      <div style={{ margin: "20px" }}>
        <h1
          style={{
            textAlign: "center",
            wordBreak: "break-word",
            fontWeight: "bold",
            fontSize: "2em",
          }}
        >
          What We Offer
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // overflow: "scroll",
            margin: "",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              backgroundColor: "#dadada",
              width: "max(25%,200px)",
              margin: "10px",
            }}
          >
            <CardContent>
              <h1
                style={{
                  color: "#304b5b",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.6em",
                }}
              >
                Expert Training
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  height: "100px",
                  margin: "10px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M 352 128 L 352 144 L 352 128 L 352 144 Q 351 185 324 212 Q 297 239 256 240 Q 215 239 188 212 Q 161 185 160 144 L 160 128 L 160 128 L 194 128 L 194 128 Q 244 127 275 89 L 281 96 L 281 96 Q 298 112 321 112 L 351 112 L 351 112 Q 352 120 352 128 L 352 128 Z M 261 53 Q 259 55 258 57 Q 237 94 194 96 L 166 96 L 166 96 Q 176 68 200 50 Q 224 33 256 32 Q 283 32 305 45 Q 326 58 339 80 L 321 80 L 321 80 Q 311 80 304 73 L 283 53 L 283 53 Q 272 43 261 53 L 261 53 Z M 128 128 L 128 144 L 128 128 L 128 144 Q 129 198 165 235 Q 202 271 256 272 Q 310 271 347 235 Q 383 198 384 144 L 384 128 L 384 128 Q 383 74 347 37 Q 310 1 256 0 Q 202 1 165 37 Q 129 74 128 128 L 128 128 Z M 224 304 Q 209 305 208 320 Q 209 335 224 336 L 234 336 L 234 336 L 212 401 L 212 401 L 180 332 L 180 332 Q 175 321 164 323 Q 106 334 70 378 Q 33 421 32 481 Q 32 494 41 503 Q 50 512 63 512 L 449 512 L 449 512 Q 462 512 471 503 Q 480 494 480 481 Q 479 421 442 378 Q 406 334 348 323 Q 337 321 332 331 L 300 401 L 300 401 L 278 336 L 278 336 L 288 336 L 288 336 Q 303 335 304 320 Q 303 305 288 304 L 256 304 L 224 304 Z M 242 465 L 232 443 L 242 465 L 232 443 L 256 371 L 256 371 L 280 443 L 280 443 L 271 465 L 271 465 Q 266 474 256 474 Q 247 474 242 465 L 242 465 Z M 212 478 Q 213 478 213 479 L 213 479 L 213 479 Q 213 479 213 480 L 64 480 L 64 480 Q 65 436 91 403 Q 116 370 157 357 L 212 478 L 212 478 Z M 448 480 L 299 480 L 448 480 L 299 480 Q 299 479 299 479 Q 299 478 300 478 L 355 357 L 355 357 Q 396 370 421 403 Q 447 436 448 480 L 448 480 Z" />
                </svg>
              </div>
              <p style={{ fontSize: "1.2em", textAlign: "center" }}>
                Gain a competitive edge with guidance from professors and
                industry professionals, tailored specifically for excelling in
                AI competitions.
              </p>
            </CardContent>
          </Card>

          <Card
            style={{
              backgroundColor: "#dadada",
              width: "max(25%,200px)",
              margin: "10px",
            }}
          >
            <CardContent>
              <h1
                style={{
                  color: "#304b5b",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.6em",
                }}
              >
                Computing Resources
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  height: "100px",
                  margin: "10px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M 176 16 Q 175 1 160 0 Q 145 1 144 16 L 144 64 L 144 64 L 128 64 L 128 64 Q 101 65 83 83 Q 65 101 64 128 L 64 144 L 64 144 L 16 144 L 16 144 Q 1 145 0 160 Q 1 175 16 176 L 64 176 L 64 176 L 64 240 L 64 240 L 16 240 L 16 240 Q 1 241 0 256 Q 1 271 16 272 L 64 272 L 64 272 L 64 336 L 64 336 L 16 336 L 16 336 Q 1 337 0 352 Q 1 367 16 368 L 64 368 L 64 368 L 64 384 L 64 384 Q 65 411 83 429 Q 101 447 128 448 L 144 448 L 144 448 L 144 496 L 144 496 Q 145 511 160 512 Q 175 511 176 496 L 176 448 L 176 448 L 240 448 L 240 448 L 240 496 L 240 496 Q 241 511 256 512 Q 271 511 272 496 L 272 448 L 272 448 L 336 448 L 336 448 L 336 496 L 336 496 Q 337 511 352 512 Q 367 511 368 496 L 368 448 L 368 448 L 384 448 L 384 448 Q 411 447 429 429 Q 447 411 448 384 L 448 368 L 448 368 L 496 368 L 496 368 Q 511 367 512 352 Q 511 337 496 336 L 448 336 L 448 336 L 448 272 L 448 272 L 496 272 L 496 272 Q 511 271 512 256 Q 511 241 496 240 L 448 240 L 448 240 L 448 176 L 448 176 L 496 176 L 496 176 Q 511 175 512 160 Q 511 145 496 144 L 448 144 L 448 144 L 448 128 L 448 128 Q 447 101 429 83 Q 411 65 384 64 L 368 64 L 368 64 L 368 16 L 368 16 Q 367 1 352 0 Q 337 1 336 16 L 336 64 L 336 64 L 272 64 L 272 64 L 272 16 L 272 16 Q 271 1 256 0 Q 241 1 240 16 L 240 64 L 240 64 L 176 64 L 176 64 L 176 16 L 176 16 Z M 416 128 L 416 384 L 416 128 L 416 384 Q 416 398 407 407 Q 398 416 384 416 L 128 416 L 128 416 Q 114 416 105 407 Q 96 398 96 384 L 96 128 L 96 128 Q 96 114 105 105 Q 114 96 128 96 L 384 96 L 384 96 Q 398 96 407 105 Q 416 114 416 128 L 416 128 Z M 160 128 Q 146 128 137 137 L 137 137 L 137 137 Q 128 146 128 160 L 128 352 L 128 352 Q 128 366 137 375 Q 146 384 160 384 L 352 384 L 352 384 Q 366 384 375 375 Q 384 366 384 352 L 384 160 L 384 160 Q 384 146 375 137 Q 366 128 352 128 L 160 128 L 160 128 Z M 352 160 L 352 352 L 352 160 L 352 352 L 160 352 L 160 352 L 160 160 L 160 160 L 352 160 L 352 160 Z" />
                </svg>
              </div>
              <p style={{ fontSize: "1.2em", textAlign: "center" }}>
                Access high-performance GPUs for model training and efficient
                inference to meet the rigorous demands of AI competitions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          width: "100%",
          height: "100vh", // Define height for the container; adjust as needed
          paddingBottom: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            wordBreak: "break-word",
            fontWeight: "bold",
            fontSize: "2em",
            margin: "40px",
          }}
        >
          Promotional Video
        </h1>
        <div
          style={{
            width: "80%",
            height: "80%", // Adjust to leave space for the header
            margin: "30px",
          }}
        >
          <video
            controls
            src="/cactus_promotion_video.MP4" // Ensure the video is in the public folder
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // 'cover' fills the container while preserving aspect ratio; use 'contain' if you want the entire video visible
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <Bar
        backgroundColor="rgb(255, 255, 255)"
        imgPath="/cactus2.jpg"
        style={{ padding: "40px", height: "30px" }}
      >
        <h1
          style={{
            textAlign: "center",
            wordBreak: "break-word",
            fontWeight: "bold",
            fontSize: "2em",
          }}
        >
          Recruitment
        </h1>
        <div
          style={{
            fontSize: "1.4em",
            textAlign: "left",
            padding: "30px",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          {/* <p>What’s next?</p> */}
          <p>
            We are excited to announce that recruitment for CACTUS opens from{" "}
            <b>3 - 11 Feb 2025</b>!
          </p>

          <p style={{ margin: "10px" }}></p>

          <p>
            We’re looking for experienced and competent <b>Team Leaders</b> to
            spearhead teams in AI competitions. As a Team Leader, your
            responsibilities include:
          </p>
          <ol style={{ listStyle: "inside" }}>
            <li>Lead a team to compete in AI competitions</li>
            <li>Recruit team members for AI competitions</li>
            <li>Request and manage team's compute resources</li>
            <li>
              Request for relevant training from professors and industry experts
            </li>
          </ol>
        </div>

        <Link
          to="https://forms.office.com/r/uY83afE3W3"
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <Button
            style={{
              background: "#304b5b",
              borderRadius: "10px",
              padding: "25px",
              height: "fit-content",
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M 458.5826771653543 41.32283464566929 L 470.6771653543307 53.41732283464567 L 458.5826771653543 41.32283464566929 L 470.6771653543307 53.41732283464567 Q 479.748031496063 63.496062992125985 479.748031496063 76.5984251968504 Q 479.748031496063 89.7007874015748 470.6771653543307 99.77952755905511 L 443.46456692913387 125.98425196850394 L 443.46456692913387 125.98425196850394 L 386.01574803149606 68.53543307086615 L 386.01574803149606 68.53543307086615 L 412.2204724409449 41.32283464566929 L 412.2204724409449 41.32283464566929 Q 422.2992125984252 32.25196850393701 435.40157480314963 32.25196850393701 Q 448.503937007874 32.25196850393701 458.5826771653543 41.32283464566929 L 458.5826771653543 41.32283464566929 Z M 190.48818897637796 264.06299212598424 L 362.8346456692913 91.71653543307086 L 190.48818897637796 264.06299212598424 L 362.8346456692913 91.71653543307086 L 420.2834645669291 149.16535433070865 L 420.2834645669291 149.16535433070865 L 247.93700787401573 321.51181102362204 L 247.93700787401573 321.51181102362204 Q 241.88976377952756 327.5590551181102 232.8188976377953 330.5826771653543 L 166.29921259842519 345.7007874015748 L 166.29921259842519 345.7007874015748 L 182.4251968503937 279.18110236220474 L 182.4251968503937 279.18110236220474 Q 184.44094488188978 270.1102362204724 190.48818897637796 264.06299212598424 L 190.48818897637796 264.06299212598424 Z M 390.0472440944882 19.1496062992126 L 167.30708661417322 240.88188976377953 L 390.0472440944882 19.1496062992126 L 167.30708661417322 240.88188976377953 Q 154.20472440944883 253.98425196850394 150.17322834645668 272.12598425196853 L 129.00787401574803 363.84251968503935 L 129.00787401574803 363.84251968503935 Q 128 371.90551181102364 134.04724409448818 377.9527559055118 Q 140.09448818897638 384 149.16535433070865 382.99212598425197 L 239.8740157480315 361.8267716535433 L 239.8740157480315 361.8267716535433 Q 258.01574803149606 357.79527559055117 271.11811023622045 344.6929133858268 L 492.8503937007874 121.95275590551181 L 492.8503937007874 121.95275590551181 Q 512 102.80314960629921 512 76.5984251968504 Q 512 51.40157480314961 492.8503937007874 31.244094488188978 L 480.755905511811 19.1496062992126 L 480.755905511811 19.1496062992126 Q 461.6062992125984 0 435.40157480314963 0 Q 410.20472440944883 0 390.0472440944882 19.1496062992126 L 390.0472440944882 19.1496062992126 Z M 80.62992125984252 60.47244094488189 Q 46.36220472440945 61.48031496062992 23.181102362204726 83.65354330708661 L 23.181102362204726 83.65354330708661 L 23.181102362204726 83.65354330708661 Q 1.0078740157480315 106.83464566929133 0 141.10236220472441 L 0 431.37007874015745 L 0 431.37007874015745 Q 1.0078740157480315 465.6377952755906 23.181102362204726 488.81889763779526 Q 46.36220472440945 510.99212598425197 80.62992125984252 512 L 370.8976377952756 512 L 370.8976377952756 512 Q 405.1653543307087 510.99212598425197 428.34645669291336 488.81889763779526 Q 450.5196850393701 465.6377952755906 451.5275590551181 431.37007874015745 L 451.5275590551181 302.3622047244094 L 451.5275590551181 302.3622047244094 Q 450.5196850393701 287.244094488189 435.40157480314963 286.23622047244095 Q 420.2834645669291 287.244094488189 419.2755905511811 302.3622047244094 L 419.2755905511811 431.37007874015745 L 419.2755905511811 431.37007874015745 Q 418.26771653543307 451.5275590551181 405.1653543307087 465.6377952755906 Q 391.0551181102362 478.74015748031496 370.8976377952756 479.748031496063 L 80.62992125984252 479.748031496063 L 80.62992125984252 479.748031496063 Q 60.47244094488189 478.74015748031496 46.36220472440945 465.6377952755906 Q 33.25984251968504 451.5275590551181 32.25196850393701 431.37007874015745 L 32.25196850393701 141.10236220472441 L 32.25196850393701 141.10236220472441 Q 33.25984251968504 120.94488188976378 46.36220472440945 106.83464566929133 Q 60.47244094488189 93.73228346456693 80.62992125984252 92.7244094488189 L 209.63779527559055 92.7244094488189 L 209.63779527559055 92.7244094488189 Q 224.75590551181102 91.71653543307086 225.76377952755905 76.5984251968504 Q 224.75590551181102 61.48031496062992 209.63779527559055 60.47244094488189 L 80.62992125984252 60.47244094488189 L 80.62992125984252 60.47244094488189 Z" />
              </svg>
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.5em",
                  fontWeight: "bold",
                  textWrap: "wrap",
                }}
              >
                Register as a Team Leader!
              </p>
            </div>
          </Button>
        </Link>
      </Bar>

      {/* <div style={{padding:"10px"}}>
            <h1 style={{textAlign:"center", wordBreak:"break-word", fontWeight:"bold", fontSize:"2em"}}>FAQ</h1>

            <FAQCard question="My question">
                my answer 1234
            </FAQCard>
            
            <FAQCard question="My question">
                my answer 5678
            </FAQCard>
            
            <FAQCard question="My question">
                my answer 90123
            </FAQCard>
        </div> */}

      <img
        style={{ height: "300px", objectFit: "cover" }}
        src="/Home3.png"
        alt="pic"
      />
    </div>
  );
}

export default Cactus;
