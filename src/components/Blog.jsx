import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";

const Blog = (props) => {
  const [Fdata, setFdata] = useState();
  const [data, loading] = useFetch("http://localhost:3001/posts");
  console.log(props.catagorie)


  useEffect(() => {

    if (props.catagorie.toLowerCase() === ("all").toLowerCase()) {
      console.log("data");
      setFdata(data);
    } else {
      const get = data?.filter((bdata) => bdata.catagorie.toLowerCase() === props.catagorie.toLowerCase())
      setFdata(get);
    }

  }, [loading, props,data])


  return (
    <>
      {!loading? Fdata?.map((blog, index) => (
        <div className="row blog Poppins mb-5" key={index}>
          <div className="col-2 fs-1 text-end circle" >
            {++index}
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <h1 className="Poppins border-bottom border-5">{blog.title}</h1>
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
              {blog.glimpse}
            </p>
          </div>
          <div className="col-1" />
        </div>
      )):
      <div className="text-center Poppins">
        Loading...
      </div>}

    </>
  );
};

export default Blog;
