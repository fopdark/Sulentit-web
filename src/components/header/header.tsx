import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logo = process.env.PUBLIC_URL + '/pictures/logo.png'
const carousel1 = process.env.PUBLIC_URL + '/pictures/media_155246671173845.jpg'
const carousel2 = process.env.PUBLIC_URL + '/pictures/media_155246680133527.jpg'
const carousel3 = process.env.PUBLIC_URL + '/pictures/media_155246681644305.jpg'
const carousel4 = process.env.PUBLIC_URL + '/pictures/media_155246741041767.jpg'
const carouselMobi1 = process.env.PUBLIC_URL + '/pictures/carousel-master-layout.jpg'
const carouselMobi2 = process.env.PUBLIC_URL + '/pictures/carousel-master-layout-2.jpg'
const carouselMobi3 = process.env.PUBLIC_URL + '/pictures/carousel-master-layout-3.jpg'
const singlePicture = process.env.PUBLIC_URL + '/pictures/web_banner_14Dec.jpg'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
};


function Header() {
    const [showSliderBar, changeShowSliderBar] = useState(false)
    useEffect(() => {
        let a: Element | null = document.querySelector('.icon-ila')
        a?.classList.remove('square-transition');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    a?.classList.add('fadeInDown');
                    return;
                }

                a?.classList.remove('fadeInDown');
            });
        });
        observer.observe(document.querySelector('.group-icon') as Element);
    }, [])

    function fClickSliderBarShow() {
        changeShowSliderBar(true)
    }

    function fClickSliderBarHide() {
        changeShowSliderBar(false)
    }

    return (
        <div className='group-header'>
            <section className="position-relative header">
                <div className='w-100 group-navTab'>
                    <div className="px-4 row">
                        <div className="d-none po d-lg-block px-5 col-auto">
                            <div className="position-relative group-icon">
                                <div className="position-absolute icon-ila">
                                    <svg
                                        width="130px"
                                        height="169px"
                                        viewBox="0 0 130 169"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        className="big"
                                    >
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g>
                                                <path
                                                    d="M37.0746725,62.0483846 C40.7586162,62.0483846 43.7467852,65.0370113 43.7467852,68.7195818 C43.7467852,72.4012367 40.7586162,75.3944409 37.0746725,75.3944409 C33.3925599,75.3944409 30.4007289,72.4012367 30.4007289,68.7195818 C30.4007289,65.0370113 33.3925599,62.0483846 37.0746725,62.0483846"
                                                    fill="#EC102C"
                                                    className="dot"
                                                ></path>
                                                <polygon
                                                    fill="#FEFEFE"
                                                    points="32.2715845 120.061205 41.8069014 120.061205 41.8069014 81.556029 32.2715845 81.556029"
                                                    className="path"
                                                ></polygon>
                                                <polygon
                                                    fill="#FEFEFE"
                                                    points="51.3394718 120.061205 60.8715845 120.061205 60.8715845 62.0482473 51.3394718 62.0482473"
                                                    className="path"
                                                ></polygon>
                                                <path
                                                    d="M90.8609366,100.379388 L90.8609366,105.602275 C90.8632254,106.206501 90.7890704,106.860621 90.6160423,107.362311 C90.1619577,108.69893 89.2395986,110.062557 87.8997746,111.076466 C86.5626972,112.085339 84.8241761,112.758226 82.6109718,112.762346 C81.1544225,112.758226 79.9024859,112.331606 79.0341408,111.532839 C78.1657958,110.729494 77.5675211,109.529282 77.553331,107.552275 C77.5624859,106.058191 77.9529437,104.971501 78.6088944,104.076606 C79.5843521,102.745022 81.3292817,101.780092 83.5713239,101.188226 C85.736007,100.611466 88.3122042,100.392663 90.8609366,100.379388 L90.8609366,100.379388 Z M100.767486,118.108367 C100.392592,115.640656 100.236042,112.492733 100.236042,109.266994 L100.236042,95.1592473 C100.230092,91.2226275 99.5297394,87.0800219 97.1206197,83.8162895 C95.9199507,82.1853388 94.2844225,80.798367 92.1851972,79.8549515 C90.0850563,78.9069585 87.5312887,78.3855853 84.4822394,78.389705 C79.4795282,78.397029 74.6882958,79.7574515 71.3009718,81.8667473 L70.4042465,82.4242825 L72.8628028,89.6864304 L74.3184366,88.7027332 C76.6877324,87.0951275 80.1331901,86.1201275 83.4655845,86.128367 L83.4834366,86.128367 L83.6285423,86.128367 C85.3560775,86.128367 86.6052676,86.4483318 87.5312887,86.9106557 C88.9100211,87.6146698 89.6547746,88.6532966 90.127169,89.8718177 C90.5103028,90.8861839 90.6595282,92.0049163 90.6947746,92.9730501 C83.8386479,93.0842825 78.365831,94.3339304 74.4360775,96.790198 C72.3794225,98.0760078 70.7557958,99.711536 69.6608662,101.669318 C68.5714296,103.623895 68.0221338,105.872804 68.0221338,108.331818 C68.0221338,111.375832 69.1083662,114.417099 71.2968521,116.714529 C73.4720634,119.012416 76.7440352,120.501923 80.8605493,120.501923 L80.895338,120.501923 C85.4343521,120.495515 89.1764296,118.768895 91.6954085,116.429353 L92.1160775,119.645937 L101.000021,119.645937 L100.767486,118.108367 Z"
                                                    fill="#FEFEFE"
                                                    className="path"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className='background-icon'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="130px"
                                        height="169px"
                                        viewBox="0 0 130 169"
                                        version="1.1"
                                    >
                                        <title>logo</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs/>
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g>
                                                <g>
                                                    <polygon fill="#2B368C" points="0 169 130 169 130 0 0 0"/>
                                                    <path
                                                        d="M29.0531232,138.095043 L30.582912,138.095043 C30.6007641,138.515712 30.6090035,138.79036 30.6090035,138.911205 C30.6090035,139.576311 30.4730528,140.099973 30.2038979,140.485853 C29.835412,141.018212 29.250412,141.287825 28.4479824,141.287825 C27.7750951,141.287825 27.2482289,141.038811 26.8632641,140.543071 C26.5432993,140.150782 26.3862923,139.570818 26.3862923,138.809128 L26.3862923,134.726029 C26.3862923,133.890184 26.5657289,133.276804 26.9181937,132.870782 C27.2738627,132.472085 27.8121725,132.268388 28.5349542,132.268388 C29.1657289,132.268388 29.6632993,132.464304 30.0276655,132.861628 C30.3979824,133.248423 30.582912,133.789022 30.582912,134.458247 L30.582912,137.039022 L27.9147077,137.039022 L27.9147077,138.973916 C27.9147077,139.576311 28.1014683,139.877966 28.4740739,139.877966 C28.6992852,139.877966 28.8572077,139.785959 28.9528768,139.603318 C29.0261162,139.468282 29.0581585,139.205078 29.0531232,138.836135 L29.0531232,138.445677 L29.0531232,138.095043 Z M27.9147077,135.815466 L29.0531232,135.815466 L29.0531232,134.331451 C29.0531232,133.89705 28.8654472,133.682367 28.4868908,133.682367 C28.107419,133.682367 27.9147077,133.89705 27.9147077,134.331451 L27.9147077,135.815466 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M36.0455669,141.165057 L34.5546866,141.165057 L34.5176092,140.341571 C33.9724331,140.971888 33.4803556,141.287733 33.0454965,141.287733 C32.8674331,141.287733 32.6962359,141.239212 32.5204613,141.140797 C32.3456021,141.049705 32.2133134,140.927029 32.1267993,140.775057 C31.9642993,140.519635 31.8851092,140.001466 31.8851092,139.215515 L31.8851092,134.337768 C31.8851092,133.559599 31.9642993,133.039599 32.1267993,132.774564 C32.2133134,132.629916 32.3456021,132.501747 32.5167993,132.406994 C32.6879965,132.312698 32.8637711,132.268297 33.0363415,132.268297 C33.4698275,132.268297 33.9655669,132.585057 34.5176092,133.216747 L34.5176092,129.382663 L36.0455669,129.382663 L36.0455669,141.165057 Z M34.5176092,134.033367 C34.2374683,133.802205 34.0035599,133.682275 33.8218345,133.682275 C33.5517641,133.682275 33.4112359,133.903367 33.4112359,134.337768 L33.4112359,139.215515 C33.4112359,139.654036 33.5517641,139.871008 33.8218345,139.871008 C34.0035599,139.871008 34.2374683,139.755198 34.5176092,139.51717 L34.5176092,134.033367 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M41.5253415,141.165057 L40.1319613,141.165057 L39.998757,140.407944 C39.4320669,140.995691 38.9358697,141.287733 38.5252711,141.287733 C38.350412,141.287733 38.1782993,141.239212 38.0020669,141.14629 C37.8294965,141.056571 37.6976655,140.937557 37.6093204,140.795198 C37.4495669,140.54298 37.3667148,140.034423 37.3667148,139.27548 L37.3667148,132.386395 L38.893757,132.386395 L38.893757,139.215515 C38.893757,139.654036 39.02925,139.871008 39.2993204,139.871008 C39.4856232,139.871008 39.7186162,139.755198 39.998757,139.51717 L39.998757,132.386395 L41.5253415,132.386395 L41.5253415,141.165057 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M47.0071761,135.460895 L45.4787606,135.460895 L45.4787606,135.105684 L45.4787606,134.716142 C45.4787606,134.335754 45.4480915,134.076212 45.3771408,133.948959 C45.2819296,133.765402 45.1153099,133.675226 44.8900986,133.675226 C44.5271056,133.675226 44.3389718,133.974135 44.3389718,134.579275 L44.3389718,138.974099 C44.3389718,139.576494 44.5271056,139.878149 44.8900986,139.878149 C45.1153099,139.878149 45.2819296,139.785684 45.3771408,139.603043 C45.4480915,139.477163 45.4787606,139.218536 45.4787606,138.836318 L45.4787606,138.44586 L45.4787606,137.945543 L47.0071761,137.945543 C47.0241127,138.44586 47.0337254,138.757585 47.0337254,138.877515 C47.0337254,139.564592 46.9009789,140.100156 46.6313662,140.485578 C46.2596761,141.018395 45.678338,141.28755 44.874993,141.28755 C44.2043944,141.28755 43.6756972,141.038994 43.2889014,140.543254 C42.9693944,140.150966 42.8142183,139.571001 42.8142183,138.809311 L42.8142183,134.744064 C42.8142183,133.985121 42.9693944,133.399663 43.2889014,132.999592 C43.6756972,132.511635 44.2043944,132.268113 44.874993,132.268113 C45.678338,132.268113 46.2596761,132.534064 46.6313662,133.067339 C46.9009789,133.454135 47.0337254,133.977797 47.0337254,134.636494 C47.0337254,134.755508 47.0241127,135.026951 47.0071761,135.460895"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M52.3616197,141.165057 L50.7741549,141.165057 C50.7279225,140.985163 50.6885563,140.74805 50.6679577,140.446395 C50.2971831,141.010339 49.858662,141.287733 49.363838,141.287733 C48.4666549,141.287733 48.0203521,140.54298 48.0203521,139.069951 C48.0203521,138.375092 48.1608803,137.786888 48.4410211,137.315409 C48.7010211,136.874142 49.1894366,136.42143 49.9012324,135.969177 C50.2564437,135.734811 50.5146127,135.560867 50.6679577,135.461078 L50.6679577,134.473719 C50.6679577,134.159247 50.6478169,133.960585 50.607993,133.879106 C50.533838,133.747733 50.3946831,133.682275 50.1941901,133.682275 C49.9209155,133.682275 49.7469718,133.816853 49.6664085,134.078684 C49.622007,134.234775 49.5858451,134.533684 49.5625,134.966712 L48.0780282,134.966712 C48.1485211,134.137275 48.2798944,133.548156 48.4776408,133.200726 C48.8214085,132.575902 49.401831,132.268297 50.2211972,132.268297 C50.8400704,132.268297 51.3289437,132.449106 51.6795775,132.817592 C52.0228873,133.169599 52.1954577,133.686853 52.1954577,134.365233 L52.1954577,139.750163 C52.200493,140.368578 52.258169,140.83548 52.3616197,141.165057 L52.3616197,141.165057 Z M50.6679577,136.664494 C50.2211972,137.03893 49.9172535,137.40055 49.7524648,137.764916 C49.6146831,138.069775 49.5455634,138.459318 49.5455634,138.929423 C49.5455634,139.548754 49.7076056,139.862768 50.0298592,139.862768 C50.246831,139.862768 50.4633451,139.709881 50.6679577,139.393578 L50.6679577,136.664494 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M56.5317359,133.804997 L55.4404683,133.804997 L55.4404683,138.967004 C55.4404683,139.497532 55.6890246,139.76623 56.1824754,139.76623 C56.2602923,139.76623 56.3738134,139.761652 56.5317359,139.749751 L56.5317359,141.165103 C56.1453979,141.247497 55.8533556,141.287779 55.6501162,141.287779 C55.1090599,141.287779 54.6751162,141.139927 54.3643063,140.843765 C54.0576162,140.562709 53.9129683,140.110455 53.9129683,139.49204 L53.9129683,133.804997 L53.1737077,133.804997 L53.1737077,132.386441 L53.9129683,132.386441 L53.9129683,129.971371 L55.4404683,129.971371 L55.4404683,132.386441 L56.5317359,132.386441 L56.5317359,133.804997 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M57.324507,141.165149 L58.8483451,141.165149 L58.8483451,132.386487 L57.324507,132.386487 L57.324507,141.165149 Z M57.324507,130.955113 L58.8483451,130.955113 L58.8483451,129.382297 L57.324507,129.382297 L57.324507,130.955113 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M64.3344366,134.743927 L64.3344366,138.809173 C64.3344366,140.457976 63.6336268,141.287871 62.2379577,141.287871 C60.84,141.287871 60.1364437,140.457976 60.1364437,138.809173 L60.1364437,134.743927 C60.1364437,133.089631 60.84,132.268434 62.2379577,132.268434 C63.6336268,132.268434 64.3344366,133.089631 64.3344366,134.743927 M61.6634859,134.491709 L61.6634859,139.061849 C61.6634859,139.602448 61.8571127,139.870687 62.2379577,139.870687 C62.6142254,139.870687 62.8046479,139.602448 62.8046479,139.061849 L62.8046479,134.491709 C62.8046479,133.953399 62.6142254,133.682413 62.2379577,133.682413 C61.8571127,133.682413 61.6634859,133.953399 61.6634859,134.491709"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M65.6195141,132.386349 L67.1140563,132.386349 L67.1474718,133.145293 C67.7150775,132.562582 68.2089859,132.268251 68.622331,132.268251 C68.7976479,132.268251 68.9702183,132.311279 69.1469085,132.404201 C69.3217676,132.495751 69.4513099,132.617054 69.5373662,132.758497 C69.6994085,133.013004 69.7767676,133.519272 69.7767676,134.277758 L69.7767676,141.165011 L68.2538451,141.165011 L68.2538451,134.337723 C68.2538451,133.903321 68.1119437,133.68223 67.8496549,133.68223 C67.6615211,133.68223 67.4294437,133.802159 67.1474718,134.033321 L67.1474718,141.165011 L65.6195141,141.165011 L65.6195141,132.386349 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M74.399412,141.165057 L74.399412,133.804951 L73.6990599,133.804951 L73.6990599,132.386395 L74.399412,132.386395 L74.399412,131.35143 C74.399412,130.70555 74.5179683,130.239106 74.75325,129.946606 C75.0558204,129.553402 75.5126514,129.35474 76.1122993,129.35474 C76.2821232,129.35474 76.47575,129.368015 76.7009613,129.382663 L76.7009613,130.802135 C76.6185669,130.792064 76.5453275,130.790233 76.4862782,130.790233 C76.1122993,130.790233 75.9246232,130.975621 75.9246232,131.35143 L75.9246232,132.386395 L76.7009613,132.386395 L76.7009613,133.804951 L75.9246232,133.804951 L75.9246232,141.165057 L74.399412,141.165057 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M81.8485493,134.743927 L81.8485493,138.809173 C81.8485493,140.457976 81.1472817,141.287871 79.7470352,141.287871 C78.349993,141.287871 77.6542183,140.457976 77.6542183,138.809173 L77.6542183,134.743927 C77.6542183,133.089631 78.349993,132.268434 79.7470352,132.268434 C81.1472817,132.268434 81.8485493,133.089631 81.8485493,134.743927 M79.1766831,134.491709 L79.1766831,139.061849 C79.1766831,139.602448 79.3703099,139.870687 79.7470352,139.870687 C80.1297113,139.870687 80.3201338,139.602448 80.3201338,139.061849 L80.3201338,134.491709 C80.3201338,133.953399 80.1297113,133.682413 79.7470352,133.682413 C79.3703099,133.682413 79.1766831,133.953399 79.1766831,134.491709"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M83.1342676,132.386349 L84.6626831,132.386349 L84.6626831,133.480821 C85.0714507,132.638568 85.5919085,132.233462 86.2322958,132.268251 L86.2322958,133.974272 C85.9672606,133.929413 85.7740915,133.906983 85.6509577,133.906983 C84.9913451,133.906983 84.6626831,134.3423 84.6626831,135.212934 L84.6626831,141.165011 L83.1342676,141.165011 L83.1342676,132.386349 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                    <polygon
                                                        fill="#FEFEFE"
                                                        points="89.961831 141.164691 91.4925352 141.164691 91.4925352 129.382297 89.961831 129.382297"
                                                    />
                                                    <path
                                                        d="M92.8080986,141.165149 L94.3355986,141.165149 L94.3355986,132.386487 L92.8080986,132.386487 L92.8080986,141.165149 Z M92.8080986,130.955113 L94.3355986,130.955113 L94.3355986,129.382297 L92.8080986,129.382297 L92.8080986,130.955113 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M95.8907465,141.165057 L95.8907465,133.804951 L95.1926831,133.804951 L95.1926831,132.386395 L95.8907465,132.386395 L95.8907465,131.35143 C95.8907465,130.70555 96.0102183,130.239106 96.2455,129.946606 C96.5503592,129.553402 97.0021549,129.35474 97.6091268,129.35474 C97.7739155,129.35474 97.9702887,129.368015 98.1955,129.382663 L98.1955,130.802135 C98.1108169,130.792064 98.0407817,130.790233 97.9812746,130.790233 C97.606838,130.790233 97.419162,130.975621 97.419162,131.35143 L97.419162,132.386395 L98.1955,132.386395 L98.1955,133.804951 L97.419162,133.804951 L97.419162,141.165057 L95.8907465,141.165057 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                    <path
                                                        d="M101.813345,138.095043 L103.344965,138.095043 C103.358697,138.515712 103.366937,138.79036 103.366937,138.911205 C103.366937,139.576311 103.230528,140.099973 102.965035,140.485853 C102.593803,141.018212 102.009261,141.287825 101.208204,141.287825 C100.535775,141.287825 100.007993,141.038811 99.6234859,140.543071 C99.3062676,140.150782 99.1478873,139.570818 99.1478873,138.809128 L99.1478873,134.726029 C99.1478873,133.890184 99.3245775,133.276804 99.6784155,132.870782 C100.031796,132.472085 100.575599,132.268388 101.297007,132.268388 C101.923662,132.268388 102.422148,132.464304 102.788803,132.861628 C103.160493,133.248423 103.344965,133.789022 103.344965,134.458247 L103.344965,137.039022 L100.671268,137.039022 L100.671268,138.973916 C100.671268,139.576311 100.86169,139.877966 101.237042,139.877966 C101.459507,139.877966 101.619261,139.785959 101.709894,139.603318 C101.784049,139.468282 101.820211,139.205078 101.813345,138.836135 L101.813345,138.445677 L101.813345,138.095043 Z M100.671268,135.815466 L101.813345,135.815466 L101.813345,134.331451 C101.813345,133.89705 101.624296,133.682367 101.248028,133.682367 C100.867183,133.682367 100.671268,133.89705 100.671268,134.331451 L100.671268,135.815466 Z"
                                                        fill="#FEFEFE"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex align-items-center d-lg-none col-auto'>
                            <img src="https://m.ila.edu.vn/front/mobile/images/logo.svg" alt=""/>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <div className="d-flex justify-content-end px-md-5 group-tab">
                                <div
                                    className="d-none d-md-block mr-3 my-2 py-4 font-weight-bold text-uppercase tab">Beyond
                                    english
                                </div>
                                <div
                                    className="d-none d-md-block mr-3 my-2 py-4 font-weight-bold text-uppercase tab">các
                                    khóa học
                                </div>
                                <div
                                    className="d-none d-md-block mr-3 my-2 py-4 font-weight-bold text-uppercase tab">trung
                                    tâm đào tạo
                                </div>
                                <div
                                    className="d-none d-md-block mr-3 my-2 py-4 font-weight-bold text-uppercase tab">lịch
                                    học
                                </div>
                                <div className="d-none d-md-block mr-3 my-2 py-4 font-weight-bold text-uppercase tab">cơ
                                    hội nghề nghiệp
                                </div>
                                <div
                                    className="mr-3 d-none d-lg-block my-2 py-4 font-weight-bold text-uppercase language">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="21" height="15" viewBox="0 0 21 15">
                                        <title>79F01A6E-D065-4BAC-A881-D489E5A44986</title>
                                        <defs>
                                            <path id="a" d="M0 0h21v15H0z"/>
                                        </defs>
                                        <g fill="none" fillRule="evenodd">
                                            <mask id="b" fill="#fff">
                                                <use xlinkHref="#a"/>
                                            </mask>
                                            <use fill="#22438B" xlinkHref="#a"/>
                                            <path fill="#FFF" mask="url(#b)"
                                                  d="M-.386-.334L-.36 1.64l19.587 13.708 2.037-.037-.037-1.963L1.64-.36z"/>
                                            <path fill="#C7152A" mask="url(#b)"
                                                  d="M-1.61-.135l22.882 16.04 1-1L-.61-1.136z"/>
                                            <path
                                                d="M21.476-.418v2S6.666 11.907 1.434 15.54c-.064.044-1.998.003-1.998.003l-.156-1.904L19.476-.418h2z"
                                                fill="#FFF" mask="url(#b)"/>
                                            <path fill="#C7152A" mask="url(#b)"
                                                  d="M22.897-.268L-1.134 16.495l-1-1L21.94-1.295z"/>
                                            <path fill="#FFF" mask="url(#b)" d="M8 0h5v5h8v5h-8v5H8v-5H0V5h8z"/>
                                            <path fill="#C7152A" mask="url(#b)" d="M9 0h3v6h9v3h-9v6H9V9H0V6h9z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="mr-3 my-2 py-3 font-weight-bold text-uppercase contact">
                                    <div className='px-3 py-2 text-nowrap text-center'>
                                        liên hệ
                                    </div>
                                </div>
                                <div
                                    className="mr-3 d-block d-lg-none my-2 py-4 font-weight-bold text-uppercase language">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="21" height="15" viewBox="0 0 21 15">
                                        <title>79F01A6E-D065-4BAC-A881-D489E5A44986</title>
                                        <defs>
                                            <path id="a" d="M0 0h21v15H0z"/>
                                        </defs>
                                        <g fill="none" fillRule="evenodd">
                                            <mask id="b" fill="#fff">
                                                <use xlinkHref="#a"/>
                                            </mask>
                                            <use fill="#22438B" xlinkHref="#a"/>
                                            <path fill="#FFF" mask="url(#b)"
                                                  d="M-.386-.334L-.36 1.64l19.587 13.708 2.037-.037-.037-1.963L1.64-.36z"/>
                                            <path fill="#C7152A" mask="url(#b)"
                                                  d="M-1.61-.135l22.882 16.04 1-1L-.61-1.136z"/>
                                            <path
                                                d="M21.476-.418v2S6.666 11.907 1.434 15.54c-.064.044-1.998.003-1.998.003l-.156-1.904L19.476-.418h2z"
                                                fill="#FFF" mask="url(#b)"/>
                                            <path fill="#C7152A" mask="url(#b)"
                                                  d="M22.897-.268L-1.134 16.495l-1-1L21.94-1.295z"/>
                                            <path fill="#FFF" mask="url(#b)" d="M8 0h5v5h8v5h-8v5H8v-5H0V5h8z"/>
                                            <path fill="#C7152A" mask="url(#b)" d="M9 0h3v6h9v3h-9v6H9V9H0V6h9z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div onClick={fClickSliderBarShow} className="d-flex py-4 my-2 navTab">
                                    <a href='#' className='d-flex align-items-center flex-column d-inline'>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={showSliderBar ? 'd-block' : 'd-none'}>
                            <div className='p-4 bg-light position-fixed slider-bar'>
                                <div className='position-relative'>
                                    <div className='m-2 p-2 bg-blue login'>
                                        <div className='text-light mb-3 font-18 font-weight-bold text-uppercase'>
                                            đăng nhập vào ila
                                        </div>
                                        <a href="">
                                            <div
                                                className='text-dark my-2 py-2 px-5 bg-light text-uppercase font-16 form'>
                                                tôi là phụ huynh
                                            </div>
                                        </a>
                                        <a href="">
                                            <div
                                                className='text-dark my-2 py-2 px-5 bg-light text-uppercase font-16 form'>
                                                tôi là học viên
                                            </div>
                                        </a>
                                    </div>
                                    <div onClick={fClickSliderBarHide}
                                         className='font-weight-bold position-absolute button-X'>
                                        X
                                    </div>
                                    <a href="">
                                        <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                            ILA ELITE
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                            CÁC GIẢI THƯỞNG
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                            TIN TỨC ILA
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                            SỰ KIỆN ILA
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                            CHUYỆN HAY CỦA ILA
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                            GIỚI THIỆU ILA
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                            TẠI SAO NÊN CHỌN ILA
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className='text-dark text-nowrap my-2 p-2 bg-light text-uppercase font-16'>
                                            LIÊN HỆ
                                        </div>
                                    </a>
                                    <button
                                        className='bg-blue border-0 px-5 py-2 text-uppercase text-light font-weight-bold font-16 form'>
                                        đăng ký
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-block carousel">
                    <Slider {...settings}>
                        <img className='w-100 h-100' src={carousel1} alt=''/>
                        <img className='w-100 h-100' src={carousel2} alt=''/>
                        <img className='w-100 h-100' src={carousel3} alt=''/>
                        <img className='w-100 h-100' src={carousel4} alt=''/>
                    </Slider>
                </div>
                <div className="d-block d-lg-none carousel">
                    <Slider {...settings}>
                        <img className='w-100 h-100' src={carouselMobi1} alt=''/>
                        <img className='w-100 h-100' src={carouselMobi2} alt=''/>
                        <img className='w-100 h-100' src={carouselMobi3} alt=''/>
                        {/*<img src={carousel4} alt=''/>*/}
                    </Slider>
                </div>
                <div className="position-relative d-flex justify-content-center container">
                    <div className=" position-absolute group-dropdown">
                        <div className="p-2 text-center dropdown_title">Xây dựng lộ trình học dành riêng cho con bạn
                        </div>
                        <div className="row p-3 dropdown_content">
                            <div className='col-auto d-flex'>
                                <div className='d-none d-md-block py-1 mr-2'>Con tôi</div>
                                <div className="d-none d-md-block dropdown mr-2">
                                    <div className="btn-group">
                                        <button type="button"
                                                className="d-flex justify-content-between align-items-center px-2 py-1 btn btn-info dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                            chọn
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="/">A</a>
                                            <a className="dropdown-item" href="/">B</a>
                                            <a className="dropdown-item" href="/">C</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-none d-md-block py-1 mr-2'>tuổi. Trình độ hiện nay</div>
                                <div className="d-none d-md-block dropdown mr-2">
                                    <button type="button"
                                            className="d-flex justify-content-between align-items-center px-2 py-1 btn btn-info dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        chọn
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/">A</a>
                                        <a className="dropdown-item" href="/">B</a>
                                        <a className="dropdown-item" href="/">C</a>
                                    </div>
                                </div>
                                <div className='d-none d-md-block py-1 mr-2'>ước mơ đạt được</div>
                                <div className="d-none d-md-block dropdown">
                                    <button type="button"
                                            className="d-flex justify-content-between align-items-center px-2 py-1 btn btn-info dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        chọn
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/">A</a>
                                        <a className="dropdown-item" href="/">B</a>
                                        <a className="dropdown-item" href="/">C</a>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center col-auto'>
                                <button className='text-uppercase p-2 px-3 info'>tìm hiểu thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='img'>
                    <div className='d-flex justify-content-center container'><img src={singlePicture} alt=""/></div>
                </div>
            </section>
        </div>
    )
}

export default Header;