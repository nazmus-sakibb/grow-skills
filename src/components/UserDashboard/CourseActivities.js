import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CourseSidebar from '../CourseSidebar/CourseSidebar';
import courseActivities from '../fakeData/courseActivities.json'
import './UserDashboard.css';

const CourseActivities = () => {
    const { __id } = useParams();
    const [singleClass, setSingleClass] = useState({});
    console.log(courseActivities);

    useEffect(() => {
        const oneCourseItem = courseActivities.find(pd => pd.__id === __id);
        setSingleClass(oneCourseItem);

    }, [__id]);
    console.log(singleClass);
    return (
      <div className="">
        <div className="row course-activity-container">
          <div className="col-md-3 mt-5">
              <CourseSidebar/>
          </div>
          <div className=" col-md-9">
            <div className="row">
              <div className="video-container mx-auto">
                <iframe
                  width="90%"
                  height="450"
                  src={singleClass.url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="row class-description">
              <div className="col-md-10 mx-auto">
                <div className="py-4 text-white w-85">
                  <h2>{singleClass.classTitle}</h2>

                  <div>
                    <h3>Header</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis cupiditat omnis adipisci amet laborum
                    exercitationem quo minus eveniet, velit aspernatur.amet
                    laborum exercitationem quo minus eveniet, velit
                    aspernatur.amet laborum exercitationem quo minus eveniet,
                    velit aspernatur.amet laborum exercitationem quo minus
                    eveniet, velit aspernatur.{" "}
                  </p>
                  <div>
                    <h3>Header</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis cupiditat omnis adipisci amet laborum
                    exercitationem quo minus eveniet, velit aspernatur.amet
                    laborum exercitationem quo minus eveniet, velit
                    aspernatur.amet laborum exercitationem quo minus eveniet,
                    velit aspernatur.amet laborum exercitationem quo minus
                    eveniet, velit aspernatur.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseActivities;