import styled from "styled-components"

const BlogCard = ({curElem}) => {
    const {fig, icon, title} = curElem
  return (
    <Wrapper>
        
    <figure>
        <img src={fig} alt={title} />
    </figure>
    <div className="blog-content">
        <div className="blog-date">
                    < p ><icon.cal /> Dec 22 2023 </p>
        <p><icon.arr /></p>
        </div>


        <h3 className="section-common-title">
            {title}
        </h3>
    </div>
</Wrapper>
  )
}

const Wrapper =styled.div`
gap: 1rem ;
    figure{
        img{
            width: 100%;
            height:auto;
        }
    }
    .blog-content{
        padding: 1.4rem 2.4rem 2.4rem;
        .blog-date{
            display: flex;
            justify-content: space-between;
            margin-top: 1.6rem;

        }
    }

`
export default BlogCard