import React from "react";
import {StyledVideo} from "./styled";

function Video() {
    return (
        <StyledVideo className='group-video'>
            <section className="py-5 video">
                <div className="container">
                    <div className='w-100 pb-4 text-center title'>Chuyện hay của ILA</div>
                    <div className="px-3 row">
                        <div className="col-12 col-md-4">
                            <div className="video">
                                <iframe width="100%" height="210px" src="https://www.youtube.com/embed/0Yh4KqUKKNc"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="video">
                                <iframe width="100%" height="210px" src="https://www.youtube.com/embed/RupQYTfriIM"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="video">
                                <iframe width="100%" height="210px" src="https://www.youtube.com/embed/RupQYTfriIM"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 d-flex justify-content-center">
                        <button className='font-weight-bold text-uppercase mt-4'>tham khảo thêm</button>
                    </div>
                </div>
            </section>
        </StyledVideo>
    )
}

export default Video