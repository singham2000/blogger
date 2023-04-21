import React from "react";
import useFetch from "./useFetch";
const Blog = () => {
  const { data } = useFetch("http://localhost:3001/posts");
  console.log(data);
  return (
    <>
      {data?.map((blog, index) => (
        <div className="row blog Poppins mb-5">
          <div className="col-2 fs-1 text-end circle" >
            {++index}
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <h1 className="Poppins">{blog.title}</h1>
              <div className="d-flex justify-content-around w-20">
                <span className="mx-2">Autor: {blog.author}</span>
                <span className="mx-2">Catagorie: {blog.catagorie}</span>
              </div>
            </div>
            <p className="fs-4">
              {blog.description}
            </p>
          </div>
          <div className="col-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              doloribus minima iusto magni voluptatum omnis mollitia corrupti
              tempore minus, vero nostrum ducimus eius eaque recusandae. Optio
              maiores minus, ratione ipsa accusamus illo quaerat dolorum ab
              explicabo corporis! Nisi facilis aut fuga ipsam repudiandae quia
              mollitia nulla asperiores rem praesentium nesciunt, veniam a, sint
              aspernatur cumque placeat. Officia, excepturi! Ab, ipsum.
            </p>
          </div>
          <div className="col-1" />
        </div>
      ))}

    </>
  );
};

export default Blog;
