import styled from "styled-components";
import { blogData } from "../../Data/Data";
import BlogCard from "../../Components/Card/BlogCard";

const Blogs = () => {
  return (
    <Wrapper className="section-blog">
      <div className="container">
        <h2 className="section_common_heading">Explore our Blogs</h2>
        <p className="section_common_sebheading">
          Discover a varity of courses accross different category
        </p>
      </div>

      <div className="container grid grid-four-cols">
        {blogData.map((curElem, index) => {
          return (
            <div className="blog" key={index}>
              <BlogCard curElem={curElem} key={index} />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg_color};
  .container:first-child{
    padding: 5.4rem 2.4rem 2.4rem 2.4rem;

  }
    .grid {

        gap: 3.4rem;
        .blog{
          box-shadow: ${({theme})=>theme.colors.btn_box_shadow};
          transition: all 0.3s linear;
          scale: 0.9;

        }
        .blog:hover{
          scale: 1;
        }
      
    }

    @media (width<= ${({theme})=>theme.size.lg}){
      .grid-four-cols{
        grid-template-columns: 1fr;
      }
    }
`;
export default Blogs;
