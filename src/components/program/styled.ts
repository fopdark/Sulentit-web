import styled from "styled-components";

export const StyledProgram = styled.div`
    section.program {
        .pathway{
            font-size: 2em;
        }
        div.program_title {
            font-size: 2em;
        }
        div.program_content {
        
        }
        div.group-image {
        
        }
        img {
    
        }
        .class:hover .group-content-img{
            display: flex;
        }
        div.group-content-img {
             display: none;
             top: 0;
             color: #fff;
             background-color: rgba(0,0,0,0.5);
             width: Calc(100% - 30px);
             height: 100%;
             div.img-title {
                  font-size: 1.3em;
                  text-transform: uppercase;
                  font-weight: bold;
                  margin: 8px 0px;
             }
             div.img-content {
                  margin: 10px 0px;
             }
             div.link{
                  margin: 6px 0px;
                  border: 2px solid #fff;
                  border-radius: 15px;
             }
             button.img-button {
                  display: inline;
                  margin: 8px 0px;
                  border: none;
                  background-color: #45c0f8;
                  padding: 0.6em 0.8em;
                  border-radius: 15px;
                  text-transform: uppercase;
                  font-weight: bold;
                  color: #fff;
             }
        }
    }
`