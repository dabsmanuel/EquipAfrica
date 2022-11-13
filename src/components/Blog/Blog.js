import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import client from "../../client";
import Loader from "../Loader/Loader"
import "./blog.css";

const Blog = () => {
  const [isContentfulLoading, setIsContentfulLoading] = useState(true);
  const [contentfulBlog, setContentfulBlog] = useState([]);

  const contentfulData = useCallback((rawData) => {
    const contentfulFields = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const dataTitle = fields.title;
      const dataBody = fields.body;
      const dataDescription = fields.description;
      const dataBg = fields.featuredImage.fields.file.url;
      const dataDate = fields.date;
      const updatedSlide = {
        id,
        dataTitle,
        dataDescription,
        dataBody,
        dataBg,
        dataDate,
      };
      return updatedSlide;
    });
    setContentfulBlog(contentfulFields);
  }, []);

  const getCarouselSlides = useCallback(async () => {
    setIsContentfulLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "blogPost",
      });
      const responseData = response.items;
      if (responseData) {
        contentfulData(responseData);
      } else {
        setContentfulBlog([]);
      }
      setIsContentfulLoading(false);
    } catch (error) {
      console.log(error);
      setIsContentfulLoading(false);
    }
  }, [contentfulData]);

  useEffect(() => {
    getCarouselSlides();
  }, [getCarouselSlides]);

  
  if (isContentfulLoading) {
    return <Loader />;
  }

  return (
    <div className="blog containers">
      {contentfulBlog.map((item) => {
        return (
          <div className="blogwrap" key={item.id}>
            <div className="textwrap">
              <img src={item.dataBg} alt="" />
              <div className="description">
                <h2>{item.dataTitle}</h2>
                <small>{item.dataDate}</small>
                <p>{item.dataDescription}</p>
                <Link to="/blog-detail" className="blog-btn">
                  Read
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
