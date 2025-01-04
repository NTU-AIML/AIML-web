import { Link } from "react-router-dom";

import Bar from "../Bar"
import Card from "../Card"

function Home(){
    return <div style={{display:"flex", flexDirection:"column", padding:"0px", margin:"0px"}}>

        <h1 style={{
            width:"100%",
            margin:"0px",
            padding:"20px",
            fontSize:"3em",
            textAlign:"center",
            backgroundColor:"rgba(255,255,255,1)",
            background:`url(${process.env.PUBLIC_URL}/background.jpg)`,
        }}>
            NTU Artificial Intelligence & Machine Learning Club
        </h1>


        <Bar backgroundColor="rgb(217, 217, 217)" imgPath="/fumos.png" swapPos={true}>
            <h1 style={{textAlign:"center"}}>What Is The AIML Club?</h1>
            <p style={{fontSize:"1.4em", textAlign:"center"}}>
                A vibrant community for enthusiasts and learners passionate about Artificial Intelligence and Machine Learning.
            </p>
            <p style={{fontSize:"1.4em", textAlign:"center"}}>
                Whether you’re a beginner eager to learn or an expert looking to share your knowledge, the AIML Club is the place for you.
            </p>
        </Bar>

        <div style={{margin:"20px"}}>
            <h1 style={{textAlign:"center", wordBreak:"break-word"}}>Our Goals</h1>

            <div style={{display:"flex", flexDirection:"row", overflow:"scroll", margin:"20px"}}>
                <Card backgroundColor="#dadada" width="max(25%,200px)">
                    <h1 style={{color:"#304b5b", textAlign:"center"}}>Education</h1>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", height:"100px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M 256 32 Q 292 33 311 64 Q 329 96 311 128 Q 292 159 256 160 Q 220 159 201 128 Q 183 96 201 64 Q 220 33 256 32 L 256 32 Z M 256 192 Q 282 192 304 179 L 304 179 L 304 179 Q 326 166 339 144 Q 352 121 352 96 Q 352 71 339 48 Q 326 26 304 13 Q 282 0 256 0 Q 230 0 208 13 Q 186 26 173 48 Q 160 71 160 96 Q 160 121 173 144 Q 186 166 208 179 Q 230 192 256 192 L 256 192 Z M 256 240 Q 258 237 207 218 L 207 218 L 207 218 Q 156 199 32 193 Q 18 192 9 201 Q 0 210 0 224 L 0 432 L 0 432 Q 0 446 9 455 Q 18 464 32 465 Q 118 470 171 485 Q 224 500 241 509 Q 248 512 256 512 Q 264 512 271 509 Q 288 500 341 485 Q 393 470 480 465 Q 493 464 502 455 Q 511 446 512 432 L 512 224 L 512 224 Q 511 210 502 201 Q 493 192 480 193 Q 356 199 305 218 Q 254 237 256 240 Q 256 240 256 240 L 256 240 Z M 237 266 L 240 268 L 237 266 L 240 268 L 240 473 L 240 473 Q 214 462 162 449 Q 110 437 33 433 Q 33 433 32 432 Q 32 432 32 432 L 32 432 L 32 432 L 32 432 L 32 432 L 32 432 L 32 432 L 32 432 L 32 432 L 32 432 L 32 432 L 32 432 L 32 432 L 32 225 L 32 225 Q 151 231 197 249 Q 221 257 230 262 Q 235 264 236 265 Q 237 266 237 266 L 237 266 Z M 272 268 L 275 266 L 272 268 L 275 266 Q 275 266 276 265 Q 277 264 282 262 Q 291 256 315 248 Q 361 231 480 224 L 480 432 L 480 432 L 480 432 L 480 432 L 480 432 L 480 432 Q 480 432 480 432 Q 480 433 479 433 Q 402 437 350 449 Q 298 462 272 473 L 272 268 L 272 268 Z"/>
                        </svg>
                    </div>
                    <p style={{fontSize:"1.2em", textAlign:"center"}}>
                        Offering resources and opportunities to learn about AI/ML concepts, tools, and techniques.
                    </p>
                </Card>

                <Card backgroundColor="#dadada" width="max(25%,200px)">
                    <h1 style={{color:"#304b5b", textAlign:"center"}}>Collaboration</h1>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", height:"100px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M 102.4 106 Q 120 107.6 121.6 125.2 Q 120 142.8 102.4 144.4 Q 84.8 142.8 83.2 125.2 Q 84.8 107.6 102.4 106 L 102.4 106 Z M 102.4 170 Q 128 169.2 140.8 147.6 Q 153.6 125.2 140.8 102.8 Q 128 81.2 102.4 80.4 Q 76.8 81.2 64 102.8 Q 51.2 125.2 64 147.6 Q 76.8 169.2 102.4 170 L 102.4 170 Z M 0 278.8 Q 0 305.2 14.4 325.2 L 14.4 325.2 L 14.4 325.2 Q 28 346 51.2 355.6 L 51.2 394 L 51.2 394 Q 52.8 411.6 70.4 413.2 L 134.4 413.2 L 134.4 413.2 Q 152 411.6 153.6 394 L 153.6 362 L 153.6 362 Q 152.8 350 140.8 349.2 Q 128.8 350 128 362 L 128 387.6 L 128 387.6 L 76.8 387.6 L 76.8 387.6 L 76.8 221.2 L 76.8 221.2 Q 80 221.2 83.2 221.2 L 121.6 221.2 L 121.6 221.2 Q 132.8 221.2 142.4 225.2 Q 153.6 228.4 159.2 218 Q 162.4 206.8 152 201.2 Q 137.6 195.6 121.6 195.6 L 83.2 195.6 L 83.2 195.6 Q 48 196.4 24 219.6 Q 0.8 243.6 0 278.8 L 0 278.8 Z M 51.2 326.8 Q 27.2 310 25.6 278.8 Q 27.2 247.6 51.2 230.8 L 51.2 326.8 L 51.2 326.8 Z M 409.6 106 Q 427.2 107.6 428.8 125.2 Q 427.2 142.8 409.6 144.4 Q 392 142.8 390.4 125.2 Q 392 107.6 409.6 106 L 409.6 106 Z M 409.6 170 Q 435.2 169.2 448 147.6 Q 460.8 125.2 448 102.8 Q 435.2 81.2 409.6 80.4 Q 384 81.2 371.2 102.8 Q 358.4 125.2 371.2 147.6 Q 384 169.2 409.6 170 L 409.6 170 Z M 512 278.8 Q 511.2 243.6 488 219.6 L 488 219.6 L 488 219.6 Q 464 196.4 428.8 195.6 L 390.4 195.6 L 390.4 195.6 Q 374.4 195.6 360 201.2 Q 349.6 206.8 352.8 218 Q 358.4 228.4 369.6 225.2 Q 379.2 221.2 390.4 221.2 L 428.8 221.2 L 428.8 221.2 Q 432 221.2 435.2 221.2 L 435.2 387.6 L 435.2 387.6 L 384 387.6 L 384 387.6 L 384 362 L 384 362 Q 383.2 350 371.2 349.2 Q 359.2 350 358.4 362 L 358.4 394 L 358.4 394 Q 360 411.6 377.6 413.2 L 441.6 413.2 L 441.6 413.2 Q 459.2 411.6 460.8 394 L 460.8 355.6 L 460.8 355.6 Q 484 346 497.6 325.2 Q 512 305.2 512 278.8 L 512 278.8 Z M 460.8 326.8 L 460.8 230.8 L 460.8 326.8 L 460.8 230.8 Q 484.8 247.6 486.4 278.8 Q 484.8 310 460.8 326.8 L 460.8 326.8 Z M 230.4 131.6 Q 230.4 120.4 237.6 113.2 L 237.6 113.2 L 237.6 113.2 Q 244.8 106 256 106 Q 267.2 106 274.4 113.2 Q 281.6 120.4 281.6 131.6 Q 281.6 142.8 274.4 150 Q 267.2 157.2 256 157.2 Q 244.8 157.2 237.6 150 Q 230.4 142.8 230.4 131.6 L 230.4 131.6 Z M 307.2 131.6 Q 306.4 102.8 281.6 87.6 Q 256 73.2 230.4 87.6 Q 205.6 102.8 204.8 131.6 Q 205.6 160.4 230.4 175.6 Q 256 190 281.6 175.6 Q 306.4 160.4 307.2 131.6 L 307.2 131.6 Z M 243.2 208.4 Q 208 209.2 184 232.4 L 184 232.4 L 184 232.4 Q 160.8 256.4 160 291.6 Q 160 315.6 172.8 335.6 Q 184.8 354.8 204.8 365.2 L 204.8 419.6 L 204.8 419.6 Q 206.4 437.2 224 438.8 L 288 438.8 L 288 438.8 Q 305.6 437.2 307.2 419.6 L 307.2 365.2 L 307.2 365.2 Q 327.2 354.8 339.2 335.6 Q 352 316.4 352 291.6 Q 351.2 256.4 328 232.4 Q 304 209.2 268.8 208.4 L 243.2 208.4 L 243.2 208.4 Z M 204.8 248.4 L 204.8 334.8 L 204.8 248.4 L 204.8 334.8 Q 186.4 318 185.6 291.6 Q 186.4 265.2 204.8 248.4 L 204.8 248.4 Z M 230.4 413.2 L 230.4 235.6 L 230.4 413.2 L 230.4 235.6 Q 236.8 234 243.2 234 L 268.8 234 L 268.8 234 Q 275.2 234 281.6 235.6 L 281.6 413.2 L 281.6 413.2 L 230.4 413.2 L 230.4 413.2 Z M 307.2 334.8 L 307.2 248.4 L 307.2 334.8 L 307.2 248.4 Q 325.6 265.2 326.4 291.6 Q 325.6 318 307.2 334.8 L 307.2 334.8 Z"/>
                        </svg>
                    </div>
                    <p style={{fontSize:"1.2em", textAlign:"center"}}>
                        Bringing together like-minded individuals to work on cutting-edge projects.
                    </p>
                </Card>

                <Card backgroundColor="#dadada" width="max(25%,200px)">
                    <h1 style={{color:"#304b5b", textAlign:"center"}}>Innovation</h1>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", height:"100px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M 299.52468007312615 181.11882998171848 Q 299.52468007312615 200.77513711151738 294.84460694698356 218.55941499085924 Q 298.5886654478976 219.49542961608776 303.26873857404024 222.3034734917733 L 303.26873857404024 221.36745886654478 L 303.26873857404024 221.36745886654478 Q 304.20475319926874 193.28702010968922 329.4771480804388 180.18281535648995 Q 327.60511882998173 110.91773308957953 280.80438756855574 64.11700182815356 Q 234.93967093235833 18.252285191956123 164.7385740402194 16.380255941499087 Q 94.53747714808044 18.252285191956123 48.672760511883 65.05301645338209 Q 1.8720292504570384 110.91773308957953 0 181.11882998171848 Q 0.9360146252285192 234.47166361974405 29.016453382084094 274.7202925045704 Q 36.504570383912245 285.0164533820841 43.9926873857404 294.3765996343693 Q 43.9926873857404 295.3126142595978 43.9926873857404 295.3126142595978 L 43.9926873857404 295.3126142595978 L 43.9926873857404 295.3126142595978 L 43.9926873857404 295.3126142595978 L 43.9926873857404 295.3126142595978 L 43.9926873857404 295.3126142595978 L 43.9926873857404 295.3126142595978 Q 61.77696526508227 318.7129798903108 75.81718464351006 343.0493601462523 Q 84.24131627056673 358.9616087751371 87.04936014625228 375.80987202925047 L 117.93784277879342 375.80987202925047 L 117.93784277879342 375.80987202925047 Q 114.19378427787935 352.4095063985375 102.0255941499086 329.0091407678245 Q 86.11334552102376 300.92870201096895 67.39305301645338 275.6563071297989 Q 66.45703839122486 275.6563071297989 66.45703839122486 275.6563071297989 L 66.45703839122486 275.6563071297989 L 66.45703839122486 275.6563071297989 Q 59.90493601462523 266.2961608775137 54.28884826325411 257.87202925045705 Q 30.888482632541134 225.11151736745887 29.952468007312614 181.11882998171848 Q 31.824497257769654 124.0219378427788 69.26508226691043 85.64533820840951 Q 107.64168190127971 48.20475319926874 164.7385740402194 46.3327239488117 Q 221.83546617915906 48.20475319926874 260.21206581352834 85.64533820840951 Q 297.6526508226691 124.0219378427788 299.52468007312615 181.11882998171848 L 299.52468007312615 181.11882998171848 Z M 227.45155393053017 431.0347349177331 Q 219.963436928702 418.8665447897623 215.28336380255942 405.76234003656305 L 100.15356489945155 405.76234003656305 L 100.15356489945155 405.76234003656305 Q 90.79341864716636 406.6983546617916 89.85740402193784 416.0585009140768 L 89.85740402193784 420.73857404021936 L 89.85740402193784 420.73857404021936 Q 90.79341864716636 452.56307129798904 111.38574040219379 474.091407678245 Q 132.9140767824497 494.6837294332724 164.7385740402194 495.61974405850094 Q 190.0109689213894 495.61974405850094 208.7312614259598 481.5795246800731 Q 227.45155393053017 467.53930530164536 235.87568555758685 445.07495429616085 Q 231.19561243144423 438.5228519195612 226.51553930530164 431.0347349177331 L 227.45155393053017 431.0347349177331 Z M 164.7385740402194 106.23765996343693 Q 178.77879341864715 105.30164533820842 179.71480804387568 91.26142595978062 Q 178.77879341864715 77.22120658135283 164.7385740402194 76.28519195612431 Q 119.80987202925046 77.22120658135283 90.79341864716636 107.17367458866545 Q 60.840950639853745 136.19012797074953 59.90493601462523 181.11882998171848 Q 60.840950639853745 195.15904936014624 74.88117001828154 196.09506398537476 Q 88.92138939670933 195.15904936014624 89.85740402193784 181.11882998171848 Q 90.79341864716636 149.2943327239488 111.38574040219379 127.76599634369288 Q 132.9140767824497 107.17367458866545 164.7385740402194 106.23765996343693 L 164.7385740402194 106.23765996343693 Z M 122.61791590493601 435.7148080438757 L 206.85923217550274 435.7148080438757 L 122.61791590493601 435.7148080438757 L 206.85923217550274 435.7148080438757 Q 195.62705667276052 463.79524680073126 164.7385740402194 465.6672760511883 Q 133.85009140767824 463.79524680073126 122.61791590493601 435.7148080438757 L 122.61791590493601 435.7148080438757 Z M 358.49360146252286 241.02376599634368 L 390.3180987202925 241.02376599634368 L 358.49360146252286 241.02376599634368 L 390.3180987202925 241.02376599634368 Q 395.9341864716636 264.4241316270567 415.5904936014625 275.6563071297989 Q 434.3107861060329 286.8884826325411 457.7111517367459 278.46435100548445 L 474.55941499085924 307.4808043875686 L 474.55941499085924 307.4808043875686 Q 456.7751371115174 324.3290676416819 456.7751371115174 346.79341864716633 Q 456.7751371115174 369.25776965265084 474.55941499085924 386.10603290676414 L 457.7111517367459 415.1224862888483 L 457.7111517367459 415.1224862888483 Q 434.3107861060329 407.6343692870201 414.65447897623403 418.8665447897623 Q 395.9341864716636 429.16270566727604 390.3180987202925 452.56307129798904 L 358.49360146252286 452.56307129798904 L 358.49360146252286 452.56307129798904 Q 352.8775137111517 429.16270566727604 334.15722120658137 418.8665447897623 Q 314.50091407678246 407.6343692870201 291.10054844606947 415.1224862888483 L 274.2522851919561 386.10603290676414 L 274.2522851919561 386.10603290676414 Q 292.03656307129796 369.25776965265084 292.03656307129796 346.79341864716633 Q 292.03656307129796 324.3290676416819 274.2522851919561 307.4808043875686 L 291.10054844606947 278.46435100548445 L 291.10054844606947 278.46435100548445 Q 314.50091407678246 286.8884826325411 334.15722120658137 274.7202925045704 Q 352.8775137111517 264.4241316270567 358.49360146252286 241.02376599634368 L 358.49360146252286 241.02376599634368 Z M 399.6782449725777 211.07129798903108 L 349.1334552102377 211.07129798903108 L 399.6782449725777 211.07129798903108 L 349.1334552102377 211.07129798903108 Q 331.34917733089577 212.94332723948813 329.4771480804388 230.72760511882998 L 329.4771480804388 232.59963436928703 L 329.4771480804388 232.59963436928703 Q 328.54113345521023 242.89579524680073 319.18098720292505 249.44789762340037 Q 308.8848263254113 255.06398537477148 299.52468007312615 249.44789762340037 L 297.6526508226691 248.51188299817184 L 297.6526508226691 248.51188299817184 Q 279.86837294332724 240.08775137111516 269.5722120658135 256 L 244.2998171846435 299.9926873857404 L 244.2998171846435 299.9926873857404 Q 236.81170018281534 316.84095063985376 251.78793418647166 327.1371115173675 Q 262.0840950639854 334.6252285191956 262.0840950639854 346.79341864716633 Q 262.0840950639854 359.8976234003656 251.78793418647166 366.44972577696524 Q 236.81170018281534 376.74588665447897 244.2998171846435 393.5941499085923 L 269.5722120658135 437.5868372943327 L 269.5722120658135 437.5868372943327 Q 279.86837294332724 453.49908592321754 297.6526508226691 445.07495429616085 L 299.52468007312615 444.13893967093236 L 299.52468007312615 444.13893967093236 Q 308.8848263254113 439.45886654478977 319.18098720292505 445.07495429616085 Q 328.54113345521023 450.691042047532 329.4771480804388 461.9232175502742 L 329.4771480804388 462.85923217550277 L 329.4771480804388 462.85923217550277 Q 331.34917733089577 481.5795246800731 349.1334552102377 482.5155393053017 L 399.6782449725777 482.5155393053017 L 399.6782449725777 482.5155393053017 Q 417.4625228519196 481.5795246800731 419.3345521023766 462.85923217550277 L 419.3345521023766 460.9872029250457 L 419.3345521023766 460.9872029250457 Q 420.2705667276051 450.691042047532 429.6307129798903 444.13893967093236 Q 439.926873857404 439.45886654478977 449.2870201096892 444.13893967093236 L 451.15904936014624 445.07495429616085 L 451.15904936014624 445.07495429616085 Q 468.9433272394881 453.49908592321754 480.1755027422303 437.5868372943327 L 504.51188299817187 393.5941499085923 L 504.51188299817187 393.5941499085923 Q 512 376.74588665447897 497.0237659963437 366.44972577696524 Q 486.72760511882996 359.8976234003656 486.72760511882996 346.79341864716633 Q 486.72760511882996 334.6252285191956 497.0237659963437 327.1371115173675 Q 512 316.84095063985376 504.51188299817187 299.9926873857404 L 480.1755027422303 256 L 480.1755027422303 256 Q 468.9433272394881 240.08775137111516 451.15904936014624 248.51188299817184 L 449.2870201096892 249.44789762340037 L 449.2870201096892 249.44789762340037 Q 439.926873857404 254.12797074954295 429.6307129798903 249.44789762340037 Q 420.2705667276051 243.83180987202925 419.3345521023766 232.59963436928703 L 419.3345521023766 230.72760511882998 L 419.3345521023766 230.72760511882998 Q 417.4625228519196 212.94332723948813 399.6782449725777 211.07129798903108 L 399.6782449725777 211.07129798903108 Z M 374.4058500914077 399.2102376599634 Q 404.3583180987203 398.2742230347349 420.2705667276051 373.0018281535649 Q 434.3107861060329 346.79341864716633 420.2705667276051 320.58500914076785 Q 404.3583180987203 295.3126142595978 374.4058500914077 294.3765996343693 Q 344.45338208409504 295.3126142595978 329.4771480804388 320.58500914076785 Q 315.43692870201096 346.79341864716633 329.4771480804388 373.0018281535649 Q 344.45338208409504 398.2742230347349 374.4058500914077 399.2102376599634 L 374.4058500914077 399.2102376599634 Z M 351.9414990859232 346.79341864716633 Q 353.8135283363803 326.20109689213893 374.4058500914077 324.3290676416819 Q 394.9981718464351 326.20109689213893 396.8702010968921 346.79341864716633 Q 394.9981718464351 367.3857404021938 374.4058500914077 369.25776965265084 Q 353.8135283363803 367.3857404021938 351.9414990859232 346.79341864716633 L 351.9414990859232 346.79341864716633 Z"/>
                        </svg>
                    </div>
                    <p style={{fontSize:"1.2em", textAlign:"center"}}>
                        Encouraging the development of impactful solutions to real-world problems using AI/ML.
                    </p>
                </Card>

                <Card backgroundColor="#dadada" width="max(25%,250px)">
                    <h1 style={{color:"#304b5b", textAlign:"center"}}>Networking</h1>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", height:"100px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M 92.16 119.46666666666667 Q 104.10666666666667 119.46666666666667 111.78666666666666 111.78666666666666 L 111.78666666666666 111.78666666666666 L 111.78666666666666 111.78666666666666 Q 119.46666666666667 104.10666666666667 119.46666666666667 92.16 Q 119.46666666666667 80.21333333333334 111.78666666666666 72.53333333333333 Q 104.10666666666667 64.85333333333334 92.16 64.85333333333334 Q 80.21333333333334 64.85333333333334 72.53333333333333 72.53333333333333 Q 64.85333333333334 80.21333333333334 64.85333333333334 92.16 Q 64.85333333333334 104.10666666666667 72.53333333333333 111.78666666666666 Q 80.21333333333334 119.46666666666667 92.16 119.46666666666667 L 92.16 119.46666666666667 Z M 92.16 37.54666666666667 Q 122.88 38.4 139.09333333333333 64.85333333333334 Q 154.45333333333335 92.16 139.09333333333333 119.46666666666667 Q 122.88 145.92 92.16 146.77333333333334 Q 61.44 145.92 45.22666666666667 119.46666666666667 Q 29.866666666666667 92.16 45.22666666666667 64.85333333333334 Q 61.44 38.4 92.16 37.54666666666667 L 92.16 37.54666666666667 Z M 73.38666666666667 201.38666666666666 Q 56.32 201.38666666666666 45.22666666666667 212.48 L 45.22666666666667 212.48 L 45.22666666666667 212.48 Q 34.13333333333333 222.72 32.42666666666667 238.93333333333334 L 29.013333333333332 280.74666666666667 L 29.013333333333332 280.74666666666667 Q 28.16 293.5466666666667 35.84 302.08 Q 43.52 310.61333333333334 56.32 310.61333333333334 L 94.72 310.61333333333334 L 94.72 310.61333333333334 Q 97.28 319.14666666666665 104.10666666666667 325.97333333333336 L 116.05333333333333 337.92 L 116.05333333333333 337.92 L 64.85333333333334 337.92 L 64.85333333333334 337.92 L 64.85333333333334 460.8 L 64.85333333333334 460.8 Q 64 473.6 51.2 474.4533333333333 Q 38.4 473.6 37.54666666666667 460.8 L 37.54666666666667 334.50666666666666 L 37.54666666666667 334.50666666666666 Q 20.48 328.53333333333336 10.24 313.17333333333335 Q 0 297.81333333333333 1.7066666666666668 279.04 L 5.12 236.37333333333333 L 5.12 236.37333333333333 Q 7.68 209.92 26.453333333333333 192 Q 46.08 174.93333333333334 73.38666666666667 174.08 L 110.93333333333334 174.08 L 110.93333333333334 174.08 Q 149.33333333333334 175.78666666666666 168.96 205.65333333333334 Q 163.84 209.06666666666666 158.72 213.33333333333334 L 147.62666666666667 224.42666666666668 L 147.62666666666667 224.42666666666668 Q 136.53333333333333 202.24 110.93333333333334 201.38666666666666 L 73.38666666666667 201.38666666666666 L 73.38666666666667 201.38666666666666 Z M 119.46666666666667 460.8 L 119.46666666666667 341.3333333333333 L 119.46666666666667 460.8 L 119.46666666666667 341.3333333333333 L 146.77333333333334 368.64 L 146.77333333333334 368.64 L 146.77333333333334 460.8 L 146.77333333333334 460.8 Q 145.92 473.6 133.12 474.4533333333333 Q 120.32 473.6 119.46666666666667 460.8 L 119.46666666666667 460.8 Z M 365.2266666666667 460.8 L 365.2266666666667 368.64 L 365.2266666666667 460.8 L 365.2266666666667 368.64 L 392.53333333333336 341.3333333333333 L 392.53333333333336 341.3333333333333 L 392.53333333333336 460.8 L 392.53333333333336 460.8 Q 391.68 473.6 378.88 474.4533333333333 Q 366.08 473.6 365.2266666666667 460.8 L 365.2266666666667 460.8 Z M 447.14666666666665 337.92 L 395.94666666666666 337.92 L 447.14666666666665 337.92 L 395.94666666666666 337.92 L 407.8933333333333 325.97333333333336 L 407.8933333333333 325.97333333333336 Q 414.72 319.14666666666665 417.28 310.61333333333334 L 456.53333333333336 310.61333333333334 L 456.53333333333336 310.61333333333334 Q 468.48 310.61333333333334 476.16 302.08 Q 483.84 293.5466666666667 482.9866666666667 280.74666666666667 L 479.5733333333333 238.93333333333334 L 479.5733333333333 238.93333333333334 Q 477.8666666666667 222.72 466.7733333333333 212.48 Q 455.68 201.38666666666666 438.61333333333334 201.38666666666666 L 401.06666666666666 201.38666666666666 L 401.06666666666666 201.38666666666666 Q 375.46666666666664 202.24 364.37333333333333 224.42666666666668 L 353.28 213.33333333333334 L 353.28 213.33333333333334 Q 349.0133333333333 209.06666666666666 343.04 205.65333333333334 Q 362.6666666666667 175.78666666666666 401.06666666666666 174.08 L 439.46666666666664 174.08 L 439.46666666666664 174.08 Q 465.92 174.93333333333334 485.5466666666667 192 Q 504.32 209.92 506.88 236.37333333333333 L 510.29333333333335 279.04 L 510.29333333333335 279.04 Q 512 297.81333333333333 501.76 313.17333333333335 Q 491.52 328.53333333333336 474.4533333333333 334.50666666666666 L 474.4533333333333 460.8 L 474.4533333333333 460.8 Q 473.6 473.6 460.8 474.4533333333333 Q 448.85333333333335 473.6 447.14666666666665 460.8 L 447.14666666666665 337.92 L 447.14666666666665 337.92 Z M 419.84 119.46666666666667 Q 431.7866666666667 119.46666666666667 439.46666666666664 111.78666666666666 L 439.46666666666664 111.78666666666666 L 439.46666666666664 111.78666666666666 Q 447.14666666666665 104.10666666666667 447.14666666666665 92.16 Q 447.14666666666665 80.21333333333334 439.46666666666664 72.53333333333333 Q 431.7866666666667 64.85333333333334 419.84 64.85333333333334 Q 407.8933333333333 64.85333333333334 400.2133333333333 72.53333333333333 Q 392.53333333333336 80.21333333333334 392.53333333333336 92.16 Q 392.53333333333336 104.10666666666667 400.2133333333333 111.78666666666666 Q 407.8933333333333 119.46666666666667 419.84 119.46666666666667 L 419.84 119.46666666666667 Z M 419.84 37.54666666666667 Q 450.56 38.4 466.7733333333333 64.85333333333334 Q 482.1333333333333 92.16 466.7733333333333 119.46666666666667 Q 450.56 145.92 419.84 146.77333333333334 Q 389.12 145.92 372.9066666666667 119.46666666666667 Q 357.5466666666667 92.16 372.9066666666667 64.85333333333334 Q 389.12 38.4 419.84 37.54666666666667 L 419.84 37.54666666666667 Z M 197.12 251.73333333333332 L 166.4 283.3066666666667 L 197.12 251.73333333333332 L 166.4 283.3066666666667 L 345.6 283.3066666666667 L 345.6 283.3066666666667 L 314.88 251.73333333333332 L 314.88 251.73333333333332 Q 306.3466666666667 242.34666666666666 314.88 232.96 Q 324.26666666666665 224.42666666666668 333.6533333333333 232.96 L 388.26666666666665 287.5733333333333 L 388.26666666666665 287.5733333333333 Q 396.8 296.96 388.26666666666665 306.3466666666667 L 333.6533333333333 360.96 L 333.6533333333333 360.96 Q 324.26666666666665 369.49333333333334 314.88 360.96 Q 306.3466666666667 351.5733333333333 314.88 342.18666666666667 L 345.6 310.61333333333334 L 345.6 310.61333333333334 L 166.4 310.61333333333334 L 166.4 310.61333333333334 L 197.12 342.18666666666667 L 197.12 342.18666666666667 Q 205.65333333333334 351.5733333333333 197.12 360.96 Q 187.73333333333332 369.49333333333334 178.34666666666666 360.96 L 123.73333333333333 306.3466666666667 L 123.73333333333333 306.3466666666667 Q 115.2 296.96 123.73333333333333 287.5733333333333 L 178.34666666666666 232.96 L 178.34666666666666 232.96 Q 187.73333333333332 224.42666666666668 197.12 232.96 Q 205.65333333333334 242.34666666666666 197.12 251.73333333333332 L 197.12 251.73333333333332 Z"/>
                        </svg>
                    </div>
                    <p style={{fontSize:"1.2em", textAlign:"center"}}>
                    Connecting members with industry experts, researchers, and organizations for growth and exposure.
                    </p>
                </Card>
            </div>
        </div>

        <Bar backgroundColor="rgb(255, 255, 255)" imgPath="fumos.png" style={{padding:"10px"}}>
            <h1 style={{textAlign:"center"}}>What We Do</h1>
            <p style={{fontSize:"1.4em", textAlign:"center"}}>
                The AIML Club hosts a variety of events and initiatives tailored to different levels of expertise.
            </p>

            <Link to="/Events" style={{textDecoration:"none", color:"white", display:"flex", justifyContent:"center", }}>
                <Card backgroundColor="#304b5b" width="fit-content">
                    <div style={{display:"flex", flexDirection:"row", margin:"5px", gap:"5px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M 160 0 Q 182 2 184 24 L 184 64 L 184 64 L 328 64 L 328 64 L 328 24 L 328 24 Q 330 2 352 0 Q 374 2 376 24 L 376 64 L 376 64 L 416 64 L 416 64 Q 443 65 461 83 Q 479 101 480 128 L 480 144 L 480 144 L 480 192 L 480 192 L 480 448 L 480 448 Q 479 475 461 493 Q 443 511 416 512 L 96 512 L 96 512 Q 69 511 51 493 Q 33 475 32 448 L 32 192 L 32 192 L 32 144 L 32 144 L 32 128 L 32 128 Q 33 101 51 83 Q 69 65 96 64 L 136 64 L 136 64 L 136 24 L 136 24 Q 138 2 160 0 L 160 0 Z M 432 192 L 80 192 L 432 192 L 80 192 L 80 448 L 80 448 Q 81 463 96 464 L 416 464 L 416 464 Q 431 463 432 448 L 432 192 L 432 192 Z M 265 243 L 289 291 L 265 243 L 289 291 L 342 298 L 342 298 Q 348 300 350 305 Q 352 311 347 316 L 309 353 L 309 353 L 318 406 L 318 406 Q 319 412 314 416 Q 309 420 303 417 L 256 392 L 256 392 L 209 417 L 209 417 Q 203 420 198 416 Q 193 412 194 406 L 203 353 L 203 353 L 165 316 L 165 316 Q 160 311 162 305 Q 164 300 170 298 L 223 291 L 223 291 L 247 243 L 247 243 Q 250 237 256 237 Q 262 237 265 243 L 265 243 Z"/>
                        </svg>
                        <h2 style={{textAlign:"center"}}>Check events</h2>
                    </div>
                </Card>
            </Link>
            
        </Bar>
    

        <div style={{padding:"10px"}}>
            <h1 style={{textAlign:"center"}}>Join Us!</h1>

            <p style={{fontSize:"1.4em", textAlign:"center"}}>
                Open to all students. No prior experience is required!
            </p>
            <p style={{fontSize:"1.4em", textAlign:"center"}}>
                Visit our booth on <b>15 January 2025</b> to learn more about the club and its activities.
            </p>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <Link to="/idk" style={{textDecoration:"none", color:"white", display:"flex", justifyContent:"center"}}>
                <Card backgroundColor="#304b5b" width="fit-content">
                    <div style={{display:"flex", flexDirection:"row", margin:"5px", gap:"5px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M 438.85714285714283 36.57142857142857 Q 454.85714285714283 36.57142857142857 465.14285714285717 46.857142857142854 L 465.14285714285717 46.857142857142854 L 465.14285714285717 46.857142857142854 Q 475.42857142857144 57.142857142857146 475.42857142857144 73.14285714285714 L 475.42857142857144 310.85714285714283 L 475.42857142857144 310.85714285714283 L 365.7142857142857 310.85714285714283 L 365.7142857142857 310.85714285714283 Q 342.85714285714283 312 326.85714285714283 326.85714285714283 Q 312 342.85714285714283 310.85714285714283 365.7142857142857 L 310.85714285714283 475.42857142857144 L 310.85714285714283 475.42857142857144 L 73.14285714285714 475.42857142857144 L 73.14285714285714 475.42857142857144 Q 57.142857142857146 475.42857142857144 46.857142857142854 465.14285714285717 Q 36.57142857142857 454.85714285714283 36.57142857142857 438.85714285714283 L 36.57142857142857 73.14285714285714 L 36.57142857142857 73.14285714285714 Q 36.57142857142857 57.142857142857146 46.857142857142854 46.857142857142854 Q 57.142857142857146 36.57142857142857 73.14285714285714 36.57142857142857 L 438.85714285714283 36.57142857142857 L 438.85714285714283 36.57142857142857 Z M 460.57142857142856 347.42857142857144 L 347.42857142857144 460.57142857142856 L 460.57142857142856 347.42857142857144 L 347.42857142857144 460.57142857142856 L 347.42857142857144 365.7142857142857 L 347.42857142857144 365.7142857142857 Q 348.57142857142856 348.57142857142856 365.7142857142857 347.42857142857144 L 460.57142857142856 347.42857142857144 L 460.57142857142856 347.42857142857144 Z M 73.14285714285714 0 Q 42.285714285714285 1.1428571428571428 21.714285714285715 21.714285714285715 L 21.714285714285715 21.714285714285715 L 21.714285714285715 21.714285714285715 Q 1.1428571428571428 42.285714285714285 0 73.14285714285714 L 0 438.85714285714283 L 0 438.85714285714283 Q 1.1428571428571428 469.7142857142857 21.714285714285715 490.2857142857143 Q 42.285714285714285 510.85714285714283 73.14285714285714 512 L 317.7142857142857 512 L 317.7142857142857 512 Q 347.42857142857144 512 369.14285714285717 490.2857142857143 L 490.2857142857143 369.14285714285717 L 490.2857142857143 369.14285714285717 Q 512 347.42857142857144 512 316.57142857142856 L 512 73.14285714285714 L 512 73.14285714285714 Q 510.85714285714283 42.285714285714285 490.2857142857143 21.714285714285715 Q 469.7142857142857 1.1428571428571428 438.85714285714283 0 L 73.14285714285714 0 L 73.14285714285714 0 Z M 146.28571428571428 393.14285714285717 Q 144 368 118.85714285714286 365.7142857142857 Q 93.71428571428571 368 91.42857142857143 393.14285714285717 Q 93.71428571428571 418.2857142857143 118.85714285714286 420.57142857142856 Q 144 418.2857142857143 146.28571428571428 393.14285714285717 L 146.28571428571428 393.14285714285717 Z M 118.85714285714286 91.42857142857143 Q 93.71428571428571 93.71428571428571 91.42857142857143 118.85714285714286 Q 93.71428571428571 144 118.85714285714286 146.28571428571428 Q 144 144 146.28571428571428 118.85714285714286 Q 144 93.71428571428571 118.85714285714286 91.42857142857143 L 118.85714285714286 91.42857142857143 Z M 146.28571428571428 256 Q 144 230.85714285714286 118.85714285714286 228.57142857142858 Q 93.71428571428571 230.85714285714286 91.42857142857143 256 Q 93.71428571428571 281.14285714285717 118.85714285714286 283.42857142857144 Q 144 281.14285714285717 146.28571428571428 256 L 146.28571428571428 256 Z"/>
                        </svg>
                        <h2 style={{textAlign:"center"}}>Membership form</h2>
                    </div>
                </Card>
            </Link>

            <Link to="/idk" style={{textDecoration:"none", color:"white", display:"flex", justifyContent:"center"}}>
                <Card backgroundColor="#304b5b" width="fit-content">
                    <div style={{display:"flex", flexDirection:"row", margin:"5px", gap:"5px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M 425.9637561779242 99.11037891268533 Q 425.1202635914333 98.2668863261944 425.1202635914333 98.2668863261944 Q 376.1976935749588 76.33607907742999 323.90115321252057 67.05766062602966 Q 323.05766062602964 67.05766062602966 322.2141680395387 67.9011532125206 Q 315.4662273476112 80.55354200988468 309.5617792421746 94.0494233937397 Q 253.0477759472817 84.77100494233937 196.5337726523888 94.0494233937397 Q 190.62932454695223 80.55354200988468 183.88138385502472 67.9011532125206 Q 183.03789126853377 67.05766062602966 182.19439868204284 67.05766062602966 Q 129.8978583196046 76.33607907742999 80.97528830313014 98.2668863261944 Q 80.97528830313014 98.2668863261944 80.1317957166392 99.11037891268533 Q 32.89621087314662 170.80724876441516 16.02635914332784 241.66062602965403 Q 0 311.670510708402 6.7479406919275124 380.836902800659 Q 7.591433278418451 381.68039538714993 7.591433278418451 382.52388797364085 Q 64.10543657331137 423.85502471169684 131.5848434925865 444.94233937397036 Q 132.42833607907744 444.94233937397036 133.27182866556836 444.09884678747943 Q 147.61120263591434 424.6985172981878 158.57660626029653 402.7677100494234 Q 158.57660626029653 402.7677100494234 158.57660626029653 401.92421746293246 Q 158.57660626029653 401.08072487644154 157.7331136738056 401.08072487644154 Q 137.48929159802307 393.48929159802304 118.9324546952224 382.52388797364085 Q 118.08896210873147 381.68039538714993 118.08896210873147 380.836902800659 Q 118.08896210873147 379.993410214168 118.9324546952224 379.993410214168 Q 123.1499176276771 376.61943986820427 126.52388797364085 374.0889621087315 Q 127.36738056013179 373.2454695222405 128.21087314662273 373.2454695222405 Q 189.78583196046128 401.08072487644154 253.0477759472817 401.08072487644154 Q 317.15321252059306 401.08072487644154 377.8846787479407 373.2454695222405 Q 378.72817133443164 373.2454695222405 378.72817133443164 374.0889621087315 Q 382.9456342668863 376.61943986820427 387.163097199341 379.993410214168 Q 387.163097199341 379.993410214168 387.163097199341 380.836902800659 Q 387.163097199341 381.68039538714993 386.31960461285007 382.52388797364085 Q 367.76276771004945 393.48929159802304 348.36243822075784 401.08072487644154 Q 347.5189456342669 401.08072487644154 346.67545304777593 401.92421746293246 Q 346.67545304777593 402.7677100494234 347.5189456342669 402.7677100494234 Q 358.4843492586491 424.6985172981878 372.82372322899505 444.09884678747943 Q 372.82372322899505 444.94233937397036 374.51070840197696 444.94233937397036 Q 441.14662273476114 423.85502471169684 498.504118616145 382.52388797364085 Q 498.504118616145 381.68039538714993 498.504118616145 380.836902800659 Q 512 221.4168039538715 425.9637561779242 99.11037891268533 L 425.9637561779242 99.11037891268533 Z M 170.38550247116967 325.166392092257 Q 151.82866556836902 324.3228995057661 139.17627677100495 309.9835255354201 L 139.17627677100495 309.9835255354201 L 139.17627677100495 309.9835255354201 Q 126.52388797364085 295.64415156507414 126.52388797364085 274.5568369028007 Q 126.52388797364085 253.46952224052717 139.17627677100495 239.13014827018122 Q 151.82866556836902 225.6342668863262 170.38550247116967 224.79077429983525 Q 189.78583196046128 225.6342668863262 202.43822075782538 239.97364085667215 Q 215.09060955518945 253.46952224052717 215.09060955518945 274.5568369028007 Q 215.09060955518945 295.64415156507414 202.43822075782538 309.9835255354201 Q 189.78583196046128 324.3228995057661 170.38550247116967 325.166392092257 L 170.38550247116967 325.166392092257 Z M 335.71004942339374 325.166392092257 Q 317.15321252059306 324.3228995057661 304.500823723229 309.9835255354201 L 304.500823723229 309.9835255354201 L 304.500823723229 309.9835255354201 Q 291.8484349258649 295.64415156507414 291.004942339374 274.5568369028007 Q 291.8484349258649 253.46952224052717 303.65733113673804 239.13014827018122 Q 316.30971993410213 225.6342668863262 335.71004942339374 224.79077429983525 Q 355.11037891268535 225.6342668863262 367.76276771004945 239.97364085667215 Q 379.57166392092256 253.46952224052717 380.4151565074135 274.5568369028007 Q 379.57166392092256 295.64415156507414 366.91927512355846 309.9835255354201 Q 355.11037891268535 324.3228995057661 335.71004942339374 325.166392092257 L 335.71004942339374 325.166392092257 Z"/>
                        </svg>
                        <h2 style={{textAlign:"center"}}>Discord server</h2>
                    </div>
                </Card>
            </Link>
            </div>
            
        </div>

        <img style={{height:"100%", objectFit:"cover"}} src="/fumos.png" alt="pic"/>
        
    </div>
}

export default Home;